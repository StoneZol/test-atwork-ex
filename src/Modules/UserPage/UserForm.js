import React, {useState, useEffect} from 'react';
import Input from '../Category/Input';
import Button from '../Button/Button';
import Field from '../TextField/Field';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setOriginalUser, updateUserField} from '../../redux/userEditSlice';
import { getUserAPI } from '../API';
import { Loader } from '../Icons/Icons';

const UserForm = () => {

const [dispatchng, setDispatchng] = useState([])
    const {username} = useParams()
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const [formOK, setFormOK] = useState(false)

    const user = useSelector(
        state => state.users.value.find(user => user.username === username)
    )

    const editedUser = useSelector(state => state.userEdit.editedUser)

    useEffect(() => {
        if (user) {
            dispatch(setOriginalUser(user));
        } 
    }, [user, dispatch]);

const fetchUserData = () => {
    return new Promise(async (resolve, reject) => {
        setIsLoading(true);
        try {

            const response = await fetch(`${getUserAPI}?username=${username}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const userData = await response.json();

            setDispatchng(userData);
            resolve(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
            reject(error);
        } finally {
            setIsLoading(false);
        }
    });
};

useEffect(() => {
    fetchUserData()
        .then(resolve => {
            updateState(resolve);
        })
        .catch(error => {
            console.error('Promise rejected:', error);
        });
}, []);

    const handleChange = (field, value) => {
        if (value !== '') {
            dispatch(updateUserField({ field, value }));
        }
    };

    const saveUserData = async () => {
        setIsLoading(true);
        try {
            // Укажите ваш URL для отправки данных
            const response = await fetch(`${getUserAPI}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedUser),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json(); // Получаем результат, если необходимо
            console.log('User data saved successfully:', result);
        } catch (error) {
            console.error('Error saving user data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    const updateState =(data)=> {
        dispatch(setOriginalUser(...data))
    }

    return (
        <div className='UserForm'>
            <div className='Settings'>
                <img src="https://picsum.photos/id/237/400/400" alt=""/>
                <div className='Categories'>
                    <Input value={'Данные профиля'} active={true}/>
                    <Input value={'Рабочее пространство'}/>
                    <Input value={'Приватность'}/>
                    <Input value={'Безопасность'}/>
                </div>
            </div>
            <div className='ProfileData'>
                <div className='ProfileHead'>
                    <span>Данные профиля</span>
                </div>
                <Field
                    label={'Имя'}
                    value={editedUser?.name}
                    originalValue={user?.name}
                    onChange={(value) => handleChange('name', value)}/>
                <Field
                    label={'Никнейм'}
                    value={editedUser?.username}
                    originalValue={user?.username}
                    onChange={(value) => handleChange('username', value)}/>
                <Field
                    label={'Почта'}
                    value={editedUser?.email}
                    originalValue={user?.email}
                    onChange={(value) => handleChange('email', value)}/>
                <Field
                    label={'Город'}
                    value={editedUser?.address.city}
                    originalValue={user?.address.city}
                    onChange={(value) => handleChange('address.city', value)}/>
                <Field
                    label={'Телефон'}
                    value={editedUser?.phone}
                    originalValue={user?.phone}
                    onChange={(value) => handleChange('phone', value)}/>
                <Field
                    label={'Название компании'}
                    value={editedUser?.company.name}
                    originalValue={user?.company.name}
                    onChange={(value) => handleChange('company.name', value)}/>

                <Button text={'Сохранить'}func={saveUserData} disable={formOK}/>
            </div>
        </div>
    );
}

export default UserForm;

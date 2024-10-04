import React, {useState, useEffect} from 'react';
import Input from '../Category/Input';
import Button from '../Button/Button';
import Field from '../TextField/Field';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setOriginalUser, updateUserField} from '../../redux/userEditSlice';
import { getUserAPI } from '../API';
import { Loader } from '../Icons/Icons';
import ModalSave from '../Modal/ModalSave';

const UserForm = () => {

    const {username} = useParams()
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const [showModal, setShowModal] = useState(false)

    const [formError, setFormError] = useState(false)

    const user = useSelector(
        state => state.users.value.find(user => user.username === username)
    )

    const editedUser = useSelector(state => state.userEdit.editedUser)

    useEffect(() => {
        if (user) {
            dispatch(setOriginalUser(user));
        } 
    }, [user, dispatch]);

    const validateForm = () => {
        const hasErrors = !editedUser.name || !editedUser.username || !editedUser.email ||
            !editedUser.address.city || !editedUser.phone || !editedUser.company.name;
            
            console.log('есть ошибка?',hasErrors)
            if (hasErrors){
                setFormError(true)
            } else setFormError(false)

    };

    useEffect(() => {
        validateForm();
    }, [editedUser]);

const fetchUserData = () => {
    return new Promise(async (resolve, reject) => {
        setIsLoading(true);
        try {

            const response = await fetch(`${getUserAPI}?username=${username}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const userData = await response.json();
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
        dispatch(updateUserField({field, value}))
    }

    const closeModal =()=>{
        setShowModal(false)
    }

    const saveUserData = async () => {
        setIsLoading(true);
        try {
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
    
            const result = await response.json();
            console.log('User data saved successfully:', result);
            setShowModal(true)
        } catch (error) {
            console.error('Error saving user data:', error);
        } finally {
            setIsLoading(false);
            setTimeout(()=>{
                closeModal();
            },4000)
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

                <Button text={'Сохранить'}func={saveUserData} disable={formError}/>
            </div>
            {showModal && <ModalSave func={closeModal}/>}
        </div>
    );
}

export default UserForm;

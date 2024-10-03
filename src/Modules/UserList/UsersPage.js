import React ,{useEffect} from 'react';
import './PageStyle.css'
import Active from './Active';
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/sliceUsers';
import { Loader } from '../Icons/Icons';


const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state=> state.users.value)
    const arhiv = useSelector(state => state.users.arhiv)
    const status = useSelector(state => state.users.status)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    return (
        <div className='ActivePage'>
            <Active name={'Активные'}data={users}/>
            {status ==='loading' && <Loader/>}
            {status ==='failed' && <Loader/>}
            {arhiv.length> 0 ? (<Active name={'Архив'}data={arhiv} arhiv={true}/>):(<></>)}
        </div>
    );
}

export default UsersPage;

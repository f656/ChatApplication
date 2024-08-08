/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import axios from "axios";
import {useDispatch} from 'react-redux'
import { setOtherUsers } from '../redux/userSlice';
import { BASE_URL } from '..';

const useGetOtherUser = () => {
    const dispatch = useDispatch();
 
    useEffect(()=>{
        const fetchOtherUsers = async () => {
            try{ 
                axios.defaults.withCredentials = true;
                const res = await axios.get(`${BASE_URL}/api/v1/user/`);
               // console.log(res);
                //store
                dispatch(setOtherUsers(res.data))
            }catch(error){
               console.log(error);
            }
        }
        fetchOtherUsers();
    },[])

}

export default useGetOtherUser

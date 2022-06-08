import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { API } from '../../../features/BaseApi';
import { EditUser } from '../../../features/UserRedux/UserSlice';
import { UserData } from '../../Models/DataModels';

const EditData = () => {
    const dispatch = useAppDispatch();
    const [inputData, setInputData] = useState<UserData>({
      name: '',
      email: '',
      age: '',
      city: '',
      country: '',
      phone: '',
      _id: ''
    })
    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/user/SingleUser/${id}`).then(res => res.json()).then(data => {
          setInputData(data);
          console.log('hello',data)
        }) 

    },[id])
  const SubMitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(EditUser(inputData))
  }
  return (
    <div className='edit_section'>
        <div className='create_div'>
          <h1>Edit User</h1>
          <form className='input_Forms' onSubmit={SubMitHandler}>
          <input className='input_field' value={inputData?.name} name='name' onChange={(e: React.FormEvent<HTMLInputElement>): void => {
      setInputData({ ...inputData, name: e.currentTarget.value });
    }} type="text" placeholder="Entar Your Name"/>

          <input className='input_field' value={inputData?.email} name='email' onChange={(e: React.FormEvent<HTMLInputElement>): void => {
      setInputData({ ...inputData, email: e.currentTarget.value });
    }} type="text" placeholder="Entar Your email"/>

          <input className='input_field' value={inputData?.phone} name='phone' onChange={(e: React.FormEvent<HTMLInputElement>): void => {
      setInputData({ ...inputData, phone: e.currentTarget.value });
    }} type="text" placeholder="Entar Your phone"/>
    
          <input className='input_field' value={inputData?.age} name='age' onChange={(e: React.FormEvent<HTMLInputElement>): void => {
      setInputData({ ...inputData, age: e.currentTarget.value });
    }} type="text" placeholder="Entar Your age"/>

          <input className='input_field' value={inputData?.city} name='city' onChange={(e: React.FormEvent<HTMLInputElement>): void => {
      setInputData({ ...inputData, city: e.currentTarget.value });
    }} type="text" placeholder="Entar Your city"/>

          <input className='input_field' value={inputData?.country} name='country' onChange={(e: React.FormEvent<HTMLInputElement>): void => {
      setInputData({ ...inputData, country: e.currentTarget.value });
    }} type="text" placeholder="Entar Your country"/>

          <button className='add_btn'>Submit</button>
          </form>
        </div>
    </div>
  );
}

export default EditData;

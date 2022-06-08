import React, { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { AddingPost } from '../../../features/UserRedux/UserSlice';
import { UserData } from '../../Models/DataModels';

const CreateData = () => {
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
  const SubMitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(AddingPost(inputData))
  }
  return (
    <div className='create_section'>
        <div className='create_div'>
          <h1>Create Your Profile</h1>
          <form className='input_Forms' onSubmit={SubMitHandler}>
            <input className='input_field' name='name' onChange={(e: React.FormEvent<HTMLInputElement>): void => {
        setInputData({ ...inputData, name: e.currentTarget.value });
      }} type="text" placeholder="Entar Your Name"/>
            <input className='input_field' name='email' onChange={(e: React.FormEvent<HTMLInputElement>): void => {
        setInputData({ ...inputData, email: e.currentTarget.value });
      }} type="text" placeholder="Entar Your email"/>
            <input className='input_field' name='phone' onChange={(e: React.FormEvent<HTMLInputElement>): void => {
        setInputData({ ...inputData, phone: e.currentTarget.value });
      }} type="text" placeholder="Entar Your phone"/>
            <input className='input_field' name='age' onChange={(e: React.FormEvent<HTMLInputElement>): void => {
        setInputData({ ...inputData, age: e.currentTarget.value });
      }} type="text" placeholder="Entar Your age"/>
            <input className='input_field' name='city' onChange={(e: React.FormEvent<HTMLInputElement>): void => {
        setInputData({ ...inputData, city: e.currentTarget.value });
      }} type="text" placeholder="Entar Your city"/>
            <input className='input_field' name='country' onChange={(e: React.FormEvent<HTMLInputElement>): void => {
        setInputData({ ...inputData, country: e.currentTarget.value });
      }} type="text" placeholder="Entar Your country"/>
            <button className='add_btn'>Add User</button>
          </form>
        </div>
    </div>
  );
}

export default CreateData;

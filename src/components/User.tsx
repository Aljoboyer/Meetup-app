import React from 'react';
import { useNavigate } from 'react-router-dom';
import {UserData} from '../Pages/Models/DataModels';
import { BiUserCircle } from 'react-icons/bi';
import Swal from "sweetalert2";
import { useAppDispatch } from '../app/hooks';
import { DeleteUser } from '../features/UserRedux/UserSlice';

interface props {
    data: UserData
}

const User: React.FC<props> = ({data}) => {
  const {_id, name, age, email, city, country, phone} = data;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const DeleteHandler = (id: String) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(DeleteUser(id))
      }
    })
  }
  return (
    <div className='user_card'>
      <BiUserCircle size={80} className="user_icons"/>
      <h4>{name}</h4>
      <p> <span>AGE: </span> {age}</p>
      <p> <span>EMAIL: </span> {email}</p>
      <p> <span>PHONE: </span> {phone}</p>
      <p> <span>CITY: </span> {city}</p>
      <p> <span>COUNTRY: </span> {country}</p>
      <button onClick={() => {
        navigate(`/EditData/${_id}`)
      }} className='edit_btn'>Edit User</button>
      <button onClick={() => DeleteHandler(_id)} className='Delete_btn'>Delete</button>
    </div>
  );
}

export default User;

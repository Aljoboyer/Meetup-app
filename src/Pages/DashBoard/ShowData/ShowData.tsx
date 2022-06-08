import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import User from '../../../components/User';
import { GetUsers } from '../../../features/UserRedux/UserSlice';
import { UserData } from '../../Models/DataModels';

const ShowData: React.FC = () => {
  const dispatch = useAppDispatch();
  const [show1 , setShow1] = useState(false);
  const [inputData, setInputData] = useState('')
  useEffect(() => {
    dispatch(GetUsers())
  },[dispatch]);
  const users = useAppSelector(state => state.userStore.users);

  const [data, setData] = useState<UserData[]>()

  const FilterHandler = (country: String) => {
    const Filterdata = users.filter(user => user?.country === country);
    setData(Filterdata)
  };
  const SearchHandler = () => {
    const FilterData = users.filter(user => {
      const userName = user.name.toLocaleLowerCase();
      const userInput = inputData.toLocaleLowerCase();

      return userName.indexOf(userInput) > -1
    })

    setData(FilterData)
  }

  const SortingHandler = () => {
    const newUsers = [...users]
     const sort = newUsers.sort((a, b) => {
      return parseInt(a.age) - parseInt(b.age);
  });

   setData(sort)
  }
  return (
    <div className='show_data_section'>
      <h1>All User List</h1>
      <div className="filter_container">
          <li onClick={() => setShow1(!show1)} className="dropdown">
            <a href="javascript:void(0)" className="filter_btn">Filter User BY Country</a>
              {show1 && <div className="link_div">
                {
                  users?.map(user => <p onClick={() => FilterHandler(user?.country)}>{user?.country}</p>)
                }
              </div>}
          </li>
          <div>
            <input className='input_field' placeholder='type user name' type="text" onChange={(e: React.FormEvent<HTMLInputElement>): void => { setInputData(e.currentTarget.value);}}/>
            <button onClick={SearchHandler} className='search_btn'>Search</button>
          </div>
          <div>
            <button onClick={SortingHandler} className='search_btn'>Sort User by Age</button>
          </div>
      </div>
      {
        data ? <div className='user_container'>{
          data?.map(user => <User data={user}/>)
        }</div> : <div className='user_container'>{
          users?.map(user => <User data={user}/>)
        }</div>
      }
    </div>
  );
}

export default ShowData;

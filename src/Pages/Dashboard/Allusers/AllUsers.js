import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);

    // const {data: users = [], refetch} = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async() =>{
    //         const res = await fetch('https://doctors-portal-server-rust-seven.vercel.app/users');
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    const {_id:id} = users
    return (
        <div>
        <h2 className="text-3xl">All Users</h2>
        <div className="overflow-x-auto">
<table className="table w-full">
<thead>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Email</th>
    <th>Admin</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody>
  {
    users.map((user, i) =><tr key={user._id}>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {/* <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
        <td><button className='btn btn-xs btn-danger'>Delete</button></td>
      </tr>)
  }
  
</tbody>
</table>
</div>
    </div>
    );
};

export default AllUsers;
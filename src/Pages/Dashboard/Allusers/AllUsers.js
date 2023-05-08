import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    // const [users,setUsers] = useState([]);

    // useEffect(()=>{
    //     fetch('https://y-9jemzp2tg-mrakib007.vercel.app/users')
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    // },[]);

    // const [deletingUser,setDeletingUser] = useState(null);

    // const closeModal = () =>{
    //   setDeletingUser(null);
    // }

    const {data: users = [],refetch} = useQuery({
      queryKey: ['users'],
      queryFn: async() =>{
        const res = await fetch('https://y-9jemzp2tg-mrakib007.vercel.app/users');
        const data = await res.json();
        return data;
      }
    });

    const handleMakeAdmin = id =>{
      fetch(`https://y-9jemzp2tg-mrakib007.vercel.app/users/admin/${id}`,{
        method: 'PUT',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount > 0){
          toast.success('Make admin successful');
          refetch();
        }
      })
    }

    // const handleDelete = id =>{
    //   const proceed = window.confirm("Are you sure you want to delete this user?");
    //   if(proceed){
    //     fetch(`https://y-9jemzp2tg-mrakib007.vercel.app/users/${users.id}`,{
    //       method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //       if(data.deletedCount > 0){
    //         toast.success('deleted successfully');
    //         refetch();
    //         // const remaining = users.filter(rev => rev._id !== id);
    //         // setUser(remaining);
    //       }
    //     })
    //   }
    // }

    // const {_id:id} = users
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
        <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
        {/* <td><button className='btn btn-xs btn-danger' onClick={()=>handleDelete(user._id)}>Delete</button></td> */}
      </tr>)
  }
  
</tbody>
</table>
{/* {
  deletingUser && <ConfirmationModal 
  title={`Are you sure you want to delete?`}
  message={`If you delete it can't be undone.`}
  successAction={handleDelete}
  successButtonName="Delete"
  modalData={deletingUser}
  closeModal={closeModal}></ConfirmationModal>
} */}
</div>
    </div>
    );
};

export default AllUsers;
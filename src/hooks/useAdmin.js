import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin,setIsAdmin] = useState(false);
    const [isAdminLoading,setIsAdminLoading] = useState(true);
    useEffect(()=>{
        if(email){
            fetch(`https://y-9jemzp2tg-mrakib007.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setIsAdmin(data.isAdmin);
                setIsAdminLoading(false);
            })
        }
    },[email])

    return [isAdmin,isAdminLoading];
};

export default useAdmin;
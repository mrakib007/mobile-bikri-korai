import React, { useEffect, useState } from 'react';

const useToken = (email) => {
    const [token,setToken] = useState('');
    useEffect(()=>{
        if(email){
            fetch(`https://y-9jemzp2tg-mrakib007.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data =>{
                if(data.accessToken){
                    console.log(data.accessToken,'accesstoken')
                    localStorage.setItem('accessToken',data.accessToken);
                    setToken(data.accessToken);
                }
            })
        }
    },[email])
    return [token];
};

export default useToken;
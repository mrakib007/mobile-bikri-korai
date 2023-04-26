import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const MyProducts = () => {
    const {user,logOut} = useContext(AuthContext);
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myproducts?email=${user.email}`,{
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('laptopZone-token')}`
            // }
        })
        .then(res=>{
            if(res.status === 401 || res.status === 403){
                return logOut();
            }
            return res.json();
        })
        .then(data=>setProducts(data))
    },[user?.email,logOut])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete this product?');
        if(proceed){
            fetch(`http://localhost:5000/products/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    toast.success('Deleted Successfully');
                    const remaining = products.filter(rem => rem._id !== id);
                    setProducts(remaining);
                }
            })
        }
    }

    const handleStatusUpdate = id =>{
        fetch(`http://localhost:5000/products/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:'Advertised'})
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                const remaining = products.filter(odr => odr._id !== id);
                const approving = products.find(odr => odr._id === id);
                approving.status = 'Advertised';

                const newOrders = [approving,...remaining];
                setProducts(newOrders);
            }
        })
    }
    return (
        <div>
            
        </div>
    );
};

export default MyProducts;
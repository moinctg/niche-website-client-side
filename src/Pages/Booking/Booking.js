
import React from 'react';
import './AddService.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Booking = () => {
    const [services, setServices] = useState([])
    const {serviceId} = useParams();
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://fierce-reaches-68927.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
        }
    
    useEffect(() => {
        fetch(`https://fierce-reaches-68927.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="py-5">
            <h2 className="text-center">Booking ID: {serviceId}</h2>
             <h3 className="text-center">Service Name: {services.name}</h3>
              

              <hr/>
           
           <h2 className="text-primary text-center">Booking Information...</h2>
           < div className="order">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true,  })} placeholder="Name" />
                <input  defaultValue={user.email}{...register("email")} placeholder="email" />
                <textarea {...register("address")} placeholder="address" />
                <input {...register("city")} placeholder="city" />
                <input {...register("phone")} placeholder="phone" />
                <input type="submit" />
            </form>
        </div>
        </div>
    );
};

export default Booking;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import axios from 'axios';

import useAuth from "../../hooks/useAuth";
const Details = () => {
  const [service, setService] = useState({});
  const { user } = useAuth();
  const { serviceId } = useParams();
  // console.log(serviceId);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "pending";
  //   fetch("https://sleepy-tor-93619.herokuapp.com/addOrders", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => console.log(result));
  //   console.log(data);
  // };
  axios.post('https://sleepy-tor-93619.herokuapp.com/addOrders', data)
  .then(res => {
      if (res.data.insertedId) {
          alert('added successfully');
          reset();
      }
  })
}

  useEffect(() => {
    fetch(`https://sleepy-tor-93619.herokuapp.com/singleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <div className="details-container">
        <div className="row container">
          <div className="col-md-6">
            <img className="w-50" src={service.image} alt="" />
            <h3 className="text-secondary"> Name: {service?.name}</h3>
            <p className="text-secondary"> Description:{service?.description}</p>
            <h3 className="text-primary">Price: {service?.price}</h3>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Name"
                defaultValue={service?.name}
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("description")}
                defaultValue={service?.description}
                placeholder="Description"
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("image", { required: true })}
                placeholder="Image Link"
                defaultValue={service?.image}
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("price", { required: true })}
                placeholder="Price"
                defaultValue={service?.price}
                type="number"
                className="p-2 m-2 w-100 input-field"
              />

              <select {...register("model")} className="p-2 m-2 w-100">
                <option value="premium">premium</option>
                <option value="classic">classic</option>
                <option value="business">business</option>
              </select>
              <br />
              <input
                {...register("customer", { required: true })}
                placeholder="Customer Name"
                className="p-2 m-2 w-100 input-field"
              />
               <input
                {...register("address", { required: true })}
                placeholder="Customer Address"
                className="p-2 m-2 w-100 input-field"
              />
               <input
                {...register("contact", { required: true })}
                placeholder="Customer Contact Number"
                className="p-2 m-2 w-100 input-field"
              />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order Now"
                className="button button-contactForm boxed-btn w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

import React from "react";
import axios from 'axios';
import from from "./AddServices.css";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddServices = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://sleepy-tor-93619.herokuapp.com/addServices",data)
    .then(res => {
      if (res.data.insertedId) {
          alert('added successfully');
          reset();
      }
    })
  }
   
  return (
    <div>
      <div>
        <h1 className="mt-5 text-center text-danger">Please Add Services</h1>
        <div className=" w-25 m-auto mt-5">
          <div className=" ">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("description")}
                  placeholder="Description"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />

                <select {...register("model")} className="p-2 m-2 w-100">
                  <option value="premium">premium</option>
                  <option value="classic">classic</option>
                  <option value="business">business</option>
                </select>
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="button button-contactForm boxed-btn w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;

import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from 'axios';


const Review = () => {
  const { register, handleSubmit, watch, errors,reset } = useForm();
  const { user } = useAuth
  const onSubmit = (data) => {
    console.log(data);
  
  axios.post('http://localhost:8000/addReview', data)
  
  .then(res => {
      if (res.data.insertedId) {
          alert('Review successfully');
          reset();
      }
  })

}


  return (
    <div>
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Review;

import React from "react";
import react, { useState, useEffect } from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import "./ManageServices.css";

const ManageServices = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  useEffect(() => {
    fetch("https://sleepy-tor-93619.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);


  const handleDelete =(id) => {

    const proceed = window.confirm('Are you sure, you want to delete?');
    if(proceed){
      const url = `http://localhost:8000/allservicesdelete/${id}`;
    fetch(url,{
      method:'DELETE'

    })
    .then(res=>res.json())
    .then(data=> {
     if(data.deletedCount > 0){
       alert('Service Succefully Deleted')
       const remaining = services.filter(service=>service._id !== id);
       setServices(remaining);
     }

     })
    }
  

  }
  

  // const onSubmit = (data) => {
  //   console.log(data);
  //   axios.post("https://sleepy-tor-93619.herokuapp.com/allServices",data)
  //   .then(res => {
  //     if (res.data.insertedId) {
  //         alert('added successfully');
  //         reset();
  //     }
  //   })
  // }

//   const handleUpdate = id => {
//     const url = `https://sleepy-tor-93619.herokuapp.com/allServices/${id}`;
//     fetch(url,{
//       method:'PUT',
//       headers:{
//         'content-type':'application/json'
//       },
//       body:JSON.stringify(services)
// })
//   .then(res => res.json())
//   .then(data => {
//       if (data.modifiedCount > 0) {
//           alert('Update Successful');
//           setServices({});
//         //  reset()
//       }
//   })

  


  return (
    <div className="container">
      <h1>All Services {services.length}</h1>

      {/* <h1 className="mt-5 text-center text-danger">Please Add Services</h1>
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
        </div> */}
  
    

      <table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Service Title</th>
            <th>Event description</th>
            <th>Image Link</th>
            <th>Price</th>
            <th>Model</th>
            
            
          </tr>
        </thead>
        
      
          <tbody>
            {
              services.map(pd => (
            <tr>
              {/* <td>{index}</td> */}
              <td>{pd.name}</td>
              <td>{pd.description}</td>
              <td> <img src={pd.image} alt="" style={{height:'150px'}}/> </td>
              <td>{pd.price}</td>
              <td>{pd.model}</td>
              
              <button onClick={()=> handleDelete(pd._id)} className="button button-contactForm boxed-btn p-2">Delete</button>
              {/* <button onClick={()=> handleUpdate(pd._id)} className="button button-contactForm boxed-btn p-2">Update</button> */}
              </tr>
              ))}
          </tbody>
        
      </table>
      </div>
      
      
  );
};


export default ManageServices;

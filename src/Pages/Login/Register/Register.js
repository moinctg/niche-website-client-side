import React  from 'react';
import loginImg from '../../../img/gallery/register1.jpg'
import react  ,{useState}  from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
   
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
        console.log('success')
    }
    return (
      <div>
      <section class="login_part section_padding ">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-6 col-md-6">
                  <div class="login_part_text text-center">
                      <div class="login_part_text_iner">
                          <img src={loginImg} alt=""/>
                          <h2> Register </h2>
                          <h2>Welcome ! Asian Watch Store</h2>
                          <p>There are advances being made in science and technology
                              everyday, and a good example of this is the</p>
                  
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-6">
                  <div class="login_part_form">
                      <div class="login_part_form_iner">
                          <h3>Welcome ! Asian Watch Store <br/>
                              Please Register  now</h3>
                          
                              <form onSubmit={handleLoginSubmit}>
                              <div class="form-group" >

    <input type="text" class="form-control" onBlur={handleOnBlur} id="name"  name="name"aria-describedby="emailHelp" placeholder="Enter Name" required/>

  </div>
  <div class="form-group">
  
    <input type="email" class="form-control" onBlur={handleOnBlur} id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" required/><small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    
    <input type="password" class="form-control"  onBlur={handleOnBlur} id="password" name="password" placeholder="Password" required/>
  </div>
  <div class="form-group">

    <input type="password" class="form-control" onBlur={handleOnBlur} id="password2"  name="password2" placeholder="Re-Type Password" required/>
  </div>
  
  <button type="submit" class="button button-contactForm boxed-btn">Submit</button>
</form>
        
           
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <button className="button button-contactForm boxed-btn">Already Registered? Please Login</button>
                        </NavLink>
                    
                    {isLoading &&   <spinner animation="grow" variant="light" />}
                    {user?.email && <div class="alert alert-primary" role="alert">
                    User Created successfully!</div>}
                    {authError && <div class="alert alert-danger" role="alert">{authError}</div>}
                    
                   
                </div>
    );
};

export default Register;
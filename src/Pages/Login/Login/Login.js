import loginImg from '../../../img/gallery/new_product1.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import react  ,{useState}  from 'react';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
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
                            <h2>New to our Shop?</h2>
                            <p>There are advances being made in science and technology
                                everyday, and a good example of this is the</p>
                            <NavLink to="/register" class="btn_3">Create an Account</NavLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="login_part_form">
                        <div class="login_part_form_iner">
                            <h3>Welcome Back ! <br/>
                                Please Sign in now</h3>
                                <form onSubmit={handleLoginSubmit}>
          
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" onBlur={handleOnBlur} id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" required/><small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    
    <input type="password" class="form-control"  onBlur={handleOnBlur} id="password" name="password" placeholder="Password" required/>
  </div>
 
 
  <button type="submit" class="button button-contactForm boxed-btn">Submit</button>
</form>
        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
                        <div className="login_part_text ">
                        <NavLink 
                            style={{ textDecoration: 'none', color:'black'}}
                            to="/register">
                            <button className="button button-contactForm boxed-btn ">New User? Please Register</button>
                        </NavLink>
                        {isLoading && <spinner animation="grow" variant="light" />}
                        {user?.email && <alert severity="success">Login successfully!</alert>}
                        {authError && <alert severity="error">{authError}</alert>}
                   
                    <p>------------------------</p>
                    <button className="button button-contactForm boxed-btn" onClick={handleGoogleSignIn}>Google Sign In</button> 
                    </div>
                    </div>
            
    );
};

export default Login;
import React from "react";
import { useHistory } from 'react-router-dom';
import useForm from '../helpers/useForm';
import { login } from '../helpers/api';

const Login = () => {

  const [ form, handleChange ] = useForm({
    username: 'Lambda School',
    password: 'i<3Lambd4',
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form)
      .then(res => {
        const token = res?.data?.payload;
        if (token) localStorage.setItem('token', token);
        history.push('/bubble');
      })
      .catch(err => {
        console.error(err.response);
      });
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  return (
    <div>
      
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
      </h1>
      
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor='username'>Username</label><br/>
          <input name='username' id='username' type='text' onChange={handleChange} value={form.username} />
        </div>

        <div>
          <label htmlFor='password'>Password</label><br/>
          <input name='password' id='password' type='password' onChange={handleChange} value={form.password} />
        </div>

        <button>Log In</button>

      </form>
      
    </div> 
    
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
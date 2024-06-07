import React, { useState } from 'react'
import styles from '../styles/LoginSignup.module.css';
import { useRouter } from 'next/router';

const Login = () => {
  const [token, setToken] = useState("");
  const router = useRouter();


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('https://api.spacetraders.io/my/account', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        console.log('Login successful!');
        localStorage.setItem('authToken', token);
        router.push('/dashboard');
      } else {
        console.log('Login failed!');
        if (response.status === 401) {
          console.log('Invalid token');
        } else {
          console.log('Error during login');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.main}>
        <div className={styles.login}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <input type="password" placeholder='Token' required className={styles.input} value={token} onChange={(event) => setToken(event.target.value)}></input>
            </div>
            <div>
              <button type='submit' className={styles.btn}>Login</button>
            </div>
          </form>
          <p>New to Spacetraders? <a className={styles.a}href='signup'>Signup</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login
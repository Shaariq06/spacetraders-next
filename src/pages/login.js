import React, { useState } from 'react'
import styles from '../styles/LoginSignup.module.css';
import { useRouter } from 'next/router';

const Login = () => {

  const router = useRouter();

  const [token, setToken] = useState("");

  const options = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
};
  
  const submitLogin = async (event) => {
    await fetch('https://api.spacetraders.io/v2/my/agent', options);
    router.push('localhost:3000/dashboard');
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.main}>
        <div className={styles.login}>
          <form className={styles.form} onSubmit={submitLogin}>
            <div>
              <input type="text" placeholder='Username' required className={styles.input} name='username'></input>
            </div>
            <div>
              <input type="password" placeholder='Token' required className={styles.input} name='token'></input>
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
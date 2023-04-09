import React from 'react'
import styles from '../styles/LoginSignup.module.css';

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle login logic here
      };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required className={styles.input} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required className={styles.input} />
        <button type="submit" className={styles.button}>Log In</button>
      </form>
    </div>
  )
}

export default Login
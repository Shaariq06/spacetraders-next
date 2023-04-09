import React from 'react';
import styles from '../styles/LoginSignup.module.css';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle signup logic here
  };

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required className={styles.input} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required className={styles.input} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required className={styles.input} />
        <button type="submit" className={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};
 
export default Signup;

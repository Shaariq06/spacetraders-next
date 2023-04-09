import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';


export default function Home() {

  return (
    <div className={styles.container}>
      <h1>Welcome to SpaceTraders!</h1>
      <div className={styles.loginLink}>
        <p>Have an account?</p>
        <a href="login" >Login</a>
      </div>
      <div className={styles.signupLink}>
        <p>Are you a new user?</p>
        <a href="signup" >Signup</a>
      </div>
    </div>
  )
}

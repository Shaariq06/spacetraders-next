import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';


export default function Home() {

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Welcome to SpaceTraders!</h1>
      <div className={styles.loginLink}>
        <p className={styles.p}>Already have an account?</p>
        <div className={styles.div}> 
          <a href='login' className={styles.a}>Login</a>
        </div>
      </div>
      <div className={styles.signupLink}>
        <p className={styles.p}>New to SpaceTraders?</p>
        <div className={styles.div}> 
          <a href='signup' className={styles.a}>Signup</a>
        </div>
      </div>
    </div>
  )
}

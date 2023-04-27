import React, { useState } from 'react'
import styles from '../styles/LoginSignup.module.css';
import { useRouter } from 'next/navigation';

const Login = () => {

  // const router = React.useRouter();

  const [token, setToken] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('https://api.spacetraders.io/my/account', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    if (response.ok) {
      console.log('Login successful!');
      // router.push('/dashboard');
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

```javascript
import { useState } from 'react';

export default function Login() {
  const [token, setToken] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    if (response.ok) {
      console.log('Login successful!');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Token:
        <input
          type="text"
          value={token}
          onChange={(event) => setToken(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```
import React from 'react'
import {useRouter} from 'next/router'


const Logout = () => {
  const router = useRouter()

  const LogoutClick = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  return (
    <button onClick={LogoutClick}>Logout</button>
  )
}


export default Logout
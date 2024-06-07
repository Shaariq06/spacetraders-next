import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logout from './logout';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const response = await fetch('https://api.spacetraders.io/my/account', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          setError('Failed to fetch user data');
          console.error('Error fetching user data:', response.statusText);
        }
      } catch (error) {
        setError('Failed to fetch user data');
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  if (loading) {
    return <p>Loading user data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {userData && (
        <div>
          <p>Welcome, {userData.user.username}!</p>
          {/* Display other user data */}
        </div>
      )}
      <Logout />
    </div>
  );
};

export default Dashboard;

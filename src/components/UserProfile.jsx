import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>Age: {userData.age}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;

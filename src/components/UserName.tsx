import React from 'react';
import '../styles/UserName.css';

const UserName = ({ firstName }) => {
  return (
    <div className="user-name">
      <h1>Bonjour <span>{firstName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default UserName;
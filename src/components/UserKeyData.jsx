import React from 'react';
import '../styles/UserKeyData.css';

const UserKeyData = ({ keyData }) => {
  return (
    <div className="key-data">
      <div className="key-data-item">
        <p>{keyData.calorieCount}kCal</p>
        <p>Calories</p>
      </div>
      <div className="key-data-item">
        <p>{keyData.proteinCount}g</p>
        <p>Proteines</p>
      </div>
      <div className="key-data-item">
        <p>{keyData.carbohydrateCount}g</p>
        <p>Glucides</p>
      </div>
      <div className="key-data-item">
        <p>{keyData.lipidCount}g</p>
        <p>Lipides</p>
      </div>
    </div>
  );
};

export default UserKeyData;

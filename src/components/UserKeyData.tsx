import React from 'react';
import '../styles/UserKeyData.css';

const UserKeyData = ({ keyData }) => {
  return (
    <div className="key-data">
      <div className="key-data-item">
        <div className="key-data-icon">
          <img src="path/to/calories-icon.png" alt="Calories" />
        </div>
        <div className="key-data-content">
          <p>{keyData.calorieCount}kCal</p>
          <p>Calories</p>
        </div>
      </div>
      <div className="key-data-item">
        <div className="key-data-icon">
          <img src="path/to/protein-icon.png" alt="Proteines" />
        </div>
        <div className="key-data-content">
          <p>{keyData.proteinCount}g</p>
          <p>Proteines</p>
        </div>
      </div>
      <div className="key-data-item">
        <div className="key-data-icon">
          <img src="path/to/carbohydrates-icon.png" alt="Glucides" />
        </div>
        <div className="key-data-content">
          <p>{keyData.carbohydrateCount}g</p>
          <p>Glucides</p>
        </div>
      </div>
      <div className="key-data-item">
        <div className="key-data-icon">
          <img src="path/to/lipids-icon.png" alt="Lipides" />
        </div>
        <div className="key-data-content">
          <p>{keyData.lipidCount}g</p>
          <p>Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default UserKeyData;
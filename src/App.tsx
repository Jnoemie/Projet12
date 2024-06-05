import React, {useEffect, useState} from 'react';
import UserName from './components/UserName';
import UserKeyData from './components/UserKeyData';
import {UserActivityChart} from './components/UserActivityChart';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { AverageSessionsChart } from './components/AverageSessionsChart';
import PerformanceChart from './components/PerformanceChart';
import TodayScoreChart from './components/TodayScoreChart';
import './styles/App.css';

import { getUser} from './domain/usecases/get-user';
import { User } from './domain/models/user';
import { USER } from './main';

function App() {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser({userId: USER});

      setUser(user)
    }

    fetchUser();
  })

  if (!user) return null;

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <UserName firstName={user.userInfos.firstName} />
          <div className="charts">
            <UserActivityChart userId={USER}/>
           {/* <AverageSessionsChart sessions={user.averageSessions} />
  <PerformanceChart performance={user.performance} /> */}
            <TodayScoreChart score={user.todayScore} />
          </div>
          <div className="key-data">
            <UserKeyData keyData={user.keyData} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

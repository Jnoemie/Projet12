import React, { useEffect, useState } from 'react';
import UserName from './components/UserName';
import UserKeyData from './components/UserKeyData';
import { UserActivityChart } from './components/UserActivityChart';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { AverageSessionsChart } from './components/AverageSessionsChart';
import PerformanceChart from './components/PerformanceChart';
import TodayScoreChart from './components/TodayScoreChart';
import './styles/App.css';

import { getUser } from './domain/usecases/get-user';
import { getUserActivity } from './domain/usecases/get-user-activity';
import { getUserAverageSession } from './domain/usecases/get-user-average-session';
import { getUserPerformance } from './domain/usecases/get-user-performance';
import { User } from './domain/models/user';
import { UserActivity } from './domain/models/user-activity';
import { UserAverageSession } from './domain/models/user-average-session';
import { UserPerformance } from './domain/models/user-performance';
import { USER } from './main';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null);
  const [userAverageSession, setUserAverageSession] = useState<UserAverageSession | null>(null);
  const [userPerformance, setUserPerformance] = useState<UserPerformance | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUser = await getUser({ userId: USER });
      const fetchedUserActivity = await getUserActivity({ userId: USER });
      const fetchedUserAverageSession = await getUserAverageSession({ userId: USER });
      const fetchedUserPerformance = await getUserPerformance({ userId: USER });

      setUser(fetchedUser);
      setUserActivity(fetchedUserActivity);
      setUserAverageSession(fetchedUserAverageSession);
      setUserPerformance(fetchedUserPerformance);
    };

    fetchData();
  }, []);

  if (!user || !userActivity || !userAverageSession || !userPerformance) return null;

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <UserName firstName={user.userInfos.firstName} />
          <div className="charts">
            <UserActivityChart userId={USER} />
            <AverageSessionsChart userId={USER} />
            <PerformanceChart userId={USER} />
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
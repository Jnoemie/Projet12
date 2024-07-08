import React, { useEffect, useState } from "react";
import UserName from "./components/UserName";
import UserKeyData from "./components/UserKeyData";
import UserActivityChart from "./components/chart/UserActivityChart"
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import AverageSessionsChart from "./components/chart/AverageSessionsChart";
import PerformanceChart from "./components/chart/PerformanceChart";
import TodayScoreChart from "./components/chart/TodayScoreChart";
import "./styles/App.css";

import { getUser } from "./domain/usecases/get-user";
import { User } from "./domain/models/type/user";
import { USER } from "./infra/constants/const";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser({ userId: USER });
      setUser(user);
    };

    fetchUser();
  }, []);

  if (!user) return null;

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <UserName firstName={user.userInfos.firstName} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <div className="charts" style={{ flexDirection: "column" }}>
              <UserActivityChart userId={USER} />
              <div
                className="charts-row"
                style={{ display: "flex", gap: "30px", width: "100%" }}
              >
                <AverageSessionsChart userId={USER} />
                <PerformanceChart userId={USER} />
                <TodayScoreChart score={user.todayScore} />
              </div>
            </div>

            <div className="key-data">
              <UserKeyData keyData={user.keyData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
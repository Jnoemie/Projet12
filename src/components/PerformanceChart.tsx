import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/AverageSessionsChart.css';

import { getUserPerformance } from '../domain/usecases/get-user-performance';
import { PerformanceData } from '../domain/models/user-performance';

const AverageSessionsChart = ({ userId }: { userId: number }) => {
  const [sessions, setSessions] = useState<PerformanceData[]>([]);

  useEffect(() => {
    const fetchUserPerformance = async () => {
      const userPerformance = await getUserPerformance(userId);
      setSessions(userPerformance.performanceData);
    };

    fetchUserPerformance();
  }, [userId]);

  if (sessions.length === 0) return null;

  return (
    <div className="sessions-chart">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={sessions}>
          <XAxis dataKey="day" />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsChart;
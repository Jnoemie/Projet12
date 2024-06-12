import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Legend, TooltipProps } from 'recharts';
import '../styles/AverageSessionsChart.css';

import { getUserAverageSession } from '../domain/usecases/get-user-average-session';
import { SessionData } from '../domain/models/user-average-session';

// Définition du composant CustomTooltip
const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const { formattedSessionLength } = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p>{formattedSessionLength}</p>
      </div>
    );
  }
  return null;
};

// Définition du composant AverageSessionsChart
export const AverageSessionsChart = ({ userId }: { userId: number }) => {
  const [sessions, setSessions] = useState<SessionData[]>([]);

  useEffect(() => {
    const fetchUserAverageSessions = async () => {
      const userSessions = await getUserAverageSession({ userId });
      setSessions(userSessions.sessions);
    };

    fetchUserAverageSessions();
  }, [userId]);

  if (sessions.length === 0) return <div>Loading...</div>;

  return (
    <div className="sessions-chart">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sessions}>
          <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: 'white' }} />
          <Tooltip content={<CustomTooltip />} />
         
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" dot={false} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsChart;
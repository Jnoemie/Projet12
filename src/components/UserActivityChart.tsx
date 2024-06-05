import React, {useEffect, useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/UserActivityChart.css';


import { getUserActivity } from '../domain/usecases/get-user-activity';
import { Session } from '../domain/models/user-activity';

export const UserActivityChart = ({userId}: {userId: number}) => {

  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const fetchUserActivity = async () => {
      const userActivity = await getUserActivity({userId});

      setSessions(userActivity.sessions)
    }

    fetchUserActivity();
  })

  if(sessions.length === 0) return null;

  return (
    <div className="activity-chart">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sessions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#8884d8" />
          <Bar dataKey="calories" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


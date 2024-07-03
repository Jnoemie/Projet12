import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Legend, TooltipProps } from 'recharts';
import '../../styles/AverageSessionsChart.css';
import { useFetchSessions } from '../hook/use-average-session';

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

export const AverageSessionsChart = ({ userId }: { userId: number }) => {
  const { sessionsData, isLoading, error } = useFetchSessions(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="sessions-chart">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sessionsData?.sessions}>
          <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: 'white' }} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" dot={false} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsChart;
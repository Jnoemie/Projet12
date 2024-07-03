import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import "../../styles/UserActivityChart.css";
import { useFetchActivity } from '../hook/use-activity';

const UserActivityChart = ({ userId }: { userId: number }) => {
  const { activityData, isLoading, error } = useFetchActivity(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="activity-chart">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={activityData?.sessions} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis yAxisId="left" orientation="left" tickLine={false} axisLine={false} />
          <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend align="right" verticalAlign="top" iconType="circle" height={36} />
          <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserActivityChart;
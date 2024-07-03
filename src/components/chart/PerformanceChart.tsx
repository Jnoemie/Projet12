import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../../styles/PerformanceChart.css';
import { useFetchPerformance } from '../hook/use-performance';

const PerformanceChart = ({ userId }: { userId: number }) => {
  const { performanceData, isLoading, error } = useFetchPerformance(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  
  return (
    <div className="performance-chart">
      <h2>Performance</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
  
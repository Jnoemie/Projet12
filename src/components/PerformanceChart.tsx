import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../styles/PerformanceChart.css';

import { getUserPerformance } from '../domain/usecases/get-user-performance';
import { PerformanceData } from '../domain/models/user-performance';

const PerformanceChart = ({ userId }: { userId: number }) => {
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);

  useEffect(() => {
    const fetchUserPerformance = async () => {
      const userPerformance = await getUserPerformance({ userId });
      setPerformanceData(userPerformance.performanceData);
    };

    fetchUserPerformance();
  }, [userId]);

  if (performanceData.length === 0) return <div>Loading...</div>;

  return (
    <div className="performance-chart">
      <h2>Performance</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
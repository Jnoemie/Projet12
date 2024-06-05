import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../styles/TodayScoreChart.css';

const TodayScoreChart = ({ score }) => {
  const data = [{ value: score }, { value: 1 - score }];
  const COLORS = ['#FF0000', '#FFFFFF'];

  return (
    <div className="score-chart">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            startAngle={90}
            endAngle={450}
            innerRadius="70%"
            outerRadius="80%"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="score-text">
        <span>{score * 100}%</span>
        <p>de votre objectif</p>
      </div>
    </div>
  );
};

export default TodayScoreChart;

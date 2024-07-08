import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../../styles/TodayScoreChart.css';

const TodayScoreChart = ({ score }: { score: number }) => {
  const data = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: 1 - score },
  ];

  return (
    <div className="score-chart">
      <h2>Score</h2>
      <ResponsiveContainer width={300} height={200}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            dataKey="value"
          >
            <Cell key="Score" fill="#FF0000" />
            <Cell key="Remaining" fill="#FBFBFB" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="score-content">
        <p className="score-value">{`${score * 100}%`}</p>
        <p>de votre objectif</p>
      </div>
    </div>
  );
};

export default TodayScoreChart;
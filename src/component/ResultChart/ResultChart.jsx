import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  { "id": 1, "name": "Rahim", "physics": 78, "chemistry": 82, "math": 91 },
  { "id": 2, "name": "Karim", "physics": 85, "chemistry": 76, "math": 88 },
  { "id": 3, "name": "Sumaiya", "physics": 92, "chemistry": 89, "math": 95 },
  { "id": 4, "name": "Tanvir", "physics": 66, "chemistry": 72, "math": 70 },
  { "id": 5, "name": "Nusrat", "physics": 74, "chemistry": 80, "math": 69 },
  { "id": 6, "name": "Sajib", "physics": 88, "chemistry": 84, "math": 90 },
  { "id": 7, "name": "Mitu", "physics": 95, "chemistry": 94, "math": 98 },
  { "id": 8, "name": "Rakib", "physics": 59, "chemistry": 63, "math": 71 },
  { "id": 9, "name": "Shila", "physics": 81, "chemistry": 78, "math": 85 },
  { "id": 10, "name": "Fahim", "physics": 69, "chemistry": 74, "math": 72 }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                  <Line dataKey='math' stroke='green'></Line>
                  <Line dataKey='chemistry' stroke='red'></Line>
                  <Line dataKey='physics'></Line>

            </LineChart>
        </div>
    );
};

export default ResultChart;
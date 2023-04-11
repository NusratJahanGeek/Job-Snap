import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, LineChart, Tooltip } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const colors = ['#ff6961', '#ffb480', '#f8f38d', '#42d6a4', '#08cad1', '#59adf6', '#9d94ff', '#c780e8'];
    const assignments = [
        { assignmentNumber: "Assignment-1", marksObtained: 60 },
        { assignmentNumber: "Assignment-2", marksObtained: 60 },
        { assignmentNumber: "Assignment-3", marksObtained: 57 },
        { assignmentNumber: "Assignment-4", marksObtained: 58 },
        { assignmentNumber: "Assignment-5", marksObtained: 48 },
        { assignmentNumber: "Assignment-6", marksObtained: 60 },
        { assignmentNumber: "Assignment-7", marksObtained: 60 },
        { assignmentNumber: "Assignment-8", marksObtained: 56 }
    ];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div className='statistics-title'>
            <BarChart
                width={1200}
                height={400}
                data={assignments}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignmentNumber" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="marksObtained" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {assignments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
            <h2>Obtained Marks</h2>
        </div>
    );
};

export default Statistics;
import React from "react";
import "./piechart.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const App = () => {
  const data = [
    { name: "EXCELLENT", CSE: 2000000000 },
    { name: "GOOD", CSE: 1500000000 },
    { name: "AVERAGE", CSE: 1000000000 },
    { name: "LOWEST", CSE: 500000000 },
  ];
  const data1 = [
    { name: "EXCELLENT", IT: 1000000000 },
    { name: "GOOD", IT: 2000000000 },
    { name: "AVERAGE", IT: 1500000000 },
    { name: "LOWEST", IT: 500000000 },
  ];
  const data2 = [
    { name: "EXCELLENTk", AIDS: 200000000  },
    { name: "GOOD", AIDS: 900000000 },
    { name: "AVERAGEter", AIDS: 500000000  },
    { name: "LOWEST", AIDS: 100000000 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>STUDENT PERFORMANCE STATUS </h1>
      <div className="Chart">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="CSE"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="CSE" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>

      <div className="Chart">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="IT"
            isAnimationActive={false}
            data={data1}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#d88884"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="IT" fill="#d88884" background={{ fill: "#eee" }} />
        </BarChart>
      </div>

      <div className="Chart">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="AIDS"
            isAnimationActive={false}
            data={data2}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#84d888"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="AIDS" fill="#84d888" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default App;
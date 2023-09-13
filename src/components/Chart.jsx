import { Cell, Pie, PieChart } from "recharts";

const Chart = () => {
  const data = [
    { name: "Group A", value: 200 },
    { name: "Group B", value: 200 },
    { name: "Group C", value: 200 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 200 },
    { name: "Group F", value: 200 },
    { name: "Group G", value: 200 },
    { name: "Group H", value: 200 },
    { name: "Group I", value: 200 },
    { name: "Group J", value: 200 },
    { name: "Group K", value: 200 },
  ];
  const COLORS = [
    "#7569f8",
    "#7569f8",
    "#7569f8",
    "#7569f8",
    "#e0dcfd",
    "#e0dcfd",
    "#e0dcfd",
    "#e0dcfd",
    "#e0dcfd",
    "#e0dcfd",
    "#e0dcfd",
    "#e0dcfd",
  ];
  return (
    <PieChart width={226} height={200} onMouseEnter={() => {}}>
      <Pie
        data={data}
        cx={107}
        cy={88}
        innerRadius={59}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;

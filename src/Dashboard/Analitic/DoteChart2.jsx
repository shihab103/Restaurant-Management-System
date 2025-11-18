import { PieChart } from "@mui/x-charts";
import '../../Navbar.css';
const DoteChart2 = () => {
  const data = [
    { label: "Completed", value: 62, color: "#FACC15" },    
    { label: "Pending", value: 30, color: "#F59E0B" }, 
    { label: "Cancelled", value: 8, color: "#FDE68A" }, 
  ];

  return (
    <PieChart
      series={[
        {
          data,
          innerRadius: 50,
          outerRadius: 80,
        },
      ]}
      width={200}
      height={200}
      margin={{ right: 5 }}
    />
  );
};

export default DoteChart2;
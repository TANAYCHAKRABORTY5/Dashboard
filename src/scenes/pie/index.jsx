import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="10px">
      <Header title="Pie Chart" subtitle="Health Pie Chart" />
      <Box height="65vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;

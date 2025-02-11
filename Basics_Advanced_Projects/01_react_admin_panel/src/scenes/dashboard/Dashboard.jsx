import { Box } from "@mui/system";
import Header from "../../components/Header";

const Dashboard = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignitem="center">
                <Header title="Dashboard" subtitle="Welcome to React Admin Panel" />
            </Box>
        </Box>
    )
}

export default Dashboard;
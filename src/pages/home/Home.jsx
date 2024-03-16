import "./Home.css";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div>LAs mejores hamburguesas de la ciudad</div>
      <div className="order">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab variant="extended" color="error" onClick={()=>navigate('/menu')}>
            Ver menu
            <ArrowForwardIcon sx={{ mr: 1 }} />
          </Fab>
        </Box>
      </div>
    </div>
  );
}

export default Home;

import {useNavigate} from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Menu() {
  const navigate = useNavigate();
  
  const handleClick = (route) => {
    navigate(`/${route}`); 
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          <Grid item xs={2} sm={4} md={4} style={{cursor:"pointer"}} onClick={() => handleClick('hamburguesa')}>
            <Item >
                <img src="./3d-realistic-hamburger-on-white-background-illustration-vector.jpg" alt=""  style={{ width: '100px', height: '100px' }}/>
            </Item>
          </Grid>


          <Grid item xs={2} sm={4} md={4} onClick={() => handleClick('papas')}>
            <Item >
                <img src="./3d-realistic-french-fries-illustration-vector.jpg" alt=""   style={{ width: '100px', height: '100px' }}/>
            </Item>
          </Grid>


          <Grid item xs={2} sm={4} md={4} onClick={() => handleClick('bebidas')}>
            <Item >
                <img src="./3d-realistic-fried-chicken-in-paper-bucket-and-soda-illustration-vector.jpg" alt="" style={{  height: '100px' }}/>
            </Item>
          </Grid>
       
      </Grid>
    </Box>
  );
}
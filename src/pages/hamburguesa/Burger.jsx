// // import {useNavigate} from 'react-router-dom';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function Burger() {


//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
//           <Grid item xs={6} >
//             <Item >
//                 <img src="./3d-realistic-hamburger-on-white-background-illustration-vector.jpg" alt=""  style={{ width: '100px', height: '100px' }}/>
//             </Item>
//           </Grid>


//           <Grid item xs={6}>
//             <Item >
//                 Ingredientes
//                 <div className="">Pan</div>
//                 <div className="">Carne</div>
//                 <div className="">Tomate</div>
//                 <div className="">Lechuga</div>
//                 <div className="">Queso</div>
//             </Item>
//           </Grid>
       
//       </Grid>
//     </Box>
//   );
// }
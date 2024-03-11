import React, { useEffect, useState } from 'react'
import { Button, CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import data from "./data.json";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const[list,setList]=useState([]);
  const navigate=useNavigate()
  
  const gobookings=()=>{
    navigate('/booking')
    
  }

  useEffect(()=>{
    setList(data)
  },[])
  return (
<>
    <div className='anime1'>
      {list.map((value, index) => (
        <Card key={index} sx={{ maxWidth: 200, margin:'50px',padding:'10px', display:'inline-block',backgroundColor:"burlywood", alignItems:'stretch' }}>
          <CardMedia component="img" height="300" image={value.image} />

          <Stack spacing={1} sx={{alignItems:'center'}}>
        your Review
       <Rating name="half-rating" defaultValue={0} precision={0.5} className='stars'/>
      </Stack>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'-moz-initial'}}>
              {value.name}
            </Typography>
            <Typography>
            {value.category}
            <br/>
            {value.Genres}
            </Typography>
          
            {/* <Typography variant="body2" color="text.secondary" sx={{fontFamily:'cursive'}}>
            {/* {value.language}    
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="large" sx={{color:'crimson'}}><FavoriteIcon  /></Button>
            <Button size="small" className='btnbook' onClick={gobookings}>bookTicket</Button>
          </CardActions>
        </Card>
      ))}
      </div>
    </>


  )
}

export default Home

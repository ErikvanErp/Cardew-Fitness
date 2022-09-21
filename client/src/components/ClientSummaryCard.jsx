import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CreateIcon from '@mui/icons-material/Create';
import Avatar from '@mui/material/Avatar';
import { CardHeader, IconButton } from '@mui/material';

export default function ClientSummaryCard(props) {
    const { client } = props;
    
    const randomColor = () => {
        let hex = Math.floor(Math.random() * 0xEEEEEE);
        let color = "#" + hex.toString(16);
        return color;
    }

  return (
    <Card sx={{ width: 1, height: "60px" , marginY: 1}}>
        <CardHeader 
            avatar={
                <Avatar sx={{ bgcolor: randomColor() , width: 30, height: 30}}>
                    <Typography variant="body1">
                        { client.lastName.charAt(0).toUpperCase() }
                    </Typography>
                </Avatar>}
            title={ client.firstName + " " + client.lastName}
            subheader={ ("phoneNumber" in client &&  client.phoneNumber != "" ) ? client.phoneNumber : client.email }
            action={
                <IconButton component={ Link } to={ "/clients/" + client._id } variant="outlined" sx={{color: "silver"}}>
                    <CreateIcon />
                </IconButton>
            }
        />
    </Card>
  );
}

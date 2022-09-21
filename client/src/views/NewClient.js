import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import ClientForm from "../components/ClientForm";
import MenuBar from "../components/MenuBar";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';

const NewClient = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const createClient = (data) => {
        axios.post("http://localhost:8000/api/clients", data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        navigate(-1);
    }

    const goBack = () => {
        navigate(-1);
    }

    return (
        <Box>
            <MenuBar />
            <Paper elevation={7} style={{ padding: "1rem" }}>
            
                <Box mb={1} sx={{
                    display: "flex", 
                    justifyContent: "left",
                    alignItems: "center"
                }}>
                    <IconButton size="large" edge="start" onClick={ goBack }>
                        <ArrowBackIosIcon/>
                    </IconButton>
                    <Typography variant="h5" component="h5">
                        Add a new client
                    </Typography>
                </Box>

                <ClientForm 
                    initialValues={{"firstName": "", "lastName": "", "email": "", "phoneNumber": "" }} 
                    onSubmitHandler={ createClient } 
                />
                
            </Paper>
        </Box>
    )
} 

export default NewClient;
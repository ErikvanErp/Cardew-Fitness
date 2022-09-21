import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import ClientForm from "../components/ClientForm";
import MenuBar from "../components/MenuBar";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';

const EditClient = () => {
    const { id } = useParams();
    const [client, setClient] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/clients/" + id)
            .then(res => {
                setClient(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    const updateClient = (data) => {
        axios.put("http://localhost:8000/api/clients/" + id, data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        navigate(-1);
    }

    const deleteClient = ()=>{
        axios.delete("http://localhost:8000/api/clients/" + id)
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
                        Update Client Info
                    </Typography>
                </Box>

                { loaded &&
                    <ClientForm initialValues={ client } onSubmitHandler={ updateClient } 
                    onDeleteHandler={ deleteClient }/>
                }
            </Paper>
        </Box>
    )
} 

export default EditClient;
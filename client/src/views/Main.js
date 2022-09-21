import axios from 'axios';
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ClientSummaryCard from "../components/ClientSummaryCard";
import MenuBar from "../components/MenuBar";

const Main = () => {

    const [clients, setClients] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/clients")
            .then(res => 
                setClients(res.data.sort((a, b)=> {
                    return [a.lastName.toLowerCase(), a.firstName.toLowerCase()] > [b.lastName.toLowerCase(), b.firstName.toLowerCase()] ? +1 : -1;
            })))
            .catch(err => console.log(err));
    }, []) 

    const clientList = clients.map((client, idx) => 
        <ClientSummaryCard client={ client } key={ idx }/>
    );

    return (
        <Box>
            <MenuBar/>
            { clientList }
        </Box>

    )
}

export default Main;
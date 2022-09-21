import React , { useState } from 'react';
import { Box, Button, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteButton from './DeleteButton';

const ClientForm = (props) => {
    const { initialValues, onSubmitHandler, onDeleteHandler } = props;
    const [ firstName, setFirstName ] = useState(initialValues.firstName);
    const [ lastName, setLastName ] = useState(initialValues.lastName);
    const [ email, setEmail ] = useState(initialValues.email);
    const [ phoneNumber, setPhoneNumber ] = useState(initialValues.phoneNumber);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler({ firstName, lastName, email, phoneNumber });
    }

    return (

           <Box component="form" sx={{ width: 1 }} onSubmit={ handleSubmit }>
                <TextField label="First Name" variant="outlined" fullWidth
                    value={ firstName }
                    onChange={ handleFirstNameChange }
                    margin="normal"
                />
                <TextField label="Last Name" variant="outlined" fullWidth
                    value={ lastName }
                    onChange={ handleLastNameChange }
                    margin="normal"
                />
                <TextField label="Email" variant="outlined" fullWidth
                    value={ email }
                    onChange={ handleEmailChange }
                    margin="normal"
                />
                <TextField label="Phone Number " variant="outlined" fullWidth
                    value={ phoneNumber }
                    onChange={ handlePhoneNumberChange }
                    margin="normal"
                />
                <Box mt={2} 
                     sx={{ 
                        display: "flex", 
                        justifyContent: "space-between",
                        alignItems: "center" 
                }}>
                    <Button type="submit" variant="contained" color="primary">
                        Save
                    </Button>
                    { onDeleteHandler && 
                        <DeleteButton 
                            onDeleteHandler={ onDeleteHandler }
                            confirmationText={"Remove the records of " + firstName + " " + lastName +"?"}
                        />
                    }
                </Box>

           </Box>
           

    )
}

export default ClientForm;


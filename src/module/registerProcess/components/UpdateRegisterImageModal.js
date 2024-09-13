/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// UserProfileModal.js
import React, { useState, useEffect } from 'react';
// import { Modal, Box, Button, Typography, Grid, c, Input } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Modal,
    Typography,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    alpha,
    OutlinedInput,
    InputAdornment,
    Paper,
    Input,
    TextField,
    Grid,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import {
    updateFetchRegisterProcessData
} from '../action/action';

//
const UpdateRegisterImageModal = (props) => {
    //

    const dispatch = useDispatch();
    //
    const [isLoading, setLoading] = useState(false);
    const [isUploadSelect, setIsUploadSelect] = useState(true);
    const [inputeSelectedFile, setInputSelectedFile] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isselectFile, setIsSelectFile] = useState(false);
    const [isDisable, setIsDisable] = useState(true);
    const [registerName, setRegisterName] = useState('');
    const [typeInfo, setTypeInfo] = useState([
        {
            'type': 'email',
            'name': "Email-id"
        },
        {
            'type': 'name',
            'name': "Name"
        },
        {
            'type': 'player_name',
            'name': "Player Name"
        },
        {
            'type': 'country',
            'name': "Country"
        },
        {
            'type': 'over_18',
            'name': "I am over 18"
        },
        {
            'type': 'password',
            'name': "Password"
        },
        {
            'type': 'not_a_robot',
            'name': "I am not a robot"
        },
        {
            'type': 'create_account',
            'name': "Create Account"
        },

    ]);
    //
    useEffect(() => {
        //
        setIsSelectFile(true)
        console.log(JSON.stringify(props.data));
        const { name } = typeInfo.filter(item => item.type.toLowerCase() === props.data?.type.toLowerCase())[0]
        setRegisterName(name);
        //
    }, [])
    //
    const handleFileDrop = (e) => {

        e.preventDefault();
        const file = e.dataTransfer.files[0];

        // const file = event.target.files[0];
        if (file.type.startsWith('image/')) {
            // Process the image file
            setSelectedFile(file);
            setInputSelectedFile(file);
            setIsSelectFile(true)
            setIsDisable(!isDisable)
        } else {
            // Display an error message or handle the invalid file type
            alert('Invalid file type. Please upload an image.');
        }


    };
    //
    const handleFileInputChange = (e) => {

        const file = e.target.files[0];
        // setSelectedFile(file);
        // setInputSelectedFile(file);
        // setIsSelectFile(true)
        // setIsDisable(!isDisable)
        if (file.type.startsWith('image/')) {
            // Process the image file
            setSelectedFile(file);
            setInputSelectedFile(file);
            setIsSelectFile(true)
            setIsDisable(!isDisable)
        } else {
            // Display an error message or handle the invalid file type
            alert('Invalid file type. Please upload an image.');
        }

    };
    const updateRegisterImages = () => {
        console.log(JSON.stringify(selectedFile));
        //
        setLoading(true)
        //
        const formData = new FormData();
        //
        formData.append('image', selectedFile);
        formData.append('type', props.data.type);
        formData.append('position', props.data.position);
        //
        dispatch(
            updateFetchRegisterProcessData({
                reqData: {
                    id: props.data._id,
                    request: formData
                },
                onSuccessData: (responseData) => {
                    props.onCancelClick()
                    setLoading(false)
                },
                onErrorData: (error) => {
                    props.onCancelClick()
                    setLoading(false)
                }
            })
        )
    }


    return (
        <Modal
            open={props.isOpen}
            onClose={props.onCancelClick}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'white',
                    p: 4,
                    width: 700,
                }}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography>Update Register Image</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label={'Field Name'}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            id="outlined-basic"
                            name="name"
                            value={registerName}
                            onChange={(event) => {
                                console.log(event.target.value);
                            }}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>
                    <Grid item xs={12} container spacing={2} sx={{ margin: '5px', alignItems: "center" }}>
                        <Typography sx={{ marginRight: '15px' }}>Selected Image:</Typography>
                        <Box
                            component="img"
                            sx={{
                                height: "auto",
                                width: "12%",
                                justifyContent: 'center',
                                bgcolor: 'white',
                                alignItems: "center",
                                p: 1
                            }}
                            alt="The house from the offer."
                            src={`https://www.cashquiz.net/api/${props.data.image}`}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: '20px' }}>
                        <Paper
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleFileDrop}
                            sx={{
                                padding: '20px',
                                border: '2px dashed #ccc',
                                textAlign: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            {inputeSelectedFile ?

                                (
                                    <Typography>Selected File: {inputeSelectedFile.name}</Typography>
                                )
                                : (
                                    <Typography>Drag & Drop or Click to Upload</Typography>
                                )
                            }
                            <Input
                                type="file"
                                // accept=".png, .jpg"
                                accept="image/*"
                                id="file-input"
                                onChange={handleFileInputChange}
                                sx={{ display: 'none' }}
                                inputProps={{ tabIndex: -1 }} // This hides the default browser focus indicator
                            />
                            <label htmlFor="file-input">
                                <Button variant="contained" color="primary" component="span">
                                    Browse
                                </Button>
                            </label>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sx={{ marginTop: '20px' }}>
                        <LoadingButton
                            onClick={updateRegisterImages}
                            disabled={isDisable}
                            loading={isLoading}
                            type="submit"
                            variant="contained"
                            color="primary">
                            upload
                        </LoadingButton>
                        <LoadingButton
                            sx={{ marginLeft: '10px' }}
                            onClick={props.onCancelClick}
                            type="submit"
                            variant="contained"
                            color="primary">
                            Cancel
                        </LoadingButton>
                    </Grid>
                </Grid>
                <IconButton
                    aria-label="close"
                    onClick={props.onCancelClick}
                    sx={{
                        position: 'absolute',
                        top: '0%',
                        right: '1%',
                        // transform: 'translate(-0%, -0%)',
                        // alignItems: "center",

                    }}
                >
                    <CloseIcon sx={{ width: 40, height: 40, color: 'black' }} />
                </IconButton>
            </Box>
        </Modal>
    );
};
export default UpdateRegisterImageModal;

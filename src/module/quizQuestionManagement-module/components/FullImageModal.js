/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// UserProfileModal.js
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import {
    Modal,
    Box,
    Button,
    Typography,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    CircularProgress,
    Input,
    Card,
    CardMedia,
    IconButton
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import CloseIcon from '@mui/icons-material/Close';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
//
const FullImageModal = ({ isOpen, onClose, imageURL }) => {
    //
    const dispatch = useDispatch();
    const [orientation, setOrientation] = useState(null);
    const checkOrientation = (event) => {
        const img = event.target;
        if (img.naturalWidth > img.naturalHeight) {
            setOrientation('landscape');
        } else {
            setOrientation('portrait');
        }
    };

    //
    return (
        <>
            <Modal open={isOpen} onClose={onClose}>
                {/* <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        height: "auto",
                        // width:'50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'white',
                        justifyContent:"center",
                        alignItems:"center",
                        p: 4
                    }}
                > */}
                {/* <Grid item xs={1} container spacing={0} justifyContent="center" > */}

                {/* <CardMedia
                        sx={{ width: '30%', height: 'auto' }}
                        component="img"
                        image={`${imageURL}`}
                        alt="Your Image"
                    /> */}

                {/* </Grid> */}
                <div>
                    <Box
                        component="img"
                        sx={{
                            height: "auto",
                            width: (orientation === "landscape") ? "50%" : "25%",
                            justifyContent: 'center',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'white',
                            alignItems: "center",
                            p: 4
                        }}
                        alt="The house from the offer."
                        src={`${imageURL}`}
                        onLoad={checkOrientation}>

                        {/* <img
                        src={imageURL}
                        alt="Image"
                        style={{ display: 'block', width: '0%', height: 'auto' }}
                        onLoad={checkOrientation}
                    /> */}
                        {/* <img src={`${imageURL}?size=30x30`} alt="" />
                     */}

                    </Box>
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            top: (orientation === "landscape") ?'15%':'3%',
                            left: (orientation === "landscape") ?'72%':'59%',
                            // transform: 'translate(-0%, -0%)',
                            // alignItems: "center",

                        }}
                    >
                        <CloseIcon sx={{ width: 40, height: 40, color: 'black' }} />
                    </IconButton>
                </div>
                {/* <CloseIcon/> */}
                {/* <img src={`${imageURL}`} alt="" style={{  width: '10%', height: '10%' }}/> */}

            </Modal>
        </>
    );
};

export default FullImageModal;

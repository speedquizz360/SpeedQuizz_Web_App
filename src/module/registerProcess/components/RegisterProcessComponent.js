import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
// @mui
import {
    Card,
    Table,
    Stack,
    Paper,
    Button,
    Popover,
    TableRow,
    MenuItem,
    TableBody,
    TableCell,
    Container,
    Typography,
    TableContainer,
    TablePagination,
    CircularProgress,
    CardMedia,
    Box,
    Grid,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
// components
import { useDispatch, useSelector } from 'react-redux';
//
import RegisterPageHeader from './RegisterPageHeader';
import RegisterToolbar from './RegisterToolbar';
import FullImageModal from '../../quizQuestionManagement-module/components/FullImageModal';
import UpdateRegisterImageModal from './UpdateRegisterImageModal';
//
import Scrollbar from '../../../components/scrollbar';
import {
    getFetchRegisterProcessData
} from '../action/action';
//
const TABLE_HEAD = [
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'image', label: 'Image', alignRight: false },
    { id: 'action', label: 'Action', alignRight: false },
];
//
export default function RegisterProcessComponent() {
    //
    const dispatch = useDispatch();
    //
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('name');
    const [order, setOrder] = useState('asc');
    //
    const [isFullImageModal, setIsFullImageModal] = useState(false);
    const [fullImageURL, setFullImageURL] = useState('');
    //
    const [isUpdateImageModal, setIsUpdateImageModal] = useState(false);
    const [registerInfo, setRegisterInfo] = useState('');
    //
    const [registerData, setRegisterData] = useState([]);
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
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
    };
    const handleSelectAllClick = (event) => {
    };
    //
    const fetchAllRegisterProcess = () => {
        dispatch(
            getFetchRegisterProcessData({
                reqData: {},
                onSuccessData: (responseData) => {
                    console.log('====================================');
                    console.log(JSON.stringify(responseData.data));
                    console.log('====================================');
                    setRegisterData(responseData.data)
                },
                onErrorData: (error) => {
                    console.log('====================================');
                    console.log(JSON.stringify(error));
                    console.log('====================================');
                }
            })
        )
    }
    useEffect(() => {
        fetchAllRegisterProcess()
    }, [])
    //
    return (
        <>
            <Helmet>
                <title> Register Process | SpeedQuiz </title>
            </Helmet>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Register Process
                    </Typography>
                </Stack>
                <Card>
                    <Scrollbar>
                        <TableContainer sx={{ minWidth: 800 }}>
                            <Table>
                                {
                                    (registerData.length > 0) &&
                                    <RegisterPageHeader
                                        order={order}
                                        orderBy={orderBy}
                                        headLabel={TABLE_HEAD}
                                        rowCount={0}
                                        numSelected={selected.length}
                                        onRequestSort={handleRequestSort}
                                        onSelectAllClick={handleSelectAllClick}
                                    />
                                }
                                <TableBody>
                                    {
                                        (registerData.length > 0) ?
                                            registerData.map((row) => {
                                                const { type = "", image = "" } = row;
                                                const { name } = typeInfo.filter(item => item.type.toLowerCase() === type.toLowerCase())[0]
                                                return (

                                                    <TableRow hover tabIndex={-1} role="checkbox">
                                                        <TableCell component="th" scope="row" padding="none" >
                                                            <Grid item xs={10} container spacing={0} justifyContent="center">
                                                                <Typography variant="url" sx={{ marginLeft: '0px' }}>
                                                                    {name}
                                                                </Typography>
                                                            </Grid>

                                                        </TableCell>
                                                        <TableCell component="th" scope="row" padding="none" align="center">
                                                            <Grid item xs={10} container spacing={0} justifyContent="center">
                                                                <Card sx={{ maxWidth: 80, justifyContent: "center", borderRadius: 0 }}>
                                                                    <CardMedia
                                                                        sx={{ width: '100%', height: 'auto' }}
                                                                        component="img"
                                                                        image={`https://www.cashquiz.net/api/${image}`}
                                                                        alt="Your Image"
                                                                    />
                                                                </Card>
                                                            </Grid>

                                                        </TableCell>
                                                        <TableCell align="right" scope="row" padding="none">
                                                            <Grid item xs={10} container spacing={0} justifyContent="flex-end" sx={{ marginLeft: '0px' }}>
                                                                <Button
                                                                    variant='contained'
                                                                    onClick={() => {
                                                                        setFullImageURL(`https://www.cashquiz.net/api/${image}`)
                                                                        setIsFullImageModal(true)
                                                                    }}>View</Button>

                                                                <Button
                                                                    variant='contained'
                                                                    sx={{ marginLeft: '5px', marginRight: '0px' }}
                                                                    onClick={() => {
                                                                        setRegisterInfo(row)
                                                                        setTimeout(() => {
                                                                            setIsUpdateImageModal(true)
                                                                        }, 100);
                                                                    }}>
                                                                    Update
                                                                </Button>
                                                            </Grid>

                                                        </TableCell>
                                                    </TableRow>

                                                );
                                            })
                                            :
                                            <DialogTitle style={{ marginLeft: '38%' }}>
                                                {"No record found"}
                                            </DialogTitle>
                                    }

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Scrollbar>
                </Card>
            </Container>
            {
                isFullImageModal &&
                <FullImageModal
                    isOpen={isFullImageModal}
                    onClose={() => {
                        setIsFullImageModal(false)
                    }}
                    imageURL={fullImageURL}
                />
            }
            {
                isUpdateImageModal &&
                <UpdateRegisterImageModal
                    isOpen={isUpdateImageModal}
                    data={registerInfo}
                    onCancelClick={() => {
                        setIsUpdateImageModal(false)
                        fetchAllRegisterProcess()
                    }} />
            }
        </>
    );
}

import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, Button,Snackbar,  Dialog, DialogTitle, DialogContent, 
    DialogContentText, TextField, MenuItem, DialogActions, Checkbox, Modal, Backdrop, Fade} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@iconify/react';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from "@material-ui/core/TableCell";
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

import { BrowserRouter as Router, Redirect, Route} from "react-router-dom";


const mediaQueries = {
	phone: '@media only screen and (min-width: 280px) and (max-width: 540px)',
    tablet: '@media only screen and (min-width: 541px) and (max-width: 1280px)',
    iphone4_5: '@media only screen and (-webkit-min-device-pixel-ratio : 1.5) and (max-width: 320px)'
}

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        flexWrap: 'wrap',
        display: 'flex'
    },
    modalPC:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        [mediaQueries.phone]: {
            display:'none'
        },
        [mediaQueries.tablet]: {
            display:'none'
        }
    },
    modalMobile:{
        display:'none',
        [mediaQueries.phone]: {
            display:'block'
        },
        [mediaQueries.tablet]: {
            display:'block'
        }
    },
    mainPicturePC:{
        display: 'block',
        position: 'relative',
        [mediaQueries.phone]: {
            display:'none'
        },
        [mediaQueries.tablet]: {
            display:'none'
        }
    },
    mainPictureMobile:{
        display:'none',
        width: '100%',
        [mediaQueries.phone]: {
            display:'block'
        },
        [mediaQueries.tablet]: {
            display:'block'
        }
    },
    Title:{
        color: '#000000', 
        fontSize: '36px',
        fontFamily: "'Comfortaa', cursive",
        textAlign: 'left',
        [mediaQueries.phone]: {
            fontSize: '30px',
        }
    },
    Description:{
        fontSize: '16px',
        fontFamily: "'Montserrat Alternates', sans-serif",
        fontWeight: '500',
        [mediaQueries.phone]: {
            fontSize: '14px',
        },
        [mediaQueries.tablet]: {
            fontSize: '14px',
        }
    },
    Description2:{
        fontSize: '17px',
        fontFamily: "'Montserrat Alternates', sans-serif",
        fontWeight: '600',
        [mediaQueries.phone]: {
            fontSize: '15px',
        },
        [mediaQueries.tablet]: {
            fontSize: '15px',
        }
    },
    stText_1:{
        color: '#000000', 
        fontFamily: "'Montserrat Alternates', sans-serif", 
        fontWeight: '400',
        fontSize:'15px',
        textAlign: 'center',
        verticalAlign: 'middle',
        wordSpacing: '2px',
        [mediaQueries.phone]: {
            fontSize: '14px',
            textAlign: 'center',
        }
    },
    stText_2:{
        color: '#ffffff', 
        fontFamily: "'Marck Script', cursive;", 
        fontSize:'70px',
        textAlign: 'left',
        [mediaQueries.phone]: {
            fontSize: '54px',
            textAlign: 'left',
            lineHeight: '63px',
            [mediaQueries.iphone4_5]: {
                fontSize: '46px',
                textAlign: 'left',
                lineHeight: '55px'
            },
        },
        [mediaQueries.tablet]: {
            fontSize: '60px',
            textAlign: 'left',
            lineHeight: '50px'
        }
    },
    stText_3:{
        color: '#000000', 
        fontFamily: "'Montserrat Alternates', sans-serif", 
        fontWeight: '400',
        fontSize:'16px',
        textAlign: 'left',
        verticalAlign: 'middle',
        wordSpacing: '2px',
        [mediaQueries.phone]: {
            fontSize: '14px',
        }
    },
    block_text:{
        postion: 'relative',
        [mediaQueries.phone]: {
            float:'none', 
        }
    },
    dialogTitle:{
        fontSize: '22px',
        fontFamily: "'Comfortaa', cursive",
        textAlign: 'center',
        [mediaQueries.phone]: {
            fontSize: '18px',
        }
    },
    dialogText:{
        fontSize: '15px',
        color: '#000000',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '14px',
        }
    },
    btn_stl:{
        color: '#527c82ff',
        fontSize: '15px',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '13px'
        }
    },
});

const getMaxPerson = temp => {
    let content = [];
    for (let i = 0; i < temp; i++) 
    {
        let person = i+1;
        content.push(<MenuItem key={person} value={person}>{person}</MenuItem>);
    }
    return content;
};

const getAMaxPerson = temp => {
    let content = [];
    content.push(<MenuItem key={0} value={0}>0</MenuItem>);
    for (let i = 0; i < temp; i++) 
    {
        let person = i+1;
        content.push(<MenuItem key={person} value={person}>{person}</MenuItem>);
    }
    return content;
};

const ColorButton = withStyles((theme) => ({
    root: {
        postiton:'relative',
        color: theme.palette.getContrastText('rgb(192, 27, 233)'),
        textTransform: 'none',
        textAlign: 'center',
        fontFamily: "'Comfortaa', cursive",
        fontWeight: '500',
        fontSize: '17px',
        backgroundColor: 'rgb(192, 27, 233)',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '12px',
        paddingBottom: '10px',
        borderRadius: '65px',
        '&:hover': {
            backgroundColor: 'rgb(200, 90, 233)',
        },
        [mediaQueries.phone]: {
            fontSize: '16px',
            paddingLeft: '50%',
            paddingRight: '50%',
        },
        [mediaQueries.tablet]: {
            fontSize: '16px',
            paddingLeft: '50%',
            paddingRight: '50%',
        }
    },
}))(Button);

const ColorButton2 = withStyles((theme) => ({
    root: {
        postiton:'relative',
        color: theme.palette.getContrastText('rgb(70, 135, 180)'),
        textTransform: 'none',
        fontFamily: "'Comfortaa', cursive",
        fontWeight: '500',
        fontSize: '17px',
        backgroundColor: 'rgb(70, 135, 180)',
        paddingLeft: '40px',
        paddingRight: '40px',
        paddingTop: '12px',
        paddingBottom: '10px',
        borderRadius: '65px',
        '&:hover': {
            backgroundColor: 'rgb(125, 160, 190)',
        },
    },
}))(Button);

const TableCell = withStyles({
    root: {
      borderBottom: "none",
    }
})(MuiTableCell);

const TextField2 = withStyles({
    root: {
        width: '25%',
        '& .MuiInput-underline': {
            '&:after':{
                borderBottomColor: 'rgb(82, 157, 170, 1.0)',
            },
            '&:before':{
                display: "none !important",
            },
        },  
        '& .MuiInput-input-label': {
            textAlign: 'center'
        },

    },
})(TextField);




const TextFieldName = withStyles({
    root: {
        backgroundColor: 'rgb(245,245,245)',
        borderRadius: '60px',
        width: '49.5%',
        marginLeft: '7px',
        '& .MuiInput-underline': {
            '&:after':{
                borderBottomColor: '#527c82ff',
            },
            '&:before':{
                display: "none !important",
            },
        }, 
        '& label.Mui-focused': {
            color: 'rgb(82, 157, 170, 1.0)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgb(245,245,245)',
                borderRadius: '60px',
            },
            '&:hover fieldset': {
                borderColor: 'rgb(82, 157, 170, 0.7)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(82, 157, 170, 1.0)',
            },
        },
        [mediaQueries.phone]: {
            width: '100%',
            marginLeft: '0px'
        },
        [mediaQueries.tablet]: {
            width: '100%',
            marginLeft: '0px'
        },

    },
})(TextField);

const TextField3 = withStyles({
    root: {
        backgroundColor: 'rgb(245,245,245)',
        borderRadius: '60px',
        width: '24.5%',
        marginLeft: '6px',
        '& .MuiInput-underline': {
            '&:after':{
                borderBottomColor: 'rgb(82, 157, 170, 1.0)',
            },
            '&:before':{
                display: "none !important",
            },
        }, 
        '& label.Mui-focused': {
            color: 'rgb(82, 157, 170, 1.0)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgb(245,245,245)',
                borderRadius: '60px',
            },
            '&:hover fieldset': {
                borderColor: 'rgb(82, 157, 170, 0.7)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(82, 157, 170, 1.0)',
            },
        },
        [mediaQueries.phone]: {
            width: '100%',
            marginLeft: '0px'
        },
        [mediaQueries.tablet]: {
            width: '100%',
            marginLeft: '0px'
        },
    },
})(TextField);

const PersonPicker = withStyles({
    root: {
        backgroundColor: 'rgb(245,245,245)',
        width: '24.5%',
        borderRadius: '60px',
        marginLeft: '6px',
        '& .MuiInput-underline': {
            '&:after':{
                display: 'none !important',
            },
            '&:before':{
                display: "none !important",
            },
        }, 
        '& label.Mui-focused': {
            color: 'rgb(82, 157, 170, 1.0)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgb(245,245,245)',
                borderRadius: '60px',
            },
            '&:hover fieldset': {
                borderColor: 'rgb(82, 157, 170, 0.7)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(82, 157, 170, 1.0)',
            }
        },
        [mediaQueries.phone]: {
            width: '49%',
            marginLeft: '2px'
        },
        [mediaQueries.tablet]: {
            width: '49%',
            marginLeft: '2px'
        },
    },
})(TextField);


const TextField4 = withStyles({
    root: {
        backgroundColor: 'rgb(245,245,245)',
        borderRadius: '15px',
        width: '49.5%',
        marginLeft: '7px',
        '& .MuiInput-underline': {
            '&:after':{
                borderBottomColor: 'rgb(82, 157, 170, 1.0)',
            },
            '&:before':{
                display: "none !important",
            },
        }, 
        '& label.Mui-focused': {
            color: 'rgb(82, 157, 170, 1.0)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgb(245,245,245)',
                borderRadius: '15px',
            },
            '&:hover fieldset': {
                borderColor: 'rgb(82, 157, 170, 0.7)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(82, 157, 170, 1.0)',
            },
        },
        [mediaQueries.phone]: {
            width: '100%',
            marginLeft: '0px'
        },
        [mediaQueries.tablet]: {
            width: '100%',
            marginLeft: '0px'
        },
    },
})(TextField);

export class RoomInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isLoadedImage: false,
            isNoInfo: false,
            error: '',
            RoomsData: [],
            RoomsImg: [],
            PriceData: [],
            dialogRoomReserveState: false, 
            alertNoFullError: false,
            alertReserveError: false,
            alertReserveSuccess: false,
            alertConfrimWarning: false,
            checked: false,
            roomType: -1
        };
        this.nameValueRef = React.createRef();
        this.emailValueRef = React.createRef();
        this.phoneValueRef = React.createRef();
        this.personValueRef = React.createRef();
        this.m_personValueRef = React.createRef();
        this.arrival_dateValueRef = React.createRef();
        this.departure_dateValueRef = React.createRef();
        this.descriptionValueRef = React.createRef();

        this.handleChangeChecked= this.handleChangeChecked.bind(this);
        this.handleClickRoomReserveDialog = this.handleClickRoomReserveDialog.bind(this);
        this.handleClickConfirmRoomReserve = this.handleClickConfirmRoomReserve.bind(this);
        this.handleAlertShow = this.handleAlertShow.bind(this);
        this.handleAlertClose = this.handleAlertClose.bind(this);
    }
    componentDidMount() {
        var { match: { params }} = this.props;
        const { roomID } = params;
        var orderData = {
            idRoom: roomID
        };
        if(!this.state.isLoadedImage)
        {
            //----------Загрузка фото номеров-----
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            };
            //fetch('http://backend.com/load_rimage.php',requestOptions)
            fetch('http://a0624502.xsph.ru/modules/load_rimage.php',requestOptions)
            .then(response => response.json())
            .then(
                (response) =>{
                    this.setState({
                        isLoadedImage: true,
                        RoomsImg:response
                    });
                }
            )
            .catch((error) => {
                console.error('Error:', error);
            });
        }
        if(!this.state.isLoaded)
        {
        //--------------Загрузка инфы-----------
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            };
            //fetch('http://backend.com/load_rfullinfo.php',requestOptions)
            fetch('http://a0624502.xsph.ru/modules/load_rfullinfo.php',requestOptions)
            .then(response => response.json())
            .then(
            (response) =>{
                if(response === 'noinfo')
                {
                    console.log('Нет инфы');
                    this.setState({
                        isNoInfo: true
                    })
                }
                else {
                    this.setState({
                        RoomsData:response,
                        isLoaded: true
                    })
                }
            },
            (error) =>{
                this.setState({
                    error:error
                });
            }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
        //------------Загрузка цен----------------
        //fetch('http://backend.com/load_rprice.php')
        fetch('http://a0624502.xsph.ru/modules/load_rprice.php')
        .then(response => response.json())
        .then(
            (response) =>{
                this.setState({
                    PriceData: response
                });
            },
            (error) =>{
                this.setState({
                    error:error
                });
            }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
        }

    }
    handleChangeChecked(event){
        this.setState(() => ({
            checked: event.target.checked
        }));
    }
    handleClickRoomReserveDialog(){
        this.setState(state => ({
            dialogRoomReserveState: !state.dialogRoomReserveState,
        }));
    }
    handleClickConfirmRoomReserve(){

        if(this.state.checked === true)
        { 
            var name = this.nameValueRef.current.value;
            var phone = this.phoneValueRef.current.value;
            var email = this.emailValueRef.current.value;
            var person = this.personValueRef.current.value;
            var mperson = this.m_personValueRef.current.value;
            var arrival_date = this.arrival_dateValueRef.current.value;
            var departure_date = this.departure_dateValueRef.current.value;
            var coment = this.descriptionValueRef.current.value;
            var orderData = {
                name: name,
                phone: phone,
                email: email,
                person: person,
                mperson: mperson,
                arrival_date: arrival_date,
                departure_date: departure_date,
                coment:coment,
                room_type: this.state.roomType
            };
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            };
            //fetch('http://backend.com/reserv_room.php', requestOptions)
            fetch('http://a0624502.xsph.ru/modules/reserv_room.php', requestOptions)
            .then((response) => response.json())
            .then((responseData) => {
                switch(responseData)
                {
                    case 'not_full':{

                        this.handleAlertShow(0); // Показываем Alert Неполные данные
                        break;
                    }
                    case 'error':{

                        this.handleAlertShow(1); // Показываем Alert Некоорректные данные
                        break;
                    }
                    case 'yes':{
                        this.handleAlertShow(2); // Показываем Alert Номер успешно забронирован
                        break;
                    }
                    default:{

                        alert('Неизвестный ответ с сервера. Стадия: Бронирование номера.');
                        break;
                    }
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }   
        else {
            this.handleAlertShow(3);
        }
    }

    handleAlertShow(event) {
        switch(event)
        {
            case 0:{// Неполные данные
                this.setState(state => ({
                    
                    alertNoFullError: true
                }));
                break;
            }
            case 1:{// Неверные данные
                this.setState(state => ({
                    dialogRoomReserveState: !state.dialogRoomReserveState,
                    alertReserveError: true
                }));
                break;
            }
            case 2:{// Всё ок
                this.setState(state => ({
                    dialogRoomReserveState: !state.dialogRoomReserveState,
                    alertReserveSuccess: true
                }));
                break;
            }
            case 3:{//Предупреждение о согласии
                this.setState(state => ({
                    alertConfrimWarning: true
                }));
                break;
            }
            default:{
                alert('Ошибка обрабработки уведомления');
                break;
            }
        }
    }
    handleAlertClose(){
        this.setState(() => ({
            alertReserveSuccess: false,
            alertReserveError: false,
            alertNoFullError: false,
            alertConfrimWarning: false
        }));
    }
    render() {
        const {classes, match: { params }} = this.props;
        const { RoomsData, PriceData,RoomsImg, dialogRoomReserveState, isNoInfo, isLoaded, isLoadedImage, error,
                alertNoFullError, alertReserveError, alertReserveSuccess, alertConfrimWarning} = this.state;
        const { roomID } = params;
        const NextArrow = ({ onClick }) => {
            return (
                <Box className="arrow next3" onClick={onClick}>
                    <KeyboardArrowLeft style = {{fontSize: 65}}/>
                </Box>
            );
        };
        const PrevArrow = ({ onClick }) => {
            return (
                <Box className="arrow prev3" onClick={onClick}>
                    <KeyboardArrowRight style = {{fontSize: 65}}/>
                </Box>
            );
        };
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 1600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            swipeToSlide: true,
            autoplaySpeed: 6000,
            nextArrow: <PrevArrow />,
            prevArrow: <NextArrow />
        };
        const settings2 = {
            dots: true,
            lazyLoad: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            swipeToSlide: true,
            autoplaySpeed: 5000,
            nextArrow: <PrevArrow />,
            prevArrow: <NextArrow />,
        };
        if(error)
        {
            return <p>{error}</p>
        } 
        if(isNoInfo & !isLoaded){
            return (<Redirect to = '/error'/>);
        }
        else if (!isLoaded || !isLoadedImage) {
            return (
                <>
                    <Box className = {classes.root}>
                        <Container maxWidth = 'xl' disableGutters = {true}>
                            <Box width = '100%' style = {{position: 'relative'}}>
                                <Skeleton variant="rect" width="100%" height='520px' />
                            </Box>
                            <Box style = {{paddingLeft: '5.9%',paddingRight: '5%',marginTop: '1.5%',position: 'relative'}}>
                                <Box> 
                                    <Skeleton variant="text" width="100%" height='150px' />
                                    <Skeleton variant="text" width="305px" height="300px" />
                                    <Skeleton variant="text" width="100%" height="100px" />
                                </Box> 
                                <Box> 
                                    <TableContainer component={Paper} style = {{marginTop:'1em',boxShadow: 'none'}}>
                                        <Table size="medium">
                                            <TableHead>
                                                <TableRow style = {{background: 'rgb(245,245,249, 0.8)'}}>
                                                    <Skeleton variant="rect" width="100%" height='105px' />
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow style = {{background: 'rgba(82, 124, 130, 0.13)'}}>
                                                    <Skeleton variant="rect" width="100%" height='50px' />
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Typography>
                                        <Skeleton style = {{margin: '0 auto'}} variant="text" width="100%" height='90px' />
                                    </Typography>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </>
            )
        }
        else 
        {
            return (
                    <Box className = {classes.root}>
                        <Container maxWidth = 'xl' disableGutters = {true}>
                            <Box className = {classes.mainPicturePC} width = '100%'>
                                <Slider {...settings}>
                                    {RoomsImg.map((rinfo, index) => {
                                        return (
                                            <Box key = {index} className = 'container-glicinia'>
                                                <img style = {{filter: 'brightness(75%)'}} alt = 'Фото номера' src = {`data:image/jpeg;base64,${rinfo.img}`}/>
                                            </Box>
                                        );
                                    })}
                                </Slider>
                                {RoomsData.filter(temp => temp.id === roomID).map(rinfo  => {
                                    return (
                                        <Box key = {rinfo.id}>
                                            <Box className = 'block-text-2' style = {{textAlign:'left', top: '187px', left: '152px',}}>
                                                <Typography className = {classes.stText_2}>
                                                    {rinfo.title}
                                                </Typography>
                                            </Box>
                                            <Box className = 'block-person_info-2' style = {{textAlign:'center', top: '290px', left: '152px'}}>
                                                <Typography className = {classes.stText_1}>
                                                    <Icon icon="la:user" color = 'grey' inline={true} width="32" height="32" style = {{verticalAlign: 'middle'}}/> до {rinfo.max_person} мест
                                                </Typography>
                                            </Box>
                                            <Box className = 'block-person_info-2' style = {{textAlign:'center', top: '290px', left: '322px'}}>
                                                <Typography className = {classes.stText_1}>
                                                    <Icon icon="la:user-plus" color = 'grey' inline={true} width="32" height="32" style = {{verticalAlign: 'middle'}}/> до {rinfo.max_aperson} мест
                                                </Typography>
                                            </Box>
                                            <Box className = 'block-person_info-2' style = {{textAlign:'center', top: '290px', left: '492px'}}>
                                                <Typography className = {classes.stText_1}>
                                                    <Icon icon="bx:bx-area" color = 'grey' inline={true} width="32" height="32" style = {{verticalAlign: 'middle'}}/> {rinfo.area} m²
                                                </Typography>
                                            </Box>
                                            <Box className = 'block-button-2' style = {{textAlign:'center', top: '357px', left: '152px'}}>
                                                <ColorButton id = {rinfo.id} onClick={this.handleClickRoomReserveDialog}>
                                                    Забронировать
                                                </ColorButton>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Box>
                            <Box className = {classes.mainPictureMobile}>
                                <Slider {...settings2}>
                                    {RoomsImg.map((rinfo, index) => {
                                        return (
                                            <Box key = {index} className = 'container-glicinia'>
                                                <img style = {{filter: 'brightness(75%)'}} alt = 'Фото номера' src = {`data:image/jpeg;base64,${rinfo.img}`}/>
                                            </Box>
                                        );
                                    })}
                                </Slider>
                                {RoomsData.filter(temp => temp.id === roomID).map(rinfo => (
                                    <Box>
                                        <Box className = 'block-text-2' style = {{textAlign:'left', top: '127px', left: '15px'}}>
                                            <Typography className = {classes.stText_2}>
                                                {rinfo.title}
                                            </Typography>
                                        </Box>
                                        <Box className = 'block-person_info-2' style = {{width: '9em',textAlign:'center', top: '280px', left: '15px'}}>
                                            <Typography className = {classes.stText_1}>
                                                <Icon icon="la:user" color = 'grey' inline={true} width="32" height="32" style = {{verticalAlign: 'middle'}}/> до {rinfo.max_person} мест
                                            </Typography>
                                        </Box>
                                        <Box className = 'block-person_info-2' style = {{width: '9em',textAlign:'center', top: '280px', left: '168px'}}>
                                            <Typography className = {classes.stText_1}>
                                                <Icon icon="la:user-plus" color = 'grey' inline={true} width="32" height="32" style = {{verticalAlign: 'middle'}}/> до {rinfo.max_aperson} мест
                                            </Typography>
                                        </Box>
                                        <Box className = 'block-person_info-2' style = {{width: '18.5em',textAlign:'center', top: '335px', left: '15px'}}>
                                            <Typography className = {classes.stText_1}>
                                                <Icon icon="bx:bx-area" color = 'grey' inline={true} width="32" height="32" style = {{verticalAlign: 'middle'}}/> {rinfo.area} m²
                                            </Typography>
                                        </Box>
                                        <Box className = 'block-button-2' style = {{textAlign:'center', top: '395px', left: '15px'}}>
                                            <ColorButton id = {rinfo.id} onClick={this.handleClickRoomReserveDialog}>
                                                Забронировать
                                            </ColorButton>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                            <br/>
                            <br/>
                            <Box style = {{paddingLeft: '5.9%',paddingRight: '5%',marginTop: '1%',position: 'relative'}}>
                                {RoomsData.filter(temp => temp.id === roomID).map(rinfo => (
                                    <Box key = {rinfo.id}>
                                        <Typography className = {classes.Title}>
                                            О номере
                                        </Typography>
                                        <Typography className = {classes.stText_3}>
                                            {rinfo.description}
                                        </Typography>
                                        <br/>
                                        <Typography  className = {classes.stText_3} component = 'ul'>
                                            <strong>В стоимость номера входит:</strong>
                                            <ul style = {{paddingLeft: '35px'}}>
                                                <li>WiFi</li>
                                                <li>Телевизор</li>
                                                <li>Кондиционер</li>
                                                <li>Холодильник</li>
                                                <li>Душ</li>
                                                <li>Бассейн</li>
                                                <li>Завтрак</li>
                                            </ul>
                                        </Typography>
                                        <br/>
                                        <Typography className = {classes.stText_3} component = 'ul'>
                                            <strong>Вместимость номера:</strong>
                                            <ul style = {{paddingLeft: '35px'}}>
                                                <li>{rinfo.max_person} основных</li>
                                                <li>{rinfo.max_aperson} дополнительных</li>
                                            </ul>
                                        </Typography>
                                        <br/>
                                        <Typography className = {classes.stText_3}>
                                            <strong>Площадь номера:</strong> {rinfo.area} m²
                                            <br/>
                                            <strong>Всего номеров:</strong> {rinfo.ammount} шт.
                                            <br/>
                                            <br/>
                                        </Typography>
                                        <Typography className = {classes.Title}>
                                            Прайс лист
                                        </Typography>
                                        {PriceData.filter(item => item.idRoom === rinfo.id).map(item => (
                                            <Box key = {item.id}> 
                                                <TableContainer component={Paper} style = {{marginTop:'1em',boxShadow: 'none'}} className='table_scroll'>
                                                    <Table size="medium">
                                                        <TableHead>
                                                            <TableRow style = {{background: 'rgb(245,245,249, 0.8)'}}>
                                                                <TableCell className = {classes.Description}></TableCell>
                                                                <TableCell className = {classes.Description} align="center">Низкий сезон<br/>16.10 - 28.05</TableCell>
                                                                <TableCell className = {classes.Description} align="center">Лето<br/>29.04 - 31.05<br/>21.09 - 15.10</TableCell>
                                                                <TableCell className = {classes.Description} align="center">Высокий сезон<br/>01.06 - 30.06<br/>01.09 - 20.09</TableCell>
                                                                <TableCell className = {classes.Description} align="center">Жара<br/>01.07 - 31.08</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableHead>
                                                            <TableRow style = {{background: 'rgb(245,245,249, 0.8)'}}>
                                                                <TableCell>&emsp;</TableCell>
                                                                <TableCell align="center" style = {{wordSpacing: '0.5rem'}} className = {classes.Description2}>BB FB</TableCell>
                                                                <TableCell align="center" style = {{wordSpacing: '0.5rem'}} className = {classes.Description2}>BB FB</TableCell>
                                                                <TableCell align="center" style = {{wordSpacing: '0.5rem'}} className = {classes.Description2}>BB FB</TableCell>
                                                                <TableCell align="center" style = {{wordSpacing: '0.5rem'}} className = {classes.Description2}>BB FB</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow style = {{background: 'rgba(82, 124, 130, 0.13)'}}>
                                                                <TableCell component="th" scope="row" className = {classes.Description} >
                                                                    Основные места (взрослый)
                                                                </TableCell>
                                                                <TableCell align="center" style = {{wordSpacing: '0.5rem'}} className = {classes.Description}>{item.bb_low} {item.fb_low}</TableCell>
                                                                <TableCell align="center" style = {{wordSpacing: '0.5rem'}} className = {classes.Description}>{item.bb_summer} {item.fb_summer}</TableCell>
                                                                <TableCell align="center" style = {{wordSpacing: '0.5rem'}} className = {classes.Description}>{item.bb_high} {item.fb_high}</TableCell>
                                                                <TableCell align="center" style = {{wordSpacing: '0.5rem'}} className = {classes.Description}>{item.bb_hot} {item.fb_hot}</TableCell>
                                                            </TableRow>
                                                            <TableRow style = {{background: 'rgb(245,245,249, 0.8)'}}>
                                                                <TableCell component="th" scope="row" className = {classes.Description} >
                                                                    Дополнительные места (детский/взрослый)
                                                                </TableCell>
                                                                <TableCell align="center" style = {{wordSpacing: '0.5rem'}} className = {classes.Description} >{item.m_bb_low} {item.m_fb_low}</TableCell>
                                                                <TableCell align="center" style = {{wordSpacing: '0.5rem'}} className = {classes.Description} >{item.m_bb_summer} {item.m_fb_summer}</TableCell>
                                                                <TableCell align="center" style = {{wordSpacing: '0.5rem'}} className = {classes.Description} >{item.m_bb_high} {item.m_fb_high}</TableCell>
                                                                <TableCell align="center" style = {{wordSpacing: '0.5rem'}} className = {classes.Description} >{item.m_bb_hot} {item.m_fb_hot}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                                <br/>
                                            </Box>
                                        ))}
                                        <Typography className = {classes.Description2} style = {{textAlign: 'center'}}>
                                                <br/>
                                                BB - стоимость номера + завтраки.
                                                <br/>
                                                FB - стоимость номера + полный пансион.
                                                <br/>
                                                <br/> 
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Container> 
                        <Container maxWidth = 'md' disableGutters = {true}>
                            <Modal  
                                    className = {classes.modalPC}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 400,
                                    }}
                                open = {dialogRoomReserveState} 
                                onClose={this.handleClickRoomReserveDialog}>
                                <Fade in={dialogRoomReserveState}>
                                    <Box width = '100%'>
                                    {RoomsData.filter(temp => temp.id === roomID).map(rinfo => (  
                                        <Box key = {rinfo.id} className = 'container-revroom'>
                                            <Box className='container-revimg'>
                                                <Box className = 'block-revroomimg'>  
                                                    <img alt = 'Фотография номера' style = {{
                                                        objectFit: 'cover', 
                                                        width:'100%', 
                                                        height: '100%',
                                                        filter: 'brightness(90%)',
                                                        borderTopRightRadius: '6px',
                                                        borderBottomRightRadius: '6px'}}  
                                                        src = {`data:image/jpeg;base64,${rinfo.img}`}/>
                                                    <span style = {{cursor: 'pointer'}} onClick = {this.handleClickRoomReserveDialog}></span>
                                                    <Box className = 'block-service'>
                                                        <Icon icon="ph:wifi-high" color="white" width="32" height="32" style = {{marginLeft: '9%'}}/>
                                                        <Icon icon="ph:shower" color="white" width="32" height="32" style = {{marginLeft: '9%'}}/>
                                                        <Icon icon="fluent:food-24-filled" color="white" width="32" height="32" style = {{marginLeft: '9%'}}/>
                                                        <Icon icon="si-glyph:ladder-pool" color="white" width="32" height="32" style = {{marginLeft: '9%'}}/>
                                                        <Icon icon="bi:tv" color="white" width="32" height="32" style = {{marginLeft: '9%'}}/>
                                                        <Icon icon="bx:bx-fridge" color="white" width="32" height="32" style = {{marginLeft: '9%'}}/>
                                                    </Box>
                                                </Box> 
                                                <Box className = 'block-info'>
                                                    <Typography style={{fontSize: '38px',fontFamily: "'Marck Script', cursive", color: 'rgb(75, 157, 170)'}}> 
                                                        {rinfo.title}
                                                    </Typography>
                                                </Box>
                                                <Box className = 'block-revinput'>
                                                    <TextFieldName 
                                                        inputRef = {this.nameValueRef} size="small" variant="outlined" 
                                                        label = "ФИО *" 
                                                        placeholder = "Пушкин Александр Сергеевич"
                                                        margin="normal"
                                                        InputLabelProps={{
                                                            className: classes.dialogText
                                                        }}
                                                        InputProps={{
                                                            className: classes.dialogText
                                                        }}
                                                        inputProps = {{
                                                            className: classes.dialogText
                                                        }}
                                                    />
                                                    <br/>
                                                    <TextField3 
                                                        size="small"
                                                        placeholder = "example@example.com"
                                                        InputLabelProps={{
                                                            className: classes.dialogText
                                                        }}
                                                        InputProps={{
                                                            className: classes.dialogText,
                                                        }}
                                                        inputProps = {{
                                                            className: classes.dialogText
                                                        }}
                                                        inputRef = {this.emailValueRef}  variant="outlined" label = "E-Mail" margin="dense"/>
                                                    <TextField3 
                                                        size="small"
                                                        placeholder = "+79991234567"
                                                        InputLabelProps={{
                                                            className: classes.dialogText
                                                        }}
                                                        InputProps={{
                                                            className: classes.dialogText
                                                        }}
                                                        inputProps = {{
                                                            className: classes.dialogText
                                                        }}
                                                        type = "tel" inputRef = {this.phoneValueRef} variant="outlined" label = "Номер телефона *" margin="dense"/>
                                                    <br/>
                                                    <PersonPicker margin="normal"
                                                        select
                                                        size="small"
                                                        label="Места *"
                                                        defaultValue = "1"
                                                        variant="outlined"
                                                        inputRef = {this.personValueRef}
                                                        InputLabelProps={{
                                                            className: classes.dialogText
                                                        }}
                                                        InputProps={{
                                                            className: classes.dialogText
                                                        }}
                                                        inputProps = {{
                                                            className: classes.dialogText
                                                        }}
                                                    >
                                                        {getMaxPerson(rinfo.max_aperson)}
                                                    </PersonPicker>
                                                    <PersonPicker margin="normal"
                                                        select
                                                        size="small"
                                                        label="Доп. места"
                                                        defaultValue = "0"
                                                        variant="outlined"
                                                        inputRef = {this.m_personValueRef} 
                                                        InputLabelProps={{
                                                            className: classes.dialogText
                                                        }}
                                                        InputProps={{
                                                            className: classes.dialogText
                                                        }}
                                                        inputProps = {{
                                                            className: classes.dialogText
                                                        }}
                                                    >
                                                        {getAMaxPerson(rinfo.max_aperson)}
                                                    </PersonPicker>
                                                    <br/>
                                                    <TextField2
                                                        inputRef = {this.arrival_dateValueRef} 
                                                        id="arrival_date"
                                                        label="Дата заезда *"
                                                        type="date"
                                                        margin="dense"
                                                        size="small"
                                                        style = {{display: 'inline-block',verticalAlign: 'middle',textAlign: 'center'}}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                            className: classes.dialogText
                                                        }}
                                                        InputProps={{
                                                            className: classes.dialogText
                                                        }}
                                                        inputProps = {{
                                                            className: classes.dialogText
                                                        }}
                                                    />
                                                    <TextField2
                                                        inputRef = {this.departure_dateValueRef} 
                                                        id="departure_date"
                                                        label="Дата выезда *"
                                                        type="date"
                                                        margin="dense"
                                                        size="small"
                                                        style = {{display: 'inline-block',verticalAlign: 'middle',textAlign: 'center'}}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                            className: classes.dialogText
                                                        }}
                                                        InputProps={{
                                                            className: classes.dialogText
                                                        }}
                                                        inputProps = {{
                                                            className: classes.dialogText
                                                        }}
                                                    />
                                                    <br/>
                                                    <TextField4 
                                                    multiline ={true} rows={6} inputRef = {this.descriptionValueRef} label = "Коментарий к бронированию" margin="normal" variant="outlined"
                                                    InputLabelProps={{
                                                        className: classes.dialogText
                                                    }}
                                                    InputProps={{
                                                        className: classes.dialogText
                                                    }}/>
                                                    <Typography variant="subtitle2" style = {{fontFamily: "'Comfortaa', cursive",fontSize: '14px'}}>
                                                        <Checkbox
                                                        onChange = {this.handleChangeChecked}
                                                        style = {{color: '#527c82ff'}}
                                                        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                                        />
                                                        Я даю согласие на обработку моих персональных данных
                                                    </Typography>
                                                </Box>
                                                <Box style = {{marginLeft: '14.5%'}}>
                                                    <ColorButton2 id = {rinfo.id} onClick={this.handleClickConfirmRoomReserve}>
                                                        Подтвердить
                                                    </ColorButton2>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                                    </Box>
                                </Fade>
                            </Modal>
                        </Container>                 
                        <Container>
                        <Dialog className = {classes.modalMobile} scroll = 'body' maxWidth = 'sm' open = {dialogRoomReserveState} onClose={this.handleClickRoomReserveDialog} aria-labelledby="customized-dialog-title">
                        {RoomsData.filter(temp => temp.id === roomID).map(temp => (   
                            <Box key = {temp.id}>
                                <DialogTitle id="customized-dialog-title">
                                    <Typography className = {classes.dialogTitle}>
                                        Забронировать {temp.title}
                                    </Typography>
                                </DialogTitle>
                                <DialogContent dividers>
                                    <TextFieldName
                                        size="small" 
                                        inputRef = {this.nameValueRef} variant="outlined" label = "ФИО *" fullWidth margin="dense"
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputProps = {{
                                            className: classes.dialogText
                                        }}
                                    />
                                    <TextField3 
                                        size="small"
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                                className: classes.dialogText
                                        }}
                                        inputProps = {{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.emailValueRef}  variant="outlined" label = "E-Mail" fullWidth margin="dense"
                                    />
                                    <TextField3 
                                        size="small"
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputProps = {{
                                            className: classes.dialogText
                                        }}
                                        type = "tel" inputRef = {this.phoneValueRef} variant="outlined" label = "Номер телефона *" fullWidth margin="dense"
                                    />
                                    <br/>
                                    <PersonPicker margin="dense"
                                        id="standard-select-currency"
                                        select
                                        size="small"
                                        label="Места *"
                                        variant="outlined"
                                        defaultValue = "1"
                                        inputRef = {this.personValueRef}
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputProps = {{
                                            className: classes.dialogText
                                        }}
                                    >
                                        {getMaxPerson(temp.max_person)}
                                    </PersonPicker>

                                    <PersonPicker margin="dense"
                                        id="standard-select-currency"
                                        select
                                        size="small"
                                        variant="outlined"
                                        label="Доп. места"
                                        defaultValue = "0"
                                        inputRef = {this.m_personValueRef} 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputProps = {{
                                            className: classes.dialogText
                                        }}
                                    >
                                        {getAMaxPerson(temp.max_aperson)}
                                    </PersonPicker>
                                    <br/>
                                    <TextField2
                                        inputRef = {this.arrival_dateValueRef} 
                                        id="arrival_date"
                                        label="Дата заезда *"
                                        type="date"
                                        size="small"
                                        style = {{paddingLeft: '0px',display: 'inline-block',verticalAlign: 'middle'}}
                                        InputLabelProps={{
                                            shrink: true,
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputProps = {{
                                            className: classes.dialogText
                                        }}
                                    />
                                    <TextField2
                                        inputRef = {this.departure_dateValueRef} 
                                        id="departure_date"
                                        label="Дата выезда *"
                                        type="date"
                                        size="small"
                                        style = {{paddingLeft: '75px',display: 'inline-block',verticalAlign: 'middle'}}
                                        InputLabelProps={{
                                            shrink: true,
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputProps = {{
                                            className: classes.dialogText
                                        }}
                                    />
                                    <TextField4 
                                    InputLabelProps={{
                                        className: classes.dialogText
                                    }}
                                    InputProps={{
                                        className: classes.dialogText
                                    }}
                                    inputProps = {{
                                        className: classes.dialogText
                                    }}
                                    multiline ={true} rows={6} inputRef = {this.descriptionValueRef} label = "Коментарий к заказу" fullWidth margin="dense" variant="outlined"/>
                                    <DialogContentText variant="subtitle2" style = {{fontFamily: "'Comfortaa', cursive",fontSize: '14px'}}>
                                        <Checkbox
                                            onChange = {this.handleChangeChecked}
                                            style = {{color: '#527c82ff'}}
                                            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                        />
                                        Я даю согласие на обработку моих персональных данных
                                    </DialogContentText>
                                    <DialogActions>
                                        <Button onClick = {this.handleClickConfirmRoomReserve} className = {classes.btn_stl}>Подтвердить</Button>
                                        <Button onClick = {this.handleClickRoomReserveDialog} className = {classes.btn_stl}>Закрыть</Button>
                                    </DialogActions>
                                </DialogContent>
                            </Box>
                            ))}
                        </Dialog>
                    </Container>
                    <Container>
                        <Snackbar open={alertReserveError} autoHideDuration={3000} onClose={this.handleAlertClose}>
                            <Alert onClose={this.handleAlertClose} severity="error" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                Ошибка. Повторите попытку чуть позже.
                            </Alert>
                        </Snackbar>
                        <Snackbar open={alertReserveSuccess} autoHideDuration={5000} onClose={this.handleAlertClose}>
                            <Alert onClose={this.handleAlertClose} severity="success" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                Вы успешно оставили заявку на бронирование номера. 
                                <br/>
                                Ожидайте звонка для подтверждения брони.
                            </Alert>
                        </Snackbar>
                        <Snackbar open={alertNoFullError} autoHideDuration={3200} onClose={this.handleAlertClose}>
                            <Alert onClose={this.handleAlertClose} severity="warning" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                Необходимо заполнить все обязательные поля*.
                            </Alert>
                        </Snackbar>
                        <Snackbar open={alertConfrimWarning} autoHideDuration={3100} onClose={this.handleAlertClose}>
                            <Alert onClose={this.handleAlertClose} severity="warning" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                Подтвердите своё согласие на обработку персональных данных.
                            </Alert>
                        </Snackbar>
                    </Container>
                </Box>
            )
        }
    }     
}

export default withStyles(useStyles)(RoomInfo);
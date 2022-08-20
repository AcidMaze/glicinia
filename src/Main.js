import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Typography, Container, Box, Button, TextField, MenuItem,
        Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid} from '@material-ui/core';
import Rooms from './Rooms';
import News from './News';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import Skeleton from '@material-ui/lab/Skeleton';
import RoomRender from './RoomRender';

const mediaQueries = {
	phone: '@media only screen and (min-width: 280px) and (max-width: 600px)',
    tablet: '@media only screen and (min-width: 768px) and (max-width: 1280px)',
    iphone4_5: '@media only screen and (-webkit-min-device-pixel-ratio : 1.5) and (max-width: 320px)'
}

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        flexWrap: 'wrap',
        display: 'flex'
    },
    GridSt:{
        margin: '0.9em 0.9em',
        [mediaQueries.iphone4_5]: {
            margin: '0.6em 0.3em'
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
        position: 'relative',
        [mediaQueries.phone]: {
            display:'block'
        }
    },
    mainPictureTablet:{
        display:'none',
        width: '100%',
        position: 'relative',
        [mediaQueries.tablet]: {
            display:'block'
        }
    },
    stText_1:{
        color: '#ffffff', 
        fontFamily: "'Montserrat Alternates', sans-serif", 
        fontWeight: '400',
        fontSize:'15.5px',
        textTransform: 'uppercase',
        wordSpacing: '2px',
        [mediaQueries.phone]: {
            fontSize: '14px',
        },
        [mediaQueries.tablet]: {
            fontSize: '13px',
        },
    },
    stText_2:{
        color: '#ffffff', 
        fontFamily: "'Marck Script', cursive", 
        fontSize:'85px',
        textAlign: 'left',
        lineHeight: '50px',
        [mediaQueries.phone]: {
            fontSize: '60px',
            textAlign: 'left',
            lineHeight: '45px',
            [mediaQueries.iphone4_5]: {
                fontSize: '58px',
            },
        },
        [mediaQueries.tablet]: {
            fontSize: '75px',
            textAlign: 'left',
            lineHeight: '50px'
        }
    },
    stText_3:{
        color: '#000000', 
        fontFamily: "'Montserrat Alternates', sans-serif", 
        fontWeight: '400',
        fontSize:'15px',
        wordSpacing: '2px',
        [mediaQueries.phone]: {
            fontSize: '14px',
        }
    },
    stText_4:{
        color: 'rgb(75, 157, 170)', 
        fontFamily: "'Marck Script', cursive", 
        fontSize:'62px',
        textAlign: 'center',
        [mediaQueries.phone]: {
            fontSize: '40px',
            paddingLeft: '0',
            [mediaQueries.iphone4_5]: {
                fontSize: '38px',
            },
        },
        [mediaQueries.tablet]: {
            fontSize: '52px',
            paddingLeft: '0',
        }
    },
    stText_5:{
        textAlign: 'left',
        paddingLeft: '120px',
        paddingBottom: '60px',
        [mediaQueries.phone]: {
            paddingLeft: '0',
            textAlign: 'center',
        }
    },
    stText_6:{
        fontSize: '23px',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '21px'
        }
    },
    maintext:{
        fontSize: '60px',
        position: 'relative',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '32.5px'
        }
    },
    secondtext:{
        color: '#000000', 
        fontSize: '16px',
        padding: '10px',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '14px',
        }
    }, 
    zagtext:{
        fontSize: '39px',
        textAlign: 'center',
        paddingTop: '3em',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: 33,
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
    moreBtn:{
        postiton:'relative',
        color: 'rgba(192, 27, 233,1.0)',
        textTransform: 'none',
        textDecoration: 'none',
        textAlign: 'center',
        fontFamily: "'Comfortaa', cursive",
        fontSize: '14.5px',
        '&:hover': {
            color: 'rgba(192, 27, 233,0.7)',
            cursor: 'pointer'
        },
        [mediaQueries.phone]: {
            fontSize: '13.5px'
        }
    },
    dialogTitle:{
        fontSize: '22px',
        fontFamily: "'Comfortaa', cursive",
        textAlign: 'center',
        [mediaQueries.phone]: {
            fontSize: '18px',
        }
    }
});

const MainImages= [
    {
        img:'/image/fasad/3.jpg',
    },
    {
        img:'/image/fasad/2.jpg', 
    },
    {
        img:'/image/fasad/1.jpg',
    },
    {
        img:'/image/fasad/4.jpg',
    },
    {
        img:'/image/fasad/5.jpg',
    },
    {
        img:'/image/fasad/6.jpg',
    },
    {
        img:'/image/fasad/7.jpg',
    }
]

const TextField2 = withStyles({
    root: {
        '& .MuiInput-underline': {
            '&:after':{
                borderBottomColor: "#ffffff",
                
            },
            '&:before':{
                display: "none !important",
            },
        },
        '& .MuiSelect-icon': {
            color: "#ffffff"
        },
        '& ::-webkit-calendar-picker-indicator':{
            filter: 'invert(100%)'
        }
    },
})(TextField);



const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('rgb(192, 27, 233)'),
        textTransform: 'none',
        fontFamily: "'Comfortaa', cursive",
        fontSize: '23px',
        postion: 'absolute',
        wordSpacing: '4px',
        backgroundColor: 'rgb(192, 27, 233)',
        paddingLeft: '46px',
        paddingRight: '46px',
        paddingTop: '10px',
        paddingBottom: '8px',
        borderRadius: '65px',
        [mediaQueries.phone]: {
            fontSize: '18.5px',
            paddingLeft: '23px',
            paddingRight: '23px',
            paddingTop: '10px',
            paddingBottom: '8px',
        },
        '&:hover': {
            backgroundColor: '#ffff',
            color: 'rgb(192, 27, 233)',
        },
    },
}))(Button);


const ColorButton2 = withStyles((theme) => ({
    root: {
        color: 'rgb(40, 118, 177)',
        textTransform: 'uppercase',
        fontFamily: "'Comfortaa', cursive",
        fontSize: '16.5px',
        postion: 'relative',
        wordSpacing: '3px',
        backgroundColor: 'rgb(255, 255, 255)',
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingTop: '11px',
        paddingBottom: '8px',
        borderRadius: '65px',
        textAlign: 'center',
        [mediaQueries.phone]: {
            fontSize: '15px',
            paddingLeft: '23px',
            paddingRight: '23px',
            paddingTop: '10px',
            paddingBottom: '8px',
        },
        '&:hover': {
            backgroundColor: 'rgb(40, 118, 177)',
            color: theme.palette.getContrastText('rgb(40, 118, 177)'),
        },
    },
}))(Button);


const ColorButton3 = withStyles((theme) => ({
    root: {
        postiton:'relative',
        color: theme.palette.getContrastText('rgb(192, 27, 233)'),
        textTransform: 'none',
        textAlign: 'center',
        fontFamily: "'Comfortaa', cursive",
        fontWeight: '500',
        fontSize: '15.5px',
        backgroundColor: 'rgb(192, 27, 233)',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '9px',
        paddingBottom: '7px',
        borderRadius: '65px',
        '&:hover': {
            backgroundColor: 'rgb(200, 90, 233)',
        },
        [mediaQueries.phone]: {
            fontSize: '14px'
        }
    },
}))(Button);

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            isLoaded: false,
            info_1:false,
            info_2:false,
            info_3:false,
            info_4:false,
            RoomsData: [],
            dialogSearchedRoom: false,
            person: -1,
            child: -1,
            arrival_date: -1,
            departure_date: -1

        };
        this.personValueRef = React.createRef();
        this.childValueRef = React.createRef();
        this.arrival_dateValueRef = React.createRef();
        this.departure_dateValueRef = React.createRef();
        this.handleShowInfo = this.handleShowInfo.bind(this);
        this.handleSearchedRoomDialog = this.handleSearchedRoomDialog.bind(this);
    }
    handleSearchedRoomDialog(){
        this.setState(state => ({
            dialogSearchedRoom: !state.dialogSearchedRoom,
        }));
    }
    componentDidMount() {
        this.personValueRef.current = 1;
        this.childValueRef.current = 0;
        //--------------Загрузка инфы-----------
        fetch('http://backend.com/load_rooms.php')
        //fetch('http://a0624502.xsph.ru/modules/load_rooms.php')
        .then(response => response.json())
        .then(
            (response) =>{
                this.setState({
                    RoomsData:response,
                    isLoaded: true
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

    handleShowInfo(event){
        const id = event.currentTarget.id;
        if(id === '1')
        {
            this.setState(state => ({
                info_1: !state.info_1
            }));
        }
        else if(id === '2')
        {
            this.setState(state => ({
                info_2: !state.info_2
            }));
        }
        else if(id === '3')
        {
            this.setState(state => ({
                info_3: !state.info_3
            }));
        }
        else if(id === '4')
        {
            this.setState(state => ({
                info_4: !state.info_4
            }));
        }
    }
    render() {
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
            speed: 1600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            swipeToSlide: true,
            autoplaySpeed: 8000,
            nextArrow: <PrevArrow />,
            prevArrow: <NextArrow />,

        };
        const settings2 = {
            dots: true,
            lazyLoad: true,
            speed: 1400,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            swipeToSlide: true,
            autoplaySpeed: 8000,
            nextArrow: <PrevArrow />,
            prevArrow: <NextArrow />,
        };

        const {classes} = this.props;
        const { dialogSearchedRoom, isLoaded, error, RoomsData } = this.state;
        if(error)
        {
            return <p>{error}</p>
        } 
        else if (!isLoaded) 
        {
            return (
                <>
                    <Container maxWidth = 'xl' disableGutters = {true}>
                        <Box width = '100%' style = {{position: 'relative'}}>
                            <Skeleton style = {{margin: '0 auto' }} variant="rect" width="100%" height='520px' />
                        </Box>
                    </Container>
                </>
            );
        }
        else 
        {
            return (
                <>
                    <Box className = {classes.root}>
                            <Container maxWidth = 'xl' disableGutters = {true}>
                                <Box className = {classes.mainPicturePC} width = '100%'>
                                    <Slider {...settings}>
                                        {MainImages.map((item, index) => {
                                            return (
                                                <Box key = {index} className = 'container-glicinia'>
                                                    <img style = {{filter: 'brightness(75%)'}} alt = 'Глициния' src={item.img} />
                                                </Box>
                                            );
                                        })}
                                    </Slider>
                                    <Box className = 'block-text-2' style = {{
                                        textAlign:'left', 
                                        top: '184px', 
                                        left: '152px'
                                        }}>
                                        <Typography className = {classes.stText_2}>
                                            Эталон 
                                            <br/>
                                            семейного отдыха
                                        </Typography>
                                    </Box>
                                    <Box className = 'block-seacrh-room' style = {{top: '337px', left: '152px'}}>
                                        <Typography className = {classes.stText_1} style = {{padding: '8px', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px', display: 'inline-block',verticalAlign: 'middle',background: 'rgba(255, 255, 255, 0.2)'}}>
                                            Заезд
                                        </Typography>
                                        <TextField2
                                            inputRef = {this.arrival_dateValueRef} 
                                            id="arrival_date"
                                            type="date"
                                            style = {{paddingLeft: '10px',display: 'inline-block',verticalAlign: 'middle'}}
                                            InputLabelProps={{
                                                shrink: false,
                                                className: classes.stText_1,
                                            }}
                                            inputProps = {{
                                                className: classes.stText_1,
            
                                            }}
                                        />
                                    </Box>
                                    <Box className = 'block-seacrh-room' style = {{ top: '337px', left: '432px'}}>
                                        <Typography className = {classes.stText_1} style = {{padding: '8px', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px', display: 'inline-block',verticalAlign: 'middle',background: 'rgba(255, 255, 255, 0.2)'}}>
                                            Выезд
                                        </Typography>
                                        <TextField2
                                            inputRef = {this.departure_dateValueRef} 
                                            id="arrival_date"
                                            type="date"
                                            style = {{paddingLeft: '10px',display: 'inline-block',verticalAlign: 'middle'}}
                                            InputLabelProps={{
                                                shrink: true,
                                                className: classes.stText_1
                                            }}
                                            inputProps = {{
                                                className: classes.stText_1
                                            }}
                                        />
                                    </Box>
                                    <Box className = 'block-seacrh-room' style = {{top: '337px', left: '712px', width: '171px'}}>
                                        <Typography className = {classes.stText_1} style = {{padding: '8px', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px', display: 'inline-block',verticalAlign: 'middle',background: 'rgba(255, 255, 255, 0.2)'}}>
                                            Взрослые
                                        </Typography>
                                        <TextField2
                                            inputRef = {this.personValueRef}
                                            select
                                            defaultValue = "1"
                                            style = {{paddingLeft: '5px',display: 'inline-block',verticalAlign: 'middle', textAlign: 'center',fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}}
                                            InputLabelProps={{
                                                className: classes.stText_1,
                                            }}
                                            inputProps = {{
                                                className: classes.stText_1
                                            }}
                                        >
                                            <MenuItem style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}} value={1}>{1}</MenuItem>
                                            <MenuItem style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}} value={2}>{2}</MenuItem>
                                            <MenuItem style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}} value={3}>{3}</MenuItem>
                                        </TextField2>
                                    </Box>
                                    <Box className = 'block-seacrh-room' style = {{top: '337px', left: '903px', width: '120px'}}>
                                        <Typography className = {classes.stText_1} style = {{padding: '8px', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px', display: 'inline-block',verticalAlign: 'middle',background: 'rgba(255, 255, 255, 0.2)'}}>
                                            Доп.
                                        </Typography>
                                        <TextField2
                                            inputRef = {this.childValueRef}
                                            select
                                            defaultValue = "0"
                                            style = {{paddingLeft: '5px',display: 'inline-block',verticalAlign: 'middle', textAlign: 'center',fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}}
                                            InputLabelProps={{
                                                className: classes.stText_1
                                            }}
                                            inputProps = {{
                                                className: classes.stText_1
                                            }}
                                        >
                                            <MenuItem style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}} value={0}>{0}</MenuItem>
                                            <MenuItem style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}} value={1}>{1}</MenuItem>
                                            <MenuItem style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}} value={2}>{2}</MenuItem>
                                        </TextField2>
                                    </Box>
                                    <Box className = 'block-button-2' style = {{textAlign:'left', top: '337px', left: '1043px'}}>
                                        <ColorButton3 onClick = {this.handleSearchedRoomDialog}>
                                            Найти номер
                                        </ColorButton3>
                                    </Box>
                                </Box>
                                <Box className = {classes.mainPictureTablet}>
                                    <Slider {...settings2}>
                                        {MainImages.map((item, index) => {
                                            return (
                                                <Box key = {index} className = 'container-glicinia'>
                                                    <img style = {{filter: 'brightness(75%)'}} alt = 'Глициния' src={item.img} />
                                                </Box>
                                            );
                                        })}
                                    </Slider>
                                    <Box className = 'block-text-2' style = {{
                                        textAlign:'left', 
                                        top: '190px', 
                                        left: '15px'
                                        }}>
                                        <Typography className = {classes.stText_2}>
                                            Эталон <br/>семейного отдыха
                                        </Typography>
                                    </Box>
                                    <Box className = 'block-seacrh-room' style = {{top: '327px', left: '5px', width: '230px'}}>
                                        <Typography className = {classes.stText_1} style = {{padding: '8px', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px', display: 'inline-block',verticalAlign: 'middle',background: 'rgba(255, 255, 255, 0.2)'}}>
                                            Заезд
                                        </Typography>
                                        <TextField2
                                            inputRef = {this.arrival_dateValueRef} 
                                            id="arrival_date"
                                            type="date"
                                            style = {{paddingLeft: '10px',display: 'inline-block',verticalAlign: 'middle'}}
                                            InputLabelProps={{
                                                shrink: false,
                                                className: classes.stText_1,
                                            }}
                                            inputProps = {{
                                                className: classes.stText_1,
            
                                            }}
                                        />
                                    </Box>
                                    <Box className = 'block-seacrh-room' style = {{ top: '327px', left: '240px', width: '230px'}}>
                                        <Typography className = {classes.stText_1} style = {{padding: '8px', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px', display: 'inline-block',verticalAlign: 'middle',background: 'rgba(255, 255, 255, 0.2)'}}>
                                            Выезд
                                        </Typography>
                                        <TextField2
                                            inputRef = {this.departure_dateValueRef} 
                                            id="arrival_date"
                                            type="date"
                                            style = {{paddingLeft: '10px',display: 'inline-block',verticalAlign: 'middle'}}
                                            InputLabelProps={{
                                                shrink: true,
                                                className: classes.stText_1
                                            }}
                                            inputProps = {{
                                                className: classes.stText_1
                                            }}
                                        />
                                    </Box>
                                    <Box className = 'block-seacrh-room' style = {{top: '327px', left: '475px', width: '161px'}}>
                                        <Typography className = {classes.stText_1} style = {{padding: '8px', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px', display: 'inline-block',verticalAlign: 'middle',background: 'rgba(255, 255, 255, 0.2)'}}>
                                            Взрослые
                                        </Typography>
                                        <TextField2
                                            inputRef = {this.personValueRef}
                                            select
                                            defaultValue = "1"
                                            style = {{paddingLeft: '5px',display: 'inline-block',verticalAlign: 'middle', textAlign: 'center',fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}}
                                            InputLabelProps={{
                                                className: classes.stText_1,
                                            }}
                                            inputProps = {{
                                                className: classes.stText_1
                                            }}
                                        >
                                            <MenuItem style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}} value={1}>{1}</MenuItem>
                                            <MenuItem style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}} value={2}>{2}</MenuItem>
                                            <MenuItem style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}} value={3}>{3}</MenuItem>
                                        </TextField2>
                                    </Box>
                                    <Box className = 'block-seacrh-room' style = {{top: '327px', left: '640px', width: '120px'}}>
                                        <Typography className = {classes.stText_1} style = {{padding: '8px', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px', display: 'inline-block',verticalAlign: 'middle',background: 'rgba(255, 255, 255, 0.2)'}}>
                                            Доп.
                                        </Typography>
                                        <TextField2
                                            inputRef = {this.childValueRef}
                                            select
                                            defaultValue = "0"
                                            style = {{paddingLeft: '5px',display: 'inline-block',verticalAlign: 'middle', textAlign: 'center',fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}}
                                            InputLabelProps={{
                                                className: classes.stText_1
                                            }}
                                            inputProps = {{
                                                className: classes.stText_1
                                            }}
                                        >
                                            <MenuItem style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}} value={0}>{0}</MenuItem>
                                            <MenuItem style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}} value={1}>{1}</MenuItem>
                                            <MenuItem style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}} value={2}>{2}</MenuItem>
                                        </TextField2>
                                    </Box>
                                    <Box className = 'block-button-2' style = {{textAlign:'left', top: '380px', left: '597px'}}>
                                        <ColorButton3 onClick = {this.handleSearchedRoomDialog}>
                                            Найти номер
                                        </ColorButton3>
                                    </Box>
                                </Box>
                                <Box className = {classes.mainPictureMobile}>
                                    <Slider {...settings2}>
                                        {MainImages.map((item, index) => {
                                            return (
                                                <Box key = {index} className = 'container-glicinia'>
                                                    <img style = {{filter: 'brightness(75%)'}} alt = 'Глициния' src={item.img} />
                                                </Box>
                                            );
                                        })}
                                    </Slider>
                                    <Box className = 'block-text-2' style = {{
                                        textAlign:'left', 
                                        top: '190px', 
                                        left: '15px'
                                        }}>
                                        <Typography className = {classes.stText_2}>
                                            Эталон <br/>семейного отдыха
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box width =  '100%'>
                                    <Typography className = {classes.stText_4} style = {{lineHeight: '30px',marginTop: '60px', marginBottom: '1.5rem'}}>
                                        Номера нашей гостинницы
                                    </Typography>
                                    <Rooms/>
                                    <Typography className = {classes.stText_5}>                    
                                        <a className = 'link-decor3' href = '/roomslist'>Смотреть все номера</a>
                                    </Typography>
                                </Box>
                                <Box width =  '100%'>
                                    <Typography className = {classes.stText_4} style = {{lineHeight: '30px',marginTop: '5px', marginBottom: '2.5rem'}}>
                                        Акции и последние новости
                                    </Typography>
                                    <News/>
                                    <Typography className = {classes.stText_5}>                    
                                        <a className = 'link-decor3' href = '/'>Смотреть все акции</a>
                                    </Typography>
                                </Box>
                                <Box width =  '100%'>
                                    <Box className  = 'container-info-glicinia'>
                                        <img loading = 'lazy' width = '100%' alt  = 'Об отеле' src = '/image/fasad/3.jpg'/>
                                        <Box className = 'block-text-1'>
                                            <Typography className = {classes.maintext}>
                                                Об отеле
                                            </Typography>
                                        </Box> 
                                        <Box className = 'block-button-1'>
                                            <ColorButton id = '1' onClick = {this.handleShowInfo}>
                                                Подробнее
                                            </ColorButton>
                                        </Box>
                                        <Box>
                                            {this.state.info_1 ? 
                                                (
                                                    <Box style = {{textAlign: 'center'}}>
                                                        <span className ="block-info-1" style = {{display:'block'}}>
                                                            <Typography className = {classes.secondtext}>
                                                            Наш отель принимает гостей с 2008 года. К услугам наших дорогих гостей — 17 комфортных номеров, с которых открывается прекрасный вид на залив. Главное преимущество нашего отеля — уют семейного отдыха, высокие стандарты обслуживания и внимание к каждому гостю.
                                                            <br/>
                                                            Мы заботимся не только об отдыхе, но и о развлечениях гостей. К вашим услугам — бассейн во дворике отеля, русская баня, хамам, кальянная. В кафе и на открытой террасе отеля «Глициния» можно организовать и провести торжества любого формата и масштаба. В кафе «Глициния» представлены блюда местной и европейской кухонь.
                                                            <br/>
                                                            В шаговой доступности от отеля — пляжи, Картинная галерея имени И.К. Айвазовского, Феодосийский музей древностей, дом-музей Александра Грина, Дача Стамболи. От отеля легко добраться до загородных пляжей.
                                                            <br/>
                                                            Гостевой дом «Глициния» неоднократно отмечена престижными наградами. В 2010 году наша гостиница получила свой первый диплом 3 степени конкурса «Крымская жемчужина» Министерства курорта и туризма Крыма. Каждый год, начиная с 2010 года, «Глициния» является победителем потребительского спроса по итогам опроса из 597 здравниц и отелей Крыма.
                                                            </Typography>
                                                            {/* <img style = {{margin: '0 auto'}} loading = 'lazy' alt  = 'Достижения' src = '/image/diploms.png'/> */}
                                                        </span>
                                                        <ColorButton2 id = '1' onClick = {this.handleShowInfo}>
                                                            Свернуть
                                                        </ColorButton2>
                                                    </Box>
                                                ) 
                                                : 
                                                (
                                                    <span className="block-info-1" style = {{display:'none'}}/>
                                                )
                                            }
                                        </Box>
                                    </Box>
                                        <Box className  = 'container-info-glicinia'>
                                            <img loading = 'lazy' width = '100%' alt  = 'Кафе' src = '/image/cafe/img/2.jpg'/>
                                            <Box className = 'block-text-1'>
                                                <Typography className = {classes.maintext}>
                                                    Кафе
                                                </Typography>
                                            </Box> 
                                            <Box className = 'block-button-1'>
                                                <ColorButton id = '2' onClick = {this.handleShowInfo}>
                                                    Подробнее
                                                </ColorButton>
                                            </Box>
                                            <Box>
                                                {this.state.info_2 ? 
                                                    (
                                                        <Box style = {{margin: '1%', textAlign: 'center'}}>
                                                            <span className ="block-info-1" style = {{display:'block'}}>
                                                                <Typography className = {classes.secondtext}>
                                                                    Это новый формат отдыха для тех, кто ценит спокойствие уют, и европейский уровень обслуживания. Лаконичный интерьер, удобная мебель, стильное оформление помещения, приятная музыка в зале – все способствует умиротворению клиента, дает возможность по-настоящему отдохнуть.
                                                                    Располагает всеми условиями и для проведения праздничных мероприятий на самом высоком уровне: корпоративных праздников, частных вечеринок, свадеб, выездных церемоний бракосочетания.
                                                                    <br/>
                                                                    Находясь в самом центре набережной это заведение показывает высокий уровень качества при демократичной ценовой политике.
                                                                </Typography>
                                                            </span>
                                                            <ColorButton2 id = '2' onClick = {this.handleShowInfo}>
                                                                Свернуть
                                                            </ColorButton2>
                                                        </Box>
                                                    ) 
                                                    : 
                                                    (
                                                        <span className="block-info-1" style = {{display:'none'}}/>
                                                    )
                                                }
                                            </Box>
                                        </Box>
                                        <Box className  = 'container-info-glicinia'>
                                            <img loading = 'lazy' alt  = 'Терраса' src = '/image/terassa/img/1.jpg'/>
                                            <Box className = 'block-text-1'>
                                                <Typography className = {classes.maintext} style = {{textAlign:'center'}}>
                                                    Терраса
                                                </Typography>
                                            </Box> 
                                            <Box className = 'block-button-1'>
                                                <ColorButton id = '3' onClick = {this.handleShowInfo}>
                                                    Подробнее
                                                </ColorButton>
                                            </Box>
                                            <Box>
                                                {this.state.info_3 ? 
                                                    (
                                                        <Box style = {{margin: '1%', textAlign: 'center'}}>
                                                            <span className ="block-info-1" style = {{display:'block'}}>
                                                                <Typography className = {classes.secondtext}>
                                                                    Приглашаем настоящих романтиков и любителей прекрасного посетить одно из самых красивых мест Феодосии - панорамную террасу. Здесь Вы можете отведать вкусные по-домашнему приготовленные блюда! 
                                                                    <br/>
                                                                    Вас ждут чарующий пейзаж, неповторимая атмосфера и масса приятных впечатлений! Объект уникален своим местом расположения - центр набережной г. Феодосии. Отличается от других объектов наличием панорамной крыши с видом на весь Феодосийский залив. Здесь вы можете увидеть и насладиться течением морской жизни. Можно в любое время дня посидеть полюбоваться панорамой, выпить бокальчик прекрасного крымского вина.
                                                                </Typography>
                                                            </span>
                                                            <ColorButton2 id = '3' onClick = {this.handleShowInfo}>
                                                                Свернуть
                                                            </ColorButton2>
                                                        </Box>
                                                    ) 
                                                    : 
                                                    (
                                                        <span className="block-info-1" style = {{display:'none'}}/>
                                                    )
                                                }
                                            </Box>
                                        </Box>
                                        <Box className  = 'container-info-glicinia'>
                                            <img loading = 'lazy' alt  = 'Банный комплекс' src = '/image/sauna/img/1.jpg'/>
                                            <Box className = 'block-text-1'>
                                                <Typography className = {classes.maintext}>
                                                    Банный комплекс
                                                </Typography>
                                            </Box> 
                                            <Box className = 'block-button-1'>
                                                <ColorButton id = '4' onClick = {this.handleShowInfo}>
                                                    Подробнее
                                                </ColorButton>
                                            </Box>
                                            <Box>
                                                {this.state.info_4 ? 
                                                    (
                                                        <Box style = {{margin: '1%', textAlign: 'center'}}>
                                                            <span className ="block-info-1" style = {{display:'block'}}>
                                                                <Typography className = {classes.secondtext}>
                                                                    В наших банях вы можете отдохнуть от суеты, попариться в русской парной с веничком, ощутить себя турецким султаном или султаншей в турецкой бане.
                                                                    Забыть о проблемах и делах, а также здорово провести день рождения, выходные или праздники.
                                                                </Typography>
                                                            </span>
                                                            <ColorButton2 id = '4' onClick = {this.handleShowInfo}>
                                                                Свернуть
                                                            </ColorButton2>
                                                        </Box>
                                                    ) 
                                                    : 
                                                    (
                                                        <span className="block-info-1" style = {{display:'none'}}/>
                                                    )
                                                }
                                            </Box>
                                        </Box>
                                </Box> 
                                <Container >
                                    <Dialog scroll = 'body' maxWidth = 'md' open = {dialogSearchedRoom} onClose={this.handleSearchedRoomDialog}>
                                        <DialogTitle id = 'customized-dialog-title' className = {classes.dialogTitle}>
                                            <span className = {classes.dialogTitle}>
                                                Подборка номеров по вашим предпочтениям
                                            </span>
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                <Grid container spacing = {2}>
                                                    {RoomsData.filter(temp => 
                                                        temp.max_person >= this.personValueRef.current.value &&
                                                        temp.max_aperson >= this.childValueRef.current.value).map(props => ( 
                                                            <Grid item xs = {6}>
                                                                <RoomRender {...props}/>
                                                            </Grid>
                                                        ))}
                                                </Grid>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button className = {classes.btn_stl} onClick = {this.handleSearchedRoomDialog}>Закрыть</Button>
                                        </DialogActions>
                                    </Dialog>
                                </Container>
                            </Container> 
                    </Box> 
                </>     
            );
        }
    }
}

export default withStyles(useStyles)(Main);
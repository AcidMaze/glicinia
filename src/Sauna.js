import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Button, Typography, Container, Snackbar,  Dialog, DialogTitle, DialogContent, 
        DialogContentText, TextField, DialogActions, Checkbox, Grid, Box} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-image-shadow/assets/index.css';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from "@material-ui/core/TableCell";
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

const mediaQueries = {
	phone: '@media only screen and (min-width: 280px) and (max-width: 480px)',
    tablet: '@media only screen and (min-width: 481px) and (max-width: 1024px)',
    iphone4: '@media only screen and (-webkit-min-device-pixel-ratio : 1.5), only screen and (min-device-pixel-ratio : 1.5)'
}

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        flexWrap: 'wrap',
        display: 'flex'
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
        },
        [mediaQueries.tablet]: {
            display:'block'
        }
    },
    maintext:{
        color: '#000000', 
        fontSize: '38px',
        fontFamily: "'Comfortaa', cursive",
        textAlign: 'center',
        [mediaQueries.phone]: {
            fontSize: '30px',
        }
    },
    secondtext:{
        color: '#000000', 
        fontSize: '16px',
        textAlign: 'center',
        fontFamily: "'Montserrat Alternates', sans-serif",
        fontWeight: '400',
        [mediaQueries.phone]: {
            fontSize: '14px',
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
    Description:{
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
    Description2:{
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
    dialogText:{
        fontSize: '16px',
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

const TableCell = withStyles({
    root: {
      borderBottom: "none",
    }
})(MuiTableCell);

const ColorButton = withStyles((theme) => ({
    root: {
        postiton:'relative',
        color: theme.palette.getContrastText('rgb(70, 135, 180)'),
        textTransform: 'none',
        fontFamily: "'Comfortaa', cursive",
        fontWeight: '500',
        fontSize: '16px',
        backgroundColor: 'rgb(70, 135, 180)',
        paddingLeft: '17px',
        paddingRight: '17px',
        paddingTop: '12px',
        paddingBottom: '10px',
        borderRadius: '65px',
        '&:hover': {
            backgroundColor: 'rgb(125, 160, 190)',
        },
    },
}))(Button);

const TextField2 = withStyles({
    root: {
        '& .MuiInput-underline': {
            '&:after':{
                borderBottomColor: '#527c82ff',
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
        '& .MuiInput-underline': {
            '&:after':{
                borderBottomColor: '#527c82ff',
            },
            '&:before':{
                display: "none !important",
            },
        }, 
        '& label.Mui-focused': {
            color: '#527c82ff',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgb(245,245,245)',
                borderRadius: '60px',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(82, 124, 130, 0.7)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#527c82ff',
            },
        }
    },
})(TextField);

const TextField3 = withStyles({
    root: {
        backgroundColor: 'rgb(245,245,245)',
        borderRadius: '60px',
        '& .MuiInput-underline': {
            '&:after':{
                borderBottomColor: '#527c82ff',
            },
            '&:before':{
                display: "none !important",
            },
        }, 
        '& label.Mui-focused': {
            color: '#527c82ff',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgb(245,245,245)',
                borderRadius: '60px',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(82, 124, 130, 0.7)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#527c82ff',
            },
        }
    },
})(TextField);


const TextField4 = withStyles({
    root: {
        backgroundColor: 'rgb(245,245,245)',
        borderRadius: '15px',
        '& .MuiInput-underline': {
            '&:after':{
                borderBottomColor: '#527c82ff',
            },
            '&:before':{
                display: "none !important",
            },
        }, 
        '& label.Mui-focused': {
            color: '#527c82ff',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgb(245,245,245)',
                borderRadius: '15px',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(82, 124, 130, 0.7)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#527c82ff',
            },
        }
    },
})(TextField);

const MainImages= [
    {
        img:'/image/sauna/img/1.jpg'
    },
    {
        img:'/image/sauna/img/2.jpg'
    },
    {
        img:'/image/sauna/img/3.jpg'
    },
    {
        img:'/image/sauna/img/4.jpg'
    },
    {
        img:'/image/sauna/img/5.jpg'
    },
    {
        img:'/image/sauna/img/7.jpg'
    },
    {
        img:'/image/sauna/img/8.jpg'
    },
    {
        img:'/image/sauna/img/9.jpg'
    },
];



export class Sauna extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogImagestate: false, 
            dialogSaunaReserveState: false,
            alertNoFullError: false,
            alertReserveError: false,
            alertReserveSuccess: false,
            alertConfrimWarning: false,
            checked: false,
            Xamam: false,
            Rus: false,
            isLoadedPage: false
        };
        this.nameValueRef = React.createRef();
        this.emailValueRef = React.createRef();
        this.phoneValueRef = React.createRef();
        this.personValueRef = React.createRef();
        this.dateValueRef = React.createRef();
        this.timeValueRef = React.createRef();
        this.hourValueRef = React.createRef();
        this.descriptionValueRef = React.createRef();
        
        this.RefScrollContainer = React.createRef();
        
        this.handleChangeXamam = this.handleChangeXamam.bind(this);
        this.handleChangeRus = this.handleChangeRus.bind(this);

        this.handleChangeChecked= this.handleChangeChecked.bind(this);
        this.handleClickImageDialog = this.handleClickImageDialog.bind(this);
        this.handleClickSaunaReserveDialog = this.handleClickSaunaReserveDialog.bind(this);
        this.handleClickConfirmSaunaReserve = this.handleClickConfirmSaunaReserve.bind(this);
        this.handleAlertShow = this.handleAlertShow.bind(this);
        this.handleAlertClose = this.handleAlertClose.bind(this);
    }
    componentDidMount(){
        window.addEventListener('DOMContentLoaded', (event) => {
            this.setState({
                isLoadedPage: true
            });
        });
    }
    handleChangeXamam(event){
        this.setState(() => ({
            Xamam: event.target.checked
        }));
    }
    handleChangeRus(event){
        this.setState(() => ({
            Rus: event.target.checked
        }));
    }
    handleChangeChecked(event){
        this.setState(() => ({
            checked: event.target.checked
        }));
    }
    handleClickImageDialog(){
        this.setState(state => ({
            dialogImagestate: !state.dialogImagestate,
        }));
    }
    handleClickSaunaReserveDialog(event){
        this.setState(state => ({
            dialogSaunaReserveState: !state.dialogSaunaReserveState,
        }));
    }
    handleClickConfirmSaunaReserve(){

        if(this.state.checked === true)
        { 
            var name = this.nameValueRef.current.value;
            var phone = this.phoneValueRef.current.value;
            var email = this.emailValueRef.current.value;
            var person = this.personValueRef.current.value;
            var date = this.dateValueRef.current.value;
            var time = this.timeValueRef.current.value;
            var hour = this.hourValueRef.current.value;
            var xammam_sauna = this.state.Xamam;
            var russian_sauna = this.state.Rus;
            var coment = this.descriptionValueRef.current.value;
            var orderData = {
                name: name,
                phone: phone,
                email: email,
                person: person,
                xammam_sauna: xammam_sauna,
                russian_sauna: russian_sauna,
                date: date,
                time: time,
                hour: hour,
                coment:coment
            };
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            };
            //fetch('http://backend.com/reserv_sauna.php', requestOptions)
            fetch('http://a0624502.xsph.ru/modules/reserv_sauna.php', requestOptions)
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

                        alert('Неизвестный ответ с сервера. Стадия: Бронирование сауны.');
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
                    dialogSaunaReserveState: !state.dialogSaunaReserveState,
                    alertReserveError: true
                }));
                break;
            }
            case 2:{// Всё ок
                this.setState(state => ({
                    dialogSaunaReserveState: !state.dialogSaunaReserveState,
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
        const {classes} = this.props;
        const { dialogSaunaReserveState, isLoadedPage,
                alertNoFullError, alertReserveError, alertReserveSuccess, alertConfrimWarning} = this.state;
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
            autoplaySpeed: 6000,
            nextArrow: <PrevArrow />,
            prevArrow: <NextArrow />,

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
        if (!isLoadedPage) {
            return (
                <>
                        <Box className = {classes.root}>
                            <Container maxWidth = 'xl' disableGutters = {true}>
                                <Box width = '100%' style = {{position: 'relative'}}>
                                    <Skeleton style = {{margin: '0 auto' }} variant="rect" width="100%" height='520px' />
                                </Box>
                                <Box style = {{marginTop: '2%',position: 'relative'}}>
                                    <Box width = '100%' style = {{position: 'relative'}}> 
                                        <Skeleton style = {{margin: '0 auto' }} variant="text" width="90%" height='240px' />
                                        <Skeleton variant="rect" width="100%" height="355px" />
                                        <Skeleton style = {{margin: '0 auto' }} variant="text" width="90%" height='260px' />
                                        <Skeleton style = {{margin: '0 auto' }} variant="rect" width="100%" height='350px' />
                                        <Skeleton style = {{margin: '0 auto' }} variant="text" width="90%" height='240px' />
                                        <Skeleton variant="rect" width="100%" height="700px" />
                                        <Skeleton style = {{margin: '0 auto' }} variant="text" width="90%" height='75px' />
                                    </Box> 
                                    <Box> 
                                        <TableContainer component={Paper} style = {{marginTop:'1em',boxShadow: 'none'}}>
                                            <Table size="medium">
                                                <TableRow style = {{background: 'rgb(245,245,249, 0.8)'}}>
                                                    <TableCell component="th" scope="row">
                                                        <Skeleton style = {{margin: '0 auto' }} variant="rect" width="90%" height='105px' />
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow style = {{background: 'rgba(82, 124, 130, 0.13)'}}>
                                                    <TableCell component="th" scope="row">
                                                        <Skeleton style = {{margin: '0 auto' }} variant="rect" width="90%" height='90px' />
                                                    </TableCell>
                                                </TableRow>
                                            </Table>
                                        </TableContainer>
                                        <Typography>
                                            <Skeleton style = {{margin: '0 auto'}} variant="text" width="90%" height='50px' />
                                        </Typography>
                                    </Box>
                                </Box>
                            </Container>
                        </Box>
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
                                                <img style = {{filter: 'brightness(75%)'}} alt = 'Банный комплекс' src = {item.img} />
                                            </Box>
                                        )
                                    })}
                                </Slider>
                            </Box>
                            <Box className = {classes.mainPictureMobile}>
                                <Slider {...settings2}>
                                    {MainImages.map((item, index) => {
                                        return (
                                            <Box key = {index} className = 'container-glicinia'>
                                                <img style = {{filter: 'brightness(90%)'}} alt = 'Банный комплек' src={item.img} />
                                            </Box>
                                        );
                                    })}
                                </Slider>
                            </Box>
                            <Box width = '100%' style = {{marginTop: '2rem'}}>
                                <Typography className = {classes.maintext}>
                                    Добро пожаловать
                                </Typography>
                            </Box>
                            <Box width = '100%'>
                                <Grid container spacing = {4} align ='center'>
                                    <Grid item xs = {12} sm = {12}>
                                        <Typography className = {classes.secondtext} style = {{width: '75%'}}>
                                            В наших саунах вы можете отдохнуть от суеты, попариться в русской парной с веничком, ощутить себя турецким султаном или султаншей в турецкой бане. Забыть о проблемах и делах, а также здорово провести день рождения, выходные или праздники.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <br/>
                                <Box className="flexboxes">
                                    <img loading = 'lazy' alt = 'Фотография интерьера Сауны' className="block6" src = '/image/sauna/img/1.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография интерьера Сауны' className="block7" src = '/image/sauna/img/8.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография интерьера Сауны' className="block8" src = '/image/sauna/img/6.jpg'/>
                                </Box>
                                <br/>
                            </Box>
                            <Box>
                                <Typography className = {classes.maintext}>
                                    Русская баня на дровах
                                </Typography>
                            </Box>
                            <Box style = {{paddingLeft: '2%',paddingRight: '2%',position: 'relative'}}>
                                <Grid container align ='center'>
                                    <Grid item xs = {12} sm = {12}>
                                        <Typography className = {classes.secondtext} style = {{width: '95%'}}>
                                        Русская баня на дровах, в самых лучших ее традициях. Возможность париться, используя как сухой так и влажный пар.
                                        <br/>
                                        Это национальный феномен, так как одновременно является и постройкой для совершения гигиенических процедур, и исторической традицией, и лечебным средством от большинства болезней.
                                        Так же в бане имеется: бассейн с чистейшей водой и подсветкой, cистема подогрева полов, две душевые кабины  и санузел, отдельная комната отдыха с комфортным диваном, "Ведро-водопад" - с залповым сбросом большого объема холодной воды.
                                        <br/>
                                        <br/>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <img alt = 'Фотография интерьера Кафе' className="block0" src = '/image/sauna/img/3.jpg'/>
                                <Box width = '100%' style = {{marginTop: '1rem'}}>
                                    <Typography className = {classes.maintext}>
                                        Турецкая парная "Хаммам"
                                    </Typography>
                                </Box>
                                <Box style = {{paddingLeft: '2%',paddingRight: '2%',position: 'relative'}}>
                                    <Grid container align ='center'>
                                        <Grid item xs = {12} sm = {12}>
                                            <Typography className = {classes.secondtext} style = {{width: '95%'}} >
                                                Главная отличительная черта хамам – это высокая влажность (80%) и температура 35-55 °C. 
                                                Благодаря этим особенностям турецкая баня имеет минимум противопоказаний к посещению.
                                                Одно из многочисленных преимуществ посещения хамам заключается в том, что особый климат помогает усилить эффект косметических процедур. 
                                                Горячий влажный воздух открывает поры, за счет чего привычные уходовые средства дают лучший результат, чем в домашних условиях. 
                                                Подача пара осуществляется вверх, благодаря чему снижен риск парового ожога.
                                                Так же в бане имеются: банные принадлежности, услуги массажиста, ароматические эфирные масла, напитки, и возможность сделать заказ по меню в кафе с обслуживаниемв бане.
                                                <br/>
                                                <br/>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box className="flexboxes">
                                    <img loading = 'lazy' alt = 'Фотография интерьера Кафе' className="block1" src = '/image/sauna/img/7.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография интерьера Кафе' className="block2" src = '/image/sauna/img/4.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография интерьера Кафе' className="block3" src = '/image/sauna/img/2.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография интерьера Кафе' className="block4" src = '/image/sauna/img/5.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография интерьера Кафе' className="block5" src = '/image/sauna/img/1.jpg'/>
                                </Box>
                            </Box>
                            <Box width = '100%' style = {{marginTop: '1rem'}}>
                                <Typography className = {classes.maintext}>
                                    Прайс лист бани
                                </Typography>
                            </Box>
                            <br/>
                            <Box width='100%'>
                                <Grid container spacing = {2} align ='center'>
                                    <Grid item xs = {12} sm = {12}>
                                        <Box align = 'center'>
                                            <ColorButton onClick = {this.handleClickSaunaReserveDialog}>
                                                Забронировать онлайн
                                            </ColorButton>
                                            <br/>
                                            <br/>
                                            <Typography className = {classes.secondtext}>  
                                                или по телефону:
                                            </Typography>
                                            <Typography className = {classes.secondtext} style = {{color:'rgb(75, 157, 170)'}}>  
                                                +7 978 834 66 06
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box style = {{padding: '25px'}}>
                                <TableContainer component={Paper} style = {{marginTop:'1em',boxShadow: 'none'}} className='table_scroll'>
                                    <Table size="medium">
                                        <TableBody>
                                            <TableRow style = {{background: 'rgba(82, 124, 130, 0.13)'}}>
                                                <TableCell component="th" scope="row" align = 'left' className = {classes.Description} >
                                                    Понедельник, Вторник, Среда, Четверг 
                                                </TableCell>
                                                <TableCell align="right" className = {classes.Description2}>
                                                    При заказе одной из бань - 1100₽/час
                                                    <br/>
                                                    <br/>
                                                    При заказе одновременно русской и турецкой  бань - 1700₽/час
                                                </TableCell>
                                            </TableRow>
                                            <TableRow style = {{background: 'rgba(245,245,249, 0.8)'}}>
                                                <TableCell component="th" scope="row" align = 'left' className = {classes.Description} >
                                                    Пятница, Суббота, Воскресенье
                                                </TableCell>
                                                <TableCell align="right" className = {classes.Description2}>
                                                    При заказе одной из бань - 1400₽/час
                                                    <br/>
                                                    <br/>
                                                    При заказе одновременно русской и турецкой  бань - 1900₽/час
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell style = {{background: 'rgba(82, 124, 130, 0.13)'}} align = 'left' className = {classes.Description} >
                                                
                                                    Наши бани работают круглогодично
                                                    <br/>
                                                    В период с 01.10 по 30.04 круглосуточно
                                                    <br/>
                                                    В период с 01.05 по 30.09 с 08:00 до 22:00
                                                
                                                </TableCell>
                                                <TableCell style = {{background: 'rgba(82, 124, 130, 0.13)'}} align = 'right' className = {classes.Description2} >
                                                    За каждого дополнительного человека доплата в размере - 200₽/час
                                                    <br/>
                                                    <br/>
                                                    Дополнительное полотенце - 40₽
                                                    <br/>
                                                    <br/>
                                                    Веник - 150₽
                                                    <br/>
                                                    <br/>
                                                    Травяной чай и полотенце включены в стоимость
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Box width='100%'>
                                <Typography className = {classes.secondtext}>
                                    <strong>Стоимость бани за 1 час на шесть человек.</strong>
                                    <br/>
                                    <strong>Заказ необходимо сделать не позднее чем за 2-3 часа до предполагаемого времени посещения парной.</strong>
                                    <br/>
                                    <br/>
                                </Typography>
                            </Box>
                            <Box>
                                <Dialog scroll = 'body' maxWidth = 'sm' open = {dialogSaunaReserveState} onClose={this.handleClickSaunaReserveDialog} aria-labelledby="customized-dialog-title">                
                                    <DialogTitle id="customized-dialog-title">
                                        <Typography className = {classes.dialogTitle}>
                                            Заказать сауну
                                        </Typography>
                                    </DialogTitle>
                                    <DialogContent>
                                        <TextFieldName 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputProps = {{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.nameValueRef} variant="outlined" label = "ФИО *" fullWidth margin="dense"/>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputProps = {{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.emailValueRef}  variant="outlined" label = "E-Mail" fullWidth margin="dense"/>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputProps = {{
                                            className: classes.dialogText
                                        }}
                                        type = "tel" inputRef = {this.phoneValueRef} variant="outlined" label = "Номер телефона *" fullWidth margin="dense"/>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputProps = {{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.personValueRef}  variant="outlined" label = "Количество часов *" fullWidth margin="dense"/>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputProps = {{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.hourValueRef}  variant="outlined" label = "Количество персон *" fullWidth margin="dense"/>
                                        <FormGroup row>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        onChange={this.handleChangeRus}
                                                        name="checkedA"
                                                    />
                                                }
                                                label="Русская баня"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        onChange={this.handleChangeXamam}
                                                        name="checkedB"
                                                    />
                                                }
                                                label="Турецкая баня Хаммам"
                                            />
                                        </FormGroup>
                                        <TextField2
                                            inputRef = {this.dateValueRef} 
                                            id="arrival_date"
                                            label="Дата посещения *"
                                            type="date"
                                            defaultValue = ""
                                            style = {{display: 'inline-block',verticalAlign: 'middle'}}
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
                                            inputRef = {this.timeValueRef} 
                                            id="arrival_date"
                                            label="Время *"
                                            type="time"
                                            defaultValue = ""
                                            style = {{paddingLeft: '10px',display: 'inline-block',verticalAlign: 'middle'}}
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
                                            <Button onClick = {this.handleClickConfirmSaunaReserve} className = {classes.btn_stl}>Подтвердить</Button>
                                            <Button onClick = {this.handleClickSaunaReserveDialog} className = {classes.btn_stl}>Закрыть</Button>
                                        </DialogActions>
                                    </DialogContent>
                                </Dialog>
                            </Box>
                            <Box>
                                <Snackbar open={alertReserveError} autoHideDuration={3000} onClose={this.handleAlertClose}>
                                    <Alert onClose={this.handleAlertClose} severity="error" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                        Ошибка. Повторите попытку чуть позже.
                                    </Alert>
                                </Snackbar>
                                <Snackbar open={alertReserveSuccess} autoHideDuration={5000} onClose={this.handleAlertClose}>
                                    <Alert onClose={this.handleAlertClose} severity="success" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                        Вы успешно оставили заявку на бронирование сауны. 
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
                            </Box>
                        </Container>
                    </Box>
                </>     
            );
        }
    }
}

export default withStyles(useStyles)(Sauna);
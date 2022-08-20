import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Button, Typography, Container, Snackbar,  Dialog, DialogTitle, DialogContent, 
        DialogContentText, TextField, DialogActions, Checkbox} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Flex, Box } from "react-system";
import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';
import Header from './Header';
import Footer from './Footer';
const mediaQueries = {
	phone: '@media only screen and (max-device-width: 648px)',
}


const useStyles = theme => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        flexWrap: 'wrap',
        display: 'flex'
    },
    maintext:{
        color: '#9e14aa', 
        fontSize: 42,
        fontFamily: "'Comfortaa', cursive",
        textAlign: 'center',
        [mediaQueries.phone]: {
            fontSize: 28,
        }
    },
    secondtext:{
        fontSize: 18,
        textAlign: 'center',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: 17,
        }
    },
    dialogTitle:{
        fontSize: '20px',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '18px',
        }
    },
    btn_stl:{
        color: '#AA14A4FF',
        fontSize: '16px',
        textTransform: 'uppercase',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '16px',
        }
    },
});


const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('#BA73C8FF'),
        textTransform: 'none',
        fontFamily: "'Comfortaa', cursive",
        fontSize: '16.5px',
        backgroundColor: '#d468ffFF',
        paddingLeft: '16px',
        paddingRight: '16px',
        '&:hover': {
            
            backgroundColor: '#BA68C8FF',
        },
    },
}))(Button);

const SaunaImages= [
    {
        img:'/image/sauna/img/1.jpg',
        subtitle:'Русская баня на дровах, в самых лучших ее традициях. Возможность париться, используя как сухой так и влажный пар.'
    },
    {
        img:'/image/sauna/img/2.jpg', 
        subtitle:'Турецкая баня самая щадящая. Максимальная температура в турецкой парной достигает всего 45 - 50 градусов °C. При этом самая комфортная температура для большинства людей лежит в пределах 37-42°C. Также следует отметить, что это единственный вид бань, в которой не запрещается париться людям с сердечно-сосудистыми заболеваниями.'
    },
    {
        img:'/image/sauna/img/3.jpg',
        subtitle:'В наших саунах вы можете отдохнуть от суеты, попариться в русской парной с веничком. Забыть о проблемах и делах, а также здорово провести день рождения, выходные или праздники.'

    },
    {
        img:'/image/sauna/img/4.jpg',
        subtitle:'Забыть о проблемах и делах, а также здорово провести день рождения, выходные или праздники.'
    },
    {
        img:'/image/sauna/img/5.jpg',
        subtitle:'В наших саунах вы можете отдохнуть от суеты, попариться в русской парной с веничком.'
    },
    {
        img:'/image/sauna/img/5.jpg',
    },
    {
        img:'/image/sauna/img/7.jpg',
    },
    {
        img:'/image/sauna/img/8.jpg',
    },
    {
        img:'/image/sauna/img/9.jpg',
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
            Rus: false
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
            fetch('modules/reserv_sauna.php', requestOptions)
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
        this.setState(state => ({
            alertReserveSuccess: false,
            alertReserveError: false,
            alertNoFullError: false,
            alertConfrimWarning: false
        }));
    }
    render() {
        const {classes} = this.props;
        const { dialogSaunaReserveState, 
                alertNoFullError, alertReserveError, alertReserveSuccess, alertConfrimWarning} = this.state;
        return (
            <>
                <Header/>
                <div className = {classes.root}>
                    <Container maxWidth = 'lg' fixed>
                        <Flex>
                            <Box width={1/2} mt = {5}>
                                <Box pt = {1}  align = 'center'>
                                    <Typography className = {classes.maintext}>
                                        Сауна
                                    </Typography>	
                                </Box>
                                <Box pt = {1}  align = 'center'>
                                    <Typography className = {classes.secondtext}>
                                    В наших саунах вы можете отдохнуть от суеты, попариться в русской парной с веничком, ощутить себя султаном или султаншей в турецкой бане Хаммам.
                                    Забыть о проблемах и делах, а также здорово провести день рождения, выходные или праздники.
                                    </Typography>
                                </Box>	
                                <Box pt = {3} align = 'center'>
                                    <ColorButton onClick = {this.handleClickSaunaReserveDialog}>
                                        Забронировать онлайн
                                    </ColorButton>
                                </Box>
                                <Box pt = {2} align = 'center'>
                                    <Typography className = {classes.secondtext}>  
                                    или по телефону:
                                    </Typography>
                                </Box>	
                                <Box pt = {1} align = 'center'>
                                    <Typography className = {classes.secondtext}>  
                                    <span style = {{color:'rgba(185, 58, 206, 1)'}}>+7 978 834 66 06</span>
                                    </Typography>
                                </Box>
                            </Box>
                            <Box width={1/3} mt = {5} ml = {6}>
                                <img width = '100%' className = 'img-anim-1' src = '/image/sauna/svg/sauna.svg' alt = ''/>
                            </Box>
                        </Flex>
                        <Flex>
                            <Box width={1}>
                                <div className="ico animated" onClick = {this.scrollToMyRef = () => {window.scrollTo(0, this.RefScrollContainer.current.offsetTop)}}>
                                    <div className="circle circle-top"></div>  
                                    <div className="circle circle-main"></div>
                                    <div className="circle circle-bottom"></div>  
                                    <svg className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612" xmlSpace="preserve" >
                                    <defs>
                                        <clipPath id="cut-off-arrow">
                                        <circle cx="306" cy="306" r="287"/>
                                        </clipPath>
                                        <filter id="goo">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                        <feBlend in="SourceGraphic" in2="goo" />
                                        </filter>
                                    
                                    </defs>
                                        <path  className="st-arrow" d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
                                                        l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
                                                        c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
                                                        c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z"/>
                                    </svg>
                                </div>
                            </Box>
                        </Flex>
                        <Flex>
                            <Box width={1}>
                                <div className = 'fond' align = 'center' ref = {this.RefScrollContainer}>
                                    {SaunaImages.map((item, index) => (
                                        <div key = {index} className = 'style_prevu_kit'>
                                            <ImageShadow src = {item.img}/>
                                        </div>
                                    ))}
                                </div>
                            </Box>
                        </Flex>
                            <Container>
                                <Dialog scroll = 'body' maxWidth = 'sm' open = {dialogSaunaReserveState} onClose={this.handleClickSaunaReserveDialog} aria-labelledby="customized-dialog-title">                
                                <DialogTitle id="customized-dialog-title">
                                    <span className = {classes.dialogTitle}>
                                        Заказать сауну
                                    </span>
                                </DialogTitle>
                                <DialogContent dividers>
                                    <TextField 
                                    InputLabelProps={{
                                        className: classes.secondtext
                                    }}
                                    InputProps={{
                                        className: classes.secondtext
                                    }}
                                    inputRef = {this.nameValueRef} variant="outlined" label = "ФИО *" fullWidth autoFocus margin="dense"/>
                                    <TextField 
                                    InputLabelProps={{
                                        className: classes.secondtext
                                    }}
                                    InputProps={{
                                        className: classes.secondtext
                                    }}
                                    inputRef = {this.emailValueRef}  variant="outlined" label = "E-Mail" fullWidth margin="dense"/>
                                    <TextField 
                                    InputLabelProps={{
                                        className: classes.secondtext
                                    }}
                                    InputProps={{
                                        className: classes.secondtext
                                    }}
                                    type = "tel" inputRef = {this.phoneValueRef} variant="outlined" label = "Номер телефона *" fullWidth margin="dense"/>
                                    <TextField 
                                    InputLabelProps={{
                                        className: classes.secondtext
                                    }}
                                    InputProps={{
                                        className: classes.secondtext
                                    }}
                                    inputRef = {this.personValueRef}  variant="outlined" label = "Количество часов *" fullWidth margin="dense"/>
                                    <TextField 
                                    InputLabelProps={{
                                        className: classes.secondtext
                                    }}
                                    InputProps={{
                                        className: classes.secondtext
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
                                    <TextField
                                        inputRef = {this.dateValueRef} 
                                        id="arrival_date"
                                        label="Дата посещения *"
                                        type="date"
                                        defaultValue = ""
                                        InputLabelProps={{
                                            shrink: true,
                                            className: classes.secondtext
                                        }}
                                        InputProps={{
                                            className: classes.secondtext
                                        }}
                                    />
                                    <TextField
                                        inputRef = {this.timeValueRef} 
                                        id="arrival_date"
                                        label="Время *"
                                        type="time"
                                        defaultValue = ""
                                        InputLabelProps={{
                                            shrink: true,
                                            className: classes.secondtext
                                        }}
                                        InputProps={{
                                            className: classes.secondtext
                                        }}
                                    />
                                    <TextField 
                                    InputLabelProps={{
                                        className: classes.secondtext
                                    }}
                                    InputProps={{
                                        className: classes.secondtext
                                    }}
                                    multiline ={true} rows={6} inputRef = {this.descriptionValueRef} label = "Коментарий к заказу" fullWidth margin="dense" variant="outlined"/>
                                    <DialogContentText variant="subtitle2" style = {{fontFamily: "'Comfortaa', cursive",fontSize: '14px'}}>
                                        <Checkbox
                                            onChange = {this.handleChangeChecked}
                                            style = {{color: '#AA14A4FF'}}
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
                        </Container>
                        <Container>
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
                        </Container>
                    </Container>
                </div>
                <Footer/>  
            </>     
        );
    }
}

export default withStyles(useStyles)(Sauna);
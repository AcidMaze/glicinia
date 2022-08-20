import React, { Component } from 'react'
import { Button, Typography, Container, Snackbar,  Dialog, DialogTitle, DialogContent, Grid,
    DialogContentText, TextField, MenuItem, DialogActions, Checkbox, Box, Modal, Backdrop, Fade} from '@material-ui/core';
import { Link} from "react-router-dom";
import { Icon } from '@iconify/react';
import Alert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';

const mediaQueries = {
	phone: '@media only screen and (min-width: 280px) and (max-width: 600px)',
    tablet: '@media only screen and (min-width: 768px) and (max-width: 1280px)',
    iphone4_5: '@media only screen and (-webkit-min-device-pixel-ratio : 1.5) and (max-width: 320px)'
}

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        flexWrap: 'wrap',
        position: 'relative',
        display: 'flex',
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
    stText_1:{
        color: '#000000', 
        fontFamily: "'Montserrat Alternates', sans-serif", 
        fontWeight: '400',
        fontSize:'15px',
        textAlign: 'center',
        verticalAlign: 'middle',
        wordSpacing: '2px',
        [mediaQueries.phone]: {
            fontSize: '14.5px',
            textAlign: 'center'
        }
    },
    stText_2:{
        fontSize: '23px',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '22px',
            [mediaQueries.iphone4_5]: {
                fontSize:'20px'
            }
        }
    },
    stText_3:{
        fontFamily: "'Montserrat Alternates', sans-serif",
        fontWeight: '400',
        fontSize:'17px',
        [mediaQueries.phone]: {
            fontSize: '16px',
            [mediaQueries.iphone4_5]: {
                fontSize:'16px'
            }
        }
    },
    dialogTitle:{
        fontSize: '22px',
        fontFamily: "'Comfortaa', cursive",
        textAlign: 'center',
        [mediaQueries.phone]: {
            fontSize: '18px'
        }
    },
    GridSt:{
        margin: '0.9em 0.9em',
        [mediaQueries.iphone4_5]: {
            margin: '0.6em 0.3em'
        }
    },
    dialogText:{
        fontSize: '15px',
        color: '#000000',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '14px'
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
    sliderView:{
        display:'block',
        [mediaQueries.phone]: {
            display:'none'
        },
        [mediaQueries.tablet]: {
            display:'none'
        },
        [mediaQueries.iphone4_5]: {
            display:'none'
        }
    },
    sliderView2:{
        display:'none',
        [mediaQueries.phone]: {
            display:'block'
        },
        [mediaQueries.tablet]: {
            display:'none'
        }
    },
    sliderViewTablet:{
        display:'none',
        [mediaQueries.tablet]: {
            display:'block'
        }
    },
    moreBtn:{
        postiton:'relative',
        color: 'rgba(192, 27, 233, 1.0)',
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
    }
});

const getBedType = temp => {
    let type = [];
    if(temp === '1')
    {
        type.push(<Icon inline={true} icon="icon-park-outline:single-bed" width="32" height="32" style={{verticalAlign: 'middle'}}/>, ' x 2 ',<Icon inline={true} icon="icon-park-outline:sofa" width="32" height="32" style={{verticalAlign: 'middle'}}/>, ' x 1');
    }
    else if(temp === '2')
    {
        type.push(<Icon inline={true} icon="icon-park-outline:double-bed" width="32" height="32" style={{verticalAlign: 'middle'}}/>, ' x 1 ',<Icon inline={true} icon="icon-park-outline:sofa" width="32" height="32" style={{verticalAlign: 'middle'}}/>, ' x 1');
    }
    else if(temp === '3')
    {
        type.push();
    }
    return type;
};

const ColorButton = withStyles((theme) => ({
    root: {
        postiton:'relative',
        color: theme.palette.getContrastText('rgb(192, 27, 233)'),
        textTransform: 'none',
        textAlign: 'center',
        fontFamily: "'Comfortaa', cursive",
        fontWeight: '500',
        fontSize: '16px',
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
            fontSize: '15.5px'
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


export class RoomRender extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isLoadedImage: false,
            error: '',
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
                room_type: this.props.id
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

                        // Показываем Alert Неполные данные
                        this.handleAlertShow(0);
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
        const 
        { 
            classes,
            img,
            title,
            start_price,
            max_person,
            max_aperson,
            area,
            bed_type
        } = this.props;

        const { dialogRoomReserveState, 
                alertNoFullError, alertReserveError, alertReserveSuccess, alertConfrimWarning} = this.state;
        return (
            <Box className = {classes.root}>
                <Container maxWidth = 'xl' disableGutters>
                    <Box className = 'container-room' key = {this.props.id}>
                        <Box className='block-room'>
                            <Box className = 'block-roomimg'>
                                <img style = {{filter: 'brightness(95%)',objectFit: 'cover', borderRadius: '0px', width:'100%'}} alt = 'Фото номера' src = {`data:image/jpeg;base64,${img}`}/>
                            </Box>
                            <Box className = 'block-info'>
                                <Typography className = {classes.stText_2}> 
                                    {title}
                                </Typography>
                                <Typography className = {classes.stText_3}>
                                    От {start_price}₽/сутки
                                </Typography> 
                            </Box>
                            <Grid container className = {classes.GridSt}>
                                <Grid item xs={6}>
                                    <Box className = 'block-person_info' style = {{textAlign:'center'}}> 
                                        <Typography className = {classes.stText_1}>
                                            <Icon icon="la:user" inline={true} width="32" height="32" style = {{verticalAlign: 'middle'}}/> до {max_person} мест
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className = 'block-person_info' style = {{textAlign:'center'}}> 
                                        <Typography className = {classes.stText_1}>
                                            <Icon icon="la:user-plus" inline={true} width="32" height="32" style = {{verticalAlign: 'middle'}}/> до {max_aperson} мест
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container className = {classes.GridSt}>
                                <Grid item xs = {6}>
                                    <Box className = 'block-person_info' style = {{textAlign:'center'}}> 
                                        <Typography className = {classes.stText_1}>
                                            {getBedType(bed_type)}
                                        </Typography> 
                                    </Box> 
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className = 'block-person_info' style = {{textAlign:'center'}}> 
                                        <Typography className = {classes.stText_1}>
                                            <Icon icon="bx:bx-area" inline={true} width="32" height="32" style = {{verticalAlign: 'middle'}}/> {area} m²
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box style = {{textAlign:'center', marginTop:'1em'}}>
                                <ColorButton onClick={ () => this.handleClickRoomReserveDialog()}>
                                    Забронировать
                                </ColorButton>
                            </Box>
                            <Box style = {{textAlign:'center', marginTop:'0.9em'}}>
                                <Link className = {classes.moreBtn} to = {`/room/${this.props.id}`}>Узнать больше</Link>
                            </Box>
                        </Box>
                    </Box>
                </Container>
                <Container maxWidth = 'xl' disableGutters>
                    <Dialog className = {classes.modalMobile} scroll = 'body' maxWidth = 'sm' open = {dialogRoomReserveState} onClose={() => this.handleClickRoomReserveDialog()} aria-labelledby="customized-dialog-title">
                        <Box key = {this.props.id}>
                            <DialogTitle id="customized-dialog-title">
                                <Typography className = {classes.dialogTitle}>
                                    Забронировать {this.props.title}
                                </Typography>
                            </DialogTitle>
                            <DialogContent>
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
                                    {getMaxPerson(this.props.max_person)}
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
                                    {getAMaxPerson(this.props.max_aperson)}
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
                                        onChange = {(event) => this.handleChangeChecked(event)}
                                        style = {{color: '#527c82ff'}}
                                        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                    />
                                    Я даю согласие на обработку моих персональных данных
                                </DialogContentText>
                                <DialogActions>
                                    <Button onClick = {() => this.handleClickConfirmRoomReserve()} className = {classes.btn_stl}>Подтвердить</Button>
                                    <Button onClick = {() => this.handleClickRoomReserveDialog()} className = {classes.btn_stl}>Закрыть</Button>
                                </DialogActions>
                            </DialogContent>
                        </Box>
                    </Dialog>
                </Container>
                <Container maxWidth = 'md' disableGutters = {true}>
                    <Modal  className = {classes.modalPC} closeAfterTransition BackdropComponent={Backdrop} open = {dialogRoomReserveState} 
                        onClose={() => this.handleClickRoomReserveDialog()}
                        BackdropProps={{
                            timeout: 400,
                        }}>
                        <Fade in={dialogRoomReserveState}>
                            <Box width = '100%'>
                                <Box key = {this.props.id} className = 'container-revroom'>
                                    <Box className='container-revimg'>
                                        <Box className = 'block-revroomimg'>  
                                            <img alt = 'Фотография номера' style = {{
                                                objectFit: 'cover', 
                                                width:'100%', 
                                                height: '100%',
                                                filter: 'brightness(90%)',
                                                borderTopRightRadius: '6px',
                                                borderBottomRightRadius: '6px'}}  
                                                src = {`data:image/jpeg;base64,${this.props.img}`}/>
                                            <span style = {{cursor: 'pointer'}} onClick = {() => this.handleClickRoomReserveDialog()}></span>
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
                                                {this.props.title}
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
                                                {getMaxPerson(this.props.max_aperson)}
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
                                                {getAMaxPerson(this.props.max_aperson)}
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
                                                onChange = {(event) => this.handleChangeChecked(event)}
                                                style = {{color: '#527c82ff'}}
                                                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                                />
                                                Я даю согласие на обработку моих персональных данных
                                            </Typography>
                                        </Box>
                                        <Box style = {{marginLeft: '14.5%'}}>
                                            <ColorButton2 id = {this.props.id} onClick={() => this.handleClickConfirmRoomReserve()}>
                                                Подтвердить
                                            </ColorButton2>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Fade>
                    </Modal>
                </Container>
                <Container>
                    <Snackbar open={alertReserveError} autoHideDuration={3000} onClose={() => this.handleAlertClose()}>
                        <Alert onClose={() => this.handleAlertClose()} severity="error" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                            Ошибка. Повторите попытку чуть позже.
                        </Alert>
                    </Snackbar>
                    <Snackbar open={alertReserveSuccess} autoHideDuration={5000} onClose={() => this.handleAlertClose()}>
                        <Alert onClose={() => this.handleAlertClose()} severity="success" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                            Вы успешно оставили заявку на бронирование номера. 
                            <br/>
                            Ожидайте звонка для подтверждения брони.
                        </Alert>
                    </Snackbar>
                    <Snackbar open={alertNoFullError} autoHideDuration={3200} onClose={() => this.handleAlertClose()}>
                        <Alert onClose={() => this.handleAlertClose()} severity="warning" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                            Необходимо заполнить все обязательные поля*
                        </Alert>
                    </Snackbar>
                    <Snackbar open={alertConfrimWarning} autoHideDuration={3100} onClose={() => this.handleAlertClose()}>
                        <Alert onClose={() => this.handleAlertClose()} severity="warning" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                            Подтвердите своё согласие на обработку персональных данных.
                        </Alert>
                    </Snackbar>
                </Container>
            </Box>
        ); 
    }
}

export default withStyles(useStyles)(RoomRender);
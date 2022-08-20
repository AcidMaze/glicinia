import React, {useState,useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, Button,Snackbar,  Dialog, DialogTitle, DialogContent, 
    DialogContentText, TextField, MenuItem, DialogActions, Checkbox, Modal, Backdrop, Fade} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@iconify/react';
const mediaQueries = {
	phone: '@media only screen and (min-width: 280px) and (max-width: 540px)',
    tablet: '@media only screen and (min-width: 541px) and (max-width: 1280px)',
    iphone4_5: '@media only screen and (-webkit-min-device-pixel-ratio : 1.5) and (max-width: 320px)'
}

const useStyles = () => ({
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

function RoomModal (props) {

    const [checked, handleChangeChecked] = useState(false); 
    const [dialogRoomReserveState, setRoomReserveDialog] = useState(true); 
    const [alertReserveError, handleAlertError] = useState(false); 
    const [alertReserveSuccess, handleAlertSuccess] = useState(false); 
    const [alertConfrimWarning, handleAlertWarning] = useState(false); 
    const [alertNoFullError, handleAlertFullError] = useState(false); 
    useEffect(() => {
        
    },[]);

    const nameValueRef = React.createRef();
    const emailValueRef = React.createRef();
    const phoneValueRef = React.createRef();
    const personValueRef = React.createRef();
    const m_personValueRef = React.createRef();
    const arrival_dateValueRef = React.createRef();
    const departure_dateValueRef = React.createRef();
    const descriptionValueRef = React.createRef();
    const RefScrollContainer = React.createRef();

    
    // handleChangeChecked = (event) =>{
    //     checked = event.target.checked;
    // }
    const handleClickConfirmRoomReserve = () =>{

        if(checked === true)
        { 
            var name = nameValueRef.current.value;
            var phone = phoneValueRef.current.value;
            var email = emailValueRef.current.value;
            var person = personValueRef.current.value;
            var mperson = m_personValueRef.current.value;
            var arrival_date = arrival_dateValueRef.current.value;
            var departure_date = departure_dateValueRef.current.value;
            var coment = descriptionValueRef.current.value;
            var orderData = {
                name: name,
                phone: phone,
                email: email,
                person: person,
                mperson: mperson,
                arrival_date: arrival_date,
                departure_date: departure_date,
                coment:coment,
                room_type: -1
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

                        handleAlertShow(0); // Показываем Alert Неполные данные
                        break;
                    }
                    case 'error':{

                        handleAlertShow(1); // Показываем Alert Некоорректные данные
                        break;
                    }
                    case 'yes':{
                        handleAlertShow(2); // Показываем Alert Номер успешно забронирован
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
            handleAlertShow(3);
        }
    }

    const handleAlertShow = (event) => {
        switch(event)
        {
            case 0:{// Неполные данные
                alertNoFullError = () => (true);
                break;
            }
            case 1:{// Неверные данные
                dialogRoomReserveState = () => (!dialogRoomReserveState);
                alertReserveError = () => (true);
                break;
            }
            case 2:{// Всё ок
                dialogRoomReserveState = () => (!dialogRoomReserveState);
                alertReserveSuccess = () => (true);
                break;
            }
            case 3:{//Предупреждение о согласии
                alertConfrimWarning = () => (true);
                break;
            }
            default:{
                alert('Ошибка обрабработки уведомления');
                break;
            }
        }
    }
    const handleAlertClose = () =>{

        alertReserveSuccess  = false;
        alertReserveError = false;
        alertNoFullError = false;
        alertConfrimWarning  = false;
    }
        return (
            <Box className = {useStyles.root}>
                <Container maxWidth = 'md' disableGutters = {true}>
                    <Modal  
                            className = {useStyles.modalPC}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 400,
                            }}
                        open = {dialogRoomReserveState} 
                        onClose={() => setRoomReserveDialog((dialogRoomReserveState = !dialogRoomReserveState))}>
                        <Fade in={dialogRoomReserveState}>
                                <Box width = '100%' key = {props.id} className = 'container-revroom'>
                                    <Box className='container-revimg'>
                                        <Box className = 'block-revroomimg'>  
                                            <img alt = 'Фотография номера' style = {{
                                                objectFit: 'cover', 
                                                width:'100%', 
                                                height: '100%',
                                                filter: 'brightness(90%)',
                                                borderTopRightRadius: '6px',
                                                borderBottomRightRadius: '6px'}}  
                                                src = {`data:image/jpeg;base64,${props.img}`}/>
                                            <span style = {{cursor: 'pointer'}} onClick = {() => setRoomReserveDialog((dialogRoomReserveState = !dialogRoomReserveState))}></span>
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
                                                {props.title}
                                            </Typography>
                                        </Box>
                                        <Box className = 'block-revinput'>
                                            <TextFieldName 
                                                inputRef = {nameValueRef} size="small" variant="outlined" 
                                                label = "ФИО *" 
                                                placeholder = "Пушкин Александр Сергеевич"
                                                margin="normal"
                                                InputLabelProps={{
                                                    className: useStyles.dialogText
                                                }}
                                                InputProps={{
                                                    className: useStyles.dialogText
                                                }}
                                                inputProps = {{
                                                    className: useStyles.dialogText
                                                }}
                                            />
                                            <br/>
                                            <TextField3 
                                                size="small"
                                                placeholder = "example@example.com"
                                                InputLabelProps={{
                                                    className: useStyles.dialogText
                                                }}
                                                InputProps={{
                                                    className: useStyles.dialogText,
                                                }}
                                                inputProps = {{
                                                    className: useStyles.dialogText
                                                }}
                                                inputRef = {emailValueRef}  variant="outlined" label = "E-Mail" margin="dense"/>
                                            <TextField3 
                                                size="small"
                                                placeholder = "+79991234567"
                                                InputLabelProps={{
                                                    className: useStyles.dialogText
                                                }}
                                                InputProps={{
                                                    className: useStyles.dialogText
                                                }}
                                                inputProps = {{
                                                    className: useStyles.dialogText
                                                }}
                                                type = "tel" inputRef = {phoneValueRef} variant="outlined" label = "Номер телефона *" margin="dense"/>
                                            <br/>
                                            <PersonPicker margin="normal"
                                                select
                                                size="small"
                                                label="Места *"
                                                defaultValue = "1"
                                                variant="outlined"
                                                inputRef = {personValueRef}
                                                InputLabelProps={{
                                                    className: useStyles.dialogText
                                                }}
                                                InputProps={{
                                                    className: useStyles.dialogText
                                                }}
                                                inputProps = {{
                                                    className: useStyles.dialogText
                                                }}
                                            >
                                                {getMaxPerson(props.max_aperson)}
                                            </PersonPicker>
                                            <PersonPicker margin="normal"
                                                select
                                                size="small"
                                                label="Доп. места"
                                                defaultValue = "0"
                                                variant="outlined"
                                                inputRef = {m_personValueRef} 
                                                InputLabelProps={{
                                                    className: useStyles.dialogText
                                                }}
                                                InputProps={{
                                                    className: useStyles.dialogText
                                                }}
                                                inputProps = {{
                                                    className: useStyles.dialogText
                                                }}
                                            >
                                                {getAMaxPerson(props.max_aperson)}
                                            </PersonPicker>
                                            <br/>
                                            <TextField2
                                                inputRef = {arrival_dateValueRef} 
                                                id="arrival_date"
                                                label="Дата заезда *"
                                                type="date"
                                                margin="dense"
                                                size="small"
                                                style = {{display: 'inline-block',verticalAlign: 'middle',textAlign: 'center'}}
                                                InputLabelProps={{
                                                    shrink: true,
                                                    className: useStyles.dialogText
                                                }}
                                                InputProps={{
                                                    className: useStyles.dialogText
                                                }}
                                                inputProps = {{
                                                    className: useStyles.dialogText
                                                }}
                                            />
                                            <TextField2
                                                inputRef = {departure_dateValueRef} 
                                                id="departure_date"
                                                label="Дата выезда *"
                                                type="date"
                                                margin="dense"
                                                size="small"
                                                style = {{display: 'inline-block',verticalAlign: 'middle',textAlign: 'center'}}
                                                InputLabelProps={{
                                                    shrink: true,
                                                    className: useStyles.dialogText
                                                }}
                                                InputProps={{
                                                    className: useStyles.dialogText
                                                }}
                                                inputProps = {{
                                                    className: useStyles.dialogText
                                                }}
                                            />
                                            <br/>
                                            <TextField4 
                                            multiline ={true} rows={6} inputRef = {descriptionValueRef} label = "Коментарий к бронированию" margin="normal" variant="outlined"
                                            InputLabelProps={{
                                                className: useStyles.dialogText
                                            }}
                                            InputProps={{
                                                className: useStyles.dialogText
                                            }}/>
                                            <Typography variant="subtitle2" style = {{fontFamily: "'Comfortaa', cursive",fontSize: '14px'}}>
                                                <Checkbox
                                                onChange = {handleChangeChecked}
                                                style = {{color: '#527c82ff'}}
                                                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                                />
                                                Я даю согласие на обработку моих персональных данных
                                            </Typography>
                                        </Box>
                                        <Box style = {{marginLeft: '14.5%'}}>
                                            <ColorButton2 id = {props.id} onClick={() => setRoomReserveDialog((dialogRoomReserveState = !dialogRoomReserveState))}>
                                                Подтвердить
                                            </ColorButton2>
                                        </Box>
                                    </Box>
                                </Box>
                        </Fade>
                    </Modal>
                </Container>                 
                <Container>
                <Dialog className = {useStyles.modalMobile} scroll = 'body' maxWidth = 'sm' open = {dialogRoomReserveState} onClose={() => setRoomReserveDialog((dialogRoomReserveState = !dialogRoomReserveState))} aria-labelledby="customized-dialog-title">
                    <Box key = {props.id}>
                        <DialogTitle id="customized-dialog-title">
                            <Typography className = {useStyles.dialogTitle}>
                                Забронировать {props.title}
                            </Typography>
                        </DialogTitle>
                        <DialogContent dividers>
                            <TextFieldName
                                size="small" 
                                inputRef = {nameValueRef} variant="outlined" label = "ФИО *" fullWidth margin="dense"
                                InputLabelProps={{
                                    className: useStyles.dialogText
                                }}
                                InputProps={{
                                    className: useStyles.dialogText
                                }}
                                inputProps = {{
                                    className: useStyles.dialogText
                                }}
                            />
                            <TextField3 
                                size="small"
                                InputLabelProps={{
                                    className: useStyles.dialogText
                                }}
                                InputProps={{
                                        className: useStyles.dialogText
                                }}
                                inputProps = {{
                                    className: useStyles.dialogText
                                }}
                                inputRef = {emailValueRef}  variant="outlined" label = "E-Mail" fullWidth margin="dense"
                            />
                            <TextField3 
                                size="small"
                                InputLabelProps={{
                                    className: useStyles.dialogText
                                }}
                                InputProps={{
                                    className: useStyles.dialogText
                                }}
                                inputProps = {{
                                    className: useStyles.dialogText
                                }}
                                type = "tel" inputRef = {phoneValueRef} variant="outlined" label = "Номер телефона *" fullWidth margin="dense"
                            />
                            <br/>
                            <PersonPicker margin="dense"
                                id="standard-select-currency"
                                select
                                size="small"
                                label="Места *"
                                variant="outlined"
                                defaultValue = "1"
                                inputRef = {personValueRef}
                                InputLabelProps={{
                                    className: useStyles.dialogText
                                }}
                                InputProps={{
                                    className: useStyles.dialogText
                                }}
                                inputProps = {{
                                    className: useStyles.dialogText
                                }}
                            >
                                {getMaxPerson(props.max_person)}
                            </PersonPicker>

                            <PersonPicker margin="dense"
                                id="standard-select-currency"
                                select
                                size="small"
                                variant="outlined"
                                label="Доп. места"
                                defaultValue = "0"
                                inputRef = {m_personValueRef} 
                                InputLabelProps={{
                                    className: useStyles.dialogText
                                }}
                                InputProps={{
                                    className: useStyles.dialogText
                                }}
                                inputProps = {{
                                    className: useStyles.dialogText
                                }}
                            >
                                {getAMaxPerson(props.max_aperson)}
                            </PersonPicker>
                            <br/>
                            <TextField2
                                inputRef = {arrival_dateValueRef} 
                                id="arrival_date"
                                label="Дата заезда *"
                                type="date"
                                size="small"
                                style = {{paddingLeft: '0px',display: 'inline-block',verticalAlign: 'middle'}}
                                InputLabelProps={{
                                    shrink: true,
                                    className: useStyles.dialogText
                                }}
                                InputProps={{
                                    className: useStyles.dialogText
                                }}
                                inputProps = {{
                                    className: useStyles.dialogText
                                }}
                            />
                            <TextField2
                                inputRef = {departure_dateValueRef} 
                                id="departure_date"
                                label="Дата выезда *"
                                type="date"
                                size="small"
                                style = {{paddingLeft: '75px',display: 'inline-block',verticalAlign: 'middle'}}
                                InputLabelProps={{
                                    shrink: true,
                                    className: useStyles.dialogText
                                }}
                                InputProps={{
                                    className: useStyles.dialogText
                                }}
                                inputProps = {{
                                    className: useStyles.dialogText
                                }}
                            />
                            <TextField4 
                            InputLabelProps={{
                                className: useStyles.dialogText
                            }}
                            InputProps={{
                                className: useStyles.dialogText
                            }}
                            inputProps = {{
                                className: useStyles.dialogText
                            }}
                            multiline ={true} rows={6} inputRef = {descriptionValueRef} label = "Коментарий к заказу" fullWidth margin="dense" variant="outlined"/>
                            <DialogContentText variant="subtitle2" style = {{fontFamily: "'Comfortaa', cursive",fontSize: '14px'}}>
                                <Checkbox
                                    onChange = {handleChangeChecked}
                                    style = {{color: '#527c82ff'}}
                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                />
                                Я даю согласие на обработку моих персональных данных
                            </DialogContentText>
                            <DialogActions>
                                <Button className = {useStyles.btn_stl}>Подтвердить</Button>
                                <Button onClick = {() => setRoomReserveDialog((dialogRoomReserveState = false))} className = {useStyles.btn_stl}>Закрыть</Button>
                            </DialogActions>
                        </DialogContent>
                    </Box>
                </Dialog>
            </Container>
            <Container>
                <Snackbar open={alertReserveError} autoHideDuration={3000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="error" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                        Ошибка. Повторите попытку чуть позже.
                    </Alert>
                </Snackbar>
                <Snackbar open={alertReserveSuccess} autoHideDuration={5000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="success" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                        Вы успешно оставили заявку на бронирование номера. 
                        <br/>
                        Ожидайте звонка для подтверждения брони.
                    </Alert>
                </Snackbar>
                <Snackbar open={alertNoFullError} autoHideDuration={3200} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="warning" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                        Необходимо заполнить все обязательные поля*.
                    </Alert>
                </Snackbar>
                <Snackbar open={alertConfrimWarning} autoHideDuration={3100} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="warning" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                        Подтвердите своё согласие на обработку персональных данных.
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    )
}

export default RoomModal;
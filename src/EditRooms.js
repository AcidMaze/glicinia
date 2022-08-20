import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Box, Typography, Grid, Container, Snackbar,  Dialog, DialogTitle, DialogContent, TextField, DialogActions} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import Skeleton from '@material-ui/lab/Skeleton';

const mediaQueries = {
	phone: '@media only screen and (min-width: 280px) and (max-width: 480px)',
    tablet: '@media only screen and (min-width: 481px) and (max-width: 1024px)',
    iphone4: '@media only screen and (-webkit-min-device-pixel-ratio : 1.5), only screen and (min-device-pixel-ratio : 1.5)'
}

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        flexWrap: 'wrap',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    media: {
        height: '15rem',
        width: '100%',
        [mediaQueries.phone]: {
            height: '10rem'
        }
    },
    tableHead: {
        backgroundColor: '#f2f0f0',
    },
    rowSt: {
        wordSpacing: '1rem'
    },
    imageList: {
        height: '30rem',
        width: '40rem',
        [mediaQueries.phone]: {
            height: '100%',
            width: '100%',
        }
    },
    CardStyle:{
        width: '80%',
        marginLeft: 'auto', 
        marginRight: 'auto',
        fontSize: '20px',
        fontFamily: "'Comfortaa', cursive",
        textRendering: 'geometricPrecision',
        [mediaQueries.phone]: {
            width: '100%'
        }
    },
    dialogTitle:{
        fontSize: '20px',
        fontFamily: "'Comfortaa', cursive",
        textRendering: 'geometricPrecision',
        [mediaQueries.phone]: {
            fontSize: '18px',
        }
    },
    dialogText:{
        fontFamily: "'Comfortaa', cursive",
        textRendering: 'geometricPrecision',
        fontSize: '15px',
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
    stText_2:{
        fontSize: '23px',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '21px'
        }
    },
});

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


const SkeletonRoomsList = () => {
    let content = [];
    for (let i = 0; i < 6; i++) 
    {
        content.push(
                <Grid item xs = {12} sm = {4} key = {i}>
                    <div className = 'container-room'>
                        <div className = 'container-img'>
                            <Skeleton className = 'container-img' style = {{margin: '0 auto' }} variant="rect" width='348px' height='550px' />
                        </div>
                    </div>
                </Grid>
        );
    }
    return content;
};


const TextField3 = withStyles({
    root: {
        backgroundColor: 'rgb(245,245,245)',
        width: '100%',
        borderRadius: '60px',
        margin: '1% 1%',
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

const TextField4 = withStyles({
    root: {
        backgroundColor: 'rgb(245,245,245)',
        borderRadius: '15px',
        width: '100%',
        margin: '1% 1%',
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

export class EditRooms extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            isLoaded: false,
            dialogEditRoomState: false, 
            dialogEditRoomPriceState: false,
            dialogEditRoomImg: false,
            alertNoFullError: false,
            alertUpdateSuccess: false,
            roomID: -1,
            RoomsData: [],
            PriceData: [],
            RoomsImg: []
        };
        this.titleValueRef = React.createRef();
        this.startpriceValueRef = React.createRef();
        this.max_personValueRef = React.createRef();
        this.max_apersonValueRef = React.createRef();
        this.areaValueRef = React.createRef();
        this.ammountValueRef = React.createRef();
        this.descriptionValueRef = React.createRef();

        this.bb_lowValueRef = React.createRef();
        this.bb_summerValueRef = React.createRef();; 
        this.bb_highValueRef = React.createRef();
        this.bb_hotValueRef = React.createRef();

        this.fb_lowValueRef = React.createRef();
        this.fb_summerValueRef = React.createRef(); 
        this.fb_highValueRef = React.createRef();
        this.fb_hotValueRef = React.createRef();

        this.m_bb_lowValueRef = React.createRef();
        this.m_bb_summerValueRef = React.createRef(); 
        this.m_bb_highValueRef = React.createRef();
        this.m_bb_hotValueRef = React.createRef();

        this.m_fb_lowValueRef = React.createRef(); 
        this.m_fb_summerValueRef = React.createRef();
        this.m_fb_highValueRef = React.createRef();
        this.m_fb_hotValueRef = React.createRef();

        this.handleClickEditImage = this.handleClickEditImage.bind(this);
        this.handleClickEditRoomDialog = this.handleClickEditRoomDialog.bind(this);
        this.handleClickEditRoomPriceDialog = this.handleClickEditRoomPriceDialog.bind(this);
        this.handleClickConfirmEditRoom = this.handleClickConfirmEditRoom.bind(this);
        this.handleClickConfirmEditPriceRoom = this.handleClickConfirmEditPriceRoom.bind(this);

        this.handleAlertShow = this.handleAlertShow.bind(this);
        this.handleAlertClose = this.handleAlertClose.bind(this);
    }
    componentDidMount() {
        //fetch('http://backend.com/load_rooms.php')
        fetch('http://a0624502.xsph.ru/modules/load_rooms.php')
        .then(response => response.json())
        .then(
            (response) =>{
                this.setState({
                    RoomsData: response,
                    isLoaded: true
                });
            },
            (error) =>{
                this.setState({
                    error:error
                });
            },

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
                    PriceData: response,
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

    handleClickEditRoomPriceDialog(event){
        const id = event.currentTarget.id;
        this.setState(state => ({
            dialogEditRoomPriceState: !state.dialogEditRoomPriceState,
            roomID: id
        }));
    }
    handleClickEditImage(event){
        this.setState({
            RoomsImg:[]
        });
        const id = event.currentTarget.id;
        //----------Загрузка фото номеров-----
        var orderData = {
            idRoom: id
        };
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
                    RoomsImg:response
                });
            }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
        this.setState(state => ({
            dialogEditRoomImg: !state.dialogEditRoomImg,
            roomID: id
        }));
    }
    handleClickConfirmEditPriceRoom(){

        var bb_low = this.bb_lowValueRef.current.value;
        var bb_summer = this.bb_summerValueRef.current.value;
        var bb_high = this.bb_highValueRef.current.value;
        var bb_hot = this.bb_hotValueRef.current.value;

        var fb_low = this.fb_lowValueRef.current.value;
        var fb_summer = this.fb_summerValueRef.current.value;
        var fb_high = this.fb_highValueRef.current.value;
        var fb_hot = this.fb_hotValueRef.current.value;

        var m_bb_low = this.m_bb_lowValueRef.current.value;
        var m_bb_summer = this.m_bb_summerValueRef.current.value;
        var m_bb_high = this.m_bb_highValueRef.current.value;
        var m_bb_hot = this.m_bb_hotValueRef.current.value;

        var m_fb_low = this.m_fb_lowValueRef.current.value; 
        var m_fb_summer = this.m_fb_summerValueRef.current.value;
        var m_fb_high = this.m_fb_highValueRef.current.value;
        var m_fb_hot = this.m_fb_hotValueRef.current.value;

        var editRoomPrice = {
            idRoom: this.state.roomID,
            bb_low:bb_low,
            bb_summer:bb_summer,
            bb_high:bb_high,
            bb_hot:bb_hot,

            fb_low:fb_low,
            fb_summer:fb_summer,
            fb_high:fb_high,
            fb_hot:fb_hot,

            m_bb_low:m_bb_low,
            m_bb_summer:m_bb_summer,
            m_bb_high:m_bb_high,
            m_bb_hot:m_bb_hot,
            
            m_fb_low:m_fb_low,
            m_fb_summer:m_fb_summer,
            m_fb_high:m_fb_high,
            m_fb_hot:m_fb_hot,
        };
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editRoomPrice)
        };
        //fetch('http://backend.com/update_rprice.php', requestOptions)
        fetch('http://a0624502.xsph.ru/modules/update_rprice.php', requestOptions)
        .then((response) => response.json())
        .then((responseData) => {
            switch(responseData)
            {
                case 'not_full':{
                    this.handleAlertShow(0); // Показываем Alert Неполные данные
                    break;
                }
                case 'yes':{
                    this.handleAlertShow(1); // Показываем Alert Номер успешно забронирован
                    break;
                }
                default:{
                    alert('Неизвестный ответ с сервера. Стадия: Редактирование стоимости номера.');
                    break;
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    handleClickEditRoomDialog(event){
        const id = event.currentTarget.id;
        this.setState(state => ({
            dialogEditRoomState: !state.dialogEditRoomState,
            roomID: id
        }));
    }
    handleClickConfirmEditRoom(){
        var title = this.titleValueRef.current.value;
        var start_price = this.startpriceValueRef.current.value;
        var max_person = this.max_personValueRef.current.value;
        var max_aperson = this.max_apersonValueRef.current.value;
        var area = this.areaValueRef.current.value;
        var ammount = this.ammountValueRef.current.value;
        var description = this.descriptionValueRef.current.value;
        var editRoomData = {
            idRoom: this.state.roomID,
            title: title,
            start_price: start_price,
            max_person: max_person,
            max_aperson: max_aperson,
            area: area,
            ammount: ammount,
            description: description,
        };
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editRoomData)
        };
        //fetch('http://backend.com/update_rinfo.php', requestOptions)
        fetch('http://a0624502.xsph.ru/modules/update_rinfo.php', requestOptions)
        .then((response) => response.json())
        .then((responseData) => {
            switch(responseData)
            {
                case 'not_full':{
                    this.handleAlertShow(0); // Показываем Alert Неполные данные
                    break;
                }
                case 'yes':{
                    this.handleAlertShow(1); // Показываем Alert Номер успешно забронирован
                    break;
                }
                default:{
                    alert('Неизвестный ответ с сервера. Стадия: Редактирование описание номера.');
                    break;
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    handleAlertShow(event) {
        switch(event)
        {
            case 0:{    // Неполные данные
                this.setState(state => ({
                    alertNoFullError: true
                }));
                break;
            }
            case 1:{    // Всё ок
                this.setState(state => ({
                
                    alertUpdateSuccess: true
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
            alertUpdateSuccess: false,
            alertError: false
        }));
    }
    render() 
    {
        const {classes} = this.props;
        const { dialogEditRoomState, dialogEditRoomPriceState, dialogEditRoomImg,
                isLoaded, error,
                alertNoFullError, alertUpdateSuccess, 
                RoomsData, PriceData, RoomsImg,roomID} = this.state;
        if(error){
            return <p>{error}</p>
        } 
        else if (!isLoaded) 
        {
            return (
                <>
                    <Box className = {classes.root}>  
                        <Container maxWidth = 'xl' disableGutters = {true}>
                            <Box style = {{paddingLeft: '4%',paddingRight: '4%'}}>
                                <Grid container spacing = {6}>
                                    {SkeletonRoomsList()}
                                </Grid>
                            </Box>
                        </Container>
                    </Box>
                </>
            )
        }
        else
        {   
            return (
                <>
                    <Box className = {classes.root}>  
                        <Container maxWidth = 'xl' disableGutters = {true}>
                        <Box style = {{padding: '2% 5%'}}>
                            <Grid container spacing = {6}>
                                {RoomsData.map((rinfo) => (
                                    <Grid item xs = {12} sm = {4} key = {rinfo.id}>
                                        <Box className = 'container-room' style = {{transform: 'none'}}>
                                            <Box className="block-room">
                                                <Box className = 'block-roomimg'>
                                                    <img style = {{filter: 'brightness(95%)',objectFit: 'cover', borderRadius: '0px', width:'100%'}} alt = 'Фото номера' src = {`data:image/jpeg;base64,${rinfo.img}`}/>
                                                </Box>
                                                <Box className = 'block-info'>
                                                    <Typography className = {classes.stText_2}> 
                                                        {rinfo.title}
                                                    </Typography>
                                                    <Typography style = {{fontFamily: "'Montserrat Alternates', sans-serif", fontWeight: '400',fontSize:'16px'}}>
                                                        От {rinfo.start_price}₽/сутки
                                                    </Typography> 
                                                </Box>
                                                <Box style = {{textAlign:'center', marginTop:'16px'}}>
                                                    <ColorButton id = {rinfo.id} onClick={this.handleClickEditImage}>
                                                        Редактировать галерею
                                                    </ColorButton>
                                                </Box>
                                                <Box style = {{textAlign:'center', marginTop:'16px'}}>
                                                    <ColorButton id = {rinfo.id} onClick={this.handleClickEditRoomDialog}>
                                                        Редактировать описание
                                                    </ColorButton>
                                                </Box>
                                                <Box style = {{textAlign:'center', marginTop:'16px'}}>
                                                    <ColorButton id = {rinfo.id} onClick={this.handleClickEditRoomPriceDialog}>
                                                        Редактировать стоимость
                                                    </ColorButton>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                    </Box>
                        </Container>
                        <Dialog scroll = 'body' maxWidth = 'xl' open = {dialogEditRoomImg} onClose={this.handleClickEditImage} aria-labelledby="customized-dialog-title">                
                            <DialogTitle id="customized-dialog-title">
                                {RoomsData.filter(room => room.id === roomID).map(room => (  
                                    <span className = {classes.dialogTitle} key = {room.id}>
                                        Редактировать галереи {room.title}
                                    </span>
                                ))}
                            </DialogTitle>
                            <DialogContent dividers>
                                {RoomsImg.map((rinfo) => {
                                    return (
                                        <Box className = 'blockEditImage'>
                                            <span style = {{cursor: 'pointer'}}></span>
                                            <img width = '25%' style = {{padding: '0.5%', display: 'inline-block'}} alt = 'Фото номера' src = {`data:image/jpeg;base64,${rinfo.img}`}/>
                                        </Box>
                                    );
                                })}
                                <DialogActions>
                                    <Button onClick = {this.handleClickConfirmEditRoom} className = {classes.btn_stl}>Применить</Button>
                                    <Button onClick = {this.handleClickEditImage} className = {classes.btn_stl}>Закрыть</Button>
                                </DialogActions>
                            </DialogContent>
                        </Dialog>
                        <Dialog scroll = 'body' maxWidth = 'sm' open = {dialogEditRoomState} onClose={this.handleClickEditRoomDialog} aria-labelledby="customized-dialog-title">                
                            {RoomsData.filter(room => room.id === roomID).map(room => (  
                            <div key = {room.id}>
                                <DialogTitle id="customized-dialog-title">
                                    <span className = {classes.dialogTitle}>
                                        Редактировать описание {room.title}
                                    </span>
                                </DialogTitle>
                                <DialogContent dividers>
                                    <TextField3 
                                    InputLabelProps={{
                                        className: classes.dialogText
                                    }}
                                    InputProps={{
                                        className: classes.dialogText
                                    }}
                                    inputRef = {this.titleValueRef} variant="outlined" 
                                    label = "Название номера" fullWidth margin="dense" defaultValue = {room.title}/>
                                
                                    <TextField3 InputLabelProps={{
                                        className: classes.dialogText
                                    }}
                                    InputProps={{
                                        className: classes.dialogText
                                    }}
                                    inputRef = {this.startpriceValueRef} variant="outlined" defaultValue = {room.start_price} label = "Минимальная стоимость" fullWidth margin="dense"/>
                                    <TextField3 InputLabelProps={{
                                        className: classes.dialogText
                                    }}
                                    InputProps={{
                                        className: classes.dialogText
                                    }}
                                    inputRef = {this.max_personValueRef} variant="outlined" defaultValue = {room.max_person} label = "Максимальное кол-во взрослых мест" fullWidth margin="dense"/>
                                    
                                    <TextField3 InputLabelProps={{
                                        className: classes.dialogText
                                    }}
                                    InputProps={{
                                        className: classes.dialogText
                                    }}
                                    inputRef = {this.max_apersonValueRef} defaultValue = {room.max_aperson}
                                    label = "Максимальное кол-во дополнительных мест" variant="outlined" fullWidth margin="dense"/>
                                    
                                    <TextField3 InputLabelProps={{
                                        className: classes.dialogText
                                    }}
                                    InputProps={{
                                        className: classes.dialogText
                                    }}
                                    inputRef = {this.areaValueRef} defaultValue = {room.area}
                                    label = "Площадь номера (m²)" fullWidth margin="dense" variant="outlined"/>
                                    
                                    <TextField3 InputLabelProps={{
                                        className: classes.dialogText
                                    }}
                                    InputProps={{
                                        className: classes.dialogText
                                    }}
                                    inputRef = {this.ammountValueRef} defaultValue = {room.ammount}
                                    label = "Количество номеров" fullWidth margin="dense" variant="outlined"/>
                                    
                                    <TextField4 InputLabelProps={{
                                        className: classes.dialogText
                                    }}
                                    InputProps={{
                                        className: classes.dialogText
                                    }}
                                    multiline ={true} rows={6} inputRef = {this.descriptionValueRef}  defaultValue = {room.description}
                                    label = "Описание номера" fullWidth margin="dense" variant="outlined"/>
                                    <DialogActions>
                                        <Button onClick = {this.handleClickConfirmEditRoom} className = {classes.btn_stl}>Применить</Button>
                                        <Button onClick = {this.handleClickEditRoomDialog} className = {classes.btn_stl}>Закрыть</Button>
                                    </DialogActions>
                                </DialogContent>
                            </div>
                            ))}
                        </Dialog>
                        <Dialog scroll = 'body' maxWidth = 'sm' open = {dialogEditRoomPriceState} onClose={this.handleClickEditRoomPriceDialog} aria-labelledby="customized-dialog-title">                
                            {RoomsData.filter(room => room.id === roomID).map(room => (
                                <DialogTitle id="customized-dialog-title">
                                    <span className = {classes.dialogTitle} key = {room.id}>
                                        Редактировать стоимость {room.title}
                                    </span>
                                </DialogTitle>
                            ))}
                            {PriceData.filter(temp => temp.id === roomID).map(temp => (  
                                <div key = {temp.id}>
                                    <DialogContent dividers>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.bb_lowValueRef} variant="outlined"  label = "Низкий сезон [BB]" fullWidth margin="dense" defaultValue = {temp.bb_low}/>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}inputRef = {this.bb_summerValueRef} variant="outlined"  label = "Лето [BB]" fullWidth margin="dense" defaultValue = {temp.bb_summer}/>

                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}inputRef = {this.bb_highValueRef} variant="outlined"  label = "Высокий сезон [BB]" fullWidth margin="dense" defaultValue = {temp.bb_high}/>

                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.bb_hotValueRef} variant="outlined"  label = "Жара [BB]" fullWidth margin="dense" defaultValue = {temp.bb_hot}/>

                                        <TextField3 InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.fb_lowValueRef} variant="outlined"  label = "Низкий сезон [FB]" fullWidth margin="dense" defaultValue = {temp.fb_low}/>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.fb_summerValueRef} variant="outlined"  label = "Лето [FB]" fullWidth margin="dense" defaultValue = {temp.fb_summer}/>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.fb_highValueRef} variant="outlined"  label = "Высокий сезон [FB]" fullWidth margin="dense" defaultValue = {temp.fb_high}/>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.fb_hotValueRef} variant="outlined"  label = "Жара [FB]" fullWidth margin="dense" defaultValue = {temp.fb_hot}/>
                                        <br/>
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <TextField3 InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.m_bb_lowValueRef} variant="outlined"  label = "Доп.место Низкий сезон [BB]" fullWidth margin="dense" defaultValue = {temp.m_bb_low}/>
                                        <TextField3 InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.m_bb_summerValueRef} variant="outlined"  label = "Доп.место Лето [BB]" fullWidth margin="dense" defaultValue = {temp.m_bb_summer}/>
                                        <TextField3 InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.m_bb_highValueRef} variant="outlined"  label = "Доп.место Высокий сезон [BB]" fullWidth margin="dense" defaultValue = {temp.m_bb_high}/>
                                        <TextField3 InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.m_bb_hotValueRef} variant="outlined"  label = "Доп.место Жара [BB]" fullWidth margin="dense" defaultValue = {temp.m_bb_hot}/>
                    
                                        <TextField3 InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.m_fb_lowValueRef } variant="outlined"  label = "Доп.место Низкий сезон [FB]" fullWidth margin="dense" defaultValue = {temp.m_fb_low}/>
                                        <TextField3 InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.m_fb_summerValueRef} variant="outlined"  label = "Доп.место Лето [FB]" fullWidth margin="dense" defaultValue = {temp.m_fb_summer}/>
                                        <TextField3 InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.m_fb_highValueRef} variant="outlined"  label = "Доп.место Высокий сезон [FB]" fullWidth margin="dense" defaultValue = {temp.m_fb_high}/>
                                        <TextField3 InputLabelProps={{
                                            className: classes.dialogText
                                        }}
                                        InputProps={{
                                            className: classes.dialogText
                                        }}
                                        inputRef = {this.m_fb_hotValueRef} variant="outlined"  label = "Доп.место Жара [FB]" fullWidth margin="dense" defaultValue = {temp.m_fb_hot}/>

                                        <DialogActions>
                                            <Button onClick = {this.handleClickConfirmEditPriceRoom} className = {classes.btn_stl}>Применить</Button>
                                            <Button onClick = {this.handleClickEditRoomPriceDialog} className = {classes.btn_stl}>Закрыть</Button>
                                        </DialogActions>
                                    </DialogContent>
                                </div> 
                            ))}
                        </Dialog>
                        <Container>
                            <Snackbar open={alertUpdateSuccess} autoHideDuration={3000} onClose={this.handleAlertClose}>
                                <Alert onClose={this.handleAlertClose} severity="success" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                    Вы успешно обновили данные о номере.
                                    <br/>
                                    Обновите страницу для перезагрузки данных (F5).
                                </Alert>
                            </Snackbar>
                            <Snackbar open={alertNoFullError} autoHideDuration={3200} onClose={this.handleAlertClose}>
                                <Alert onClose={this.handleAlertClose} severity="error" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                    Необходимо заполнить все обязательные поля.
                                </Alert>
                            </Snackbar>
                        </Container>
                    </Box>
                </>
            )
        }
    }
}


export default withStyles(useStyles)(EditRooms);

/* 
    
    <BottomNavigation showLabels>
        <BottomNavigationAction onClick = {this.handleClickAddRoomDialog} label="Добавить новый номер" icon={<AddCircleOutlineRoundedIcon/>}/>
        <BottomNavigationAction label="Редактировать информацию о номере" icon={<EditRoundedIcon/>}/>
    </BottomNavigation> 
*/
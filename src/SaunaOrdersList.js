import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Button, Container, Snackbar, Dialog, DialogTitle, DialogContent, 
    TextField, MenuItem, DialogActions, Paper, Box,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Link} from '@material-ui/core'
import {BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HotelRoundedIcon from '@material-ui/icons/HotelRounded';
import BathtubRoundedIcon from '@material-ui/icons/BathtubRounded'
import Alert from '@material-ui/lab/Alert';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    container: {
        minHeight: 100,
    },
    dialogTitle:{
        fontSize: '20px',
        fontFamily: "'Comfortaa', cursive",
        textRendering: 'geometricPrecision',
        [mediaQueries.phone]: {
            fontSize: '18px',
        }
    },
    roomDescription:{
        fontFamily: "'Comfortaa', cursive",
        textRendering: 'geometricPrecision',
        fontSize: '15px',
        [mediaQueries.phone]: {
            fontSize: '14px',
        }
    },
    tableText:{
        fontSize: '14px',
        fontFamily: "'Montserrat Alternates', sans-serif",
        fontWeight: '400',
        [mediaQueries.phone]: {
            fontSize: '13px',
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


const TextFieldName = withStyles({
    root: {
        backgroundColor: 'rgb(245,245,245)',
        width: '100%',
        margin: '2% 1%',
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


const TextField2 = withStyles({
    root: {
        width: '50%',
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

const columns = [
    { id: 'id', label: '№', align: 'center', minWidth: 10},
    { id: 'status', label: 'Статус', align: 'center', minWidth: 20},
    { id: 'name', label: 'Фамилия Имя Отчество', align: 'center', minWidth: 100},
    { id: 'phone', label: 'Номер телефона', align: 'center', minWidth: 115},
    { id: 'email', label: 'Email', align: 'center', minWidth: 80},
    { id: 'russian_sauna', label: 'Русская баня', align: 'center', minWidth: 10},
    { id: 'xammam_sauna', label: 'Хаммам', align: 'center', minWidth: 10},
    { id: 'person', label: 'Места', align: 'center', minWidth: 10},
    { id: 'date', label: 'Дата', align: 'center', minWidth: 120},
    { id: 'time', label: 'Время посещения',align: 'center', minWidth: 20},
    { id: 'hour', label: 'Количество часов',align: 'center', minWidth: 20},
    { id: 'coment', label: 'Коментарий к заказу', align: 'center', minWidth: 130},
];

const orderStatus = [
    {
      value: '1',
      label: 'Ожидает одобрения',
    },
    {
      value: '2',
      label: 'Одобрено',
    },
    {
      value: '3',
      label: 'Отклонено',
    }
];


const OrderStatusColor = temp => {
    let color;
    if(temp === '1') color = '#fcba03FF';
    else if(temp === '2') color = '#70d622FF';
    else color = '#e80505FF';
    return color;
};

function refreshPage(){ 
    window.location.reload(); 
}

export class SaunaOrdersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            isLoaded: false,
            page: 0,
            rowsPerPage: 5,
            OrdersData:[],
            dialogUpdateStatus: false,
            alertError: false,
            alertUpdateSuccess: false,
            orderID: -1
        };
        this.statusValueRef =  React.createRef();
        this.personValueRef = React.createRef();
        this.timeValueRef = React.createRef();
        this.hourValueRef = React.createRef();
        this.dateValueRef = React.createRef();
        this.cometValueRef = React.createRef();

        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.handleClickUpdateStatusDialog = this.handleClickUpdateStatusDialog.bind(this);
        this.handleConfirmUpdateStatus = this.handleConfirmUpdateStatus.bind(this);

        this.handleAlertShow = this.handleAlertShow.bind(this);
        this.handleAlertClose = this.handleAlertClose.bind(this);
    }
    componentDidMount() {
        //fetch('http://backend.com/load_sorder.php')
        fetch('http://a0624502.xsph.ru/modules/load_sorder.php')
        .then(response => response.json())
        .then(
            (result) =>{
                this.setState({
                    isLoaded: true,
                    OrdersData: result
                });
            },
            (error) =>{
                this.setState({
                    error: error
                });
            }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    handleClickUpdateStatusDialog(event){
        const id = event.currentTarget.id;
        this.setState(state => ({
            dialogUpdateStatus: !state.dialogUpdateStatus,
            orderID: id
        }));
    }
    handleConfirmUpdateStatus(){
        var status = this.statusValueRef.current.value;
        var date = this.dateValueRef.current.value;
        var hour = this.hourValueRef.current.value;
        var person = this.personValueRef.current.value;
        var time = this.timeValueRef.current.value;
        var coment = this.cometValueRef.current.value;
        var updateOrderData = {
            ID: this.state.orderID,
            status: status,
            date: date,
            hour:hour,
            time: time,
            person: person,
            coment:coment
        };
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateOrderData)
        };
        //fetch('http://backend.com/update_sorder.php', requestOptions)
        fetch('http://a0624502.xsph.ru/modules/update_sorder.php', requestOptions)
        .then((response) => response.json())
        .then((responseData) => {
            switch(responseData)
            {
                case 'not_full':{
                    this.handleAlertShow(0); // Показываем Alert Неполные данные
                    break;
                }
                case 'yes':{
                    this.handleAlertShow(1); // Показываем Alert Cтатус изменён
                    break;
                }
                default:{
                    alert('Неизвестный ответ с сервера. Стадия: Одобрения заявки на сауну.');
                    break;
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    handleChangePage(event, newPage){
        this.setState(() => ({
            page: newPage
        }));
    }
    handleChangeRowsPerPage(event){
        this.setState(() => ({
            rowsPerPage: event.target.value,
            page: 0
        }));
    }
    handleAlertShow(event) {
        switch(event)
        {
            case 0:{    // Неполные данные
                this.setState(state => ({
                    dialogUpdateStatus: !state.dialogUpdateStatus,
                    alertError: true
                }));
                break;
            }
            case 1:{    // Всё ок
                this.setState(state => ({
                    dialogUpdateStatus: !state.dialogUpdateStatus,
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
        if(this.state.dialogUpdateStatus === false)
        {
            refreshPage();
        }
    }
    render() {
        const {classes} = this.props;
        const {error, isLoaded, OrdersData, page, rowsPerPage, orderID, dialogUpdateStatus,
                alertUpdateSuccess, alertError} = this.state;
        if(error){
            return <p>{error}</p>
        } 
        else if (!isLoaded) {
            return (
                <div className="container">
                    <div className="item-1"></div>
                    <div className="item-2"></div>
                    <div className="item-3"></div>
                    <div className="item-4"></div>
                    <div className="item-5"></div>
                </div>
            )
        }
        else{
            return (
            <>
                    <main>
                        <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                    className = {classes.tableText}
                                                >
                                                    <strong>
                                                    {column.label}
                                                    </strong>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {OrdersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                                            return (
                                                <TableRow hover tabIndex={-1}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell id = {row.id} key={column.id} align={column.align} onClick = {this.handleClickUpdateStatusDialog} className = {classes.tableText}>
                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                component="div"
                                count={OrdersData.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={this.handleChangePage}
                                onRowsPerPageChange={this.handleChangeRowsPerPage}
                            />
                        </Paper>
                        <br/>
                        <BottomNavigation>
                            <Link href = '/r_orders' style = {{textDecoration: 'none'}}>
                                <BottomNavigationAction label="Номера" value="rooms" icon={<HotelRoundedIcon/>}/>
                            </Link>
                            <Link href = '/s_orders' style = {{textDecoration: 'none'}}>
                                <BottomNavigationAction selected label="Сауна" value="sauna" icon={<BathtubRoundedIcon/>}/>
                            </Link>
                        </BottomNavigation>   
                        <Container>
                            <Dialog scroll = 'body' maxWidth = 'sm' open = {dialogUpdateStatus} onClose={this.handleClickUpdateStatusDialog} aria-labelledby="customized-dialog-title">                
                                {OrdersData.filter(temp => temp.id === orderID).map(temp => (
                                <Box key = {temp.id}>
                                    <DialogTitle id="customized-dialog-title">
                                        <span className = {classes.dialogTitle}>
                                            Заявка № {temp.id}
                                        </span>
                                    </DialogTitle>
                                    <DialogContent dividers>
                                        <TextFieldName 
                                            InputLabelProps={{
                                                className: classes.roomDescription
                                            }}
                                            InputProps={{
                                                className: classes.roomDescription
                                            }}
                                            disabled variant = "outlined" label = "ФИО" fullWidth margin="dense" defaultValue = {temp.name}/>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.roomDescription
                                        }}
                                        InputProps={{
                                            className: classes.roomDescription
                                        }}
                                        disabled variant = "outlined" label = "Email" fullWidth margin="dense" defaultValue = {temp.email}/>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.roomDescription
                                        }}
                                        InputProps={{
                                            className: classes.roomDescription
                                        }}
                                        disabled variant = "outlined" label = "Мобильный телефон" fullWidth margin="dense" defaultValue = {temp.phone}/>
                                        <FormGroup row>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked = {Boolean(Number(temp.russian_sauna))}
                                                    />
                                                }
                                                label="Русская баня"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked = {Boolean(Number(temp.xammam_sauna))}
                                                    />
                                                }
                                                label="Турецкая баня Хаммам"
                                        />
                                        </FormGroup>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.roomDescription
                                        }}
                                        InputProps={{
                                            className: classes.roomDescription
                                        }}
                                        inputRef = {this.personValueRef}  variant="outlined" label = "Места"  margin="dense" defaultValue = {temp.person}/>
                                        <TextField3 
                                        InputLabelProps={{
                                            className: classes.roomDescription
                                        }}
                                        InputProps={{
                                            className: classes.roomDescription
                                        }}
                                        inputRef = {this.hourValueRef}  variant="outlined" label = "Количество часов" fullWidth margin="dense" defaultValue = {temp.hour}/>
                                        <TextField4 
                                        InputLabelProps={{
                                            className: classes.roomDescription
                                        }}
                                        InputProps={{
                                            className: classes.roomDescription
                                        }}
                                        inputRef = {this.cometValueRef}  multiline ={true} rows={6} defaultValue = {temp.coment} label = "Коментарий к заказу" fullWidth margin="dense" variant="outlined"/>
                                        <TextField2
                                            inputRef = {this.dateValueRef} 
                                            id="date"
                                            label="Дата"
                                            type="date"
                                            defaultValue = {temp.date}
                                            InputLabelProps={{
                                                shrink:true,
                                                className: classes.roomDescription
                                            }}
                                            InputProps={{
                                                className: classes.roomDescription
                                            }}
                                        />
                                        <TextField2
                                            inputRef = {this.timeValueRef} 
                                            id="time"
                                            label="Время посещения"
                                            type="time"
                                            defaultValue = {temp.time}
                                            InputLabelProps={{
                                                shrink:true,
                                                className: classes.roomDescription
                                            }}
                                            InputProps={{
                                                className: classes.roomDescription
                                            }}
                                        />
                                        <br/>
                                        <TextField2 margin="dense"
                                            id="standard-select-currency"
                                            select
                                            autoFocus
                                            label="Статус заявки"
                                            helperText="Выберите статус заявки"
                                            defaultValue = {temp.status}
                                            inputRef = {this.statusValueRef}
                                            style = {{color: OrderStatusColor(temp.status)}}
                                            InputLabelProps={{
                                                className: classes.roomDescription
                                            }}
                                            InputProps={{
                                                className: classes.roomDescription
                                            }}
                                        >
                                        {orderStatus.map((option) => (
                                            <MenuItem key={option.value} value={option.value} style = {{color: OrderStatusColor(option.value)}}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                        </TextField2>
                                        <DialogActions>
                                            <Button onClick = {this.handleConfirmUpdateStatus} className = {classes.btn_stl}>Применить</Button>
                                            <Button onClick = {this.handleClickUpdateStatusDialog} className = {classes.btn_stl}>Закрыть</Button>
                                        </DialogActions>
                                    </DialogContent>
                                </Box>
                                ))}
                            </Dialog>
                        </Container>
                        <Container>
                            <Snackbar open={alertUpdateSuccess} autoHideDuration={5000} onClose={this.handleAlertClose}>
                                <Alert onClose={this.handleAlertClose} severity="success" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                    Вы успешно обновили статус заявки. Не забудьте сообщить об этом клиенту.
                                </Alert>
                            </Snackbar>
                            <Snackbar open={alertError} autoHideDuration={3200} onClose={this.handleAlertClose}>
                                <Alert onClose={this.handleAlertClose} severity="error" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                    Ошибка. Нельзя оставлять поля пустыми.
                                </Alert>
                            </Snackbar>
                        </Container>
                    </main>
            </>
            );
        }
    }
}

export default withStyles(useStyles)(SaunaOrdersList);

import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Button, Container, Snackbar, Dialog, DialogTitle, DialogContent, 
        TextField, MenuItem, DialogActions, Paper, Box, Typography,
        Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Link} from '@material-ui/core'
import {BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HotelRoundedIcon from '@material-ui/icons/HotelRounded';
import BathtubRoundedIcon from '@material-ui/icons/BathtubRounded';
import Alert from '@material-ui/lab/Alert';

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
        fontSize: '22px',
        fontFamily: "'Comfortaa', cursive",
        textAlign: 'center',
        [mediaQueries.phone]: {
            fontSize: '18px',
        }
    },
    dialogText:{
        fontFamily: "'Comfortaa', cursive",
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
    { id: 'name', label: 'ФИО', align: 'center', minWidth: 100},
    { id: 'phone', label: 'Номер телефона', align: 'center', minWidth: 115},
    { id: 'email', label: 'Email', align: 'center', minWidth: 100},
    { id: 'type', label: 'Тип номера', align: 'center', minWidth: 30},
    { id: 'person', label: 'Места', align: 'center', minWidth: 30},
    { id: 'more_person', label: 'Доп. места', align: 'center', minWidth: 30},
    { id: 'arrival_date', label: 'Дата заезда', align: 'center', minWidth: 120},
    { id: 'departure_date', label: 'Дата выезда', align: 'center', minWidth: 120},
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

const getOrderRoom = temp => {
    let content;
    if(temp === '1') content = 'Апартаменты';
    if(temp === '2') content = 'Люкс';
    if(temp === '3') content = 'Полулюкс';
    if(temp === '4') content = 'Стандарт 2-х местный тип А';
    if(temp === '5') content = 'Стандарт 2-х местный тип Б';
    if(temp === '6') content = 'Стандарт 3-х местный';
    return content;
};

function refreshPage(){ 
    window.location.reload(); 
}

export class RoomOrdersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            isLoaded: false,
            page: 0,
            rowsPerPage: 5,
            OrdersData: [],
            dialogUpdateStatus: false,
            alertError: false,
            alertUpdateSuccess: false,
            orderID: -1
        };
        this.arrival_dateValueRef = React.createRef();
        this.departure_dateValueRef = React.createRef();
        this.statusValueRef =  React.createRef();
        this.personValueRef = React.createRef();
        this.m_personValueRef = React.createRef();
        this.cometValueRef = React.createRef();

        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.handleClickUpdateStatusDialog = this.handleClickUpdateStatusDialog.bind(this);
        this.handleConfirmUpdateStatus = this.handleConfirmUpdateStatus.bind(this);

        this.handleAlertShow = this.handleAlertShow.bind(this);
        this.handleAlertClose = this.handleAlertClose.bind(this);
    }
    componentDidMount() {

        //fetch('http://backend.com/load_rorder.php')
        fetch('http://a0624502.xsph.ru/modules/load_rorder.php')
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
                    error:error
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
        var arrival_date = this.arrival_dateValueRef.current.value;
        var departure_date = this.departure_dateValueRef.current.value;
        var person = this.personValueRef.current.value;
        var mperson = this.m_personValueRef.current.value;
        var coment = this.cometValueRef.current.value;
        var updateOrderData = {
            ID: this.state.orderID,
            status: status,
            arrival_date: arrival_date,
            departure_date: departure_date,
            person: person,
            mperson: mperson,
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
        //fetch('http://backend.com/update_rorder.php', requestOptions)
        fetch('http://a0624502.xsph.ru/modules/update_rorder.php', requestOptions)
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
                    alert('Неизвестный ответ с сервера. Стадия: Одобрения заявки на номеры.');
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
        else
        {
            return (
                <>
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
                                                <strong>{column.label}</strong>
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
                                                <TableCell id = {row.id} key={column.id} align={column.align} 
                                                    onClick = {this.handleClickUpdateStatusDialog}
                                                    className = {classes.tableText}>
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
                    <BottomNavigation>
                        <Link href = '/r_orders' style = {{textDecoration: 'none'}}>
                            <BottomNavigationAction selected label="Номера" value="rooms" icon={<HotelRoundedIcon/>}/>
                        </Link>
                        <Link href = '/s_orders' style = {{textDecoration: 'none'}}>
                            <BottomNavigationAction label="Сауна" value="sauna" icon={<BathtubRoundedIcon/>}/>
                        </Link>
                    </BottomNavigation>  
                    <Container>
                    <Dialog scroll = 'body' maxWidth = 'md' open = {dialogUpdateStatus} onClose={this.handleClickUpdateStatusDialog} aria-labelledby="customized-dialog-title">                
                        {OrdersData.filter(temp => temp.id === orderID).map(temp => (
                        <Box key = {temp.id}>
                            <DialogTitle id="customized-dialog-title">
                                <Typography className = {classes.dialogTitle}>
                                    Заявка № {temp.id}                                      
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
                                    disabled size="small" variant="outlined" label = "ФИО" fullWidth margin="dense" defaultValue = {temp.name}
                                />
                                <br/>
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
                                    disabled size="small" variant="outlined" label = "Email" fullWidth margin="dense" defaultValue = {temp.email}
                                />
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
                                    disabled size="small" variant="outlined" label = "Мобильный телефон" fullWidth margin="dense" defaultValue = {temp.phone}
                                   
                                />
                                <br/>
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
                                    disabled size="small" variant="outlined" label = "Тип номера" fullWidth margin="dense" defaultValue = {getOrderRoom(temp.type)}
                                    
                                />
                                <br/>
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
                                    inputRef = {this.personValueRef} size="small" variant="outlined" label = "Взрослые места" margin="dense" defaultValue = {temp.person}
                                    
                                />
                                <br/>
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
                                    inputRef = {this.m_personValueRef} size="small" variant="outlined" label = "Дополнительные места" margin="dense" defaultValue = {temp.more_person}
                                    
                                />
                                <br/>
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
                                    inputRef = {this.cometValueRef}  multiline ={true} rows={6} defaultValue = {temp.coment} label = "Коментарий к заказу" fullWidth margin="dense" variant="outlined"
                                    
                                />
                                <br/>
                                <TextField2
                                    inputRef = {this.arrival_dateValueRef} 
                                    size="small"
                                    id="arrival_date"
                                    label="Дата заезда"
                                    type="date"
                                    defaultValue = {temp.arrival_date}
                                    InputLabelProps={{
                                        className: classes.dialogText,
                                        shrink:true
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
                                    label="Дата выезда"
                                    size="small"
                                    type="date"
                                    defaultValue = {temp.departure_date}
                                    InputLabelProps={{
                                        className: classes.dialogText,
                                        shrink:true
                                    }}
                                    InputProps={{
                                        className: classes.dialogText
                                    }}
                                    inputProps = {{
                                        className: classes.dialogText
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
                                        className: classes.dialogText
                                    }}
                                    InputProps={{
                                        className: classes.dialogText
                                    }}
                                    inputProps = {{
                                        className: classes.dialogText
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
                </>
            );
        }
    }
}

export default withStyles(useStyles)(RoomOrdersList);

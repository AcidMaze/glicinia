import React, { Component } from 'react';
import {TextField, Typography, Container, Button,  Snackbar, 
        Dialog, DialogTitle, DialogContent, DialogActions, Box} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Pagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Skeleton from '@material-ui/lab/Skeleton';
import { Icon } from '@iconify/react';

const mediaQueries = {
	phone: '@media only screen and (min-width: 280px) and (max-width: 480px)',
    tablet: '@media only screen and (min-width: 481px) and (max-width: 1023px)',
    iphone4_5: '@media only screen and (-webkit-min-device-pixel-ratio : 1.5) and (max-width: 320px)'
}

const useStyles = theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
    },
    btn_stl:{
        color: '#527c82ff',
        fontSize: '15.5px',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '14px'
        }
    },
    Title:{
        color: '#000000', 
        fontSize: '36px',
        fontFamily: "'Exo 2', sans-serif",
        textAlign: 'left',
        float: 'left',
        [mediaQueries.phone]: {
            lineHeight: '35px',
            fontSize: '30px',
        }
    },
    blockRevTitletext:{
        position: 'relative',
        overflow: 'hidden',
        verticalAlign: 'middle',
        fontFamily: "'Comfortaa', cursive",
        fontSize: '33px',
        float: 'left',
        width: '100%',
        [mediaQueries.phone]: {
            fontSize: '29px',
            float: 'none',
            textAlign: 'center',
            width: '100%',
        },
        [mediaQueries.tablet]: {
            fontSize: '31px',
            width: '100%',
        }
    },
    blockRevtext:{
        position: 'relative',
        overflow: 'auto',
        overflowX: 'hidden',
        maxHeight: '345px',
        width: '100%',
        float: 'right',
        padding: '3px',
        fontFamily: "'Montserrat Alternates', sans-serif",
        fontWeight: '400',
        fontSize: '14px',
        [mediaQueries.phone]: {
            fontSize: '14px',
            marginTop: '1em',
            width: '100%',
            float: 'none',
        },
        [mediaQueries.tablet]: {
            fontSize: '15px',
            marginTop: '1em',
            width: '100%',
            float: 'none',
        }
    },
    ImgRev:{
        position: 'relative',
        width: '60%',
        float: 'left',
        [mediaQueries.phone]: {
            marginTop: '1em',
            width: '100%',
            float: 'none'
        },
    },
    frameSt:{
        position: 'absolute',
        top: 0,
        right: '10px',
        width: '72px',
        [mediaQueries.phone]: {
            opacity: 0
        },
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
        fontSize: '16px',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '14px',
        }
    },
    viewPC:{
        display:'block',
        [mediaQueries.phone]: {
            display:'none'
        }
    },
    viewMobile:{
        display:'none',
        [mediaQueries.phone]: {
            display:'block'
        },
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
        float: 'right',
        '&:hover': {
            backgroundColor: 'rgb(200, 90, 233)',
        },
        [mediaQueries.phone]: {
            fontSize: '15.5px',
            [mediaQueries.iphone4_5]: {
                fontSize: '15px',
                paddingLeft: '10px',
                paddingRight: '10px',
            }
        }
    },
}))(Button);

const ColorPagination = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('rgb(192, 27, 233)'),
        marginBottom: '2rem',
        "& .MuiPaginationItem-root": {
            backgroundColor: 'rgb(192, 27, 233)',
            verticalAlign: 'middle',
            alignItems:'center',
            justifyContent:'center',
        },
        '& .MuiPaginationItem-root:hover': {
            backgroundColor: 'rgb(200, 90, 233)'
        },
    },
}))(Pagination);


const TextField3 = withStyles({
    root: {
        backgroundColor: 'rgb(245,245,245)',
        borderRadius: '60px',
        width: '100%',
        marginLeft: '0px',
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
        },
    },
})(TextField);

const TextField4 = withStyles({
    root: {
        backgroundColor: 'rgb(245,245,245)',
        borderRadius: '15px',
        width: '100%',
        marginLeft: '0px',
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
        },
    },
})(TextField);

const getSourceType = temp => {
    let content = [];
    if(temp.includes('https:'))
    {
        content.push(<a className = 'link-decor2' href = {temp}>{temp}</a>);
    }
    else if(temp.includes('http:'))
    {
        content.push(<a className = 'link-decor2' href = {temp}>{temp}</a>);
    }
    else
    {
        content.push(<span style = {{fontFamily: "'Montserrat Alternates', sans-serif",fontWeight: '400'}}>{temp}</span>);
    }
    return content;
};


const checkImage = temp => {
    let content = [];
    if(temp > '')
    {
        content.push(<img loading = 'lazy' style = {{objectFit: 'contain', width:'95%', maxHeight: '400px'}}alt = 'Фотография отзыва' src = {`data:image/jpeg;base64,${temp}`}/>);
    }
    else 
    {
        content.push(<Icon style = {{width:'95%'}} icon="ic:round-no-photography" width="144" height="144" inline={true}/>);
    }
    return content;
};



export class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            isLoaded: false,
            alertNoFullError: false,
            alertReviewError: false,
            alertReviewSuccess: false,
            dialogReviewState: false, 
            todos: [],
            currentPage: 1,
            todosPerPage: 5,
            raiting: 0.0
        };
        this.nameValueRef = React.createRef();
        this.revtextValueRef = React.createRef();
        this.revsourceValueRef = React.createRef();
        this.RefScrollContainer = React.createRef();
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleClickReviewDialog = this.handleClickReviewDialog.bind(this);
        this.handleClickSendReview = this.handleClickSendReview.bind(this);
        this.handleRaitingChange = this.handleRaitingChange.bind(this)
        this.handleAlertShow = this.handleAlertShow.bind(this);
        this.handleAlertClose = this.handleAlertClose.bind(this);
        
    }
    handleRaitingChange(event, newValue){
        event.preventDefault();
        this.setState({
            raiting: newValue
        });
    }
    handleClickSendReview(){
            var name = this.nameValueRef.current.value;
            var text = this.revtextValueRef.current.value;
            var source = this.revsourceValueRef.current.value;
            var raiting = this.state.raiting;
            var orderData = {
                name: name,
                text: text,
                source: source,
                raiting: raiting
            };
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            };
            //fetch('http://backend.com/add_review.php', requestOptions)
            fetch('http://a0624502.xsph.ru/modules/add_review.php', requestOptions)
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

                        alert('Неизвестный ответ с сервера. Стадия: Оставление отзыва.');
                        break;
                    }
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    handleClickReviewDialog(){
        this.setState(state => ({
            dialogReviewState: !state.dialogReviewState,
        }));
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
                    dialogReviewState: !state.dialogReviewState,
                    alertReviewError: true
                }));
                break;
            }
            case 2:{// Всё ок
                this.setState(state => ({
                    dialogReviewState: !state.dialogReviewState,
                    alertReviewSuccess: true
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
            alertReviewSuccess: false,
            alertReviewError: false,
            alertNoFullError: false,
        }));
    }
    componentDidMount() {
        
        fetch('http://backend.com/load_reviews.php')
        //fetch('http://a0624502.xsph.ru/modules/load_reviews.php')
        .then(response => response.json())
        .then(
            (result) =>{
                this.setState({
                    isLoaded: true,
                    todos: result
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
    handlePageClick(event,newPage) {
        event.preventDefault();
        this.setState({
            currentPage: newPage
        });
    }

    render() {
        const {classes} = this.props;
        let { todos, currentPage, todosPerPage, isLoaded, error, 
            alertNoFullError, alertReviewSuccess, alertReviewError } = this.state;
        let indexOfLastTodo = currentPage * todosPerPage;
        let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        let currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
        let last = Math.ceil(todos.length/todosPerPage);
        if(error)
        {
            return <p>{error}</p>
        } 
        else if (!isLoaded) {
            return (
                <>
                    <Box className = {classes.root}>
                        <Container maxWidth = 'xl' disableGutters = {true} className = {classes.viewPC}>
                            <Box style = {{padding: '2% 5%'}}>
                                <Typography className = {classes.Title}>
                                    Отзывы
                                </Typography>
                                <ColorButton onClick = {this.handleClickReviewDialog}>
                                    Оставить отзыв
                                </ColorButton>      
                            </Box>
                            <Box style = {{padding: '1.25% 5%'}}>
                                <Skeleton className='reviews-container' variant="rect" height='370px' />
                            </Box> 
                            <Box style = {{padding: '0% 5%'}}>
                                <Skeleton className='reviews-container' variant="rect" height='300px' />
                            </Box> 
                            <Box style = {{padding: '0% 5%'}}>
                                <Skeleton className='reviews-container' variant="rect" height='170px' />
                            </Box> 
                            <Box style = {{padding: '0% 5%'}}>
                                <Skeleton className='reviews-container' variant="rect" height='410px' />
                            </Box> 
                            <Box style = {{padding: '0% 5%'}}>
                                <Skeleton className='reviews-container' variant="rect" height='250px' />
                            </Box> 
                        </Container>
                        <Container maxWidth = 'xl' disableGutters = {true} className = {classes.viewMobile}>
                            <Box style = {{padding: '2% 5%'}}>
                                <Typography className = {classes.Title}>
                                    Отзывы
                                </Typography>
                                <ColorButton onClick = {this.handleClickReviewDialog}>
                                    Оставить отзыв
                                </ColorButton>      
                            </Box>
                            <Box style = {{padding: '1.25% 5%'}}>
                                <Skeleton className='reviews-container' variant="rect" height='400px' />
                            </Box> 
                            <Box style = {{padding: '0% 5%'}}>
                                <Skeleton className='reviews-container' variant="rect" height='240px' />
                            </Box> 
                            <Box style = {{padding: '0% 5%'}}>
                                <Skeleton className='reviews-container' variant="rect" height='170px' />
                            </Box> 
                            <Box style = {{padding: '0% 5%'}}>
                                <Skeleton className='reviews-container' variant="rect" height='410px' />
                            </Box> 
                            <Box style = {{padding: '0% 5%'}}>
                                <Skeleton className='reviews-container' variant="rect" height='250px' />
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
                                <Box style = {{padding: '2% 5%'}} ref = {this.RefScrollContainer}>
                                    <Typography className = {classes.Title}>
                                        Отзывы
                                    </Typography>
                                    <ColorButton onClick = {this.handleClickReviewDialog}>
                                        Оставить отзыв
                                    </ColorButton>
                                    <br/>
                                </Box>
                                <Box style = {{padding: '0% 5%'}} className = {classes.viewPC}>
                                    {currentTodos.map(row => {
                                        return (
                                            <Box className='reviews-container' key = {row.id}>	
                                                <Box style = {{padding: '15px'}}>   
                                                    <Box style = {{display:'inline-block'}}>
                                                        <Typography className = {classes.blockRevTitletext} component="p">
                                                            {row.name}
                                                            
                                                            <Rating style={{verticalAlign: 'middle',marginLeft:'5px'}} size= 'large' precision={0.5} value={row.raiting} readOnly/>
                                                        </Typography>
                                                    </Box>                                                       
                                                    <Box style = {{display:'flex', alignItems:'center',justifyContent:'center'}}>
                                                        <Box className = {classes.ImgRev}>
                                                            {checkImage(row.img)}
                                                        </Box>
                                                        <Typography className = {classes.blockRevtext} component="p">
                                                            {row.text}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography className = {classes.blockRevtext} style = {{width: '99%',float: 'right'}} component='p'>
                                                            <br/>
                                                            <strong>Источник: {getSourceType(row.source)}</strong>
                                                            <br/>
                                                            <br/>
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <img alt = '"' className = {classes.frameSt}src = '/image/frame.png'/>
                                            </Box>
                                        )
                                    })} 
                                </Box>
                                <Box style = {{padding: '2% 5%'}} className = {classes.viewMobile}>
                                    {currentTodos.map(row => {
                                        return (
                                            <Box className='reviews-container' key = {row.id}>	
                                                <Box style = {{padding: '15px'}}>   
                                                    <Box style = {{display:'inline-block'}}>
                                                        <Typography className = {classes.blockRevTitletext} component="p">
                                                            {row.name}
                                                            <Rating style={{verticalAlign: 'middle',marginLeft:'5px'}} size= 'large' precision={0.5} value={row.raiting} readOnly/>
                                                        </Typography>
                                                    </Box>                                                       
                                                    <Box style = {{display:'inline-block'}}>
                                                        <Box className = {classes.ImgRev}>
                                                            {checkImage(row.img)}
                                                        </Box>
                                                        <Typography className = {classes.blockRevtext} component="p">
                                                            {row.text}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography className = {classes.blockRevtext} style = {{width: '99%',float: 'right'}} component='p'>
                                                            <br/>
                                                            <strong>Источник: {getSourceType(row.source)}</strong>
                                                            <br/>
                                                            <br/>
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <img alt = '"' className = {classes.frameSt}src = '/image/frame.png'/>
                                            </Box>
                                        )
                                    })} 
                                </Box>
                                <ColorPagination
                                style = {{justifyContent:'center', display:'flex'}}
                                className = 'pagi'
                                count={last}
                                page={currentPage}
                                onChange={this.handlePageClick}
                                onClick = {this.scrollToMyRef = () => {window.scrollTo(0, this.RefScrollContainer.current.offsetTop)}}
                                color = 'secondary'
                                showFirstButton showLastButton/> 
                            </Container>
                        </Box>
                        <Container>
                            <Dialog scroll = 'body' maxWidth = 'sm' open = {this.state.dialogReviewState} onClose={this.handleClickReviewDialog} aria-labelledby="customized-dialog-title">
                                    <DialogTitle id="customized-dialog-title">
                                        <span className = {classes.dialogTitle}>
                                            Оставить отзыв
                                        </span>
                                    </DialogTitle>
                                    <DialogContent>
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
                                        inputRef = {this.nameValueRef} variant="outlined" label = "ФИО" fullWidth margin="dense"/>
                                        
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
                                        inputRef = {this.revtextValueRef} variant="outlined" multiline ={true} rows={6}  label = "Текст отзыва" fullWidth margin="dense"/>
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
                                        inputRef = {this.revsourceValueRef} variant="outlined" label = "Источник" fullWidth margin="dense"/>
                                        <Rating
                                            name="simple-controlled"
                                            value={this.state.raiting}
                                            precision={0.5}
                                            defaultValue = '0'
                                            onChange={this.handleRaitingChange}
                                        />
                                        <DialogActions>
                                            <Button onClick = {this.handleClickSendReview} className = {classes.btn_stl}>Отправить</Button>
                                            <Button onClick = {this.handleClickReviewDialog} className = {classes.btn_stl}>Закрыть</Button>
                                        </DialogActions>
                                    </DialogContent>
                            </Dialog>
                            <Snackbar open={alertReviewError} autoHideDuration={3000} onClose={this.handleAlertClose}>
                                <Alert onClose={this.handleAlertClose} severity="error" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                    Ошибка. Повторите попытку чуть позже.
                                </Alert>
                            </Snackbar>
                            <Snackbar open={alertReviewSuccess} autoHideDuration={5000} onClose={this.handleAlertClose}>
                                <Alert onClose={this.handleAlertClose} severity="success" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                    Спасибо за отзыв! Ваше мнение очень важно для нас.
                                </Alert>
                            </Snackbar>
                            <Snackbar open={alertNoFullError} autoHideDuration={3200} onClose={this.handleAlertClose}>
                                <Alert onClose={this.handleAlertClose} severity="warning" style = {{fontSize: '13px',fontFamily: "'Comfortaa', cursive"}}>
                                    Необходимо заполнить все обязательные поля*.
                                </Alert>
                            </Snackbar>
                        </Container>
                </>
            );
        }
    }
}

export default withStyles(useStyles)(Reviews);
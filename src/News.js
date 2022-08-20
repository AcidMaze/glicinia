import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, Container, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Box} from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import Skeleton from '@material-ui/lab/Skeleton';

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
        width: '100%',
    },
    modalPC:{
        display:'block',
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
    sliderPC:{
        display:'block',
        position: 'relative',
        [mediaQueries.phone]: {
            display:'none'
        },
        // [mediaQueries.tablet]: {
        //     display:'none'
        // }
    },
    sliderMobile:{
        display:'none',
        position: 'relative',
        [mediaQueries.phone]: {
            display:'block'
        },
        // [mediaQueries.tablet]: {
        //     display:'block'
        // }
    },
    stText_1:{
        fontFamily: "'Oswald', sans-serif", 
        fontSize:'47px', 
        lineHeight: '45px', 
        textAlign: 'left',
        color: 'white',
        [mediaQueries.phone]: {
            fontSize:'33px',
            lineHeight: '35px',
            width: '56%',
        },
        [mediaQueries.tablet]: {
            fontSize:'41px',
            lineHeight: '40px', 
            width: '90%'
        }
    },
    stText_2:{
        color: '#000000', 
        fontFamily: "'Montserrat Alternates', sans-serif", 
        fontWeight: '400',
        [mediaQueries.phone]: {
            fontSize: '15px'
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
    ImgNews:{
        position: 'relative',
        display: 'block',
        width: '30%',
        float: 'left',
        [mediaQueries.phone]: {
            marginTop: '1em',
            width: '100%',
            float: 'none'
        },
        [mediaQueries.tablet]: {
            marginTop: '1em',
            width: '100%',
            float: 'none'
        }
    },
    blockNewsText:{
        position: 'relative',
        overflow: 'auto',
        overflowX: 'hidden',
        maxHeight: '315px',
        width: '56%',
        float: 'right',
        padding: '3px',
        fontFamily: "'Comfortaa', cursive",
        fontSize: '15px',
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
    dialogTitle:{
        fontSize: '22px',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '18px'
        }
    },
});


const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('rgb(40, 118, 177)'),
        textTransform: 'uppercase',
        fontFamily: "'Comfortaa', cursive",
        fontSize: '16px',
        postion: 'relative',
        wordSpacing: '3px',
        backgroundColor: 'rgb(40, 118, 177)',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '11px',
        paddingBottom: '8px',
        borderRadius: '25px',
        textAlign: 'center',
        [mediaQueries.phone]: {
            fontSize: '15px',
            paddingLeft: '17px',
            paddingRight: '17px',
            paddingTop: '10px',
            paddingBottom: '8px',
        },
        [mediaQueries.tablet]: {
            fontSize: '15px',
            paddingLeft: '17px',
            paddingRight: '17px',
            paddingTop: '10px',
            paddingBottom: '8px',
        },
        '&:hover': {
            backgroundColor: 'rgb(255, 255, 255)',
            color: 'rgb(40, 118, 177)',
        },
    },
}))(Button);

export class News extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            NewsData: [],
            isLoaded: false,
            newsID: -1,
            dialogInfoNews: false
        };
        this.handleInfoDialog = this.handleInfoDialog.bind(this);

    }
    handleInfoDialog(event){
        const id = event.currentTarget.id;
        this.setState(state => ({
            dialogInfoNews: !state.dialogInfoNews,
            newsID: id
        }));
    }
    componentDidMount() {
        //fetch('http://backend.com/load_news.php')
        fetch('http://a0624502.xsph.ru/modules/load_news.php')
        .then(response => response.json())
        .then(
            (response) => {
                this.setState({
                    NewsData:response,
                    isLoaded: true
                });
            },
            (error) => {
                this.setState({
                    error:error
                });
            }
        )
    }
    render() 
    {
        const {classes} = this.props;
        const { isLoaded, error, NewsData, dialogInfoNews, newsID} = this.state;
        const NextArrow = ({ onClick }) => {
            return (
                <Box className="arrow next4 circle-btn" onClick={onClick}>
                    <KeyboardArrowLeft style = {{fontSize: '45px'}}/>
                </Box>
            );
        };
    
        const PrevArrow = ({ onClick }) => {
            return (
                <Box className="arrow prev4 circle-btn" onClick={onClick}>
                    <KeyboardArrowRight style = {{fontSize: '45px'}}/>
                </Box>
            );
        };

        const settings = {
            dots: false,
            lazyLoad: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            arrows: true,
            autoplaySpeed: 10000,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        const settings2 = {
            dots: false,
            lazyLoad: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 10000,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
            
    if(error){
        return <p>{error}</p>
    } 
    else if (!isLoaded) 
    {
        return (
            <>
                <Container maxWidth = 'xl' disableGutters = {true}>
                    <Box width = '100%' style = {{position: 'relative'}}>
                        <Box className = 'container-news'>
                            <Box className='block-news'>
                                <Skeleton style = {{margin: '0 auto' }} variant="rect" width="100%" height='520px' />
                            </Box>
                        </Box>
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
                        <Box width = '100%' style = {{position: 'relative'}}>
                            <Slider className = {classes.sliderPC} {...settings} style = {{paddingLeft:'65px',paddingRight:'65px'}}>
                                {NewsData.map((item, index) => {
                                        return (
                                            <Box className = 'container-news' key = {index}>
                                                <Box className='block-news'>
                                                    <img loading = 'lazy' width = '100%' alt  = 'Новости и акции' src = {`data:image/jpeg;base64,${item.img}`}/>
                                                    <Box className = 'block-text-3' style = {{marginTop: '175px',marginLeft: '56px'}}>	  
                                                        <Typography className = {classes.stText_1}>
                                                            {item.title}
                                                        </Typography> 
                                                        <Box className = 'block-button-3' style = {{marginTop:'30px'}}>
                                                        <ColorButton id = {item.id}  onClick = {this.handleInfoDialog}>Подробнее</ColorButton>
                                                        </Box>     
                                                    </Box>                                              
                                                </Box>
                                            </Box>
                                        );
                                    })}
                            </Slider>
                            <Slider className = {classes.sliderMobile} {...settings2}>
                                {NewsData.map((item, index) => (
                                    <Box className = 'container-news' key = {index}>
                                        <Box className='block-news'>
                                            <img loading = 'lazy' width = '100%' alt  = 'Новости и акции' src = {`data:image/jpeg;base64,${item.img}`}/>
                                            <Box className = 'block-text-3' style = {{marginTop: '155px',marginLeft: '20px'}}>	  
                                                <Typography className = {classes.stText_1}>
                                                    {item.title}
                                                </Typography> 
                                                <Box className = 'block-button-3' style = {{marginTop:'20px'}}>
                                                    <ColorButton id = {item.id}  onClick = {this.handleInfoDialog}>Подробнее</ColorButton>
                                                </Box>     
                                            </Box>                                              
                                        </Box>
                                    </Box>
                                ))}
                            </Slider>
                        </Box>
                    </Container>
                    <Container >
                        <Dialog maxWidth = 'md' open = {dialogInfoNews} onClose={this.handleInfoDialog}>
                            <DialogTitle id = 'customized-dialog-title' className = {classes.dialogTitle}>
                                {NewsData.filter(temp => temp.id === newsID).map(item => (
                                    <span className = {classes.dialogTitle}>
                                        {item.title}
                                    </span>
                                ))}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    {NewsData.filter(temp => temp.id === newsID).map(item => (
                                        <Box width = '100%' align = 'center'>
                                            <img loading = 'lazy' width = '100%' alt  = 'Новости и акции' src = {`data:image/jpeg;base64,${item.img}`}/>
                                            <Typography className = {classes.stText_2} style = {{padding: '20px'}}> 
                                                {item.text}
                                            </Typography>
                                        </Box>
                                    ))}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button className = {classes.btn_stl} onClick = {this.handleInfoDialog}>Закрыть</Button>
                            </DialogActions>
                        </Dialog>
                    </Container>
                </Box>
            </>
            );
        }       
    }
}


export default withStyles(useStyles)(News);


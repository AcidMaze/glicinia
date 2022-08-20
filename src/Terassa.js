import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Box} from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-image-shadow/assets/index.css';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import Skeleton from '@material-ui/lab/Skeleton';

const mediaQueries = {
	phone: '@media only screen and (min-device-width : 320px) and (max-device-width : 480px)',
    tablet: '@media only screen and (min-device-width : 768px) and (max-device-width : 1024px)',
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
});


const MainImages= [
    {
        img:'/image/terassa/img/1.jpg',
    },
    {
        img:'/image/terassa/img/2.jpg',
    },
    {
        img:'/image/terassa/img/3.jpg',
    },
    {
        img:'/image/terassa/img/4.jpg',
    },
    {
        img:'/image/terassa/img/5.jpg',
    },
    {
        img:'/image/terassa/img/6.jpg',
    },
    {
        img:'/image/terassa/img/7.jpg',
    },
    {
        img:'/image/terassa/img/8.jpg',
    },
    {
        img:'/image/terassa/img/9.jpg',
    },
    {
        img:'/image/terassa/img/10.jpg',
    },
    {
        img:'/image/terassa/img/11.jpg',
    },
    {
        img:'/image/terassa/img/12.jpg',
    }
    
];

export class Terassa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoadedPage: false
        };
    }
    componentDidMount(){
        window.addEventListener('DOMContentLoaded', (event) => {
            this.setState({
                isLoadedPage: true
            });
        });
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
        const {classes} = this.props;
        const {isLoadedPage} = this.state;
        if (!isLoadedPage) {
            return (
                <>
                    <Container maxWidth = 'xl' disableGutters = {true}>
                        <Box width = '100%' style = {{position: 'relative'}}>
                            <Skeleton style = {{margin: '0 auto' }} variant="rect" width="100%" height='520px' />
                        </Box>
                        <Box style = {{marginTop: '2%',position: 'relative'}}>
                            <Box> 
                                <Skeleton style = {{margin: '0 auto' }} variant="text" width="90%" height='240px' />
                                <Skeleton variant="rect" width="100%" height="355px" />
                                <Skeleton style = {{margin: '0 auto' }} variant="text" width="90%" height='260px' />
                                <Skeleton variant="rect" width="100%" height="700px" />
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
                            <Box className = {classes.mainPicturePC} width =  '100%'>
                                <Slider {...settings}>
                                    {MainImages.map((item, index) => {
                                        return (
                                            <Box key = {index} className = 'container-glicinia'>                                                    
                                                <img style = {{filter: 'brightness(90%)'}} alt = 'Терраса' src = {item.img} />
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
                                                <img style = {{filter: 'brightness(90%)'}} alt = 'Терраса' src={item.img} />
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
                                        <Typography className = {classes.secondtext} style = {{width: '94%'}}>
                                        Это идеальный вариант для проведения праздничных мероприятий на самом высоком уровне: корпоративных праздников, частных вечеринок, свадеб, выездных церемоний бракосочетания.
                                        Здесь вам помогут создать необходимую атмосферу для вашего торжества согласно с вашими вкусами, настроением и тематикой.
                                        <br/>
                                        Можно со своей едой - к услугам постояльцев мини-кухня с посудой, чайником и микроволновой печью! 
                                        Также еду можно заказать из кафе, которое находиться на 1-м этаже гостиницы.
                                        И самое интересное, что здесь бесплатно можно прослушивать концерты звёзд эстрады из концертного зала, который находится поблизости.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box width = '100%'>
                                <br/>
                                <Box className="flexboxes">
                                    <img loading = 'lazy' alt = 'Фотография Террасы' className="block6" src = '/image/terassa/img/1.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография Террасы' className="block7" src = '/image/terassa/img/2.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография Террасы' className="block8" src = '/image/terassa/img/6.jpg'/>
                                </Box>
                                <br/>
                            </Box>
                            <Box width = '100%'>
                                <Typography className = {classes.maintext}>
                                    Терраса
                                </Typography>
                            </Box>
                            <Box width = '100%'>
                                <Grid container align ='center'>
                                    <Grid item xs = {12} sm = {12}>
                                        <Typography className = {classes.secondtext} style = {{width: '90%'}}>
                                            Приглашаем настоящих романтиков и любителей прекрасного посетить одно из самых красивых мест Феодосии - панорамную террасу. Здесь Вы можете отведать вкусные по-домашнему приготовленные блюда!
                                            Вас ждут чарующий пейзаж, неповторимая атмосфера и масса приятных впечатлений!
                                            Объект уникален своим местом расположения - центр набережной г. Феодосии. Отличается от других объектов наличием панорамной крыши с видом на весь Феодосийский залив. Здесь вы можете увидеть и насладиться течением морской жизни. 
                                            Можно в любое время дня посидеть полюбоваться панорамой, выпить бокальчик прекрасного крымского вина.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box style = {{marginTop: '2rem'}}>
                                <Box className="flexboxes">
                                    <img loading = 'lazy' alt = 'Фотография Террасы' className="block0" src = '/image/terassa/img/6.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография Террасы' className="block1" src = '/image/terassa/img/7.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография Террасы' className="block2" src = '/image/terassa/img/12.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография Террасы' className="block3" src = '/image/terassa/img/3.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография Террасы' className="block4" src = '/image/terassa/img/8.jpg'/>
                                    <img loading = 'lazy' alt = 'Фотография Террасы' className="block5" src = '/image/terassa/img/5.jpg'/>
                                </Box>
                            </Box>
                        </Container>
                    </Box> 
                </>    
            );
        }
    }
}

export default withStyles(useStyles)(Terassa);


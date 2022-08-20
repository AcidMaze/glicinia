import React, { Component } from 'react'
import { Container, Box} from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import { withStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import RoomRender from './RoomRender';

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
            fontSize: '21px'
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
    },
    sliderView2:{
        display:'none',
        [mediaQueries.phone]: {
            display:'block',
            [mediaQueries.iphone4_5]: {
                display:'block'
            },
        },
        [mediaQueries.tablet]: {
            display:'none'
        }
    },
    sliderViewTablet:{
        display:'none',
        [mediaQueries.tablet]: {
            display:'block'
        },
        [mediaQueries.phone]: {
            display:'none',
            [mediaQueries.iphone4_5]: {
                display:'none'
            }
        },
    },
});

const SkeletonRooms = (count, type) => {
    let content = [];
    if(count === 3)
    {
        if(type === 1)
        {
            for (let i = 0; i < 3; i++) 
            {
                content.push(
                    <Box className = 'container-room' key = {i+1}>
                        <Skeleton style = {{margin: '0 auto' }} variant="rect" width='22em' height='33.5em' />
                    </Box>
                );
            }
        }
        else if(type === 2)
        {
            for (let i = 0; i < 3; i++) 
            {
                content.push(
                    <Box className = 'container-room' key = {i+1}>
                        <Skeleton style = {{margin: '0 auto' }} variant="rect" width='22em' height='33.5em' />
                    </Box>
                );
            }
        }
    }
    else if(count === 2)
    {
        for (let i = 0; i < 2; i++) 
        {
            content.push(
                <Box className = 'container-room' key = {i+1}>
                    <Skeleton style = {{margin: '0 auto' }} variant="rect" width='22em' height='33.5em' />
                </Box>
            );
        }
    }
    return content;
};

export class Rooms extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            isLoaded: false,
            RoomsData: []
        };
    }

    componentDidMount() {
        //--------------Загрузка инфы-----------
        //fetch('http://backend.com/load_rooms.php')
        fetch('http://a0624502.xsph.ru/modules/load_rooms.php')
        .then(response => response.json())
        .then(
            (response) =>{
                this.setState({
                    isLoaded:true,
                    RoomsData:response
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

    render() 
    {
        const {classes} = this.props;
        const { isLoaded, error, RoomsData } = this.state;
        const NextArrow = ({ onClick }) => {
            return (
                <Box className="arrow next circle-btn" onClick={onClick}>
                    <KeyboardArrowLeft style = {{fontSize: '45px'}}/>
                </Box>
            );
        };
    
        const PrevArrow = ({ onClick }) => {
            return (
                <Box className="arrow prev circle-btn" onClick={onClick}>
                    <KeyboardArrowRight style = {{fontSize: '45px'}}/>
                </Box>
            );
        };

        const settings = {
            dots: false,
            infinite: true,
            lazyLoad: true,
            speed: 700,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            arrows: true,
            autoplaySpeed: 15000,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        const settings3 = {
            dots: false,
            infinite: true,
            speed: 650,
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            arrows: true,
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
                <Box className = {classes.root}>
                    <Container maxWidth = 'xl' disableGutters className = {classes.sliderView}>
                        <Box style = {{paddingLeft: '5%',paddingRight: '5%'}}>
                            <Slider {...settings} >
                                {SkeletonRooms(3,1)}
                            </Slider>
                        </Box>
                    </Container>
                    <Container maxWidth = 'xl' disableGutters className = {classes.sliderView2}>
                        {SkeletonRooms(3,2)}
                    </Container>
                    <Container maxWidth = 'xl' disableGutters className = {classes.sliderViewTablet}>
                        <Box style = {{paddingLeft:'1%',paddingRight:'1%'}}>
                            <Slider {...settings3} >
                                {SkeletonRooms(2,0)}
                            </Slider>
                        </Box>
                    </Container>
                </Box>
            )
        }
        else
        {   
            return (        
                <Box className = {classes.root}>
                    <Container maxWidth = 'xl' disableGutters className = {classes.sliderView}>
                        <Slider {...settings} style = {{paddingLeft:'65px',paddingRight:'65px'}}>
                            {RoomsData.map(props => <RoomRender  {...props} />)}
                        </Slider>
                    </Container>
                    <Container maxWidth = 'xl' disableGutters className = {classes.sliderViewTablet}>
                        <Slider {...settings3} style = {{paddingLeft:'25px',paddingRight:'25px'}}>
                            {RoomsData.map(props => <RoomRender  {...props} />)}    
                        </Slider>
                    </Container>
                    <Container maxWidth = 'xl' disableGutters className = {classes.sliderView2}>
                        {RoomsData.slice(0,3).map(props => <RoomRender  {...props} />)}
                    </Container>
                </Box>
            );
        }
    }       
}


export default withStyles(useStyles)(Rooms);


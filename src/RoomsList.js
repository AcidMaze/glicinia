import React, { Component } from 'react'
import { Typography, Container, Grid, Box} from '@material-ui/core';
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
        width: '100%',
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
    viewPC:{
        display:'block',
        [mediaQueries.phone]: {
            display:'none'
        },
        [mediaQueries.tablet]: {
            display:'none'
        }
    },
    viewMobile:{
        display:'none',
        [mediaQueries.phone]: {
            display:'block'
        },
        [mediaQueries.tablet]: {
            display:'none'
        }
    },
    viewTablet:{
        display:'none',
        [mediaQueries.tablet]: {
            display:'block'
        }
    },
    GridSt:{
        margin: '0.9em 0.9em',
        [mediaQueries.iphone4_5]: {
            margin: '0.6em 0.3em'
        }
    },
    media: {
        height: '15rem',
        width: '100%',
        [mediaQueries.phone]: {
            height: '10rem'
        }
    },
    rowSt: {
        wordSpacing: '1rem',
        fontFamily: "'Comfortaa', cursive",
        fontSize: '14px'
    },
    imageList: {
        height: '30rem',
        width: '40rem',
        [mediaQueries.phone]: {
            height: '100%',
            width: '100%',
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
            fontSize: '15px',
            textAlign: 'center',
        }
    },
    stText_2:{
        fontSize: '23px',
        fontFamily: "'Comfortaa', cursive",
        [mediaQueries.phone]: {
            fontSize: '21px'
        }
    },
    stText_4:{
        color: '#000000', 
        fontSize: '36px',
        fontFamily: "'Exo 2', sans-serif",
        textAlign: 'left',
        [mediaQueries.phone]: {
            lineHeight: '35px',
            textAlign: 'center',
            fontSize: '30px'
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
    moreBtn:{
        postiton:'relative',
        color: 'rgba(192, 27, 233,1.0)',
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


const SkeletonRoomsList = (type) => {
    let content = [];
    for (let i = 0; i < 6; i++) 
    {
        if(type === 1)
        {
            content.push(
                <Grid item xs = {12} sm = {4} key = {i}>
                    <Box className = 'container-room'>
                        <Skeleton style = {{margin: '0 auto' }} variant="rect" width='22em' height='33.5em' />
                    </Box>
                </Grid>
            );
        }
        if(type === 2)
        {
            content.push(
                <Grid item xs = {12} sm = {6} key = {i}>
                    <Box className = 'container-room'>
                        <Skeleton style = {{margin: '0 auto' }} variant="rect" width='22em' height='33.5em' />
                    </Box>
                </Grid>
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
    render() {
        const {classes} = this.props;
        const {RoomsData,isLoaded,error} = this.state;
    if(error){
        return <p>{error}</p>
    } 
    else if (!isLoaded) {
        return (
            <Box className = {classes.root}>
                <Container maxWidth = 'xl' disableGutters>
                    <Box style = {{padding: '2% 5%'}} className = {classes.viewPC}>
                        <Typography className = {classes.stText_4}>
                            Номера нашей гостинницы
                        </Typography>
                        <Grid container spacing = {6} style = {{marginTop:'0.2em'}}>
                            {SkeletonRoomsList(1)}
                        </Grid>
                    </Box>
                    <Box className = {classes.viewTablet}>
                        <Typography className = {classes.stText_4} style = {{padding: '2% 5%'}}>
                            Номера нашей гостинницы
                        </Typography>
                        <Grid container spacing = {6}>
                            {SkeletonRoomsList(2)}
                        </Grid>
                    </Box>
                    <Box className = {classes.viewMobile}>
                        <Typography className = {classes.stText_4} style = {{padding: '3% 0%'}}>
                            Номера нашей гостинницы
                        </Typography>
                        <Grid container spacing = {1} style = {{marginTop:'1em'}}>
                            {SkeletonRoomsList(1)}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        )
    }
    else
    {   
        return (
            <Box className = {classes.root}>
                <Container maxWidth = 'xl' disableGutters>
                    <Box style = {{padding: '2% 5%'}} className = {classes.viewPC}>
                        <Typography className = {classes.stText_4}>
                            Номера нашей гостинницы
                        </Typography>
                        <Grid container spacing = {6} style = {{marginTop:'0.2em'}}>
                            {
                                RoomsData.map(props => 
                                    <Grid item xs = {4}>
                                        <RoomRender {...props}/>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Box>
                    <Box className = {classes.viewTablet}>
                        <Typography className = {classes.stText_4} style = {{padding: '2% 5%'}}>
                            Номера нашей гостинницы
                        </Typography>
                        <Grid container spacing = {6}>
                            {
                                RoomsData.map(props => 
                                    <Grid item xs = {6}>
                                        <RoomRender  {...props}/>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Box>
                    <Box className = {classes.viewMobile}>
                        <Typography className = {classes.stText_4} style = {{padding: '2% 0%'}}>
                            Номера нашей гостинницы
                        </Typography>
                        <Grid container spacing = {1} style = {{marginTop:'0.2em'}}>
                            {
                                RoomsData.map(props => 
                                    <Grid item xs = {12}>
                                        <RoomRender  {...props}/>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Box>
                </Container>
            </Box>
            );
        }       
    }
}


export default withStyles(useStyles)(Rooms);


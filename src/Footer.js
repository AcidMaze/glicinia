import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container, Box, Grid, Typography} from '@material-ui/core';
import { Icon } from '@iconify/react';

const mediaQueries = {
	phone: '@media only screen and (min-width: 280px) and (max-width: 480px)',
    tablet: '@media only screen and (min-width: 481px) and (max-width: 1024px)',
    iphone4: '@media only screen and (-webkit-min-device-pixel-ratio : 1.5), only screen and (min-device-pixel-ratio : 1.5)'
}

const useStyles = theme => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
    },
    imgSize:{
        maxWidth: '100%',
    },
    stText_1:{
        color: 'white', 
        fontFamily: "'Montserrat Alternates', sans-serif", 
        fontWeight: '400',
        fontSize:'16px',
        textAlign: 'center',
        verticalAlign: 'middle',
        wordSpacing: '2px',
        [mediaQueries.phone]: {
            fontSize: '15px',
            textAlign: 'center',
        }
    },
});

class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Box className = {classes.root}>
                <Container disableGutters = {true} maxWidth = 'xl' style = {{backgroundColor: '#2D0B30FF', color: 'white', height: '18rem', width: '100%'}}>
                    <Box style = {{paddingTop: '4%', textAlign: 'center'}}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <a className = 'link-decor' href = '/'>Главная</a>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <a className = 'link-decor' href = '/news'>Новости</a>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <a className = 'link-decor' href = '/reviews'>Отзывы</a>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <a className = 'link-decor' href = '/contacts'>Контакты</a>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <img loading = 'lazy' className = {classes.imgSize} style = {{marginLeft: '0.5em'}} alt ="" src = '/image/logo.png'/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <a className = 'link-decor' href = '/roomslist'>Номера</a>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <a className = 'link-decor' href = '/cafe'>Кафе</a>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <a className = 'link-decor' href = '/sauna'>Сауна</a>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <a className = 'link-decor' href = '/terassa'>Терраса</a>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <a style = {{textDecoration: 'none'}}  href = 'https://www.instagram.com/glicinia_feo/'>
                                            <Icon className = 'iconSt' style = {{marginLeft: '1em'}} icon="entypo-social:instagram-with-circle" width = '48' height = '48'/>
                                        </a>
                                        <a style = {{textDecoration: 'none'}} href = 'https://vk.com/glicinia'>
                                            <Icon className = 'iconSt' style = {{marginLeft: '1em'}} icon="entypo-social:vk-with-circle" width = '48' height = '48'/>
                                        </a>
                                        <a style = {{textDecoration: 'none'}} href = 'https://www.facebook.com/glicinia.feo/'>
                                            <Icon className = 'iconSt' style = {{marginLeft: '1em'}} icon="entypo-social:facebook-with-circle" width = '48' height = '48'/>
                                        </a>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className = {classes.stText_1}>Гостевой дом «Глициния» в г. Феодосия<br/>Все права защищены &reg; {new Date().getUTCFullYear()}</Typography>
                                    </Grid> 
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>  
        );      
    }
}

export default withStyles(useStyles)(Footer);
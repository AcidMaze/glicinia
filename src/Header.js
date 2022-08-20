import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import { Icon } from '@iconify/react';
import './header.css'

const mediaQueries = {
    iphone4_5: '@media only screen and (-webkit-min-device-pixel-ratio : 1.5) and (min-width: 280px) and (max-width: 320px)',
	phone: '@media only screen and (min-width: 280px) and (max-width: 540px)',
    tablet: '@media only screen and (min-width: 541px) and (max-width: 1280px)',
}

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        flexWrap: 'wrap',
        display: 'flex'
    },
    stText_1:{
        color: '#000000', 
        display: 'inline-block',
        fontSize: '18px',
        fontFamily: "'Jura', sans-serif",
        fontWeight: '700',
        textAlign: 'left',
        wordSpacing: '4px',
        paddingLeft: theme.spacing(9),
        [mediaQueries.phone]: {
            paddingLeft: 0,
            display: 'block',
            textAlign: 'center',
        },
        [mediaQueries.tablet]: {
            paddingLeft: 0,
            display: 'block',
            textAlign: 'center',
        }
    },
    stText_2:{
        color: '#000000', 
        display: 'inline-block',
        fontSize: '15px',
        textAlign: 'left',
        wordSpacing: '1px',
        paddingLeft: theme.spacing(9),
        fontFamily: "'Montserrat Alternates', sans-serif",
        fontWeight: '400',
        [mediaQueries.phone]: {
            paddingLeft: 0,
            fontSize: '14px',
            display: 'block',
            textAlign: 'center',
        },
        [mediaQueries.tablet]: {
            paddingLeft: 0,
            display: 'block',
            textAlign: 'center'
        }
    },
    stText_3:{
        color: '#000000', 
        fontFamily: "'Montserrat Alternates', sans-serif",
        fontWeight: '500',
        display: 'inline-block',
        fontSize: '17px',
        textAlign: 'left',
        wordSpacing: '2px',
        paddingLeft: theme.spacing(9),
        [mediaQueries.iphone4_5]: {
            paddingLeft: 0,
            fontSize: '15px',
            wordSpacing: '1px',
            display: 'block',
            textAlign: 'center'
        },
        [mediaQueries.phone]: {
            paddingLeft: 0,
            display: 'block',
            textAlign: 'center'
        },
        [mediaQueries.tablet]: {
            paddingLeft: 0,
            display: 'block',
            textAlign: 'center'
        }
    },
    headerInfoState:{
        display: 'block',
        [mediaQueries.phone]: {
            display: 'none'
        },
        [mediaQueries.iphone4_5]: {
            display: 'none'
        },
        [mediaQueries.tablet]: {
            display: 'none'
        }
    },
    stIcon_1:{
        paddingLeft: theme.spacing(54.5),
        display: 'inline-block',
        [mediaQueries.phone]: {
            paddingLeft: 0,
            display: 'block',
            textAlign: 'center'
        },
        [mediaQueries.tablet]: {
            paddingLeft: 0,
            display: 'block',
            textAlign: 'center'
        }
    },
});

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuState: false, 
        };
        this.handleClick= this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state => ({
            menuState: !state.menuState,
        }));
    }
    render() {
        const {classes} = this.props;
        return (
            <>
                <Box className = {classes.root}>
                    <Container maxWidth = 'xl' disableGutters = {true}>
                        <Box width = '100%' style = {{backgroundColor: '#ffffff', marginTop: '15px'}}>
                            <Grid container spacing = {1}>
                                <Grid item xs = {12} md = {3}>
                                    <Typography className = {classes.stText_1}>     
                                        8 978 835-05-25
                                    </Typography>
                                    <Typography className = {classes.stText_2}>
                                        Бронирование номеров
                                    </Typography>
                                </Grid>
                                <Grid item xs = {12} md = {3}>
                                    <Typography className = {classes.stText_1}>
                                        8 978 834-66-06
                                    </Typography>
                                    <Typography className = {classes.stText_2}>
                                        Бронирование кафе и сауны
                                    </Typography>
                                </Grid>
                                <Grid item xs = {12} md = {6} className = {classes.headerInfoState} >
                                    <Box className = {classes.stIcon_1}>
                                        <a href = 'https://www.instagram.com/glicinia_feo/'>
                                            <Icon className = 'iconSt2' icon="entypo-social:instagram-with-circle" width = '40' height = '40'/>
                                        </a>
                                        <a style = {{textDecoration: 'none'}} href = 'https://vk.com/glicinia'>
                                            <Icon className = 'iconSt2' style = {{marginLeft: '0.5em'}} icon="entypo-social:vk-with-circle" width = '40' height = '40'/>
                                        </a>
                                        <a style = {{textDecoration: 'none'}} href = 'https://www.facebook.com/glicinia.feo/'>
                                            <Icon className = 'iconSt2' style = {{marginLeft: '0.5em'}} icon="entypo-social:facebook-with-circle" width = '40' height = '40'/>
                                        </a>
                                    </Box>
                                </Grid>
                                <Grid item xs = {12} md = {4}>
                                    <Typography className = {classes.stText_3}>
                                        Феодосия, улица Революционная 1-А
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className = 'nav-container'>
                            <Box className="mobile-menu" onClick={this.handleClick}>
                                {this.state.menuState ? (<Icon className = 'iconSt2' icon="eva:close-outline" width = '32' height = '32'/>) : (<Icon className = 'iconSt2' icon="eva:menu-outline" width = '32' height = '32'/>)}
                            </Box>
                            <ul className={this.state.menuState ? "nav-options active" : "nav-options"}>
                                <li onClick={this.handleClick}><a href="/">Главная</a></li>
                                <li onClick={this.handleClick}><a href="/roomslist">Номера</a></li>
                                <li onClick={this.handleClick}><a href="/cafe">Кафе</a></li>
                                <li onClick={this.handleClick}><a href="/terassa">Терраса</a></li>
                                <li onClick={this.handleClick}><a href="/sauna">Сауна</a></li>
                                <li onClick={this.handleClick}><a href="/news">Новости</a></li>
                                <li onClick={this.handleClick}><a href="/contacts">Контакты</a></li>
                                <li onClick={this.handleClick}><a href="/reviews">Отзывы</a></li>
                            </ul>
                        </Box>
                    </Container>
                </Box>
            </>
        )
    }     
}

export default withStyles(useStyles)(Header);
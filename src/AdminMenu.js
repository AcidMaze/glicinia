import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container, Box, Grid, Typography, Button} from '@material-ui/core';
import './header.css'

const mediaQueries = {
	phone: '@media only screen and (min-width: 280px) and (max-width: 480px)',
    tablet: '@media only screen and (min-width: 481px) and (max-width: 1024px)',
    iphone4: '@media only screen and (-webkit-min-device-pixel-ratio : 1.5), only screen and (min-device-pixel-ratio : 1.5)'
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
        fontSize: '32px',
        fontFamily: "'Jura', sans-serif",
        fontWeight: '700',
        wordSpacing: '1px',
        [mediaQueries.phone]: {
            fontSize: '29px',
            textAlign: 'center',
        }
    },
    stText_2:{
        color: '#000000', 
        fontSize: '15.5px',
        textAlign: 'left',
        wordSpacing: '3px',
        paddingLeft: theme.spacing(7),
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '300',
        [mediaQueries.phone]: {
            fontSize: '15px',
            textAlign: 'center',
        }
    },
    block_text:{
        postion: 'relative',
        [mediaQueries.phone]: {
            float:'none', 
        }
    },
    block_btn:{
        postion: 'relative',
        [mediaQueries.phone]: {
            float:'none', 
        }
    }
});

const ColorButton = withStyles((theme) => ({
    root: {
        postiton:'relative',
        color: theme.palette.getContrastText('rgb(255, 90, 70)'),
        textTransform: 'none',
        fontFamily: "'Comfortaa', cursive",
        fontWeight: '500',
        fontSize: '18px',
        backgroundColor: 'rgb(255, 90, 70)',
        width: '330px',
        paddingTop: '40px',
        paddingBottom: '40px',
        borderRadius: '0px',
        '&:hover': {
            backgroundColor: 'rgb(253, 140, 125)',
        },
    },
}))(Button);


const ColorButton2 = withStyles((theme) => ({
  root: {
    postiton:'relative',
    color: theme.palette.getContrastText('rgb(70, 135, 180)'),
    textTransform: 'none',
    fontFamily: "'Comfortaa', cursive",
    fontWeight: '500',
    fontSize: '18px',
    backgroundColor: 'rgb(70, 135, 180)',
    width: '330px',
    paddingTop: '40px',
    paddingBottom: '40px',
    borderRadius: '0px',
    '&:hover': {
        backgroundColor: 'rgb(125, 160, 190)',
    },
},
}))(Button);

export class AdminMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        const {classes} = this.props;
        return (
            <>
                <Box className = {classes.root}>
                    <Container maxWidth = 'lg' disableGutters = {true}>
                      <Grid container spacing = {4} align ='center'>
                        <Grid item xs = {12}>
                          <Typography className = {classes.stText_1}>
                            Меню администратора
                          </Typography>
                        </Grid>
                        <Grid item xs = {12}>
                          <ColorButton2 href = '/r_orders' >
                            Список заказов номеров
                          </ColorButton2>
                          <ColorButton2 href = '/s_orders'>
                            Список заказов саун
                          </ColorButton2>
                          <ColorButton2>
                            Список заказов кафе
                          </ColorButton2>
                        </Grid>
                        <Grid item xs = {12}>
                          <ColorButton>
                            Сменить пароль
                          </ColorButton>
                          <ColorButton href = '/edit_rooms'>
                            Список заказов номеров
                          </ColorButton>
                          <ColorButton>
                            Редактирование галерии
                          </ColorButton>
                        </Grid>
                      </Grid>
                      <br/>
                    </Container> 
                </Box>
            </>
        )
    }     
}

export default withStyles(useStyles)(AdminMenu);
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container, Box, Grid, Typography, Link} from '@material-ui/core';
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
        width: '37%',
        [mediaQueries.iphone4_5]: {
          width: '100%'
        },
        [mediaQueries.phone]: {
          width: '100%'
        },
        [mediaQueries.tablet]: {
          width: '60%'
        }
    }
});

class Error extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Box className = {classes.root}>
                <Container disableGutters = {true} maxWidth = 'xl'>
                    <Box style = {{ textAlign: 'center'}}>
                        <img className = {classes.imgSize} src = '/image/error.svg' />
                    </Box>
                </Container>
            </Box>  
        );      
    }
}

export default withStyles(useStyles)(Error);
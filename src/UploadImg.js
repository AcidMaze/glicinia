import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container, Box} from '@material-ui/core';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        flexWrap: 'wrap',
        display: 'flex'
    }
});

export class UploadImg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgList: '',
            isLoaded:false
        };
        this.LoadRoomImage= this.LoadRoomImage.bind(this);
        this.GetDataImage= this.GetDataImage.bind(this);
    }
    GetDataImage(temp){
        var orderData = {
            roomID: temp
        };
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        };
        //fetch('http://backend.com/load_rimage.php', requestOptions)
        fetch('http://a0624502.xsph.ru/modules/load_rimage.php')
        .then(response => response.text())
        .then(
            (response) =>{
                this.setState({
                    isLoaded: true,
                    imgList:response
                });
            }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    LoadRoomImage()
    {
        let content = [];
        let image2 = [];
        let list = [];
        list = this.state.imgList.split(","); 
        let i = 0;
        do{
            image2 = `data:image/jpeg;base64,${list[i]}`;
            content.push(<div className = 'container-glicinia'><img style = {{filter: 'brightness(75%)'}} alt = 'Фото номера' src = {image2}/></div>);
            i++;
        }
        while(i < list.length-1);
        return content;
    }
    render() {
        const {classes} = this.props;
        const { isLoaded} = this.state;
        if(!isLoaded)
        {
            return(
                <>
                    <div className="container">
                        <div className="item-1"></div>
                        <div className="item-2"></div>
                        <div className="item-3"></div>
                        <div className="item-4"></div>
                        <div className="item-5"></div>
                    </div>
                    {this.GetDataImage(2)}
                </>
            )
        }
        else if(isLoaded)
        {
            return (
                <>
                    <Box className = {classes.root}>
                        <Container maxWidth = 'lg' disableGutters = {true}>
                            <Box width = '100%'>
                                {this.LoadRoomImage}
                            </Box>
                        </Container>
                    </Box>
                </>
            )
        }
    }     
}

export default withStyles(useStyles)(UploadImg);
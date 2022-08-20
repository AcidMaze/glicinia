import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography, Container, Box} from '@material-ui/core';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Icon } from '@iconify/react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from "@material-ui/core/TableCell";
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

const mediaQueries = {
	phone: '@media only screen and (min-width: 280px) and (max-width: 540px)',
    tablet: '@media only screen and (min-width: 541px) and (max-width: 1280px)',
    iphone4_5: '@media only screen and (-webkit-min-device-pixel-ratio : 1.5) and (max-width: 320px)'
}


const useStyles = theme => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        flexWrap: 'wrap',
        display: 'flex'
    },
    Title:{
        color: '#000000', 
        fontSize: '36px',
        fontFamily: "'Exo 2', sans-serif",
        textAlign: 'left',
        [mediaQueries.phone]: {
            lineHeight: '35px',
            fontSize: '30px',
        }
    },
    Description:{
        fontSize: '17px',
        fontFamily: "'Montserrat Alternates', sans-serif",
        fontWeight: '400',
        [mediaQueries.phone]: {
            fontSize: '15px',
        }
    },
    Description2:{
        fontSize: '16px',
        fontFamily: "'Montserrat Alternates', sans-serif",
        fontWeight: '400',
        [mediaQueries.phone]: {
            fontSize: '14px',
        }
    },
    viewPC:{
        display:'block',
    },
});

const coordinates = [
    [45.037689,35.381563],
];


const TableCell = withStyles({
    root: {
      borderBottom: "none",
    }
})(MuiTableCell);


export class Contacts extends Component {

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
        const {classes} = this.props;
        const {isLoadedPage} = this.state;
        if (!isLoadedPage) {
            return (
                <>
                    <Container maxWidth = 'xl' disableGutters = {true} className = {classes.viewPC}>
                        <Box width = '100%' style = {{padding: '2% 5%'}}>
                            <Skeleton style = {{margin: '0 auto'}} variant="rect" width="100%" height='420px'/>
                            <TableContainer component={Paper} style = {{marginTop:'1em',boxShadow: 'none'}}>
                                <Table size="medium">
                                    <Skeleton style = {{margin: '0 auto' }} variant="rect" width="90%" height='205px' />
                                </Table>
                            </TableContainer>
                            <TableContainer component={Paper} style = {{marginTop:'1em',boxShadow: 'none'}}>
                                <Table size="medium">
                                    <Skeleton style = {{margin: '0 auto' }} variant="rect" width="90%" height='250px' />
                                </Table>
                            </TableContainer>
                        </Box>
                        <Box width = '100%' style = {{paddingTop: '2%'}}>
                            <Skeleton style = {{margin: '0 auto' }} variant="rect" width="100%" height='600px' />
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
                        <Container maxWidth = 'xl' disableGutters = {true} className = {classes.viewPC}>
                            <Box style = {{padding: '2% 5%'}}>
                                <Typography className = {classes.Title}>
                                    Контакты
                                </Typography>
                                <Typography className = {classes.Description} style = {{marginTop:'1em'}}>
                                    Стильная «Глициния» расположена на одной из старейших улиц Феодосии в 100 метрах от моря. 
                                    Гостиница граничит с зеленым массивом видовой площадки на Бульварной горке и дореволюционными дачами «Милос» и «Виктория» - достопримечательностями древнего города. Останавливаясь в отеле «Глициния», для вас всегда найдутся развлечения по вкусу.
                                    Насладитесь неспешной прогулкой по феодосийской набережной, любуйтесь морскими видами, открывающимися из номеров и с видовой террасы отеля.
                                </Typography>
                                <Typography className = {classes.Description} style = {{marginTop:'2em'}}>
                                <strong>Адрес:</strong>
                                </Typography>
                                <Typography className = {classes.Description2} style = {{marginTop:'0.5em',textDecorationLine: 'underline'}}>
                                    Республика Крым, г. Феодосия, ул. Революционная 1-А
                                </Typography>
                                <Typography className = {classes.Description} style = {{marginTop:'2em'}}>
                                <strong>Как добраться до «Глицинии» по городу:</strong>
                                </Typography>
                                <TableContainer component={Paper} style = {{marginTop:'1em',boxShadow: 'none'}} className='table_scroll'>
                                    <Table size="medium">
                                        <TableBody>
                                            <TableRow style = {{background: 'rgba(82, 124, 130, 0.13)'}}>
                                                <TableCell component="th" scope="row" align = 'left'>
                                                    <Icon width = '42' height = '42' icon="emojione-monotone:taxi" style = {{verticalAlign: 'center'}}/>
                                                </TableCell>
                                                <TableCell align="right" className = {classes.Description2}>
                                                Эконом от Автовокзала (ул. Энгельса 28) или ЖД станции "Авайзовская" (ул. Федько 62) от 110 рублей
                                                <br/>
                                                Комфорт от Автовокзала (ул. Энгельса 28) или ЖД станции "Авайзовская" (ул. Федько 62) от 150 рублей
                                                <br/>
                                                <br/>
                                                Эконом от ЖД Вокзала (Проспект Айвазовского 2) от 115 рублей
                                                <br/>
                                                Комфорт от ЖД Вокзала (Проспект Айвазовского 2) от 145 рублей
                                                </TableCell>
                                            </TableRow>
                                            <TableRow style = {{background: 'rgb(245,245,249, 0.8)'}}>
                                                <TableCell component="th" scope="row" align = 'left'>
                                                    <Icon width = '42' height = '42' icon="emojione-monotone:minibus" style = {{verticalAlign: 'center'}}/>
                                                </TableCell>
                                                <TableCell align="right" className = {classes.Description2}>
                                                    От остановки "Автовокзал" (ул. Энгельса 28) до остановки "Улица Пушкина" (ул. Пушкина 6) 
                                                    <br/>
                                                    №4 №2 №2А 
                                                    <br/>
                                                    <br/>
                                                    От остановки "Феодосия Центр" (ул. Назукина 13) до остановки "Улица Пушкина" (ул. Пушкина 6)
                                                    <br/>
                                                    №4 №4Д 
                                                    <br/>
                                                    <br/>
                                                    От остановки "Маганиз Электротовары" (ул. Куйбышева 14А) до остановки "Улица Пушкина" (ул. Пушкина 6) 
                                                    <br/>
                                                    №4 №2 №2А
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Typography className = {classes.Description} style = {{marginTop:'2em'}}>
                                    <strong>Часто задаваемые вопросы:</strong>
                                </Typography>
                                <TableContainer component={Paper} style = {{marginTop:'1em',boxShadow: 'none'}} className='table_scroll'>
                                    <Table size="medium">
                                        <TableBody>
                                            <TableRow style = {{background: 'rgba(82, 124, 130, 0.13)'}}>
                                                <TableCell component="th" scope="row" align = 'left' className = {classes.Description2}>
                                                    Как забронировать номер?
                                                </TableCell>
                                                <TableCell align="right" className = {classes.Description2}>
                                                    Позвоните по номеру +7 (978) 835-05-25 или напишите на glicinia_feo@mail.ru
                                                </TableCell>
                                            </TableRow>
                                            <TableRow style = {{background: 'rgb(245,245,249, 0.8)'}}>
                                                <TableCell component="th" scope="row" align = 'left' className = {classes.Description2}>
                                                    Как забронировать кафе, сауну?
                                                </TableCell>
                                                <TableCell align="right" className = {classes.Description2}>
                                                    Позвоните по номеру  +7 (978) 834-66-06
                                                </TableCell>
                                            </TableRow>
                                            <TableRow style = {{background: 'rgba(82, 124, 130, 0.13)'}}>
                                                <TableCell component="th" scope="row" align = 'left' className = {classes.Description2}>
                                                    Как добраться от ЖД Вокзала к остановке общественного транспорта?
                                                </TableCell>
                                                <TableCell align="right" className = {classes.Description2}>
                                                    Пройдите до остановки "Маганиз Электротовары" (ул. Куйбышева 14А) - 600м.
                                                    <br/>
                                                    Пройдите до остановки "Феодосия Центр" (ул. Назукина 13) - 850м.
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Typography className = {classes.Description} style = {{marginTop:'2em'}}>
                                    <strong>Наши соц.сети:</strong>
                                </Typography>
                                <Typography className = {classes.Description} style = {{marginTop:'1em'}}>
                                    <a href = 'https://www.instagram.com/glicinia_feo/'>
                                        <Icon className = 'iconSt2' icon="entypo-social:instagram-with-circle" width = '48' height = '48'/>
                                    </a>
                                    <a style = {{textDecoration: 'none'}} href = 'https://vk.com/glicinia'>
                                        <Icon className = 'iconSt2' style = {{marginLeft: '0.5em'}} icon="entypo-social:vk-with-circle" width = '48' height = '48'/>
                                    </a>
                                    <a style = {{textDecoration: 'none'}} href = 'https://www.facebook.com/glicinia.feo/'>
                                        <Icon className = 'iconSt2' style = {{marginLeft: '0.5em'}} icon="entypo-social:facebook-with-circle" width = '48' height = '48'/>
                                    </a>
                                </Typography>
                            </Box>
                            <Box width = '100%' style = {{marginTop:'1.5em'}}>
                                <YMaps>
                                    <Map 
                                        width = '100%'
                                        height = '450px'
                                        state={{
                                            center: [45.037689, 35.381], 
                                            zoom: 17.5,
                                        }}
                                        options={{
                                            suppressMapOpenBlock: true, //скрываем метку "Открыть в яндекс картах"
                                        }}>
                                        {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}
                                    </Map>
                                </YMaps>
                            </Box>
                        </Container>
                    </Box> 
                </>    
            );
        }
    }
}

export default withStyles(useStyles)(Contacts);
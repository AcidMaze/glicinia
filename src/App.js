import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import Main from './Main';
import AdminMenu from './AdminMenu';
import OrdersList from './RoomOrdersList';
import SaunaList from './SaunaOrdersList';
import EditRooms from './EditRooms';
import Cafe from './Cafe';
import Sauna from './Sauna';
import Terassa from './Terassa';
import Contacts from './Contacts';
import Reviews from './Reviews';
import Error from './Error';
import RoomInfo from './RoomInfo';
import RoomsList from './RoomsList';


import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header/>
        <Router>
          <Switch>
              <Route exact path = "/" component = {Main} />  
              <Route exact path = "/cafe" component = {Cafe}/>
              <Route exact path = "/sauna" component = {Sauna}/>
              <Route exact path = "/terassa" component = {Terassa}/>
              <Route exact path = "/contacts" component = {Contacts}/>
              <Route exact path = "/reviews" component = {Reviews}/>
              <Route exact path = "/panel" component = {AdminMenu}/>
              <Route exact path = "/r_orders" component = {OrdersList}/>
              <Route exact path = "/s_orders" component = {SaunaList}/>
              <Route exact path = "/edit_rooms" component = {EditRooms}/>
              <Route exact path = "/roomslist" component = {RoomsList} />
              <Route exact path = "/room/:roomID" render={props => <RoomInfo {...props} />}/>
              <Route exact component = {Error}/>
          </Switch>
        </Router>
      <Footer/>
    </>
  );
}

export default App;

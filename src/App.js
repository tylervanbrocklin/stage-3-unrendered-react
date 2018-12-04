import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import HomePage from "./Home.js";
import AboutUsPage from "./AboutUs.js";
import HouseFinder from "./Houses.js";
import MapPage from "./MapFinder.js";
import './App.css';

const Home = () => (
    <HomePage/>
);

const AboutUs = () => (
    <AboutUsPage/>
);

const Houses = () => (
    <HouseFinder/>
);

const MapFinder = () => (
    <MapPage/>
);

class App extends Component {
  render() {
      let data = this.props.data;
    return (
        <React.Fragment>
            <Header/>
            <Route path="/" exact component={Home}/>
            <Route path="/AboutUs" component={AboutUs}/>
            <Route path="/Houses" component={Houses}/>
            <Route path="/MapPage" component={MapFinder}/>
            <Footer/>
        </React.Fragment>

    );
  }
}

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <header>
                <Navbar color="primary" dark className="bg-primary" expand="md">
                    <a className="navbar-brand" href="#">
                        <img id="logo" alt="logo outlining a house" src={require('./house.png')} className="img-responsive"/>
                    </a>
                    <NavbarBrand href="/">Dawg House</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/Home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/AboutUs">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/Houses">Houses</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/MapPage">Map</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled>Apartments</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled>Subleases</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <div className="container text-center">
                <span className="text-muted">Copyright 2018 Dawg House. All rights reserved. Icons made by
                    <a href="http://www.freepik.com" title="Freepik">Freepik</a> from
                    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
                    <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
                       target="_blank">CC 3.0 BY.</a>
                </span>
                </div>
            </footer>
        );
    }
}

export default App;

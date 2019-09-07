import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Materials from './pages/Materials';
import Contact from './pages/Contact';

class Nav extends React.Component {
    render() {
        return (
            <div className="main-nav">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/materials">Materials</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <hr />
                <Route exact path="/home" component={Home} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/materials" component={Materials} />
                <Route exact path="/contact" component={Contact} />
            </div>
        );
    }
}

export default Nav;
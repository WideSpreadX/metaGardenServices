import React from 'react';
import '../../App.css';

class Services extends React.Component {
    render() {
        return (
            <div className="home-page">
                <h2>Services</h2>
                <div>
                    <h3>Our Services</h3>
                    <ul>
                        <li>Mowing</li>
                        <li>Patios</li>
                        <li>Carpentry</li>
                        <li>Painting</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Services;
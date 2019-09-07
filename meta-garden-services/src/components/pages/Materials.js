import React from 'react';
import '../../App.css';

class Materials extends React.Component {
    render() {
        return (
            <div className="home-page">
                <h2>Welcome to Meta Garden Services</h2>
                <div>
                    <h3>Materials</h3>
                    <div className="material-types">
                        <div className="mulches">
                            <ul>
                                <li>Brown</li>
                                <li>Black</li>
                                <li>Cedar</li>
                            </ul>
                        </div>
                        <div className="stones">
                            <ul>
                                <li>1/2" River Jacks</li>
                                <li>1" River Jacks</li>
                                <li>2" River Jacks</li>
                                <li>4" River Jacks</li>
                                <li>6" River Jacks</li>
                                <li>3/4" Black Smooth Stones</li>
                            </ul>
                        </div>
                        <div className="sea-glass">
                            <ul>
                                <li>Green</li>
                                <li>Blue</li>
                                <li>Clear</li>
                                <li>Black</li>
                                <li>Purple</li>
                            </ul>
                        </div>

                    </div>
                    <h3>Calculator</h3>
                </div>
            </div>
        );
    }
}

export default Materials;
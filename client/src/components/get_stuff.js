import React, { Component } from 'react';
import axios from 'axios';

class GetStuff extends Component {
    componentDidMount() {
        axios.get('http://localhost:6969/api/get-stuff').then(resp => {
            console.log('Response:', resp);
        });
    };
    
    render() {
        return (
            <div>
                <h1>GIMMIE DAT DATA</h1>
            </div>
        );
    };
};

export default GetStuff;
import React, { Component } from 'react';
import { Outline } from './outline';

export default class Spacescape extends Component {
     render() {
        return (
            <div className='spacescape'>
                {Outline("SPACESCAPE", "Spacescape is an escape room specializing in Sci-Fi and Time Travel themed escape rooms.")}
            </div>
        );
    }
} 
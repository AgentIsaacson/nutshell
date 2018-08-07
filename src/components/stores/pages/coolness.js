import React, { Component } from 'react';
import { Outline } from './outline';

export default class Coolness extends Component {
     render() {
        return (
            <div className='coolness'>
                {Outline("Coolness.io", "Coolness.io is a super heckin fly place to be", "https://www.coolness.io")}
            </div>
        );
    }
}
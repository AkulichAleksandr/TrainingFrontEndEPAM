import React, { Component } from 'react';
import './ak-about.css';

import pdfFile from './../../files/Currency.pdf';

export class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ak-about">
                <div className="ak-about__container">
                    <div className="ak-about__line">This site was designed and developed by Aleksandr Akulich</div>
                    <div className="ak-about__line">GitHub URL: </div>
                    <div className="ak-about__line">GitHub Pages: </div>
                    <div className="ak-about__line">Design: <a href="3c75525a432db990288a0363d81af9c6.pdf">file.pdf</a></div>
                </div>
            </div>
        );
    }
}
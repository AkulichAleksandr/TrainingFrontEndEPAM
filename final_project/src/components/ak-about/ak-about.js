import React from 'react';
import './ak-about.css';

import './../../files/3c75525a432db990288a0363d81af9c6.pdf';

export class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ak-about">
                <div className="ak-about__container">
                    <div className="ak-about__line">This application was designed and developed by: <u>Aleksandr&#160;Akulich</u></div>
                    <div className="ak-about__line">GitHub URL: You can visit my repository at&#160;
                        <a href='https://github.com/AkulichAleksandr/TrainingFrontEndEPAM/tree/master/final_project'>
                            GitHub.com
                        </a>
                    </div>
                    <div className="ak-about__line">GitHub Pages: Or you can launch the application from&#160;
                        <a href='https://akulichaleksandr.github.io/TrainingFrontEndEPAM/Project_financial_app_build/'>
                            GitHub.io
                        </a>
                    </div>
                    <div className="ak-about__line">Design: File 'design' is attached&#160;
                        <a href="3c75525a432db990288a0363d81af9c6.pdf">
                            here
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
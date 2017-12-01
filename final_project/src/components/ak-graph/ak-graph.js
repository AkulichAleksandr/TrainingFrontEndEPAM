import React from 'react';

import './ak-graph.css';

import { Chart } from 'chart.js';

export class Graph extends React.Component {
    constructor(props) {
        super(props);

        this.myChart;
    }

    render() {
        return (
            <div className="ak-graph" style={{width: this.parentElementWidth}}>
                <canvas id="myChart"
                    ref={(canvas) => {
                        this.canvas = canvas;
                    }}
                ></canvas>
            </div>
        );
    }


    componentDidUpdate() {
        if (this.canvas && this.props.monthArrayOfCurRate && this.props.monthArrayOfCurRate.length > 0) {
            this.renderChart(this.canvas, this.props.monthArrayOfCurRate);
        }
    }

    renderChart(canvas, curData) {
        if (this.myChart){
            this.myChart.destroy();
        }

        let axisX = curData.map((item) => item.Date);
        let axisY = curData.map((item) => +item.Cur_OfficialRate);
        // console.log(axisX);
        // console.log(axisY);

        let minY = Math.min(...axisY);
        let maxY = Math.max(...axisY);
        let rangeY = maxY - minY;
        let borderValue = 0.4;

        let ctx = canvas.getContext('2d');

        this.myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: axisX,
                datasets: [{
                    label: 'Currency graph',
                    data: axisY,
                    backgroundColor: ['#ddd'],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            min: minY - borderValue * rangeY,
                            max: maxY + borderValue * rangeY,
                            maxTicksLimit: 5
                        },
                        scaleLabel:{
                            display:false
                          }
                    }]
                }
            }
        });
        // this.myChart.update();
    }

}
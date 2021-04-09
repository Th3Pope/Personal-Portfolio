import React from 'react';
import css from './Fourth.module.css';

import Typing from "react-typing-animation";
import {HorizontalBar} from 'react-chartjs-2';

const state = {
    labels: ['Java', 'HTML', 'CSS',
        'React.js', 'JavaScript','C++', 'Firebase', 'MS SQL'],

    datasets: [
        {
            backgroundColor: '#0788de',
            borderColor: '#010103',
            hoverBackgroundColor: '#fad784',
            borderWidth: 2,
            data: [9, 8, 8, 7, 5, 4, 8, 5]
        }
    ]
}

function Forth() {

    return (
        <div className={css.Container}>
            <Typing speed={100} loop={true}>
            <h1 className={css.H1}>Rating my skills:</h1>
                <Typing.Delay ms={2000}/>
                <Typing.Backspace count={17}/>
            </Typing>

            <div className={css.ContainerChart}>
                <div className={css.CenterChart}>
                    <HorizontalBar
                        data={state}
                        options={{

                            title:{
                                display:false,
                            },
                            legend:{
                                display:false,
                            },
                            scales:{

                                yAxes:[{
                                    stacked:true,
                                    ticks: {fontColor: "#010103",
                                        fontSize: 18,
                                        fontFamily: "monospace",
                                        fontStyle: "bold"
                                    },
                                    gridLines: {
                                        display: false,
                                        drawBorder: false
                                    },


                                }],
                                xAxes:[{
                                    stacked: true,
                                    ticks: { display: false },
                                    gridLines: {
                                        display: false,
                                        drawBorder: false
                                    }
                                }]
                            },
                            plugins: [{
                                beforeDraw: function(c) {
                                    var chartHeight = c.chart.height;
                                    c.scales['y-axis-0'].options.ticks.fontSize = chartHeight * 6 / 100;
                                }
                            }]


                        }}
                    />
                </div>
            </div>
            <p className={css.Text}>The above showcases my current skills, but I am always eager to learn and expand my knowledge.</p>

        </div>
    )}
    export default Forth;

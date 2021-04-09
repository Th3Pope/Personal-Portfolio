import React, {Component} from "react";
import Image from '../../Assets/startColored.png';
import css from './Player.module.scss';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

class Player extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };

        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen() {
        this.setState({show: true});
    }

    render() {
        return (
            <div>
                <img className={css.StartButton} onClick={this.handleOpen} src={Image} style={{width: '100%'}} alt={""}/>

                <ModalVideo channel='youtube' isOpen={this.state.show} videoId='OHT0GYGW3Rs'
                            onClose={() => this.setState({show: false})}/>
            </div>
        );
    }
}

export default Player;

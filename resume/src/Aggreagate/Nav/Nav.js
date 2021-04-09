import React, {Component} from 'react';
import css from './Nav.module.css';
import {Link} from 'react-scroll';
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHamburger} from '@fortawesome/free-solid-svg-icons';


let navRoom = -((window.innerHeight / 100) * 5);

function MouseOver(event) {
    event.target.style.background = '#0788de';
    event.target.style.color = '#010103';
    event.target.style.borderRadius = '20px';
}

function MouseOut(event) {
    event.target.style.background = "";
    event.target.style.color = '';
    event.target.style.borderRadius = '';
}

class Nava extends Component {
    constructor() {
        super();
        this.state = {
            bgColor: 'transparent',
            color: '#fad784'
        };
    };


    render() {

        return (
            <>
                <Navbar id='willHide' collapseOnSelect={true} expand={'xl'} sticky="top" className={css.Container}>
                    <Nav>
                        <Navbar.Brand className={css.Dev}><Link activeClass="active" to="top" smooth={true}
                                                                offset={navRoom}>lynnolson.dev</Link></Navbar.Brand>
                    </Nav>
                    <Nav className={'ml-auto'}>
                        <Nav className={css.NavLnks}>
                            <Navbar.Toggle aria-controls={'responsive-navbar-nav'}>
                                <FontAwesomeIcon icon={faHamburger} color={'#fad784'} size={'2x'}/>
                            </Navbar.Toggle>
                            <Navbar.Collapse id={'resonsive-navbar-nav'}>
                                <Link to="second" smooth={true} offset={navRoom}>
                                    <NavDropdown.Item onMouseOver={MouseOver} onMouseOut={MouseOut}
                                                      className={css.Items} style={{
                                        backgroundColor: this.state.bgColor,
                                        color: this.state.color
                                    }}>
                                        Promotional Film
                                    </NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider/>

                                <Link to="third" smooth={true} offset={navRoom}>
                                    <NavDropdown.Item onMouseOver={MouseOver} onMouseOut={MouseOut}
                                                      className={css.Items} style={{
                                        backgroundColor: this.state.bgColor,
                                        color: this.state.color
                                    }}>
                                        Qualifications
                                    </NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider/>

                                <Link to='contact' smooth={true} offset={navRoom}>
                                    <NavDropdown.Item onMouseOver={MouseOver} onMouseOut={MouseOut}
                                                      className={css.Items} style={{
                                        backgroundColor: this.state.bgColor,
                                        color: this.state.color
                                    }}>
                                        Lets Connect
                                    </NavDropdown.Item>
                                </Link>

                            </Navbar.Collapse>
                        </Nav>
                    </Nav>
                </Navbar>
            </>
        );
    }
}

export default Nava;

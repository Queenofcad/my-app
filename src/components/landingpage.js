import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './img/personal.png';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={logo} alt="Perfil" className="Perfil-img"/>
                        <div className="Banner-text">
                            <h1>Carolina Reis</h1>
                            <h3>Designer / Front-end Developer</h3>
                            <p>UI/UX | HTML/CSS | Bootstrap | Javascript | React | NodeJS</p>
                        <div className="social-links">
                        
                            {/*linkedin*/}
                            <a href="https://www.linkedin.com/in/carolina-de-melo-b43208122/"  rel="noopener noreferrer" target="_blank">
                                <i className=" fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                            {/*github*/}
                            <a href="https://github.com/Queenofcad"  rel="noopener noreferrer" target="_blank">
                            <i class="fa fa-github" aria-hidden="true"></i>
                            </a>

                            {/*DIO*/}
                            <a href="https://www.instagram.com/mana.dosreis/?hl=pt-br"  rel="noopener noreferrer" target="_blank">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }}

    export default Landing;
import React from 'react';
import './style.css';

export default class LayoutHeader extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="row header-wrap align-items-center">
                    <div className="col-5 d-flex justify-content-center">
                        <div className="header-categories-wrap">
                            <ul>
                                <li>
                                    <a className="header-link" href="#">POLÍTICA</a>
                                </li>
                                <li>
                                    <a className="header-link" href="#">ESPORTE</a>
                                </li>
                                <li>
                                    <a className="header-link" href="#">ECONOMIA</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="header-logo-wrap d-flex justify-content-center">
                            <b>DU</b>
                        </div>
                    </div>
                    <div className="col-5 d-flex">
                        <div className="col-10 d-flex justify-content-center">
                            <div className="header-categories-wrap">
                                <ul>
                                    <li>
                                        <a className="header-link" href="#">
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="header-link" href="#">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="header-link" href="#">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <a className="header-link pt-1" href="#">ENTRAR</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
import React from 'react';
import LayoutHeader from '../LayoutHeader/LayoutHeader';
import HomeComponent from '../../home/Home';

export default class Layout extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <LayoutHeader/>
                <HomeComponent/>
            </div>
        );
    }
}
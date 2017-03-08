/**
 * Created by tfn on 17-3-8.
 */
import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import {MyText, MyButton} from 'tfn_rn'
import router from '../../utils/routerDecorator';
import emitter from 'tfn_rn/emitter/index';


@router('result')
export default class Result extends Component {
    static title = 'Result';

    constructor(props) {
        super(props);
        this.state = {
            value: '-1',
        };
    }

    componentWillMount() {
        emitter.addListener('haha', (num) => {
            this.setState({
                value: num,
            });
        });
    }

    render() {
        return (
            <View>
                <MyText/>

            </View>
        );
    }
}

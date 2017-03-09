/**
 * Created by tfn on 17-3-8.
 */
import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import {MyText} from 'tfn_rn'
import router from '../../utils/routerDecorator';


@router('result')
export default class Result extends Component {
    static title = 'Result';

    render() {
        return (
            <View>
                <MyText/>
            </View>
        );
    }
}

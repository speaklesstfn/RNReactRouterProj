/**
 * Created by tfn on 17-3-8.
 */
import React, {Component, PropTypes,} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import router from '../../utils/routerDecorator';
import {MyText, MyButton} from 'tfn_rn'

@router('home')
export default class Home extends Component {
    static hideNavBar = false;
    static title = 'Home';
    static contextTypes = {
        navigator: PropTypes.object,
    };
    click = () => {
        console.log('dafd' + this.props.passProps);
        this.context.navigator.push({
            location: '/result/result',
            passProps: {
                testValue: 55555,
            },
        });
    };

    render() {
        return (
            <View>
                <MyText/>
                <MyButton/>

                <TouchableOpacity style={styles.button} onPress={this.click}>
                    <Text style={styles.buttonText}>
                        点击跳转到第二页并携带总价
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: '#1e90ff',
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#696969',
        textAlign: 'center',
        fontSize: 20,
    },
});
'use strict';

import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    AppRegistry
} from 'react-native';

class LifecycleClass extends Component {

    // 声明属性类型
    static propTypes = {
        name: PropTypes.string,
    };

    // 声明属性默认值
    static defaultProps = {
        name: 'xiaowang'
    };

    constructor(props) {
        super(props);

        console.log('constructor');

        this.state = {
            name: props.name
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // nextProps 新的属性
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return (
            <View style={{width: 100, height: 100, backgroundColor:'blue', justifyContent: 'center', alignItems:'center'}}>
                <Text style={{fontSize: 18, color:'white'}}>{this.state.name}</Text>
            </View>
        )
    }
}

export default class BGView extends Component {

    constructor(props) {

        super(props);


        this.state = {
            name: 'wang',
            showView: false,
        }
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={{marginTop:300, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                    <Button title='点击打开'
                            onPress={()=>{
                                this.setState({
                                    showView:true
                                })
                            }}/>
                    <Button title='点击刷新'
                            onPress={()=>{
                                this.setState({
                                    name: 'xiaoli'
                                })
                            }}/>
                    <Button title='点击关闭'
                            onPress={()=>{
                                this.setState({
                                    showView:false
                                })
                            }}/>
                </View>
                {
                    this.state.showView
                    ?
                        <LifecycleClass name={this.state.name} />
                        :
                        null
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    }
});



// 声明属性类型
// static propTypes = {
//     name: PropTypes.string.isRequired,     // 字符串 (isRequired表示name字段必须要传)
//     isShow: PropTypes.bool,     // 布尔类型
//     callBack: PropTypes.func,   // 函数类型
//     age: PropTypes.number,      // 数字类型
//     itemInfo: PropTypes.object, // 对象类型
//     lists: PropTypes.array,     // 数组类型
//     symbol: PropTypes.symbol,   // ES6新增的symbol类型
// };

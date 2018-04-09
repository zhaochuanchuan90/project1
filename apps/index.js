
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

import ModalBox from '../libs/ModalBox';
import SelectTime from '../libs/SelectTime';

export default class Root extends Component{
  constructor(props) {
    super(props);
    this.state = {
      time: '00:00 - 00:00'
    }
  }
  render() {
    return (
      <View style={[styles.wrapper, styles.center]}>
        <TouchableWithoutFeedback onPress={() => this.refs.modalBoxRef.show()}>
          <View style={[styles.btnWrapper, styles.center]}>
            <Text style={styles.btnTxt}>弹窗1</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.refs.selectTimeRef.show()}>
          <View style={[styles.btnWrapper, styles.center, { marginTop: 10, }]}>
            <Text style={styles.btnTxt}>日期组件</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text>{this.state.time}</Text>

        <ModalBox ref="modalBoxRef" color="#ed738d" />
        <SelectTime ref="selectTimeRef" color="#ed738d" confirm={(start, end) => this.showTime(`${start}-${end}`)} />
      </View>
    )
  }

  showTime = (time) => {
    this.setState({ time })
  }

}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrapper: {
    width: 100,
    height: 50,
    backgroundColor: '#ed738d',
  },
  btnTxt: {
    fontSize: 16,
    color: 'white',
  }
})

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import ModalBox from './components/ModalBox';

export default class Root extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.wrapper, styles.center]}>
        <TouchableWithoutFeedback onPress={() => this.refs.modalBoxRef.show()}>
          <View style={[styles.btnWrapper, styles.center]}>
            <Text style={styles.btnTxt}>弹窗1</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={[styles.btnWrapper, styles.center, { backgroundColor: '#ed604d', marginTop: 10, }]}>
            <Text style={styles.btnTxt}>日期组件</Text>
          </View>
        </TouchableWithoutFeedback>

        <ModalBox ref="modalBoxRef" />
      </View>
    )
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
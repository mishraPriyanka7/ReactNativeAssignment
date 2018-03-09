import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableWithoutFeedback } from 'react-native';

import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

export default class MyRadioButton extends React.Component {

  state = {}

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderCustomSegmentControlClone()}
      </ScrollView>
    );
  }

  renderCustomSegmentControlClone(){
    const options = [
      { label:'1 Person', value: '1' },
      { label:'2 Person', value: '1'},
    ];

    function setSelectedOption(option){
      this.setState({
        selectedCustomSegment: option,
      });
    }

    return (
      <View style={{marginTop: 10, padding: 20, backgroundColor: 'white'}}>
        
        <SegmentedControls
          tint= {'#f80046'}
          selectedTint= {'white'}
          backTint= {'#1e2126'}
          optionStyle= {{
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'Snell Roundhand'
          }}
          containerStyle= {{
            marginLeft: 10,
            marginRight: 10,
          }}
          options={ options }
          onSelection={ setSelectedOption.bind(this) }
          selectedOption={ this.state.selectedCustomSegment }
          extractText={ (option) => option.label }
          testOptionEqual={ (a, b) => {
            if (!a || !b) {
              return false;
            }
            return a.label === b.label
          }}
        />
        <Text style={{marginTop: 10}}>Selected option: {this.state.selectedCustomSegment&& this.state.selectedCustomSegment.value || 'none'}</Text>
      </View>);
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
import React, { Component } from 'react';
import { ImageBackground,Text,View} from 'react-native';
import {Actions} from 'react-native-router-flux';

const remote = 'https://img00.deviantart.net/7840/i/2011/285/6/f/cartoon_background_by_masso-d4co81m.png'


export default class Home extends Component {
  render() {
 return (
   
      <ImageBackground style={{flex: 1,position: 'absolute',width: '100%',height: '100%',
                                justifyContent: 'center',}}
            source={{ uri: remote }}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',fontWeight: 'bold'}}>
            <Text
            onPress={() => Actions.Dashboard()} 
            style={{fontSize:50,color:'#FFFFFF',}}
            >
                Roomr
            </Text>

            <Text style={{fontSize:20,color:'#FFFFFF',marginTop:20}}>
                Creating a Home Profile
            </Text>

            </View>
        </ImageBackground>
    );
  }

}



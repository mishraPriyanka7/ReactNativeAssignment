import React, { Component } from 'react';
import { ImageBackground,Text,View,Image} from 'react-native';
import { Card, CardImage, CardTitle, CardContent, CardAction } from 'react-native-card-view';
import {Actions} from 'react-native-router-flux';

const home = 'https://i.pinimg.com/736x/c5/06/93/c50693a7429de08227763d01eda47667--cartoon-background-vector-illustrations.jpg';
//const search = 'http://www.freevectors.me/wp-content/uploads/2013/06/Cartoon-Landscapes-Vector-Background.jpg';
const search = 'https://thumbs.dreamstime.com/b/colorful-houses-sale-rent-real-estate-eco-healthy-living-concept-hills-trees-skylines-background-72638090.jpg';

export default class Dashboard extends Component {
  render() {
 return (
        <View style={{flex:1, flexDirection:'column', alignItems:'center',justifyContent:'center',
                padding:1, backgroundColor:'#FFFFFF'}}>

            <View style={{flex:0.4, backgroundColor:'#44237c',margin:10,marginTop:20,
                    borderWidth:0, borderRadius:15,padding:7}}>
                
                    <View style={{flex:0.7}}>
                       <Image 
                        style={{flex:1, alignItems:'center',justifyContent: 'center', 
                        position: 'relative',width:300,  height:300}}
                        source={{ uri: home }}/>
                    </View>
                    <View style={{flex:0.3, alignItems:'center'}}>
                        <Text 
                            onPress={() => Actions.CreateHome()} 
                            style={{fontSize:20,color:'#FFFFFF',}}>
                            Create a Home
                        </Text>
                        <Text 
                            onPress={() => Actions.CreateHome()} 
                            style={{fontSize:15,color:'#FFFFFF',marginTop:5}}>
                            I have room for new housemate
                        </Text>  
                    </View>
                
            </View>
            
            <View style={{flex:0.4, backgroundColor:'indianred',margin:10,marginTop:20,
                    borderWidth:0, borderRadius:15, padding:7, }}>
               
                <View style={{flex:0.7}}>
                <Image style={{flex:1, alignItems:'center',justifyContent: 'center', 
                        position: 'relative',width:300,  height:300}}
                        source={{ uri: search }}/>
                </View>  
                <View style={{flex:0.3, alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'#FFFFFF',}}>
                        Begain a  search
                        </Text>
                        <Text style={{fontSize:15,color:'#FFFFFF',marginTop:5}}>
                        I want to find a new home
                        </Text>  
                </View>
                    
               
              
            </View>

            <View style={{flex:0.2}}>
                    <Text style={{marginTop:20,fontSize:20,alignItems:'center'}}>Skip & browse</Text>
            </View>
        </View>
      
    );
  }

}



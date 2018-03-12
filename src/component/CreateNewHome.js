import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, AsyncStorage, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';


const people = "http://c8.alamy.com/comp/H8PEBM/man-cartoon-inside-circle-icon-male-avatar-person-human-and-people-H8PEBM.jpg";

export default class CreateNewHome extends Component{

    constructor(props){
        super(props);
        this.state = {
            list:[
              ]
        };

    }

    async componentDidMount(){
        const data = await AsyncStorage.getItem('addroom');
        if(data){
            this.setState({list: JSON.parse(data)});
        }else{
            //this.setState({list:[]});
        }
    }

    render(){
        return(
            <View style={{flex:1, flexDirection:'column', padding:5, backgroundColor:'#ffffff'}}>
                <View style={{flex:0.3,backgroundColor:'#f7f6f6'}}>
                
                <View style={{flex:1}}>
                    <View style={{flex:0.3, alignItems:'center', marginTop:5}}>
                        <Text style={{fontSize:20, color:'#44237c', fontWeight:'bold'}}>
                            Rooms </Text>
                        <Text style={{fontSize:15,marginTop:1}}>Add any available rooms</Text>
                    </View>
                        
                        <View style={{margin:5}}/>

                    <View style={{flex:0.7, alignItems:'center',justifyContent:'center', marginTop:40}}>
                    
                    <TouchableOpacity onPress={() => Actions.AddRoom() }>
                        <Image 
                            style={{flex:1, alignItems:'center',justifyContent: 'center', 
                            position: 'relative',width:350,  height:350}}
                            source={require('../images/createNewHome.png')}/>
                            </TouchableOpacity>
                   
                    </View>
                </View>
                </View>
               
                
                <View style={{flex:0.5 , marginTop:15}}>

                 <FlatList
                data={ this.state.list }
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem={({item}) =>{
                  let imgsrc='';
                  let single_multiple = '';
                  if(item.gender=='M')
                  {
                    imgsrc = require('../images/boy.png');
                  }else if(item.gender == 'F'){
                    imgsrc = require('../images/girl.png');
                  }

                  if(item.sutablefor == '1')
                  {
                    single_multiple = require('../images/1person.png');
                  }else if(item.sutablefor == '2'){
                    single_multiple =require('../images/2person_gray.png');
                  }
                  return(
                    <View style={{ borderRadius:10,flexDirection:'row',margin:20,height:50,flex: 1,backgroundColor:'rgb(247,246,246)',alignItems:'center'}}>
                    <View style={{flex:0.2,flexDirection:'row'}}>
                      <Image style={{}} source={require('../images/listicon.png')} />
                      <Image style={{width:30,height:30}} source={imgsrc} />
                    </View>
                    <View style={{width:2,height:35,backgroundColor:'#412277',margin:10}}>
                      </View>
                    <View style={{flex:0.5}}>
                      <Text>{item.availablefrom}</Text>
                    </View>
                    <View style={{width:2,height:35,backgroundColor:'#412277',margin:10}}>
                      </View>
                    <View style={{flex:0.1}}>
                      <Image style={{width:30,height:30}} source={single_multiple} />
                    </View>
                    <View style={{width:2,height:35,backgroundColor:'#412277',margin:10}}>
                      </View>
                    <View style={{flex:0.2}}>
                      <Text>{item.securitydeposit}</Text>
                    </View>
                  </View>
                  )
                } 
                }
              />

                    
            



                    {/* { <TouchableOpacity activeOpacity = { .5 } onPress={() => Actions.AddRoom() }>
                            <Image
                                        source={require('../images/no-rooms.png')} 
                                        style={{
                                        height: 150,
                                        width: 150,
                                        position:'relative'}} 
                                        />
                    </TouchableOpacity> } */}
                </View>  

                <View style={{flex:0.2, backgroundColor:'white', flexDirection:'row', margin:10}}>
                    
                    <View style={{flex:0.5, alignItems:'flex-start', justifyContent:'center', marginLeft:5}}>

                        <TouchableOpacity activeOpacity = { .5 } onPress={() => Actions.CreateHome() }>
                                    <Image
                                        source={require('../images/back-arrow.png')} 
                                        style={{
                                        height: 50,
                                        width: 50,
                                        position:'relative'}} 
                                    />
                        </TouchableOpacity>
                    </View>

                    <View style={{flex:0.5, alignItems:'flex-end', justifyContent:'center'}}>
 
                        <TouchableOpacity activeOpacity = { .5 } onPress={() => Actions.MyDatePicker() }>
                                    <Image
                                        source={require('../images/check-circle-transparent.png')} 
                                        style={{
                                        height: 50,
                                        width: 50,
                                        position:'relative'}} 
                                    />
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        );
    }
}
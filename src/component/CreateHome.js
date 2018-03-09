import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,AsyncStorage,
ScrollView, FlatList} from 'react-native';
import {Actions} from 'react-native-router-flux';

const people = "http://c8.alamy.com/comp/H8PEBM/man-cartoon-inside-circle-icon-male-avatar-person-human-and-people-H8PEBM.jpg";
export default class CreateHome extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            data:[
                {
                  id: 0,
                  title: "Deepak Mishra",
                  onclick:1,
                  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfHQscMOymQ5qNWrM7Ky27w1hlci3y2p3WxCPv3Yg8mbU2Rjp',
                },
                {
                  id: 1,
                  title: "",
                  onclick:0,
                  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUliaACcUnjv4bFgFRpIddTJGsco0Ov-RmrQWtQntILDoV4de',
                },
                {
                  id: 2,
                  title: "",
                  onclick:0,
                  image:'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=113890272',
                   },
                {
                  id: 3,
                  title: "",
                  onclick:0,
                  image:'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=113890272',
                  },
                  {
                    id: 4,
                    title: "",
                    onclick:0,
                    image:'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=113890272',
                    },
                    {
                      id: 5,
                      title: "",
                      onclick:0,
                      image:'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=113890272',
                      }]
                };
    }
    // async componentDidMount(){
    //     const data = await AsyncStorage.getItem('personselected');
    //     if(data){
    //         this.setState({data: JSON.parse(data)});
    //     }else{
    //         //this.setState({list:[]});
    //     }
    // }
    async componentDidMount() {
        const data = await AsyncStorage.getItem('personselected');
            if(data){
              let ar = JSON.parse(data);
               ar.push({
                onclick:1,
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfHQscMOymQ5qNWrM7Ky27w1hlci3y2p3WxCPv3Yg8mbU2Rjp',
                title:''
               },{
                onclick:0,
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NytqLGF_8gV0jBAD867dFnDhDhrb0NeBcdRNHZaru3P2ouIWEg',
                title:''
               });
                this.setState({data: ar});
            }else{
                // this.setState({list:list});
            }
            console.log(this.state.list);
      }
    
    render(){
        return(
            
            <View style={{flex:1, flexDirection:'column', padding:5}}>
            <ScrollView>
                <View style={{flex:0.3,backgroundColor:'#f7f6f6'}}>
                    <View style={{flex:0.5, alignItems:'center', marginTop:5}}>
                        <Text onPress={() => Actions.AddPerson()}
                              style={{fontSize:20, color:'#44237c', fontWeight:'bold'}}>
                            Housemates </Text>
                        <Text style={{fontSize:15,marginTop:1}}>Tell us who you live with</Text>
                    </View>
                    <View style={{flex:0.5, alignItems:'center',justifyContent:'center', marginTop:5}}>
                        <Image 
                            style={{flex:1, alignItems:'center',justifyContent: 'center', 
                            position: 'relative',width:180,  height:100}}
                            source={require('../images/home.png')}/>
                    </View>
                </View>
               
                
                <View style={{flex:0.7, backgroundColor:'white', flexDirection:'column' }}>

                    <View style={{flexGrow:0.1, alignItems:'flex-end',justifyContent:'center',marginRight:7}}>
                    
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => Actions.AddPerson() }>
                        <Image 
                            source={require('../images/plus.png')} 
                            style={{
                            position: 'relative',
                            top:-25,
                            height: 50,
                            width: 50}} 
                        />
                        
                 </TouchableOpacity>

                    </View>
                    
                        <View>
                        <FlatList
                                    data={this.state.data}
                                    numColumns={3}
                                    //
                                    renderItem={({item}) =>
                                    <View>
                                        <View style = {{flex:1, flexDirection:'column', margin:10, paddingLeft:10,
                                            justifyContent:'center'}}>
                                            <View style={{flex: 0.7,justifyContent:'center'}}>
                                            <TouchableOpacity activeOpacity = { .5 }  onPress={(e)=>{(item.onclick==1)?Actions.SearchRoomerList():''}}>
                                                <Image 
                                                source={{uri: item.image}}
                                                 style={{width:70, height:70, borderRadius:35}}/>
                                                 </TouchableOpacity>
                                            </View>
                                            
                                            <View style = {{flex:0.3, justifyContent:'center',}}>
                                                <Text style={{fontSize:15}}>{item.title}</Text>
                                            </View>
                                    
                                        </View>
                                    
                                
                                    </View>
                                    }
                                />
                        </View>
                    
            
                    {/* <View style={{flex:0.4, flexDirection:'row',margin:5, alignItems:'center'}}>
                                <View style={{flex:0.33, backgroundColor:'white',margin:5, 
                                       flexDirection:'column', marginLeft:5,alignItems:'center'}}>
                                       <Image
                                            source={{uri : people}} 
                                            style={{
                                            height: 60,
                                            width: 60}} 
                                        />
                                        <Text style={{marginTop:10}}>Deepak</Text>         
                                </View>
                                <View style={{flex:0.33, backgroundColor:'white',margin:5, alignItems:'center',
                                 marginLeft:3, marginRight:3}}>
                                <Image
                                            source={require('../images/add.png')} 
                                            style={{
                                            height: 50,
                                            width: 50}} 
                                        />
                                        <Text style={{marginTop:20}}></Text> 
                                    
                                </View>
                                <View style={{flex:0.33, backgroundColor:'white',alignItems:'center', margin:5,
                                        marginLeft:5,marginRight:5}}>
                                        <Image
                                            source={require('../images/moon.png')} 
                                            style={{
                                            height: 60,
                                            width: 60,
                                        position:'relative'}} 
                                        />
                                    
                                    <Text style={{marginTop:20}}></Text> 
                                </View>
                    </View> */}

                    {/* <View style={{flex:0.4, flexDirection:'row',margin:5, alignItems:'center'}}>
                                <View style={{flex:0.33, backgroundColor:'white',margin:5, marginLeft:30}}>
                                    <Image
                                        source={require('../images/moon.png')} 
                                        style={{
                                        height: 60,
                                        width: 60,
                                        position:'relative'}} 
                                        />
                                    
                                    <Text style={{marginTop:20}}></Text> 
                                </View>
                                <View style={{flex:0.33, backgroundColor:'white',margin:5, marginLeft:10, 
                                        marginRight:3}}>
                                        <Image
                                        source={require('../images/moon.png')} 
                                        style={{
                                        height: 60,
                                        width: 60,
                                        position:'relative'}} 
                                        />
                                    
                                    <Text style={{marginTop:20}}></Text>         
                                </View>
                                <View style={{flex:0.33, backgroundColor:'white', margin:5,marginLeft:12,
                                        marginRight:5}}> 

                                        <Image
                                        source={require('../images/moon.png')} 
                                        style={{
                                        height: 60,
                                        width: 60,
                                        position:'relative'}} 
                                        />
                                    
                                    <Text style={{marginTop:20}}></Text> 
                                </View>
                    </View> */}

                    <View style={{flex:0.2, backgroundColor:'white', alignItems:'flex-end',marginRight:25,
                                    marginBottom:10}}>

                        <TouchableOpacity activeOpacity = { .5 } onPress={() => Actions.CreateNewHome() }>
                            <Image
                                        source={require('../images/check.png')} 
                                        style={{
                                        height: 50,
                                        width: 50,
                                        position:'relative'}} 
                                        />
                        </TouchableOpacity>
                                    
                            
                    </View>
        
                </View>

                
                </ScrollView>
            </View>
            
        );
    }
}

/**/
import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TextInput, 
    FlatList, TouchableOpacity, ScrollView, Platform, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

import TagInput from 'react-native-tag-input' ;


const inputProps = {
    keyboardType: 'default',
    placeholder: 'Type to add',
    autoFocus: true,
    style: {
      fontSize: 14,
      marginVertical: Platform.OS == 'ios' ? 10 : -2,
    },
  };
  

export default class AddNewPerson extends Component{

    constructor(props){
        super(props);
        // alert();

        this.state = {
            tags:['Cooking','Music','Weekends','Coffee','Running'],
            text: "",
            path:(props.uri)?props.uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSswvUaEId6l3r8Y8oPpcqKNen-XaOXgdd2mAgQxjHntCL-nrEcg',
                        
            personName:'',
            personAge:'',
            personImage:'',
            addNewPerson:[]
        }  
    }

    async componentDidMount(){
        let response = await AsyncStorage.getItem('addNewPerson');
        let personDetails = await JSON.parse(response) || [];
        this.setState({addNewPerson:personDetails});
    }


    async addPerson( personName='', personAge='', personImage=''){
        console.log("name : "+personName, "Age : "+personAge);
        const addNewPerson = [...this.state.addNewPerson,
        {
            title: personName,
            personAge: personAge,
            image: personImage,
            
        }];
        await AsyncStorage.setItem('addNewPerson',JSON.stringify(addNewPerson));
        console.log('json data : '+JSON.stringify(addNewPerson));
        Actions.SearchRoomerList();
    }



    onChangeTags = (tags) => {
        this.setState({ tags });
      }
    
      onChangeText = (text) => {
        this.setState({ text });
    
        const lastTyped = text.charAt(text.length - 1);
        const parseWhen = [',', ' ', ';', '\n'];
    
        if (parseWhen.indexOf(lastTyped) > -1) {
          this.setState({
            tags: [...this.state.tags, this.state.text],
            text: "",
          });
        }
      }
    
      labelExtractor = (tag) => tag;

    render(){

    return(
            
            <View style={{flex:1, flexDirection:'column', backgroundColor:'#f7f6f6',}}>
                <View style={{flex:0.9}}>
            <ScrollView>
                <View style={{alignItems:'center', marginTop:20}}>
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => Actions.MyCamera()} >
                            <Image source={{uri:this.state.path}} 
                            style={{height: 130, width: 130, position:'relative', borderRadius:70}} />
                    </TouchableOpacity>
                </View>

                <View style={{}}>
                
                            <View style={{flex:1, flexDirection:'row', margin:5, marginTop:20}}>
                                <View style={{flex:0.5, marginRight:5}}>
                                    <Text style={{fontSize:17, marginLeft:5, color:'black'}}>Name</Text>
                                </View>
                                <View style={{flex:0.5}}>
                                    <Text style={{fontSize:17, marginLeft:5, color:'black'}}>Age</Text>
                                </View>
                            </View>
                            

                                <View style= {{flex:1, flexDirection:'row',}}>
                                    <View style={{flex:0.5, marginRight:5}}>
                                        <TextInput 
                                        style={styles.textInputStyleClass}
                                        onChangeText={(value)=>{this.setState({personName:value}) }}
                                        underlineColorAndroid = "transparent"
                                        placeholder= "Enter Name"
                                        autoCapitalize = "none"/>
                                    </View>

                                    <View style={{flex:0.5}}>

                                         <TextInput 
                                            style={styles.textInputStyleClass}
                                            onChangeText={(value)=>{this.setState({personAge:value}) }}
                                            underlineColorAndroid = "transparent"
                                            placeholder= "Enter Age"
                                            autoCapitalize = "none"/>

                                    </View>

                                </View>
                        
                               
                </View>
                
                <View style={{alignItems:'flex-start', marginTop:20, margin:10, marginLeft:15}}>
                    <Text style={{fontSize:15}}>Tags</Text>
                </View>

                <View style={{height:2, backgroundColor:'#e6e6e6'}}>
                </View>

                <View style= {{alignItems:'flex-end'}}>
                <TouchableOpacity activeOpacity = { .5 } >
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

                 
                 <ScrollView>

                    <View style={{flex:1, alignItems:'center'}}>
                     <TagInput
                            value={this.state.tags}
                            onChange={this.onChangeTags}
                            labelExtractor={this.labelExtractor}
                            text={this.state.text}
                            tagContainerStyle={{height:50}}
                            onChangeText={this.onChangeText}
                            tagColor="#412277"
                            tagTextColor="white"
                            inputProps={inputProps}
                            maxHeight={75}
                    />

                 {/* <FlatList
                            data={this.state.list}
                            numColumns={2}
                            renderItem={({item}) =>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View style = {{flex:0.8, flexDirection:'row', margin:5, paddingLeft:10,
                                    backgroundColor:'#412277', borderRadius:20,margin:5, alignItems:'center', 
                                    justifyContent:'center', padding:5}}>
                                        
                                        <View style = {{flex:0.6}}>
                                            <Text style={{color:'#FFFFFF',fontSize:17}}>{item.tag}</Text>
                                        </View>
                                        <View style={{flex: 0.2}}>
                                            <Image source={require('../images/close.png')}
                                                style={{width:20, height:20, borderRadius:35}}/>
                                        </View>
                                
                                </View>
                                
                            
                            </View>
                            }
                        /> */}
                        
                 </View>
                 </ScrollView>

                </ScrollView>
                </View>


                <View style={{backgroundColor:'#44b3e4', flex:0.1, flexDirection:'row', 
                        alignItems:'center', justifyContent:'center'}}>
                                <Text style= {{fontSize:20, color:'#FFFFFF'}}>Add</Text> 

                            <TouchableOpacity activeOpacity = { .5 } onPress={() =>
                                 this.addPerson(this.state.personName, this.state.personAge, this.state.path)} >

                                <Image source={require('../images/check-white.png')} 
                                        style={{ position: 'relative', height: 25, width: 25}} />
                            </TouchableOpacity>
                </View>

            </View>
    );
    }
}

const styles = StyleSheet.create({
    main:{
        margin:10,
        flex:1,
        flexDirection:'column'
    },
    textInputStyleClass: {
        // Setting up Hint Align center.
        paddingLeft: 10,
        // Setting up TextInput height as 50 pixel.
        height: 40,
        // Set border width.
      
        // Set border Hex Color Code Here.
        borderColor: '#44237c',
        // Set border Radius.
        
        //Set background color of Text Input.
        backgroundColor: "#FFFFFF"
      
      }

});
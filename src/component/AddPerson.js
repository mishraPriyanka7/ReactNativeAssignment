import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, 
    ScrollView, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class AddPerson extends Component{

    render(){
    return(
            <ScrollView>
            <View style={{flex:1, flexDirection:'column'}}>

                <View style={{flex:0.15, flexDirection:'row', backgroundColor:'white',
                 marginTop:20, margin:10, borderRadius:15}}>

                    <View style={{flex:0.8, alignItems:'center', justifyContent:'center', }}>
                        <Text style={{paddingLeft:10, fontSize:15,width:'100%', height:40, justifyContent:'center',
                                        alignItems:'center', margin:5, paddingTop:5}}
                                onPress={() => Actions.SearchRoomerList()} >
                              search for a person
                       </Text>
                    </View>
                    <View style={{flex:0.2, justifyContent:'center' }}>
                        <Image source={require('../images/icon-search.png')} 
                        style={{ position: 'relative', height: 25, width: 25}} />
                    </View>
                </View>
            
                    <View style={{flex:0.4, flexDirection:'column', alignItems:'center', marginTop:30}}>
                        <TouchableOpacity activeOpacity = { .5 } onPress={() => Actions.SearchRoomerList() }>
                            <Image source={require('../images/search.png')} 
                                style={{height: 130, width: 250, position:'relative'}} />
                        </TouchableOpacity>

                            <Text style={{fontSize:20, marginTop:10,}}> or </Text>
                    
                    </View>

                       

                    <View style={{flex:0.4, alignItems:'center', marginTop:20}}>

                    <TouchableOpacity activeOpacity = { .5 } onPress={() => Actions.AddNewPerson() }>
                        <Image 
                            source={require('../images/addNewPerson.png')} 
                            style={{height: 130, width: 250, position:'relative'}} />
                    </TouchableOpacity>

                    </View>
               
                <View style={{flex:0.15, alignItems:'flex-end', marginRight:20,marginTop:10, margin:5}}>
                     
                <TouchableOpacity activeOpacity = { .5 } onPress={() => Actions.AddNewPerson() }>
                    <Image source={require('../images/icons-plus.png')} 
                            style={{height: 60, width: 60, position:'relative'}} />
                </TouchableOpacity>

                </View>
            </View>
            </ScrollView>
    );
    }
}

const styles = StyleSheet.create({
    main:{
        margin:10,
        flex:1,
        flexDirection:'column'
    },

});
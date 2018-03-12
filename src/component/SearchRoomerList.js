import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image,AsyncStorage } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {Actions} from 'react-native-router-flux';
//import emails from './roomerJson';
const KEYS_TO_FILTERS = ['id', 'title'];


export default class SearchRoomerList extends Component {
 constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      image:'',
      title:'',
      personselected:[],
      emails:[]
    }
  }
  async componentDidMount(){
     
 
    const data = await AsyncStorage.getItem('addNewPerson');
      if(data){
        this.setState({emails: JSON.parse(data)});
      }else{
          // this.setState({list:list});
      }

    // const data = await AsyncStorage.getItem('addNewPerson');
    //     if(data){
    //         this.setState({list: JSON.parse(data)});
    //     }else{
    //         //this.setState({list:[]});
    //     }

      let response = await AsyncStorage.getItem('personselected');
      let persondetails = await JSON.parse(response) || [];
      this.setState({personselected:persondetails});
  }

  async searchperson(image='',title=''){
    const personselected = [...this.state.personselected,
    {
        image: image,
        title: title,
    }];
    await AsyncStorage.setItem('personselected',JSON.stringify(personselected));
    Actions.CreateHome();
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    const filteredEmails = this.state.emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>

         <View style={{flex:0.15, marginTop:2, flexDirection:'row', backgroundColor:'white',
                    marginTop:20, margin:10, borderRadius:15}}>

            <View style={{flex:0.8, alignItems:'flex-start', justifyContent:'center' }}>
            <SearchInput 
                onChangeText={(term) => { this.searchUpdated(term) }} 
                style={styles.searchInput}
                placeholder="search for a person"
            />
            </View>

            <View style={{flex:0.2, justifyContent:'center' }}>
                <Image source={require('../images/icon-search.png')} 
                style={{ position: 'relative', height: 25, width: 25}} />
            </View> 
        
        </View>

        <View style={{flex:0.8}}> 
            <View style={{marginTop:10}}></View>
                <ScrollView>
                    {filteredEmails.map(email => {
                        return (
                        <TouchableOpacity onPress={()=> this.searchperson(email.image, email.title)}>
                            <View>
                                <View style = {{flex:1, flexDirection:'row', margin:10, paddingLeft:10,
                                    justifyContent:'center'}}>
                                        <View style={{flex: 0.3,justifyContent:'center'}}>
                                            <Image source={{uri: email.image}}
                                             style={{width:70, height:70, borderRadius:35}}/>
                                        </View>
                                        
                                        <View style = {{flex:0.7, justifyContent:'center',}}>
                                            <Text style={{fontSize:15}}>{email.title}</Text>
                                        </View>
                                
                                </View>
                                
                                <View style={{flex:1,height:1, backgroundColor:'#dddcdc'}}></View>
                            
                            </View>
                        </TouchableOpacity>
                        )
                    })}
                </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    
    padding:10,
    paddingLeft:10,
    fontSize:15,
    width:300,
    
  }
});

/*
    <TextInput 
                    style={{paddingLeft:10, fontSize:15,width:'100%'}}
                    placeholder='search for a person'
                    underlineColorAndroid = "transparent">
                </TextInput>


                <View>
                            <Text>{email.id}</Text>
                            <Text style={styles.emailSubject}>{email.title}</Text>
                            </View>

    onPress={()=>alert(email.title)} key={email.id} style={styles.emailItem}
*/
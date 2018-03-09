import React, {Component} from 'react';
import {Text,TextInput, View, FlatList, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import data from './roomerList.json';


export default class RoomerList extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:[
                {
                  "id": 0,
                  "title": "Webpack",
                  "description": "Webpack is a module bundler. It packs CommonJs/AMD modules i. e. for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand."
                },
                {
                  "id": 1,
                  "title": "React",
                  "description": "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
                },
                {
                  "id": 2,
                  "title": "Redux",
                  "description": "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test."
                },
                {
                  "id": 3,
                  "title": "React-Redux",
                  "description": "React-Redux is the official set of bindings between the React and Redux libraries.  With this library you can keep your views and data in sync."
                },
                {
                  "id": 4,
                  "title": "Lodash",
                  "description": "A modern JavaScript utility library delivering modularity, performance, & extras.  Lodash is released under the MIT license & supports modern environments."
                },
                {
                  "id": 5,
                  "title": "Redux-Thunk",
                  "description": "Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met."
                },
                {
                  "id": 6,
                  "title": "ESLint",
                  "description": "ESLint is an open source JavaScript linting utility originally created by Nicholas C. Zakas in June 2013. Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines."
                },
                {
                  "id": 7,
                  "title": "Babel",
                  "description": "Babel has support for the latest version of JavaScript through syntax transformers. These plugins allow you to use new syntax, right now without waiting for browser support."
                },
                {
                  "id": 8,
                  "title": "Axios",
                  "description": "Promise based HTTP client for the browser and node.js.  With Axios, you can make XMLHttpRequests from the browser or Node with the full Promise Api."
                }
              ]
              
        }
    }
        render(){
            return(
                <View style={{flex:1}}>
                    <View style={{flex:0.15, marginTop:0, flexDirection:'row', backgroundColor:'white'}}>

                        <View style={{flex:0.8, alignItems:'flex-start', justifyContent:'center' }}>
                            <TextInput 
                                style={{paddingLeft:10, fontSize:15,width:'100%'}}
                                placeholder='search for a person'
                                underlineColorAndroid = "transparent">
                            </TextInput>
                        </View>
                        <View style={{flex:0.2, justifyContent:'center' }}>
                            <Image source={require('../images/icon-search.png')} 
                             style={{ position: 'relative', height: 25, width: 25}} />
                        </View>
                    </View>
                        
                    <View style={{flex:0.85}}> 
                        <View style={{marginTop:20}}></View>
                        <FlatList
                            data={this.state.list}
                            renderItem={({item}) =>
                            <View>
                                <View style = {{flex:1, flexDirection:'row', margin:5, paddingLeft:10,}}>
                                        <View style={{flex: 0.3, alignItems: 'flex-start'}}>
                                            <Text>{item.id}</Text>
                                        </View>
                                        
                                        <View style = {{flex:0.7}}>
                                            <Text>{item.title}</Text>
                                        </View>
                                
                                </View>
                                
                                <View style={{flex:1,height:1, backgroundColor:'#dddcdc'}}></View>
                            
                            </View>
                            }
                        />

                    </View>
                </View>
            ); 
        }
}
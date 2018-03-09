import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import CreateHome from './component/CreateHome';
import AddPerson from './component/AddPerson';
import AddNewPerson from  './component/AddNewPerson';
import CreateNewHome from './component/CreateNewHome';
import AddRoom from './component/AddRoom';
import RoomerList from './component/RoomerList';
import SearchRoomerList from './component/SearchRoomerList'
import MyRadioButton from './component/common/MyRadioButton';
import MyCamera from './component/common/MyCamera';


class RouterComponent extends Component{
    render(){
        return(
            <Router
                navigationBarStyle={{ backgroundColor: '#44237c' }}
                titleStyle={{
                color: 'white',}}
                navBarButtonColor={{ color: 'white' }}>
 
                <Stack key='root'>
                    <Scene 
                    key="Home"
                    component={Home}
                    hideNavBar={true}
                    renderBackButton={() => null}
                    renderLeftButton={<View />}
                    />

                    <Scene 
                    key="Dashboard"
                    component={Dashboard}
                    title="Create a Profile"/>

                    <Scene 
                    key="CreateHome"
                    component={CreateHome}
                    title="Create a Home"/>

                    <Scene 
                    key="AddPerson"
                    component={AddPerson}
                    title="Add a Person"/>

                    <Scene 
                    key="AddNewPerson"
                    component={AddNewPerson}
                    title="Add a new Person"/>

                    <Scene 
                    key="CreateNewHome"
                    component={CreateNewHome}
                    title="Create a new Home"/>

                    <Scene 
                    key="AddRoom"
                    component={AddRoom}
                    title="Add a room"/>

                    <Scene 
                    key="RoomerList"
                    component={RoomerList}
                    title="Add a Person"/>

                    <Scene 
                    key="SearchRoomerList"
                    component={SearchRoomerList}
                    title="Add a Person"/>

                    <Scene 
                    key="MyRadioButton"
                    component={MyRadioButton}
                    title="Radio Button"/>

                    <Scene 
                    key="MyCamera"
                    component={MyCamera}
                   />


                </Stack>
            </Router>
        );
    }
}
const style = StyleSheet.create({
    navBar:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    navTitle:{
        color:'white'
    }
});

export default RouterComponent;
import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import MyDatePicker from './common/MyDatePicker';
import { Dropdown } from 'react-native-material-dropdown';



var radio_props_suitable = [
    {label: '1 Person', value: 1 },
    {label: '2 Sharing', value: 2 }
  ];

  var radio_props_gender = [
    {label: 'Male    ', value: 'M' },
    {label: 'Female', value: 'F' }
  ];

export default class AddRoom extends Component{

    constructor(props){
        super(props);

        this.state = {
            monthlycost:'',
            sutablefor:'',
            gender:'',
            securitydeposit:'',
            availablefrom:'',
            termlength:'',
            addroom:[]
        }
    }

    async componentDidMount(){
        let response = await AsyncStorage.getItem('addroom');
        let roomdetails = await JSON.parse(response) || [];
        this.setState({addroom:roomdetails});
    }

    async addRoom(monthlycost='', sutablefor='', gender='', securitydeposit='', availablefrom='', termlength=''){
        const addroom = [...this.state.addroom,
        {
            sutablefor: sutablefor,
            gender: gender,
            availablefrom: availablefrom,
            securitydeposit: securitydeposit,
            termlength: termlength
        }];
        await AsyncStorage.setItem('addroom',JSON.stringify(addroom));
        console.log('json data : '+JSON.stringify(addroom));
        Actions.CreateNewHome();
    }

    render(){

        let termLengthData = [{
            value: 'Short Term',
          }, {
            value: 'Long Term',
          }, ];

        return(
            <View style={{flex:1, flexDirection:'column'}}>

                <View style={{flex:0.9, margin:10}}>
                <ScrollView>

                    <Text style= {{fontSize:15}}>Suitable for</Text>

                    <View style={{alignItems:'flex-start', marginTop:5}}>
                     <RadioForm
                        radio_props={radio_props_suitable}
                        initial={0}
                        formHorizontal={false}
                        labelHorizontal={true}
                        buttonColor={'#2196f3'}
                        animation={true}
                        onPress={(valueSuitable) => {console.log('suitable for'+ valueSuitable);
                                                        this.setState({sutablefor:valueSuitable})}}
                        />
                    </View>

                    <Text style= {{fontSize:15}}>Gender</Text>

                    <View style={{alignItems:'flex-start', marginTop:5}}>
                        <RadioForm
                            radio_props={radio_props_gender}
                            initial={0}
                            formHorizontal={false}
                            labelHorizontal={true}
                            buttonColor={'#2196f3'}
                            animation={true}
                            onPress={(valueGender) => { console.log('Gender : '+ valueGender);
                                this.setState({gender:valueGender})}}
                        />
                    </View>

                    <Text style={{fontSize:15, marginLeft:5, marginTop:10}}>Monthly Cost</Text>
                                <View style={{margin:3}} />
                    <TextInput style={styles.textInputStyleClass}
                                onChangeText={(value)=>{this.setState({monthlycost:value})
                                             }}
                                underlineColorAndroid = "transparent"
                                placeholder= "3500 Rs"
                                autoCapitalize = "none"/>

                    <Text style={{fontSize:15, marginLeft:5, marginTop:10}}>Security Deposit</Text>
                                <View style={{margin:3}} />
                    <TextInput style={styles.textInputStyleClass}
                                onChangeText={(value)=>{this.setState({securitydeposit:value}) }}
                                underlineColorAndroid = "transparent"
                                placeholder= "3500 Rs"
                                autoCapitalize = "none"/>

                    <Text style={{fontSize:15, marginLeft:5, marginTop:10}}>Available from</Text>

                    <View>
                        <MyDatePicker/>
                    </View>

                    <View  style={{marginLeft:5}}>
                        <Dropdown
                            label='Term Length'
                            data={termLengthData}
                        />
                    </View>
                     
                </ScrollView>
                </View>


                <View style={{backgroundColor:'#44b3e4', flex:0.1, flexDirection:'row', 
                        alignItems:'center', justifyContent:'center'}}>
                                <Text style= {{fontSize:20, color:'#FFFFFF'}}>Add room</Text> 

                            <TouchableOpacity activeOpacity = { .5 } onPress={() => 
                                this.addRoom(this.state.monthlycost, this.state.sutablefor, this.state.gender,
                                 this.state.securitydeposit,"28-10-2018", "long term" )} >
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
        borderWidth: 1,
        // Set border Hex Color Code Here.
       
        // Set border Radius.
        borderRadius: 2,
        //Set background color of Text Input.
        backgroundColor: "#FFFFFF"
      
      }

});
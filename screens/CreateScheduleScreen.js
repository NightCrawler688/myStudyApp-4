import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import MyHeader from '../components/MyHeader';
import { RFValue } from "react-native-responsive-fontsize";

export default class CreateScheduleScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            date:'',
            taskName:'',
            description:''
        }
    }
    render(){
        return(
            <View>
                <MyHeader title = {'Create Schedule'} navigation = {this.props.navigation}/>
                <View style = {{alignItems:'center',justifyContent:'center'}}>
                    
                    <TextInput
                style={styles.formInput}
                placeholder={"Date-DD/MM/YY"}
                onChangeText={text => {
                  this.setState({
                    date: text
                  });
                }}
              />
                
                    <TextInput
                style={styles.formInput}
                placeholder={"Task Name"}
                onChangeText={text => {
                  this.setState({
                    taskName: text
                  });
                }}
              />
                    
                    <TextInput
                style={[styles.formInput,{height:50}]}
                placeholder={"Description(Optional)"}
                multiline = {true}
                onChangeText={text => {
                  this.setState({
                    description: text
                  });
                }}
              />
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.registerButton}>
                    <Text style = {styles.cancelButtonText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
                </View>
              
            </View>
        )
    }
}
const styles = StyleSheet.create({
    formInput: {
        width: "90%",
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "grey",
        paddingBottom: RFValue(10),
        marginLeft: RFValue(20),
        marginBottom: RFValue(14)
      },
      registerButton:{
      width: "75%",
      height: RFValue(50),
      marginTop: RFValue(20),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(3),
      backgroundColor: "#32867d",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop: RFValue(10)
    },
    registerButtonText: {
      fontSize: RFValue(23),
      fontWeight: "bold",
      color: "#fff"
    },
    cancelButtonText: {
      fontSize: RFValue(20),
      fontWeight: "bold",
      color: "white",
      marginTop: RFValue(10)
    }
})
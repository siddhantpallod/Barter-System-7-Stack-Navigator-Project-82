import React from 'react';
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet} from 'react-native';
import {Card,Icon,ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';

export default class MyBartersScreen extends React.Component{
    
    constructor(){
        super();
        this.state = {
            email : firebase.auth().currentUser.email,
            allBarters : []
        }
        this.requestRef = null
    }

    getAllBarters = () => {
        this.requestRef = db.collection('allBarters').where('donorId' , '==' , this.state.email)
        .onSnapshot((snapshot) => {
            var allBarters = snapshot.docs.map(document => document.data())
            this.setState({
                allBarters : allBarters
            })
        })
    }

    keyExtracter = (item,index) => index.toString()

    renderItem = ({item,I}) => (
        <ListItem
            key = {I}
            title = {item.itemName}
            subtitle = {"Requested By: " + item.requestedBy + "\n Status: " + item.requestStatus}
            leftElement = {
                <Icon
                    name = 'book'
                    type = 'font-awesome'
                />}
            rightElement = {
                <TouchableOpacity>
                    <Text> Exchange </Text>
                </TouchableOpacity>
            }
            bottomDivider
                />
    )

    componentDidMount(){
        this.getAllBarters()
    }

    componentWillUnmount(){
        this.requestRef()
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View>
                    <MyHeader
                    title = "My Barters"
                    />
                </View>
         <View style={{flex:1}}>
           {
             this.state.allBarters.length === 0
             ?(
               <View>
                 <Text style={{ fontSize: 20,textAlign : 'center',alignSelf : 'center'}}>
                    List of all Barters</Text>
               </View>
             )
             :(
               <FlatList
                 keyExtractor={this.keyExtracter}
                 data={this.state.allBarters}
                 renderItem={this.renderItem}
               />
             )
           }
         </View>
       </View>
        )
    }

}

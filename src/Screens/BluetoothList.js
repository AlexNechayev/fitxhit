import React, { Component, useState } from 'react';
import {ToastAndroid, ImageBackground, FlatList, StyleSheet, Image ,View } from 'react-native';
import Layout  from '../Components/Bluetooth/BluetoothListLayout'
import Empty from '../Components/Bluetooth/Empty'
import Toggle from '../Components/Bluetooth/Toggle'
import Subtitle from '../Components/Bluetooth/Subtitle'
import Device from '../Components/Bluetooth/Device'
import BluetoothSerial from 'react-native-bluetooth-serial'
import Copyrights from '../Components/copyright';

var _ = require('lodash');

const renderEmpty = () => <Empty text='No devices found'/>

export class BluetoothList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEnabled: false,
      discovering: false,
      devices: [],
      unpairedDevices: [],
      connected: false,
    }
  }
  UNSAFE_componentWillMount(){
 
    Promise.all([
      BluetoothSerial.isEnabled(),
      BluetoothSerial.list()
    ])
    .then((values) => {
      const [ isEnabled, devices ] = values
      this.setState({ isEnabled, devices })
    })
 
    BluetoothSerial.on('bluetoothEnabled', () => {
 
      Promise.all([
        BluetoothSerial.isEnabled(),
        BluetoothSerial.list()
      ])
      .then((values) => {
        const [ isEnabled, devices ] = values
        this.setState({  devices })
      })
 
      BluetoothSerial.on('bluetoothDisabled', () => {
 
         this.setState({ devices: [] })
 
      })
      BluetoothSerial.on('error', (err) => console.log(`Error: ${err.message}`))
 
    })
 
  }

  setGarmentDevice(devices){
    
    devices.forEach(d => {
      var newDevices = [];
      if(d.name == "fitXhit"){
        console.log(d);
        newDevices = [...newDevices,d];
      }
      this.setState({devices:newDevices});
    });
  }

  connect (device) {
    this.setState({ connecting: true })
    BluetoothSerial.connect(device.id)
    .then((res) => {
      console.log(`Connected to device ${device.name}`);
      this.props.navigation.navigate("MenuScreen",{device,BluetoothSerial})
      ToastAndroid.show(`Connected to device ${device.name}`, ToastAndroid.SHORT);
    })
    .catch((err) => console.log((err.message)))
  }
  _renderItem(item){
 
    return(<Device {...item}
      name={item.item.name ? item.item.name : item.item.id}
      iconLeft={require('../../assets/icons/bluetoothIcon.png')}
      // iconRight={require('../../assets/icons/gearIcon.png')}
      onPress={() => this.connect(item.item)}
      >
      </Device>)
  }
  enable () {
    BluetoothSerial.enable()
    .then((res) => this.setState({ isEnabled: true }))
    .catch((err) => Toast.showShortBottom(err.message))
  }
 
  disable () {
    BluetoothSerial.disable()
    .then((res) => this.setState({ isEnabled: false }))
    .catch((err) => Toast.showShortBottom(err.message))
  }
 
  toggleBluetooth (value) {
    if (value === true) {
      this.enable()
    } else {
      this.disable()
    }
  }
  discoverAvailableDevices () {
    
    if (this.state.discovering) {
      return false
    } else {
      this.setState({ discovering: true })
      BluetoothSerial.discoverUnpairedDevices()
      .then((unpairedDevices) => {
        const uniqueDevices = _.uniqBy(unpairedDevices, 'id');
        console.log(uniqueDevices);
        this.setState({ unpairedDevices: uniqueDevices, discovering: false })
      })
      .catch((err) => console.log(err.message))
    }
  }
  commendWrite(){
    BluetoothSerial.write("T")
    .then((res) => {
      console.log(res);
      console.log('Successfuly wrote to device')
      this.setState({ connected: true })
    })
    .catch((err) => console.log(err.message))
  }
  render() {
    return (
      <ImageBackground source={require('../../assets/background/background.png')} style={s.conteiner}>
      <View style={s.main}>
        <Layout>
            <Image
              source={require('../../assets/addons/garments.png')}
              style={s.imageStyle}
            />
            {/* <Button
              onPress={this.discoverAvailableDevices.bind(this)}
              title="Scan for Devices"
              color="#841584"
            /> */}
            <Toggle value={this.state.isEnabled} onValueChange={(val) => this.toggleBluetooth(val)}/>
            <Subtitle title="Device List"/>
            <FlatList
                data={this.state.devices}
                ListEmptyComponent={()=>renderEmpty()}
                renderItem={(item) => this._renderItem(item)}
            />
        </Layout>
        
      </View>
      <Copyrights/>
     </ImageBackground>
    );
  }
}
 
const s = StyleSheet.create({
  conteiner:{
      flex:1,
      justifyContent:'space-between',
      alignItems:'center',
      
  },
  main:{
    width:"100%",
    height:"65%",

  },
  imageStyle:{
    resizeMode:"contain",
    width:350,
    height:90,
  },
  text:{
      fontSize:20,
  },
});
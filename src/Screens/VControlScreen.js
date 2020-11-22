import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import PlayButton from '../Components/Controllers/PlayButton'
import Voice from 'react-native-voice';
import Copyrights from '../Components/copyright';


export class VControlScreen extends React.Component {
    constructor(props) {
      super(props);
      const bluetooth = (props.route.params.bluetooth)
      this.state = {
        recognized: '',
        started: '',
        results: [],
        bluetooth:bluetooth,
      };
      Voice.onSpeechStart = this.onSpeechStart.bind(this);
      Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
      Voice.onSpeechResults = this.onSpeechResults.bind(this);
    }
  componentWillUnmount() {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  onSpeechStart(e) {
      this.setState({
        started: '√',
      });
    };
  onSpeechRecognized(e) {
      this.setState({
        recognized: '√',
      });
    };
  onSpeechResults(e) {
      this.setState({
        results: e.value,
      });
    }
  async _startRecognition(e) {
      this.setState({
        recognized: '',
        started: '',
        results: [],
      });
      try {
        await Voice.start('en-US');
      } catch (e) {
        console.error(e);
      }
    }
    rightWord(){
      this.state.results.map((result, index) => {
        if(result == 'go'){
          console.log("VR log: "+result)
          this.commendWrite("G")
          this.commendWrite("\n")
        }
        if(result == 'stop'){
            console.log("VR log: "+result)
            this.commendWrite("S")
            this.commendWrite("\n")
        }
        if(result == 'back'){
            console.log("VR log: "+result)
            this.commendWrite("Y")
            this.commendWrite("\n")
        }
      });
    }
    commendWrite(letter){
        this.state.bluetooth.write(letter)
        .then((res) => {
          console.log('Successfuly wrote to device')
        })
        .catch((err) => console.log(err.message))
      }
  render () {
  return (
    <ImageBackground source={require('../../assets/background/background.png')} style={styles.conteiner}>

        <Image
            style={styles.imageTitleStyle}
            source={require('../../assets/addons/voiceControl.png')}>
        </Image>

        {this.rightWord()}

        <View
            style={styles.main}
        >
            <Image
            style={styles.imageStyle}
            source={require('../../assets/addons/megaphone.png')}>
            </Image>
            <PlayButton 
                onPressPlay={this._startRecognition.bind(this)}
            />
            <Text>Press the buttom and speak</Text>
            
        </View>
        <Copyrights/>
        
    </ImageBackground>
  );
  }
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:35,
    },
    main:{
        width:"90%",
        height:"85%",
        marginVertical:10,
        justifyContent:'center',
        alignItems:"center",
    },
    imageTitleStyle:{
        resizeMode:"contain",
        width:"90%",
    },
    imageStyle:{
        resizeMode:"contain",
        width:320,
        height:300,
        marginBottom:30
    },
});
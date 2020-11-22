import React ,{useState} from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import MenuButton from '../Components/MenuButton'
import PopUpWindow from '../Components/PopUpWindow';
import Copyrights from '../Components/copyright'

export function EmotionsScreen(props) {

    const device =  (props.route.params);
    const [isModalVisible, setModalVisible] = useState(false);
    const [imgSource, setImgSource] = useState();

    const $assets_image_0 = require('../../assets/addons/emotions.png')
    const $assets_image_1 = require('../../assets/addons/Emotions/love.png')
    const $assets_image_2 = require('../../assets/addons/Emotions/anger.png')
    const $assets_image_3 = require('../../assets/addons/Emotions/happines.png')
    const $assets_image_4 = require('../../assets/addons/Emotions/fear.png')
    const $assets_image_5 = require('../../assets/addons/Emotions/suprise.png')
    const $assets_image_6 = require('../../assets/addons/Emotions/sadness.png')

    const $assets_gif_1 = require('../../assets/gifs/GIF_Love.gif')
    const $assets_gif_2 = require('../../assets/gifs/GIF_Anger.gif')
    const $assets_gif_3 = require('../../assets/gifs/GIF_Happiness.gif')
    const $assets_gif_4 = require('../../assets/gifs/GIF_Fear.gif')
    const $assets_gif_5 = require('../../assets/gifs/GIF_Suprise.gif')
    const $assets_gif_6 = require('../../assets/gifs/GIF_Sadness.gif')

    const images = {
        emotions:$assets_image_0,
        love:$assets_image_1,
        anger:$assets_image_2,
        happines:$assets_image_3,
        fear:$assets_image_4,
        suprise:$assets_image_5,
        sadness:$assets_image_6,
    }

    const gifs = {
        love:$assets_gif_1,
        anger:$assets_gif_2,
        happines:$assets_gif_3,
        fear:$assets_gif_4,
        suprise:$assets_gif_5,
        sadness:$assets_gif_6,
    }

    const toggleModal = (number) => {

        switch(number){
            case 1:{
                setImgSource(gifs.love);
                break;
            }
            case 2:{
                setImgSource(gifs.anger);
                break;
            }
            case 3:{
                setImgSource(gifs.happines);
                break;
            }
            case 4:{
                setImgSource(gifs.fear);
                break;
            }
            case 5:{
                setImgSource(gifs.suprise);
                break;
            }
            case 6:{
                setImgSource(gifs.sadness);
                break;
            }
        }
        setModalVisible(!isModalVisible);
    };

    const sayHey = () => {
        console.log("Hello")
    }

  return (
    <ImageBackground source={require('../../assets/background/background.png')} style={styles.conteiner}>
        {/* <Text>{device.name}</Text> */}
        <Image
            style={styles.imageTitleStyle}
            source={images.emotions}>
        </Image>

        <View style={styles.main}>

            <MenuButton
                buttonStyle={styles.emotionLeftButton}
                onPress={()=>{toggleModal(1)}}
                imageStyle={styles.imageStyle}
                source={images.love}
            />
            <MenuButton
                buttonStyle={styles.emotionRightButton}
                onPress={()=>{toggleModal(2)}}
                imageStyle={styles.imageStyle}
                source={images.anger}
            />
            <MenuButton
                buttonStyle={styles.emotionLeftButton}
                onPress={()=>{toggleModal(3)}}
                imageStyle={styles.imageStyle}
                source={images.happines}
            />
            <MenuButton
                buttonStyle={styles.emotionRightButton}
                onPress={()=>{toggleModal(4)}}
                imageStyle={styles.imageStyle}
                source={images.fear}
            />
            <MenuButton
                buttonStyle={styles.emotionLeftButton}
                onPress={()=>{toggleModal(5)}}
                imageStyle={styles.imageStyle}
                source={images.suprise}
            />
            <MenuButton
                buttonStyle={styles.emotionRightButton}
                onPress={()=>{toggleModal(6)}}
                imageStyle={styles.imageStyle}
                source={images.sadness}
            />  
            <PopUpWindow
                isVisible={isModalVisible}
                onPressBack={()=>{toggleModal()}}
                onPressApply={()=>{toggleModal(),sayHey()}}
                source={imgSource}
            />
        </View>
        
        <Copyrights/>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:30,
    },
    imageTitleStyle:{
        resizeMode:"contain",
        width:"60%",
    },
    main:{
        width:"90%",
        height:"85%",
        justifyContent:"space-between"
    },
    emotionRightButton:{
        margin:10,
        width:"90%",
        height:"10%",
        alignItems:"flex-end",
        justifyContent:"center"
    },
    emotionLeftButton:{
        margin:10,
        width:"90%",
        height:"10%",
        justifyContent:"center"
    },
    imageStyle:{
        resizeMode:"center",
        width:"62%"
    },
    buttonText:{
        fontSize:45,
    }
});
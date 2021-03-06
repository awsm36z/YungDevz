import React, {Component} from 'react'
import {Image, TouchableHighlight} from 'react-native'
import PropTypes from 'prop-types'
import colors from 'config/colors';

//--------------------------------------------------------------------------
// A Touchable round image . Default size depends on whether the image is "selected"
// Used to make the selected avatar displays larger than other ones. And allow pressing
// on any avatar to select it.
//----------------------------------------------------------------------------
export default TouchableAvatar = (props) => {
    const {image, onPress, index, selected} = props;
    const backColor = props.backgroundColor? props.backgroundColor : (selected? colors.primaryLight : colors.white);
    const length = props.length ? props.length : (selected? 70 : 60);


    return (
        <TouchableHighlight
        style={{
            backgroundColor: backColor,
            borderRadius: 40
        }}
        onPress={onPress}>
        <Image
          key={index}
          source={image}
          backgroundColor={backColor}
          resizeMode='cover'
          style={{
            borderRadius: length / 2,
            width: length,
            height: length,
            alignItems: "center",
            justifyContent: "center",
            margin:5,
          }}
        />
      </TouchableHighlight>   
    );
} 

TouchableAvatar.propTypes = {
    image: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    length: PropTypes.number,
    selected: PropTypes.bool,
    index: PropTypes.number,
}
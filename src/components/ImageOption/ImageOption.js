import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import PropTypes from "prop-types";
import style from "./styles.js";

const ImageOption = ({image, text, isSelected, onPress}) => {
    return (
      <Pressable 
      onPress={onPress}
      style={[style.optionContainer, isSelected ? style.selectedContainer : {}]}>
            <Image
              source={{
                uri: image,
              }}
              style={style.optionImage}
            />
            <Text style={isSelected ? style.selectedText : style.optionText}>{text}</Text>
          </Pressable>
    )
  }

  ImageOption.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onPress: PropTypes.func
}

ImageOption.defaultProps = {
    text: "Default",
    isSelected: false,
    onPress: () => {}

}


  export default ImageOption;
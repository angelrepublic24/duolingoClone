import React, { useState } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import mascot from '../../../assets/images/mascot.png';
import Button from '../Button';

const OpenEndedQuestion = ({question, onCorrect, onWrong}) => {
    const [input, setInput] = useState("")

    const onButtonPress = () => {
        if(question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
            onCorrect();
        }else{
            onWrong();
        }
        setInput("");

    }
  return (
    <>
        <Text style={styles.title}>Translate this sentence</Text>
        <View style={styles.row}>
            {/* Image */}
            <Image 
                source={mascot} 
                style={styles.mascot}
                resizeMode='contain'
                />
            <View style={styles.sentenceContainer}>
                <Text style={styles.sentence}>{question.text}</Text>
            </View>
        </View>
        <TextInput 
            onChangeText={setInput}
            value={input} 
            placeholder='Type in English' 
            style={styles.textInput}
            textAlignVertical='top'
            multiline
        />
        <Button text="Check" onPress={onButtonPress} disabled={!input} />
    </>
    

  )
}

OpenEndedQuestion.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    }).isRequired,
    onCorrect: PropTypes.func.isRequired,
    onWrong: PropTypes.func.isRequired,
}

export default OpenEndedQuestion
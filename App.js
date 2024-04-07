import React, {useEffect, useState, useLayoutEffect} from "react";
import { Text, View, Alert, ActivityIndicator} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from "./Style.App";
import Header from "./src/components/Header";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/OpenEndedQuestion";
import question from "./assets/data/allQuestions";



const App = () => {

  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(question[currentQuestionIndex]);
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if(currentQuestionIndex >= question.length){
      Alert.alert('You won!');
      setcurrentQuestionIndex(0)
    }else {
      setCurrentQuestion(question[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if(hasLoaded){
      saveData()
    }
  }, [lives, currentQuestionIndex, hasLoaded])

  const onCorrect = () => {
    setcurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const restart = () => {
    setLives(5);
    setcurrentQuestionIndex(0)
  }
  const onWrong = () => {
    if(lives <= 1) {
      Alert.alert('Game over', 'Try again!', [
        {
          text: 'Try again',
          onPress: restart
        }
      ]);
    }else {
      Alert.alert('Wrong answer!');
      setLives(lives - 1)
      saveData();

    }
  }

  const saveData = async() => {
    await AsyncStorage.setItem('lives', lives.toString());
    await AsyncStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
  }

  const loadData = async() => {
    const loadedLives = await AsyncStorage.getItem('lives');
    if(loadedLives){
      setLives(parseInt(loadedLives))
    }
    const loadedCurrentQuestionIndex = await AsyncStorage.getItem('currentQuestionIndex');
    if(loadedCurrentQuestionIndex){
      setcurrentQuestionIndex(parseInt(loadedCurrentQuestionIndex))
    }
    setHasLoaded(true);
  }

  if(!hasLoaded){
     return (<ActivityIndicator />)
  }

  return (
    <View style={style.root}>
      <Header 
        progress={currentQuestionIndex / question.length} 
        lives={lives}
      />
      {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' && (
      <ImageMultipleChoiceQuestion 
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
        />
      ) }
      {currentQuestion.type === 'OPEN_ENDED' ? (
      <OpenEndedQuestion 
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    ) : null}
      
    </View>
  );
};

export default App;

import React from 'react'
import styles from './style'
import { View, Text } from 'react-native'

const ProgressBar = ({progress}) => {
  return (
    <View style={styles.bg}>
        <View style={[styles.fg, {width: `${progress * 100}%`}]}>
            <View style={styles.highLight}/>
        </View>
    </View>
  )
}


export default ProgressBar
import { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

const GoalInput = ({ onAddGoal, showModal, closeModal }) => {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (enteredGoalText) => {
        setEnteredGoalText(enteredGoalText);
      }

    const addGoalHandler = ({ setModalIsVisible }) => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

  return (
    <Modal visible={ showModal } animationType='fade'>
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')} />
      <TextInput style={styles.textInput} placeholder='You course goal!?'
      onChangeText={goalInputHandler} value={enteredGoalText} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Cancel' onPress={closeModal} color='#f31282' />
        </View>
        <View style={styles.button}>
         <Button title='Add goal' onPress={addGoalHandler} color='#5e0acc' />
        </View>
      </View>
    </View>
  </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '90%',
        padding: 16
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 16
    },
    button: {
      width:'30%',
      marginHorizontal: 8
    },
    image: {
      width: 100,
      height: 100,
      margin: 20
    }
})
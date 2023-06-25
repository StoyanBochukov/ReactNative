import { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

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
      <TextInput style={styles.textInput} placeholder='You course goal!?'
      onChangeText={goalInputHandler} value={enteredGoalText} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
         <Button title='Add goal' onPress={addGoalHandler} />
        </View>
        <View style={styles.button}>
          <Button title='Cancel' onPress={closeModal} />
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
        flex: 1/3,
        paddingBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '90%',
        padding: 8
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 16
    },
    button: {
      width:'30%',
      marginHorizontal: 8
    }
})
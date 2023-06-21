import { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = ({ onAddGoal }) => {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (enteredGoalText) => {
        setEnteredGoalText(enteredGoalText);
      }

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

  return (
  <View style={styles.inputContainer}>
    <TextInput style={styles.textInput} placeholder='You course goal!?'
     onChangeText={goalInputHandler} value={enteredGoalText} />
    <Button title='Add goal' onPress={addGoalHandler} />
  </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1/3,
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    }
})
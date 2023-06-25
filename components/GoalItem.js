import { View, StyleSheet, Text, Pressable } from "react-native"

const GoalItem = ({ text, onDeleteItem, id }) => {

  return (
      <View style={styles.goalItem}>
           <Pressable android_ripple={{color: '#dddd'}} onPress={onDeleteItem.bind(this, id)}
           style={({ pressed }) => pressed && styles.pressedItem }>
            <Text style={styles.goalText}>{text}</Text>
           </Pressable>
      </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: .5
    },
    goalText: {
        color: '#fff',
        padding: 8,
    }
})
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

    const [courseGoals, setCourseGoals] = useState([])
    
      const addGoalHandler = (enteredGoalText) => {
        setCourseGoals(currentCourseGoals => [
          ...courseGoals,
          {text: enteredGoalText, id: Math.random().toString()}
        ])
      }

      const deleteGoalHandler = (id) => {
        setCourseGoals(currentCourseGoals => {
          return currentCourseGoals.filter((goal) => goal.id !== id)
        });
      }
 
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
       <Text style={styles.goalsHeading}>List of goals..</Text>
        <FlatList data={courseGoals} renderItem={itemData => {
          return <GoalItem text={itemData.item.text}
           onDeleteItem={deleteGoalHandler}
           id={itemData.item.id} />
        }} 
        alwaysBounceVertical={false} keyExtractor={(item, index) => {
          return item.id;
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   paddingTop: 50,
   paddingHorizontal: 16,
   flex: 1,
   borderBottomWidth: 3,
   borderBottomColor: 'red'
  },
  goalsContainer: {
    flex: 4
  },
  goalsHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: '#cece',
    marginBottom: 10
  },
});
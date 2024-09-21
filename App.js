import React  from 'react'
import { View, StyleSheet} from 'react-native'
import Routes from './src/navigation';


const App = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center" }}>
      {Routes()}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
 
})
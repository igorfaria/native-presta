import { routes } from "./app/core/@exports";
import { View, StyleSheet } from "react-native";
import { BottomNav } from "./app/view/_parts/BottomNav";
import { InjectWebCss } from "./app/component/InjectWebCss"

export default function App(){
  InjectWebCss();
  return (
    <View style={ styles.main  }>
       <BottomNav routes={ routes }/>
    </View>
  )
} 

const styles = StyleSheet.create({
  main: {
    flex: 1,
    minWidth: 320,
    overflow: 'hidden',
    width: '100%',
  },
  
});
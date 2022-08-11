import { useState, useEffect } from "react";
import AppConfig from "./app/core/AppConfig";
import routes from "./app/core/Routes";
import { AppRegistry, View, StyleSheet, Text } from "react-native";
import { ActivityIndicator } from "@react-native-material/core"
import { useNetInfo } from '@react-native-community/netinfo';
import { BottomNav } from "./app/view/_parts/BottomNav";
import { InjectWebCss } from "./app/component/InjectWebCss"
import { NotConnected } from "./app/view/error/NotConnected"; 
import { WebService } from "./app/core/WebService";

export default function App(){

 const [isAPIReachable, setisAPIReachable] = useState(false);
  
  const netInfo = useNetInfo();
  const userIsConnected = netInfo.isConnected ? true : false;
  
  if(isAPIReachable == false){
    (new WebService({check: true})).requestResource().then(response => {
      setisAPIReachable( response.status && response.status == 200 );
    });
  }
  let titleConnection = AppConfig.name;
  const contentConnection =  <ActivityIndicator style={ { margin: 4 } } size="large" />;
  if(!isAPIReachable || !userIsConnected){
      titleConnection = <Text>Are you sure that you are connected?</Text>;
      return <NotConnected title={titleConnection} content={contentConnection} />
  }

  //InjectWebCss();
  return (
  <View style={ styles.main  }>
    <BottomNav routes={ routes }/>
  </View>
  );
} 

const styles = StyleSheet.create({
  main: {
    flex: 1,
    minWidth: 320,
    overflow: 'hidden',
    width: '100%',
  },
  
});

AppRegistry.registerComponent('NativePresta', () => App);

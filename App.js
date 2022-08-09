import { useState } from "react";
import { AppConfig, routes } from "./app/core/@exports";
import { View, StyleSheet, Text } from "react-native";
import { ActivityIndicator } from "@react-native-material/core"
import { useNetInfo } from '@react-native-community/netinfo';
import { BottomNav } from "./app/view/_parts/BottomNav";
import { InjectWebCss } from "./app/component/InjectWebCss"
import { NotConnected } from "./app/view/error/NotConnected"; 

const APP_STATS = {usageTime: 0};


export default function App(){
  
  const netInfo = useNetInfo();
  const userIsConnected = netInfo.isConnected ? true : false;

  if(!userIsConnected){
    let titleConnection = AppConfig.name;
    const contentConnection =  <ActivityIndicator style={ { margin: '2rem' } } size="large" />;
    APP_STATS.usageTime++;
    if(APP_STATS.usageTime > 2){
      titleConnection = <Text>Are you sure that you are connected?</Text>;
    }
  
    return <NotConnected title={titleConnection} content={contentConnection} />
  }
  
  InjectWebCss();
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
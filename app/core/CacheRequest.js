import { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import md5 from 'md5'

export class CacheRequest extends Component {

    constructor(props){
        super(props);
        this.state = {
            key: md5(  props?.key ?? (new Date().toISOString()) ),
        }
    }

    setKey = (key) => this.updateState({ key: md5(key) })
    getKey = () => this.state.key

    read = () => getData(this.getKey())
    write = (content) => storeData(this.getKey(), content)
    
    delete = () =>  removeData(this.getKey())
    deleteAll = () => AsyncStorage.clear().then(() => true)

}

const storeData = (key, value) => {
    try {
        const storingValue = (typeof value == 'object') ? JSON.stringify(value) : value
        AsyncStorage.setItem(key, storingValue)
    } catch (e) {
        return e
    }
    return true
}

const getData = (key) => {
    try {
        return AsyncStorage.getItem(key)
    } catch(e) {
      return e
    }
  }
  
const removeData = (key) => {
    try {
      AsyncStorage.removeItem(key)
    } catch(e) {
      return e
    }
    return true
  }
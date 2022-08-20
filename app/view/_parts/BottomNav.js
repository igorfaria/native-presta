import { Component } from "react";
import _l from "../../core/Language";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Modal } from "react-native-web";

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

export class BottomNav extends Component {

    routes = {'main': [], 'modal': []}

    constructor(props){
        super(props);
        this.props.routes.map((route, i) => {
            if(route.modal) {
                this.routes.modal.push(route)
            } else {
                this.routes.main.push(route)
            }
        })
    }

    MainStackScreen = () => {
        return (
            <MainStack.Group>
            {this.routes.main.map((route, i) => {
                return <MainStack.Screen
                    key={i}
                    name={route.name}
                    component={route.controller}
                    options={{
                        tabBarItemStyle: { display: ('hidden' in route && route.hidden) ? 'none' : 'flex' },
                        headerShown: (('headerShown' in route) ? route.headerShown : false),
                        title: route.title,
                        tabBarIcon: ({ color, size }) => (
                            <Icon name={route.icon} color={color} size={size} />
                        )
                    }} 
                    initialParams={ {userIsConnected: this.props.userIsConnected} }
                    />;
            })}
            </MainStack.Group>
        );
      }
    
    ModalStackScreen = () => {
        return (
            <MainStack.Group screenOptions={{ presentation: 'modal' }}>
            {this.routes.modal.map((route, i) => {
                return <MainStack.Screen
                    key={i}
                    name={route.name}
                    component={route.controller}
                    options={{
                        tabBarItemStyle: { display: ('hidden' in route && route.hidden) ? 'none' : 'flex' },
                        headerShown: (('headerShown' in route) ? route.headerShown : false),
                        title: route.title,
                        tabBarIcon: ({ color, size }) => (
                            <Icon name={route.icon} color={color} size={size} />
                        )
                    }} 
                    initialParams={ {userIsConnected: this.props.userIsConnected} }
                    />;
            })}
            </MainStack.Group>
        );
      }

    render(){
        return (
            <NavigationContainer>
                <Tab.Navigator>
                { this.MainStackScreen() }
                { this.ModalStackScreen() }
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

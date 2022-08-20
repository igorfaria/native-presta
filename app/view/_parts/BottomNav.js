import { Component } from "react";
import _l from "../../core/Language";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
export class BottomNav extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    {this.props.routes.map((route, i) => {
                        return <Tab.Screen
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
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}; 

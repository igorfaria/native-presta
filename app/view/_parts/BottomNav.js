import { Component, createElement } from 'react'
import _l from '../../core/Language'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

export class BottomNav extends Component {

    routes = {'main': [], 'modal': []}

    constructor(props){
        super(props)
        this.props.routes.map((r, i) => (r.modal) ?  this.routes.modal.push(r) : this.routes.main.push(r) )
    }

    MainStackScreen = () => this.createStack(MainStack.Screen, this.routes.main)
    ModalStackScreen = () => this.createStack(MainStack.Screen, this.routes.modal, { presentation: 'modal' })

    createStack(name, routes, screenOptions){
        return ( 
        <MainStack.Group {...screenOptions}>
            {routes.map((route, i) => { return createElement( name,
                {
                    key: i,
                    name: route.name,
                    component: route.controller,
                    options: {
                    tabBarItemStyle: { display: ('hidden' in route && route.hidden) ? 'none' : 'flex' },
                    headerShown: (('headerShown' in route) ? route.headerShown : false),
                    title: route.title,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name={route.icon} color={color} size={size} />
                    )
                }
                }
            )
        })}
        </MainStack.Group>
        )
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

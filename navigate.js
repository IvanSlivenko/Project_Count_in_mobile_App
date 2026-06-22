import React from 'react';
import Main from './components/Main';
import References from './components/References';
import Documents from './components/Documents';
import Reports from './components/Reports';
import AdminSegments from './components/AdminSegments';
import Reference_Goods_List from './components/Reference_Goods_List'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Головна',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#d6eb1e',
                        height: 100,
                        headerTitleStyle: {
                            fontWeight: 'light'
                        }
                    },
                    headerTintColor: '#8B4513',
                }}
            />
            <Stack.Screen
                name="References"
                component={References}
                options={{
                    title: 'Довідники',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#d6eb1e',
                        height: 100,
                        headerTitleStyle: {
                            fontWeight: 'light'
                        }
                    },
                    headerTintColor: '#8B4513',
                }}
            />

            <Stack.Screen
                name="Documents"
                component={Documents}
                options={{
                    title: 'Документи',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#d6eb1e',
                        height: 100,
                        headerTitleStyle: {
                            fontWeight: 'light'
                        }
                    },
                    headerTintColor: '#8B4513',
                }}
            />

            <Stack.Screen
                name="Reports"
                component={Reports}
                options={{
                    title: 'Звіти',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#d6eb1e',
                        height: 100,
                        headerTitleStyle: {
                            fontWeight: 'light'
                        }
                    },
                    headerTintColor: '#8B4513',
                }}
            />

            <Stack.Screen
                name="AdminSegments"
                component={AdminSegments}
                options={{
                    title: 'Адміністратору',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#d6eb1e',
                        height: 100,
                        headerTitleStyle: {
                            fontWeight: 'light'
                        }
                    },
                    headerTintColor: '#8B4513',
                }}
            />

            <Stack.Screen
                name="Reference_Goods_List"
                component={Reference_Goods_List}
                options={{
                    title: 'Довідник "Товари"',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#d6eb1e',
                        height: 100,
                        headerTitleStyle: {
                            fontWeight: 'light'
                        }
                    },
                    headerTintColor: '#8B4513',
                }}
            />

        </Stack.Navigator>
    </NavigationContainer>;
}




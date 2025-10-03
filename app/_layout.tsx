import React from "react";
import { GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from 'expo-router/Drawer';

export default function RootLayout() {
    return(
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{ title: 'Dolar Americano'}}
                />
                <Drawer.Screen
                    name="index"
                    options={{ title: 'Euro'}}
                />                
            </Drawer>
        </GestureHandlerRootView>
    )
}
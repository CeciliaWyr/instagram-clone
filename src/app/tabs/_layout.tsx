import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
export default function TabsLayout(){
    return (
        <Tabs screenOptions={{tabBarActiveTintColor:'black' , tabBarShowLabel:false}}>
            <Tabs.Screen 
                name="index" 
                options={{
                    headerTitle:"For you",
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
                }}/>
            <Tabs.Screen
                name="new"
                options={{
                    headerTitle:"Create post",
                    tabBarIcon: ({color}) => <Octicons name="diff-added" size={24} color={color} />,
                }}/>
            <Tabs.Screen
                name="profile"
                options={{
                    headerTitle:"Profile",
                    tabBarIcon: ({color}) => <FontAwesome6 name="user-large" size={24} color={color} />
                }}/>
        </Tabs>
        
    );
}
import { Stack , Slot, Tabs} from "expo-router";

export default function RootLayout(){
    return (
        <Stack screenOptions={{headerShown:false}}></Stack>
        // <Tabs></Tabs>
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   }}>
    //   <Stack.Screen name="index" />
    //   <Stack.Screen name="about" />
    // </Stack>
        // <Slot></Slot>
    );
}
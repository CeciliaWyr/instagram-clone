import { Redirect } from "expo-router";
import { Text } from "react-native";
export default function home(){
    return (
        <Redirect href={"/tabs"}></Redirect>
    );
}
import { View, Image, Text } from "react-native";
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
export default function PostListItem({post}){
    return (
        <View className="bg-white">
            <View className="flex-row gap-3 items-center p-2">
                <Image source={{uri:post.user.image_url}} className="rounded-full w-12 aspect-square"></Image>
                <Text className="font-semibold">{post.user.username}</Text>
            </View>
            <Image source={{uri:post.image_url}} className="w-full aspect-[4/3]"></Image>
            <View className="flex-row gap-3 p-3">
                <AntDesign name="hearto" size={24} color="black" />
                <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
                <Feather name="send" size={24} color="black" />
                <Feather name="bookmark" size={24} color="black" className="ml-auto"/>
            </View>
        </View>
    );
}

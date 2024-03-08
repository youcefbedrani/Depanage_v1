import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const Ads_Card = ({ icon, imgUrl, title, subTitle, short_descrption }) => {
  return (
    <View style={{width : "100%"}}  className="flex-column h-40 mx-2 space-y-3 my-6">
      <View className="flex-column">
        <View className="flex-row space-x-2 mb-1 items-center">
          <Text className="font-bold text-black text-xl">{title}</Text>
          <Image className="w-4 h-4" source={icon} />
        </View>
        <Text className="text-xs text-gray-600">{short_descrption}</Text>
      </View>
      <Image source={imgUrl} style={{width : 300 , height : 180}} className="rounded-xl" />
      <View className="flex-row space-x-2 items-center">
        <Text className="font-bold text-black">{subTitle}</Text>
        <AntDesign name="rightcircle" size={24} color="orange" />
      </View>
    </View>
  );
};

export default Ads_Card;

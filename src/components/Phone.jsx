import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";

const Phone = () => {
  return (
    <View>
      {/* Input Phone */}
      <View
        style={{ width: 290 }}
        className="flex-row px-3 my-11 mx-auto border-b space-x-4"
      >
        <View>
          <Entypo name="globe" size={24} color="black" />
        </View>
        <View className="pb-2">
          <TextInput placeholder="Phone Number" />
        </View>
      </View>
      {/* Button Phone */}
      <View className="flex-row mx-auto">
        <TouchableOpacity
          style={{ backgroundColor: "#FF9B63" }}
          className="w-80 rounded-xl p-4"
        >
          <Text className="text-white font-bold text-center">Request OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Phone;

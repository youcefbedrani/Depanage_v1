import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";

const Email = ({navigation}) => {
  return (
    <View>
      <View>
        <View
          style={{ width: 290 }}
          className="flex-row px-3 mt-11 mb-6 mx-auto border-b space-x-4"
        >
          <View>
            <Entypo name="email" size={24} color="gray" />
          </View>
          <View className="pb-2">
            <TextInput placeholder="Email" />
          </View>
        </View>
        <View
          style={{ width: 290 }}
          className="flex-row px-3 mt-2 mb-6 mx-auto border-b space-x-4"
        >
          <View>
            <MaterialIcons name="password" size={24} color="black" />
          </View>
          <View className="pb-2">
            <TextInput placeholder="Password" />
          </View>
        </View>
      </View>
      <View>
        {/* Button Phone */}
        <View className="flex-row mx-auto">
          <TouchableOpacity
            style={{ backgroundColor: "#FF9B63" }}
            className="w-80 rounded-xl p-4"
            onPress={()=>navigation.navigate("User_Home")}
          >
            <Text className="text-white font-bold text-center">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Email;

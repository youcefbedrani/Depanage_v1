import {
  Pressable,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Feather, Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";

const Email_Registre = () => {
  const [isSelected, setSelected] = useState(false);
  const [checked, setChecked] = useState(false);
  const [backChecked , setBackChecked] = useState("bg-white");
  const handlePress = () => {
    setChecked(!checked);
    setBackChecked(checked ? "bg-orange-500" : "bg-white");
  };
  return (
    <View>
      <View>
        <View
          style={{ width: 290 }}
          className="flex-row px-3 mt-1 mb-6 mx-auto border-b space-x-4"
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
          className="flex-row px-3 mt-4 mb-6 mx-auto border-b space-x-4"
        >
          <View>
            <Feather name="phone" size={24} color="gray" />
          </View>
          <View className="pb-2">
            <TextInput placeholder="+213 --- --- ---" />
          </View>
        </View>
        <View
          style={{ width: 290 }}
          className="flex-row px-3 mt-2 mb-6 mx-auto border-b space-x-4"
        >
          <View>
            <MaterialIcons name="password" size={24} color="gray" />
          </View>
          <View className="pb-2">
            <TextInput placeholder="Password" />
          </View>
        </View>
        <View
          style={{ width: 290 }}
          className="flex-row px-3 mt-2 mb-6 mx-auto border-b space-x-4"
        >
          <View>
            <MaterialIcons name="password" size={24} color="gray" />
          </View>
          <View className="pb-2">
            <TextInput placeholder="Password Confirmation" />
          </View>
        </View>
        <View className="flex-row my-3 items-center justify-center space-x-3">
          <Pressable
            className={`w-6 h-6 items-center justify-center rounded-md border border-2 border-orange-500 ${backChecked}`}
            onPress={handlePress}
          >
            {!checked && <AntDesign name="check" size={20} color="white" />}
          </Pressable>
          <Text className="text-gray-500">
            Do you agree to all terms and conditoin
          </Text>
        </View>
      </View>
      <View>
        {/* Button Phone */}
        <View className="flex-row mx-auto">
          <TouchableOpacity
            disabled={true && checked}
            style={{ backgroundColor: "#FF9B63" }}
            className="w-80 rounded-xl p-4"
          >
            <Text className="text-white font-bold text-center">
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Email_Registre;

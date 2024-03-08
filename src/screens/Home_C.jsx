import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const Home_C = ({ navigation }) => {
  return (
    <LinearGradient
      className="flex-1 items-center justify-between "
      colors={["#F9B776", "#FF621F"]}
    >
      <View className="flex-1 items-center justify-center">
        <View>
          <Image
            className="w-40 h-40 mx-auto"
            source={require("../../assets/img/tow-truck.png")}
          />
          <Text className="font-bold mx-auto text-white text-4xl">
            Depanage Dz
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View
        style={{ marginTop: -400 }}
        className="flex-1 items-center justify-center mx-auto"
      >
        <Text className="text-white font-bold text-2xl text-center">
          Do You Want To Registre As :
        </Text>
        <View style={{width : "100%"}} className=" w-full flex-row mt-8 space-x-6">
          <TouchableOpacity style={[styles.shadow , {width : "43%"}]} className="h-20 bg-white rounded-md items-center justify-center" onPress={()=>navigation.navigate("Home_L")}>
            <AntDesign name="user" size={24} color="#FF621F" />
            <Text style={{ color: "#FF621F" }} className=" font-bold text-lg">
              Client
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.shadow , {width : "43%"}]} className="h-20 bg-white rounded-md items-center justify-center" onPress={()=>navigation.navigate("Home_L_D")}>
            <AntDesign name="car" size={24} color="#FF621F" />
            <Text style={{ color: "#FF621F" }} className="font-bold text-lg">
              Trucker
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  shadow: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Home_C;

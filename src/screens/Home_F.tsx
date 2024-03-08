import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const Home_F = ({navigation}) => {
  const [nextPage, setNextPage] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setNextPage(true);
    }, 4000);
    // Clear the timer when the component unmounts or when nextPage becomes true
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Fade-in animation when nextPage becomes true
    Animated.timing(fadeAnim, {
      toValue: nextPage ? 1 : 0,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, [nextPage]);

  return (
    <LinearGradient
      className="flex-1 items-center justify-center "
      colors={["#F9B776", "#FF621F"]}
    >
      <View className="flex-1 items-center justify-center">
        <View>
          <Image
            className="w-40 h-40 mx-auto"
            source={require("../../assets/img/tow-truck.png")}
          />
          <Text
          className="font-bold mx-auto mb-12 text-white text-4xl"
          >
            Depanage Dz
          </Text>
          <Animated.View style={{ opacity: fadeAnim }}>
            {nextPage ? (
              <TouchableOpacity
              onPress={()=>navigation.navigate("Home_C")}
              className="flex-row w-40 h-10 rounded-lg mx-auto items-center justify-center bg-white space-x-3"
              >
                <Text style={{color : "#FF621F"}} className="font-bold text-lg">Start</Text>
                <AntDesign name="arrowright" size={24} color="#FF621F" />
              </TouchableOpacity>
            ) : null}
          </Animated.View>
        </View>
        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
};

export default Home_F;

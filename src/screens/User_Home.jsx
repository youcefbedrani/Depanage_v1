import { View, Text, ScrollView , StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import User_Tab from "../components/User_Tab";
import Reception from "../components/Reception";
import Chosing from "../components/Chosing";
import Ads_Card from "../components/Ads_Card";
const User_Home = () => {
  return (
    <View className="flex-1 bg-white items-center px-4">
      <User_Tab />
      <ScrollView
        vertical
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Reception />
        <Chosing />
        <View
          style={{ width: "100%" , marginBottom: 170 }}
          className="flex-column h-40 justify-between"
        >
          <Ads_Card
            icon={require("../../assets/img/confetti.png")}
            imgUrl={require("../../assets/img/ads1.png")}
            title="Thanks to you"
            subTitle="We thank you for your trust"
            short_descrption="Depenage Dz has been voted product of the year 2024"
          />
        </View>
        <View style={{ marginBottom: 140 }} className="flex-column w-full h-40 justify-between">
          <Ads_Card
            icon={require("../../assets/img/confetti.png")}
            imgUrl={require("../../assets/img/ads1.png")}
            title="Thanks to you"
            subTitle="We thank you for your trust"
            short_descrption="Depenage Dz has been voted product of the year 2024"
          />
        </View>
        <View style={{ marginBottom: 180 }} className="flex-column w-full h-40 justify-between">
          <Ads_Card
            icon={require("../../assets/img/confetti.png")}
            imgUrl={require("../../assets/img/ads1.png")}
            title="Thanks to you"
            subTitle="We thank you for your trust"
            short_descrption="Depenage Dz has been voted product of the year 2024"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
    scrollViewContent : {
        width: '100%',
        flexDirection : 'column',
        paddingTop : 12,
        paddingHorizontal: 15,
    }
});

export default User_Home;

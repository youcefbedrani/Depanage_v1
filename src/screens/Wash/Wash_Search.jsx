import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  View, Text, StyleSheet, Image, TextInput , TouchableOpacity
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  MaterialIcons,
  Feather,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";

const Wash_Search = () => {
  const navigation = useNavigation();
  const StartPoint = useMemo(() => ["38%", "50%", "80%"], []);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [Latitude, setLatitude] = useState(null);
  const [Longitude, setLongitude] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      } catch (error) {
        setErrorMsg("Error fetching location");
      }
    })();
  }, []);

  let initialRegion = {
    latitude: Latitude || 36.7642,
    longitude: Longitude || 3.1468,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${Latitude}, Longitude: ${Longitude}`;
  }
  // renders
  return (
    <View style={styles.container}>
      <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
        {/* Add markers here if needed */}
        {Latitude && Longitude && (
          <Marker
            coordinate={{ latitude: Latitude, longitude: Longitude }}
            title="Marker Title"
            description="Marker Description"
          />
        )}
      </MapView>
      <BottomSheet
        snapPoints={StartPoint}
        handleIndicatorStyle={{ backgroundColor: "orange" }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View
            style={styles.shadowProp}
            className="w-80 mx-auto h-20 flex-column bg-white rounded-xl px-3"
          >
            <View
              style={{ borderBottomColor: "gray", width: "100%" }}
              className=" border-b-2 mx-auto h-10 flex-row items-center space-x-2"
            >
              <MaterialIcons name="my-location" size={24} color="orange" />
              <TextInput
                placeholder="My Location"
                value="Laghouat , Laghouat , Laghouat Algeria"
              />
            </View>
            <View className=" w-80 mx-auto h-10 flex-row items-center space-x-3">
              <FontAwesome5 name="location-arrow" size={20} color="orange" />
              <TextInput placeholder="Destination" />
            </View>
          </View>
          {/* show on map */}
          <View style={{ marginLeft: -180 }}>
            <TouchableOpacity className="flex-row space-x-3 mt-4 items-center">
              <FontAwesome name="map-pin" size={24} color="orange" />
              <Text>Show on Map</Text>
            </TouchableOpacity>
          </View>
          {/* History Location  */}
          <Text
            style={{ marginLeft: -180 }}
            className="text-gray-500 mt-6 mb-2 text-lg"
          >
            Recent Research
          </Text>
          <View style={{ marginLeft: -20 }}>
            <View className="flex-row mx-12 space-x-4 items-center ">
              <FontAwesome name="map-marker" size={24} color="orange" />
              <View
                style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}
                className="flex-column w-64 mb-2 pb-2"
              >
                <Text className="text-gray-900 font-bold text-lg">
                  Rayen's Home
                </Text>
                <Text className="text-gray-500 text-xs ">
                  South Gate , California
                </Text>
              </View>
            </View>
            <View className="flex-row mx-12 mt-2 mb-4 space-x-4 items-center ">
              <FontAwesome name="map-marker" size={24} color="orange" />
              <View
                style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}
                className="flex-column w-64 mb-2 pb-2"
              >
                <Text className="text-gray-900 font-bold text-lg">
                  Matheus's Home
                </Text>
                <Text className="text-gray-500 text-xs ">
                  Campton , California
                </Text>
              </View>
            </View>
          </View>
          <View className="w-full mx-14 items-center">
            <TouchableOpacity className="w-full h-12 rounded-xl bg-orange-800 py-2 px-4" onPress={()=>navigation.navigate("Truck_Options")}>
              <Text className="text-center font-bold text-white text-lg">
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
    paddingHorizontal: 12,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
});


export default Wash_Search;

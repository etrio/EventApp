import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { useColorScheme } from "@/components/useColorScheme";
import dayjs from "dayjs";
import { Product } from "@/types/types";
import Colors from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";

const Events = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default Events;

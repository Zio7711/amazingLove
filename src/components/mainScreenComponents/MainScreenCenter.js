import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import { secondsToDhms } from "../../utils/mainScreenHelper";
import { useSelector } from "react-redux";
import userStorage from "../../utils/userStorage";

const MainScreenCenter = () => {
  //loving state in seconds
  const [lovingTime, setLovingTime] = useState(0);

  const { user } = useCallback(
    useSelector((state) => state.global),
    []
  );

  useEffect(() => {
    //calculate loving time
    const currentTime = moment(new Date(Date.now()));

    const dateWeMet = moment("2021-10-19");
    const lovingTimeInSeconds = currentTime.diff(dateWeMet, "seconds");
    setLovingTime(lovingTimeInSeconds);

    //set interval to update loving time
    let everySecondInterval = setInterval(() => {
      setLovingTime((prev) => prev + 1);
    }, 1000);

    // clear interval when component unmounts
    return () => clearInterval(everySecondInterval);
  }, []);

  // convert seconds to dhms
  const displayLovingTime = secondsToDhms(lovingTime);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {user.name}
          <MaterialCommunityIcons name="heart" size={24} color="red" />{" "}
          {user.soulmate.name}
        </Text>
        <Text style={styles.description}>{displayLovingTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: 110,
    right: 0,
  },

  name: {
    fontSize: 30,
  },
  description: {
    fontSize: 16,
  },
});

export default MainScreenCenter;

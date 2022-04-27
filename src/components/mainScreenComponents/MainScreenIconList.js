import { StyleSheet, Text, View } from "react-native";

import IconItem from "../IconItem";
import colors from "../../../config/colors";
import routes from "../../navigation/routes";
import { useNavigation } from "@react-navigation/native";

const MainScreenIconList = (props) => {
  const navigation = useNavigation();
  // icons list for main screen
  const iconList = [
    { title: routes.DATING_BUCKET_LIST, name: "battery-heart-variant" },
    { title: routes.TIC_TAC_TOE, name: "gamepad-variant" },
    { title: routes.CHAT, name: "message-text" },
    { title: routes.DAIRIES, name: "book-open-variant" },
    { title: routes.MAP, name: "map" },
  ];

  return (
    <View style={styles.container}>
      {iconList.map((icon, index) => (
        <IconItem
          title={icon.title}
          key={index}
          size={40}
          name={icon.name}
          iconColor={"black"}
          backgroundColor={colors.primary}
          onPress={() => navigation.push(icon.title)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 50,
    flexWrap: "wrap",
  },
});
export default MainScreenIconList;

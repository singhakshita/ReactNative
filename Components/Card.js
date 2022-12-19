import { View, Text, StyleSheet, Image } from "react-native";

function Card(props) {
  return (
    <View style={styles.card_container}>
      <View>
        <Image style={styles.card_icon} source={props.icon} />
      </View>
      <View style={styles.card_container_title}>
        <Text style={styles.card_title}>{props.title}</Text>
      </View>
      <View style={styles.card_container_subtitle}>
        <Text style={styles.card_subtitle}>{props.subtitle}</Text>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card_container: {
    margin: 12,
    padding: 10,
    elevation: 8,
    backgroundColor: "#52BE80",
    justifyContent: "space-evenly",
    borderRadius: 8,
  },
  card_icon: {
    resizeMode: "cover",
    height: 50,
    width: 60,
  },
  card_title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  card_container_title: {
    margin: 4,
    marginTop: 8,
  },
  card_container_subtitle: {
    margin: 4,
  },
  card_subtitle: {
    color: "#ffffff",

    fontSize: 12,
  },
});

import { View, ScrollView, Text } from "react-native";
import Card from "./Card";

function Cards({ array }) {
  return (
    <View>
      {array.map((ele) => (
        <Card
          id={ele.title}
          icon={ele.icon}
          title={ele.title}
          subtitle={ele.subtitle}
        />
      ))}
    </View>
  );
}

export default Cards;

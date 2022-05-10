import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

const HomePageTile = (props: any) => {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>
                {props.titre}
            </Text>
            <Text style={styles.text}>
                {props.description}
            </Text>
        </TouchableOpacity>
    );
}

export default HomePageTile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ededed",
      border: 2,
      borderRadius: 5,
      marginBottom: 5,
    },
    title: {
      fontSize: 18,
    },
    text: {
      fontSize: 14,
    },
  });
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HomePageTile() {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>
                Title
            </Text>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </TouchableOpacity>
    );
}

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
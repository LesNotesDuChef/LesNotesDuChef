import { setStatusBarHidden, setStatusBarStyle } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StatusBar, Modal, StyleSheet, Text, View } from 'react-native';
import HomePageTile from './home-page-tile';

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
 {/*}     <StatusBar  style={styles.statusbar}>
        animated={true}
        backgroundColor="#61dafb"
      </StatusBar>
{/*      <Modal style={styles.modal}>
        animationType='slide'
        transparent={true}
      </Modal>*/}
      <ScrollView style={styles.scrollView}>
          <HomePageTile></HomePageTile>
          <HomePageTile></HomePageTile>
          <HomePageTile></HomePageTile>
          <HomePageTile></HomePageTile>
          <HomePageTile></HomePageTile>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  modal: {
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
  },

});


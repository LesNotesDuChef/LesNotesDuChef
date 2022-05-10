import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import HomePageTile from './home-page-tile';

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
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
});

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HomePageTile from './home-page-tile';
import customData from '../../dummies/recette-test.json'


const HomePage = () => {
    const data = customData.map( e => <HomePageTile titre={e.titre} description={e.description}></HomePageTile> );
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Les Notes Du Chef</Text>
            <ScrollView style={styles.scrollView}>
                {data}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 28,
    },
    scrollView: {
        marginHorizontal: 5,
    },
});

export default HomePage;
import { StyleSheet, Text, View } from "react-native"

/**
 * Vue sur une recette
 * 
 * @returns JSX sur une vue de recette
 * 
 * @author Tanguy Poinson
 */
const RecipeView = (props: any) => {
    return(<View>
        <Text>props.titre</Text>
    </View>);
} 

/**
 * CSS de la home page
 */
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

export default RecipeView;
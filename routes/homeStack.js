import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigtion';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails'


const screens = {
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'GameZone'
        }
    },
    Reviewdetails: {
        screen: ReviewDetails
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
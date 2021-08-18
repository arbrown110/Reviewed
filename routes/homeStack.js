import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigtion';


const sreens = {
    Home: {
        screen: Home
    }
}
const HomeStack = createStackNavigator(screens);
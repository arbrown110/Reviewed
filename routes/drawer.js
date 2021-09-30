import { createDrawerNavigatior } from 'react-navigation-drawer';
import { createAppcontainer } from 'react-navigation';
import About from '../screens/about';

const RootDrawerNavigator = createDrawerNavigatior({
    home: {
        screen: HomeStack,

    },
    About: {
        screen: AboutStack
    }
})
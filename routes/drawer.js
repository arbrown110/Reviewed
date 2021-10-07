import { createDrawerNavigatior } from 'react-navigation-drawer';
import { createAppcontainer } from 'react-navigation';
import AboutStack from '../aboutStack';
import HomeStack from '../homestack';

const RootDrawerNavigator = createDrawerNavigatior({
    home: {
        screen: HomeStack,

    },
    About: {
        screen: AboutStack
    }
});

export default createAppcontainer(RootDrawerNavigator)
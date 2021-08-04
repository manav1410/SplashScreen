import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import About from './About';
import HomeScreen from './Screen';

const Screens = {
    HomeScreen:{
        screen:HomeScreen
    },
    About:{
        screen:About
    }
};

const HomeStack = createStackNavigator(Screens);

export default createAppContainer(HomeStack);
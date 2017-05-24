import { StackNavigator } from 'react-navigation';

import LoginPage from '../components/pages/LoginPage.js';

import TabNavigation from './TabNavigation.js';

export default StackNavigator(
    {
        Index: {
            screen: LoginPage
        },
        Dashboard: {
            screen: TabNavigation
        }
    },
    {
        initialRouteName: 'Index',
        headerMode: 'none'
    }
);

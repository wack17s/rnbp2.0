import { TabNavigator } from 'react-navigation';

import ExploreTab  from '../components/tabs/ExploreTab.js';
import LibraryTab  from '../components/tabs/LibraryTab.js';
import SearchTab   from '../components/tabs/SearchTab.js';
import HistoryTab  from '../components/tabs/HistoryTab.js';
import BookmarkTab from '../components/tabs/BookmarkTab.js';

export default TabNavigator(
    {
        Explore: {
            screen: ExploreTab
        },
        Library: {
            screen: LibraryTab
        },
        Search: {
            screen: SearchTab
        },
        History: {
            screen: HistoryTab
        },
        Bookmark: {
            screen: BookmarkTab
        }
    }, {
        tabBarOptions: {
            activeTintColor: '#e91e63'
        }
    }
);

import { connect } from 'react-redux';

import * as NavigationActions from '../../actions/NavigationActions.js';

import TabNavigation from '../../navigation/TabNavigation.js';

export default connect(null, { ...NavigationActions })(TabNavigation);

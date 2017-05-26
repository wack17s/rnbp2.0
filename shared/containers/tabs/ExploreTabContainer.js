import { connect } from 'react-redux';

import * as NavigationActions from '../../actions/NavigationActions.js';

import ExploreTab from '../../components/tabs/ExploreTab.js';

export default connect(null, { ...NavigationActions })(ExploreTab);

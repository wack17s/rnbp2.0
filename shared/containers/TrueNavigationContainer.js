import { connect } from 'react-redux';

import { TrueNavigationComponent } from '../navigation/TrueNavigation.js';

function mapStateToProps(state) {
    console.log('NAVIGATION', state.nav)
    return {
        nav: state.nav
    };
}

export default connect(mapStateToProps, {})(TrueNavigationComponent);

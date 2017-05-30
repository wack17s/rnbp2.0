import { connect } from 'react-redux';

import Video from '../../components/other/Video.js';

function mapStateToProps(state) {
    return {
        currentRoute: state.navigation.currentRoute
    };
}

export default connect(mapStateToProps, {})(Video);

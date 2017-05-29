import React, { PureComponent, PropTypes } from 'react';
import { View, FlatList, Text, Dimensions } from 'react-native';

export default class extends PureComponent {
    static propTypes = {
        horizontal: PropTypes.bool
    }

    state = {
        data: [ { title: 'some', key: 'i1' }, { title: 'some', key: 'i2' }, { title: 'some', key: 'i3' } ]
    };

    handleRefresh = () => {
        const { data } = this.state;

        this.setState({ data: [...data, { title: 'new', key: `i${data.length + 1}` } ] });
    }

    renderHeader = ({ section }) => {
        return (
            <View style={{ height: 50, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, color: 'white' }}>{section.key}</Text>
            </View>
        );
    }

    renderItem = ({ item }) => {
        const { horizontal } = this.props;

        return (
            <View
                style={{
                    height: horizontal ? 200 : 50,
                    width: horizontal ? 200 : Dimensions.get('window').width,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ fontSize: 20, color: 'red' }}>{item.title}</Text>
            </View>
        );
    }

    render() {
        const { horizontal } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    renderItem          = {this.renderItem}
                    renderSectionHeader = {this.renderSectionHeader}
                    data                = {this.state.data}
                    refreshing          = {false}
                    onRefresh           = {this.handleRefresh}
                    horizontal          = {horizontal}
                    onEndReached        = {horizontal ? this.handleRefresh : () => null}
                />
            </View>
        );
    }
}

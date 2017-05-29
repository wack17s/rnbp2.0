import React, { PureComponent } from 'react';
import { View, SectionList, Text } from 'react-native';

export default class extends PureComponent {
    state = {
    };

    renderSectionHeader = ({ section }) => {
        return (
            <View style={{ height: 50, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, color: 'white' }}>{section.key}</Text>
            </View>
        );
    }

    renderItem = ({ item }) => {
        return (
            <View style={{ height: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, color: 'red' }}>{item.title}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    renderItem          = {this.renderItem}
                    renderSectionHeader = {this.renderSectionHeader}
                    sections            = {[
                        {
                            data: [
                                { title: 'some1', key: '11' },
                                { title: 'some1', key: '12' },
                                { title: 'some1', key: '13' }
                            ],
                            key: 's1'
                        }, {
                            data: [
                                { title: 'some2', key: '21' },
                                { title: 'some2', key: '22' },
                                { title: 'some2', key: '23' }
                            ],
                            key: 's2'
                        }, {
                            data: [
                                { title: 'some3', key: '31' },
                                { title: 'some3', key: '32' },
                                { title: 'some3', key: '33' }
                            ],
                            key: 's3'
                        }, {
                            data: [
                                { title: 'some4', key: '41' },
                                { title: 'some4', key: '42' },
                                { title: 'some4', key: '43' }
                            ],
                            key: 's4'
                        }, {
                            data: [
                                { title: 'some5', key: '51' },
                                { title: 'some5', key: '52' },
                                { title: 'some5', key: '53' }
                            ],
                            key: 's5'
                        }
                    ]}
                />
            </View>
        );
    }
}

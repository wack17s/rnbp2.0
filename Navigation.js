import React, { Component } from 'react';
import {
    View,
    Text,
    BackAndroid,
} from 'react-native';

import CrossFadeTransitioner from './CrossFadeTransitioner';

import { createNavigationContainer, createNavigator, StackRouter, CardStack } from 'react-navigation';

class TransitionerSwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transition: 'crossFade',
            duration: 300,
        };
    }
    render() {
        const transitionMap = {
            crossFade: CrossFadeTransitioner
        }
        const Transitioner = transitionMap[this.state.transition];
        return (
            <Transitioner {...this.props} />
        );
    }
    // For simplicity, we use context to pass these functions to PhotoGridScreen and SettingsScreen
    // In real apps, we can use Redux to manage the state.
    static childContextTypes = {
        setActiveTransition: React.PropTypes.func,
        getActiveTransition: React.PropTypes.func,
    }
    getChildContext() {
        const self = this;
        return {
            setActiveTransition(transition = 'crossFade') {
                self.setState({ transition });
            },
            getActiveTransition() {
                return self.state.transition;
            }
        }
    }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null
  };

  componentWillUnmount() {
    console.log('home')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ paddingTop: 30 }}>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };

  componentWillUnmount() {
    console.log('chat1')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Chat with Lucy</Text>
        <Button
          onPress={() => navigate('Chat2')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };

  componentWillUnmount() {
    console.log('chat2')
  }

  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}


const router = StackRouter({
   Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Chat2: { screen: ChatScreen2 },
});

const MyNavigator = createNavigationContainer(createNavigator(router)(TransitionerSwitcher));

export default MyNavigator;
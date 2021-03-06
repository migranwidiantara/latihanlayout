import React, { Component, styles } from 'react';
import {
   View, Image, Text,
} from 'react-native';

const profileImage = require('./images/user-profile.jpg');
const friendsIcon = require('./images/profile.png');
const favIcon = require('./images/plain-heart.png');
const msgIcon = require('./images/chat.png');

class MainApp extends Component {
state = {
  name: 'Crysfel',
  lastName: 'Villa Roman',
  occupation: 'Software Engineer',
  friends: '1,200',
  favorites: '2,491',
  comments: '4,832',
};

renderStat(options) {
return (
  <View style={styles.stat}>
    <Image
    source={options.icon}
    style={[styles.icon, options.selected ?
    styles.selected : null]}
    />
    <Text style={styles.counter}>{options.value}</Text>
  </View>
);
}

render() {
const {
  name,
  lastName,
  occupation,
  friends,
  favorites,
  comments,
} = this.state;

return (
  <Image source={profileImage} style={styles.container}>
    <View style={styles.info}>

      <View style={styles.personal}>
        <Text style={styles.name}>{name}{lastName}</Text>
        <Text style={styles.occupation}>{occupation.toUpperCase()}</Text>
      </View>

      <View style={styles.stats}>{this.renderStat(
        { icon: friendsIcon, value: friends, selected: true })}
        {this.renderStat({ icon: favIcon, value: favorites })}
        {this.renderStat({ icon: msgIcon, value: comments })}
      </View>

    </View>
  </Image>
  );
}
}

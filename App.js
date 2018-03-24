import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.box1}>
          <Text style={styles.text1}>Pendidikan Teknik Informatika</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.text2}>Slider</Text>
        </View>

        <View style={styles.box3}>
          <View style={styles.boxbox1}>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>1</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>2</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>3</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>4</Text>
            </View>
          </View>

          <View style={styles.boxbox1}>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>5</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>6</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>7</Text>
            </View>
            <View style={styles.boxbox2}>
              <Text style={styles.text2}>8</Text>
            </View>
          </View>
        </View>


        <View style={styles.box4}>
          <Text style={styles.text3}>#JaenKuliahdiPTI</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#EDE7F6',
    flexDirection: 'column'
  },

  box1: {
    flex: 2,
    backgroundColor: '#673AB7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  box2: {
    flex: 4,
    backgroundColor: '#D1C4E9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box3: {
    flex: 4,
    backgroundColor: '#673AB7',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  box4: {
    flex: 2,
    backgroundColor: '#9575CD',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  boxbox1: {
    flex: 1,
    backgroundColor: '#673AB7',
    flexDirection: 'row',
  },

  boxbox2: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30
  },

  text1: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 30,
  },

  text3: {
    fontSize: 30,
  },
});

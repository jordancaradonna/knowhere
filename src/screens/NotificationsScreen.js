import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, SectionList, SafeAreaView} from 'react-native';
import {Header} from 'react-native-elements';

class NotificationsScreen extends React.Component {
  render() {
    return (
        <SafeAreaView  style={styles.container}>
        <Header
          centerComponent={{ text: 'Notification' }}
          //rightComponent={{ Icon: 'cog' }}
          backgroundColor= 'white'
          />
       
          <SectionList
            
            sections={[
              {title: 'Today', data: ['Devin']},
              {title: 'Yesterday', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item} Saved your post</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1, 
   paddingTop: 22,
   alignItems: 'center'
  },
    container2:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    title:{
      //fontSize: 28,
      //fontFamily: 'Chalkboard SE',
      padding: 5,
      color: 'black',
    },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    //fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
  },
  item: {
    padding: 10,
    //fontSize: 18,
    height: 44,
  },
});

export default NotificationsScreen;

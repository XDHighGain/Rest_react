import { StyleSheet } from 'react-native';

export const ItemStyle = StyleSheet.create({
    Text: {
      fontSize: 18,
      fontFamily: 'RobotoSlab-Light',
    },
    Container: {
      padding: 5,
      margin: 5,
      alignItems: 'center',
      backgroundColor: '#e5d3f2',
      opacity: 1,
      borderRadius: 5,
    }
  })
  
  export const ListPanel = StyleSheet.create({
    View: {
      flex: 1,
    },
    List: {
      flex: 1, 
    }
  })
  
  export const TopPanelStyle = StyleSheet.create({
    MainView: {
      
      flexDirection: 'column',
      paddingTop: 10,
      paddingBottom: 20,
    },
    Title: {
      marginLeft: 20,
      marginTop: 20,
      fontSize: 25,
      fontFamily: 'RobotoSlab-Light',
      color: 'black',
      paddingBottom: 5
    },
    SearchBar: {
      width: '100%',
      flexDirection: 'row',
      paddingLeft: 10,
      paddingRight: 10
    },
    InputField: {
      flex: 1,
      height: '100%',
      fontSize: 18,
      fontFamily: 'RobotoSlab-Light',
      backgroundColor: '#beb7ed',
      borderRadius: 8,
      textAlign: 'center',
      opacity: 0.7
    },
    SearchButton: {
      borderRadius: 22,
      backgroundColor: '#beb7ed',
      paddingLeft: 5,
      paddingRight: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 5,
      opacity: 0.7
    },
    SearchText: {
      fontSize: 18,
      fontFamily: 'RobotoSlab-Light',
      color: 'black'
    }
  });
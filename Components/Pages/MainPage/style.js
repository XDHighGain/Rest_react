import { StyleSheet } from "react-native"

  export  const MainPage = StyleSheet.create({
        Button: {
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: '#e5d3f2',
            alignItems: 'center',
            margin: 10,
            borderRadius: 22,  
            //elevation: 10,
            shadowColor: 'black',
            shadowOpacity: 1,
            shadowRadius: 5,    
        },
        Text: {
            fontSize: 30,    
            fontFamily: 'RobotoSlab-Light',
            backgroundColor: 'transparent',    
        },
        Area : {
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            //justifyContent: 'space-between',
        }
    })
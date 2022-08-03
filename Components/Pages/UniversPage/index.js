import {
    TouchableOpacity,
    ScrollView,
    Text,
    TextInput,
    View,
    FlatList,
    Animated,
  } from 'react-native';

  import React, { useEffect, useRef, useState } from 'react';
  import { TopPanelStyle } from './styles';
  import { ListPanel } from './styles';
  import {ItemRender} from './logic';
  export const UniverPageComponent = (props) => {

   const [jsonArray, newJson] = useState([]);
   const [count, setCount] = useState();
   const [text1, setText] = useState('Chose country')

   const GetRest = () => {
    newJson(0);
    setCount('');
    fetch('http://universities.hipolabs.com/search?country=' + text1)
      .then(response => response.json())
      .then(result => {
        result.sort();
        newJson(result);
        if (result.length == 0) {
          setCount('No result');
        }
        else {
          setCount(result.length);
        }
      })
    
  };

  const [buttonElevation, setElevation] = React.useState(new Animated.Value(0));
  const elevationAnimation = buttonElevation.interpolate(
      {
          inputRange: [0, 1],
          outputRange: [3, 15]
      }
  )
  React.useEffect(() => {
    Animated.loop(
        Animated.sequence(
            [
                Animated.timing(
                    buttonElevation,
                    {
                        duration: 1222,
                        useNativeDriver: true,
                        toValue: 1
                    }
                ),
                Animated.timing(
                    buttonElevation,
                    {
                        duration: 1222,
                        useNativeDriver: true,
                        toValue: 0
                    }
                )
            ]
        )
    ).start();
          })

     return (
    <View style={{flex: 1, backgroundColor: 'rgba(70, 144, 184, 0.8)'}}>
      <Animated.View id={'TopPanel'} style={TopPanelStyle.MainView} >
        <Text style={TopPanelStyle.Title}>List of Universities ({count})</Text>
        <View style={TopPanelStyle.SearchBar}>
          <TextInput style={TopPanelStyle.InputField} value={text1} onChangeText={e => setText(e)}  />      
            <TouchableOpacity style={[TopPanelStyle.SearchButton, {elevation: elevationAnimation}]} onPress={GetRest}>
            <Text style={TopPanelStyle.SearchText} >Search</Text>
          </TouchableOpacity>        
        </View>
      </Animated.View>    
      <ScrollView  style={{ flex: 1, width: '100%' }}>
        <FlatList
          style={ListPanel.List}
          data={jsonArray}
          renderItem={ItemRender}
          keyExtractor={item => item.name}
          initialNumToRender={10}        
        />
      </ScrollView >
    </View>
  );
  }
 
import { ItemStyle } from './styles';
import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Alert,
  } from 'react-native';

export const ListItem = ({ title }) => (
    <View>
        <Text style={ItemStyle.Text}>{title}</Text>
    </View>
);

export const ItemRender = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => Alert.alert('Name - ' + item.name, 'Web page - ' + item.web_pages)} style={ItemStyle.Container}>
            <ListItem title={item.name} >
            </ListItem>
        </TouchableOpacity>
    )
}

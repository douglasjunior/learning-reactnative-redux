import React from 'react'
import {
    Text,
    TouchableOpacity
} from 'react-native';

const ListItem = ({ item, onItemPress }) => {
    const { title } = item;
    return (
        <TouchableOpacity style={{ padding: 8 }} onPress={() => onItemPress(item)}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default ListItem;

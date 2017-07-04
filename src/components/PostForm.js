import React from 'react'
import {
    Text,
    View,
    ScrollView,
    TextInput,
    Button
} from 'react-native';

const PostForm = ({ title, changePostTitle, body, changePostBody, onCancelPress, onOkPress }) => {
    return (
        <View>
            <Text>Titulo</Text>
            <TextInput style={{ height: 40, borderWidth: 1, }} underlineColorAndroid="#00000000"
                onChangeText={text => changePostTitle(text)} value={title} />
            <Text>Conteúdo</Text>
            <TextInput style={{ height: 120, borderWidth: 1 }} underlineColorAndroid="#00000000"
                onChangeText={text => changePostBody(text)} value={body} multiline={true} />
            <View style={{ flexDirection: "row" }}>
                <Button title="CANCELAR" onPress={onCancelPress} />
                <Button title="SALVAR" onPress={onOkPress} />
            </View>
        </View>
    )
}

export default PostForm
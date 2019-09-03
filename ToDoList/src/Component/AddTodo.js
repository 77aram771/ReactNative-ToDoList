import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View, Touchableopacity, TextInput} from 'react-native';
import {CheckBox, Button,} from 'react-native-elements';
import Context from './Context'



export default function AddTodo({onCreate}) {

    const [value, setValue] = useState('');


    function handleInput(e) {
        e.preventDefault();
        console.log(value);
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <View>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => setValue(text)}
                value={value}
            />
            <Button
                onPress={handleInput}
                title="Add Todo"
            />

        </View>
    )
}
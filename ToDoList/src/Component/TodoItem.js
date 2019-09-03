import React, {Fragment, useContext} from 'react';
import {FlatList, StyleSheet, Text, View, Touchableopacity} from 'react-native';
import {CheckBox, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Context from './Context';


export default function TodoItem({text, checkbox, id, onChange}) {
    const {removeTodo} = useContext(Context);
    return (
        <Fragment>
            <View>
                <CheckBox
                    title='Click Here'
                    checked={checkbox}
                    onPress={() => onChange(id)}
                />
            </View>
            <View>
                <Text style={checkbox ? styles.itemB : styles.item}>
                    {text}
                </Text>
            </View>
            <View>
                <Button
                    title="Clear button"
                    type="clear"
                    onPress={() => removeTodo(id)}
                />
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    item: {
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    itemB: {
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        height: 44,
        textDecorationLine: 'line-through'
    },
});
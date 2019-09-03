import React, {Fragment} from 'react';
import {List, ListItem} from 'react-native-elements';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TodoItem from "./TodoItem";


export default function TodoList({list, onChange}) {
    return (
        <Fragment>
            <View style={styles.container}>
                {
                    list.map(item => {
                        return (
                            <View key={item.id}>
                                <TodoItem
                                    text={item.title}
                                    checkbox={item.bool}
                                    onChange={onChange}
                                    id={item.id}
                                />
                            </View>

                        )
                    })

                }

            </View>
            {/*<FlatList*/}
            {/*    data={[*/}
            {/*        {key: 'Devin'},*/}
            {/*    ]}*/}
            {/*    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}*/}
            {/*/>*/}

        </Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        paddingTop: 22,
        borderWidth: 1,
        borderStyle: 'solid'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
import React, {Fragment, useEffect} from 'react';
import {Text, Button} from 'react-native-elements'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';
// import AnimatedLoader from "react-native-animated-loader";
import TodoList from "./src/Component/TodoList";
import Context from './src/Component/Context'
import AddTodo from "./src/Component/AddTodo";

function App() {
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())

            .then(todos =>
                setTimeout(() => {
                    setTodos(todos);
                    setLoading(false)
                }, 2000))

    }, []);

    function onChange(id) {
        console.log(id);
        setTodos(todos.map(item => {
            if (item.id === id) {
                item.bool = !item.bool
            }
            return item;
        }));
        console.log(todos)
    };

    function removeTodo(id) {
        setTodos(
            todos.filter(item => item.id !== id)
        )
    }

    function addTodo(title) {
        console.log(title)
        console.log(todos)
        setTodos(
            todos.concat([{
                id: Date.now(),
                title,
                bool: false
            }])
        )
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <Fragment>
                <SafeAreaView>
                    <View style={styles.wrapper}>
                        <Text h3>React To-Do</Text>
                    </View>
                    <View>
                        <AddTodo onCreate={addTodo}/>
                    </View>
                    <ScrollView>
                        {loading ? <AnimatedLoader
                            visible={visible}
                            overlayColor="rgba(255,255,255,0.75)"
                            source={require("./loader.json")}
                            animationStyle={styles.lottie}
                            speed={1}
                        /> : null}
                        {todos.length
                            ? <TodoList list={todos} onChange={onChange}/>
                            : <Text>No Todos</Text>}
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        </Context.Provider>
    );
};

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100
    },
    wrapper: {
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'red',
        width: 90 + '%',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default App;

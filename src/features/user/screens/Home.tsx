import {
  Button,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Feather';

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}
export function Home() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Buy groceries', completed: false},
    {id: 2, title: 'Walk the dog', completed: true},
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleAddTodo = () => {
    if (newTodoTitle.trim()) {
      const newTodo = {
        id: todos.length + 1,
        title: newTodoTitle.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle('');
    }
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    );
    setTodos(updatedTodos);
  };

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter(todo => !todo.completed);
    setTodos(updatedTodos);
  };

  const handleToggleCompleted = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    );
    setTodos(updatedTodos);
  };

  const TodoItem = ({title, id, completed}: TodoProps) => (
    <View
      className={
        'w-full flex-row border-b-[1px] border-gray-500 py-3 justify-between items-center'
      }>
      <View className={'flex-row space-x-2 items-center'}>
        {completed ? (
          <TouchableHighlight onPress={() => handleToggleCompleted(id)}>
            <Icon name="check" size={20} />
          </TouchableHighlight>
        ) : (
          <TouchableHighlight onPress={() => handleToggleCompleted(id)}>
            <Icon name="close-circle" size={20} />
          </TouchableHighlight>
        )}
        <Text
          style={{textDecorationLine: completed ? 'line-through' : 'none'}}
          className={`text-white flex- font-semibold decoration-4 ${completed} ? 'line-through': 'none`}>
          {title}
        </Text>
      </View>
      <TouchableHighlight onPress={() => handleToggleTodo(id)}>
        <Icon name="trash-can" size={20} className="text-white" />
      </TouchableHighlight>
      {/*<Button*/}
      {/*  title={item.completed ? 'Completed' : 'Incomplete'}*/}
      {/*  color={item.completed ? '#00ff00' : '#ff0000'}*/}
      {/*  onPress={() => handleToggleTodo(item.id)}*/}
      {/*/>*/}
    </View>
  );

  return (
    <View className="relative flex-1 bg-blue-950 w-screen">
      {/*  Top */}
      <View className={'relative w-full h-64'}>
        <Image
          source={require('../../../assets/images/mountain.jpg')}
          className={'h-full w-full object-cover'}
        />
        <View className={'absolute w-full bg-purple-500/50 h-full'}>
          <View className="px-5 pt-3 flex-row w-full justify-between items-center">
            <Text className="text-white text-xl font-bold tracking-wide">
              TODO
            </Text>
            <Icon2 name="sun" size={20} color="white" />
          </View>
          <View
            className={
              'relative flex items-center justify-center h-full w-full px-5 flex-row'
            }>
            <TextInput
              value={newTodoTitle}
              onChangeText={setNewTodoTitle}
              placeholder="Type a new todo..."
              className={'bg-sky-950 h-12 w-full px-3 rounded-md'}
            />
            <View className={'absolute right-8'}>
              <Button title="Add" onPress={handleAddTodo} color="#0c4a6e" />
            </View>
          </View>
        </View>

        {/*    Todo content goes here */}
        <View className={'absolute -bottom-80 shadow-md  w-full p-5 h-96'}>
          <View
            className={
              'relative items-center w-full h-full rounded-lg bg-sky-900 p-5'
            }>
            <FlatList
              data={todos}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <TodoItem
                  title={item.title}
                  id={item.id}
                  completed={item.completed}
                />
              )}
              className="w-full"
            />
            <View className={'flex-row w-full justify-between'}>
              <Text className="text-white mt-2">
                {todos.filter(todo => !todo.completed).length} tasks remaining
              </Text>
              {/* Clear completed button */}
              <Text
                onPress={handleClearCompleted}
                className="mt-2 underline underline-offset-4">
                Clear completed
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

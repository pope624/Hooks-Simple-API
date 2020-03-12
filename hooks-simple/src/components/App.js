import React, {useState} from 'react';
import ResourceList from '../components/ResourceList'
import UserList from '../components/UserList'

const App = () =>{
    const [resource, setResource] = useState('posts')
    return (
        <div >
            <h1>Users</h1>
            <UserList />
            <div>
                <button onClick = {() => setResource('posts')}>Posts</button>
                <button onClick = {() => setResource('todos')}>Todo</button>
            </div>
            <ResourceList
                resource = {resource}
            />
        </div>

    );
}

export default App;
import './App.css';
import React ,{ useEffect, useState} from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {  
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    axios.get('/messages/sync')
    .then(response => {
      console.log(response.data)
      setMessages(response.data);
    });
  }, []);

  
  useEffect(() => {
    const pusher = new Pusher('a5c99209666ac7372a3b', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);



  console.log(messages);


  return (
    <div className="app"> 
      <div className="app__body">
        <Sidebar/>
        <Chat key={messages._id} messages={messages}/>
      </div>
    </div>
  );
}
 
export default App;

import React,{useState} from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [input,setInput] = useState('');
    const [messages,setMessages] = useState([
        {
            name:'Yash',
            image:'https://images.yourstory.com/cs/2/211ccaf0-0e6d-11e9-97fe-8f165dce9bb1/Sanjana-Ray-Bill-Gates-Credit-Wiki1562912736042.png',
            message:'Hello'
        },
        {
            name:'Yash',
            image:'https://images.yourstory.com/cs/2/211ccaf0-0e6d-11e9-97fe-8f165dce9bb1/Sanjana-Ray-Bill-Gates-Credit-Wiki1562912736042.png',
            message:'Hii'
        },
        {
            message:'fine'
        }
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput("");
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timeStamp">YOU MATCHED WITH PERSON</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar 
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.image}/>
                    <p className="chatScreen__text">{message.message}</p>
                    </div>
                ):(
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )

                
            ))}
            
                <form className="chatScreen__input">
                    <input value={input} onChange={(e) => setInput(e.target.value)}className="chatScreen__inputField" type="text" placeholder="Your Message"/>
                    <button type="submit" onClick={handleSend} className="chatScreen__inputButton">Send</button>
                </form>
            
        </div>
    )
}

export default ChatScreen;

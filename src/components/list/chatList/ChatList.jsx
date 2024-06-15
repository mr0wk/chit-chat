import { useState } from 'react';
import './chat-list.css'

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);

    return (
        <div className="chat-list">
            <div className="search">
                <div className="search-bar">
                    <img src="./search.png" alt="search" />
                    <input type="text" placeholder="Search" />
                </div>
                <img src="./add.png" alt="add-chat" />
            </div>
        </div>
    )
}

export default ChatList;
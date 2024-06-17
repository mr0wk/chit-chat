import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState(false);
  const [inpuText, setInputText] = useState("");

  const insertEmojiToInput = (e) => {
    setInputText((prev) => prev + e.emoji);
    setEmojiPickerIsOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="recipient">
          <img src="./avatar.jpg" alt="recipient-avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum</p>
          </div>
        </div>
        <div className="icons">
          <img src="./call.png" alt="call" />
          <img src="./camera.png" alt="video-call" />
          <img src="./info.png" alt="recipient-info" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.jpg" alt="" />
          <div className="texts">
            <p>Loreasadawdas</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Loreasadawdas</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Loreasadawdas</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.jpg" alt="" />
          <div className="texts">
            <p>Loreasadawdas</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus, quasi voluptatem officia nesciunt ipsum esse iusto odit dolorem sapiente error hic tempora dolore quo quod eum reiciendis? Magnam, recusandae.</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./image.png" alt="" />
          <img src="./photo_camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Type a message..."
          onChange={(e) => setInputText(e.target.value)}
          value={inpuText}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt="emoji-picker"
            onClick={() => setEmojiPickerIsOpen((state) => !state)}
          />
          <div className="picker">
            <EmojiPicker
              open={emojiPickerIsOpen}
              onEmojiClick={insertEmojiToInput}
            />
          </div>
        </div>
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};

export default Chat;

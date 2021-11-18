import React, { useRef } from "react";
import { Message } from "./Message";

export const ChatBox = ({ user, currentChat, setCurrentChat, host }) => {
    const messageInputRef = useRef(null);

    const handleMessageSubmit = async e => {
        e.preventDefault();

        const typedMessage = messageInputRef.current.value;

        if (typedMessage) {
            console.log(typedMessage);
            const { token } = user;
            let res, data;
            // Create a message in DB
            res = await fetch(`${host}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ body: typedMessage })
            });
            data = await res.json();

            setCurrentChat(prev => ({
                ...prev,
                messages: prev.messages ? [...prev.messages, data] : [data]
            }));

            // PUT message in room
            res = fetch(`${host}/room-message/${currentChat.id}/${data.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            messageInputRef.current.value = "";
        }
    };

    return (
        <div>
            {!currentChat ? (
                <h4 className="start-message">
                    Select one of the chats to start texting !
                </h4>
            ) : (
                <>
                    <div className="messageBox">
                        {currentChat.messages?.map(message => (
                            <Message
                                key={message.id}
                                own={message.author.id ? user.id === message.author.id : user.id === message.author}
                                message={message}
                                participants={currentChat.participants}
                            />
                        ))}
                    </div>
                    <div className="messageFormBox">
                        <form onSubmit={handleMessageSubmit}>
                            <textarea
                                ref={messageInputRef}
                                placeholder="Send a message ..."
                            ></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

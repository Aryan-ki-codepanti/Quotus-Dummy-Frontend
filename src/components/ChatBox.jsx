import React from 'react'
import { Message } from './Message'


export const ChatBox = ({ user, currentChat }) => {
    return (
        <div>
            { 
                !currentChat
                ? (<h4 className="start-message"> Select one of the chats to start texting ! </h4>)
                : (<>

                    <div className="messageBox">
                        {
                            currentChat.messages?.map(message => (
                                <Message key={ message.id } own={ user.id === message.author } message={ message } participants={ currentChat.participants }/>
                            ))
                        }
                    </div>
                    <div className="messageFormBox">
                        <form>
                            <textarea></textarea>
                            <button type="submit">Send</button>
                        </form>
                        
                    </div>
                </>) 
                }
        </div>
    )
}

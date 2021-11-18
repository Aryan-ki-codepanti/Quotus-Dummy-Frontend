import React from 'react'
import { Message } from './Message'


export const ChatBox = ({ user,messages }) => {
    return (
        <div>
            <h3>ChatBox</h3>

            <div className="messageBox">
                {
                    messages?.map(message => (
                        <Message key={ message.id } own={ user.id === message.author.id }  />
                    ))
                }
            </div>
        </div>
    )
}

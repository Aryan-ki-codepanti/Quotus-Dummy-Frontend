import React from 'react'

export const Message = ({ message , own , participants }) => {
    const getAuthor = uId => participants.find(participant => participant.id === uId); 
    return (
        <div className={ own ? `message own` : `message not-own`}>
            <div className="body">
                { message.body }
            </div>
            <span> @{ message.author.id ? message.author.username : getAuthor(message.author).username } </span>
        </div>
    )
}

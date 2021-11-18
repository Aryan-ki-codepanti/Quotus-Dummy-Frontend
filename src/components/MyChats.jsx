import React from 'react'

export const MyChats = ({ user , myChats }) => {
    return (
        <div>
            <h3>
                My Chats
            </h3>

            {
                myChats.map(chat => (
                    <div key={ chat.id } className="myChat">
                        <p>
                            { chat.participants.map(({ id, username }) => (
                                <span key={ id }>
                                    @{ username } 
                                </span>
                            )) }
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

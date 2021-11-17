import React from 'react'

export const MyChats = ({ user , myChats }) => {
    return (
        <div>
            My Chats

            {
                myChats.map(chat => (
                    <div key={ chat.id }>
                        
                    </div>
                ))
            }
        </div>
    )
}

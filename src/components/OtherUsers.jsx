import React from 'react'

export const OtherUsers = ({ user , otherUsers }) => {
    return (
        <div>
            
            <h3>Other Users/Rooms</h3>
            {
                otherUsers.map(chat => (
                    <div key={ chat.id }>   
                        gola
                    </div>
                ))
            }

        </div>
    )
};

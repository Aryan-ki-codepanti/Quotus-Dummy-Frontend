import React from 'react'

export const WelcomeMessage = ({ user }) => {
    return (
        <div className="welcome-message">
            <h1> Welcome { user.username } </h1>
        </div>
    )
};

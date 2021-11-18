import React from "react";
import "./components.css";

export const OtherUsers = ({
    user,
    setOtherUsers,
    host,
    otherUsers,
    setMyChats
}) => {
    const updateRoom = async chat => {
        const newParticipants = [
            ...chat.participants,
            {
                id: user.id
            }
        ];
        const { token } = user;
        const res = await fetch(`${host}/rooms/${chat.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ participants: newParticipants })
        });

        const data = await res.json();
        console.log(data);

        // Update rooms on otherRooms
        setOtherUsers(prev => prev.filter(room => room.id !== chat.id));

        // Update mychats
        setMyChats(prev => [...prev, chat]);
    };

    return (
        <div>
            <h3>Other Users/Rooms</h3>
            {otherUsers.map(chat => (
                <div className="otherRoom" key={chat.id}>
                    <p>
                        {chat.participants.map(otherUser => (
                            <span key={otherUser.id}>
                                @{otherUser.username}
                            </span>
                        ))}
                    </p>

                    <button onClick={() => updateRoom(chat)}>Join</button>
                </div>
            ))}
        </div>
    );
};

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WelcomeMessage } from "../components/WelcomeMessage";
import { setUser } from "../redux";
import { OtherUsers } from "../components/OtherUsers";
import { ChatBox } from "../components/ChatBox";
import { MyChats } from "../components/MyChats";
import "./Messenger.css";

const Messenger = ({ user, host, setUser }) => {
    const navigate = useNavigate();

    const [otherUsers, setOtherUsers] = useState([]);
    const [myChats, setMyChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/", { replace: true });
        } else {
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    }, [navigate, setUser]);

    useEffect(() => {
        const getChats = async () => {
            const { token, id } = user;
            const res = await fetch(`${host}/myRooms`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            let data = await res.json();
            data = data.filter(chat => chat.participants?.length > 1);
            data = data.filter(chat =>
                chat.participants.find(participant => participant.id === id)
            );
            setMyChats(prev => data);
        };

        const getOtherChats = async () => {
            const { token, id } = user;
            const res = await fetch(`${host}/allRooms`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            let data = await res.json();
            data = data.filter(
                chat =>
                    !Boolean(
                        chat.participants.find(
                            participant => participant.id === id
                        )
                    )
            );
            setOtherUsers(prev => data);
        };

        user && getChats();
        user && getOtherChats();
    }, [user, host]);

    console.log(user);
    return (
        <>
            {user && (
                <div>
                    <WelcomeMessage user={user} />
                    <div className="wrapper">
                        <OtherUsers
                            user={user}
                            otherUsers={otherUsers}
                            host={host}
                            setOtherUsers={setOtherUsers}
                            setMyChats={setMyChats}
                        />
                        <ChatBox user={user} currentChat={ currentChat }/>
                        <MyChats user={user} myChats={myChats} setCurrentChat={ setCurrentChat } />
                    </div>
                </div>
            )}
        </>
    );
};

const mapStateToProps = ({ auth, user }) => ({
    user: auth.user,
    host: auth.host
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);

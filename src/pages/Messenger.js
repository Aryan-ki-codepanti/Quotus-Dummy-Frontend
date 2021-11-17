import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WelcomeMessage } from "../components/WelcomeMessage";
import { setUser } from "../redux";
import { OtherUsers } from "../components/OtherUsers";
import { ChatBox } from "../components/ChatBox";
import { MyChats } from "../components/MyChats";
import "./Messenger.css";


const Messenger = ({ user , setUser }) => {

    const navigate = useNavigate();


    useEffect( () => {
        if (!localStorage.getItem("user")) {
            navigate("/" , { replace: true });
        }
        else{

            setUser(JSON.parse(localStorage.getItem("user")))
        }
    } , [ navigate , setUser ]);
    
    console.log(user);
    return  (
        <>
            { user &&
                <div>
                    <WelcomeMessage user={user} />
                    <div className="wrapper">
                        <OtherUsers user={ user } />
                        <ChatBox user={ user }/>
                        <MyChats user={ user }/>
                    </div>
                </div>
            }
        </>
    );
};

const mapStateToProps = ({ auth , user }) => ({
    user: auth.user,
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps , mapDispatchToProps)(Messenger);

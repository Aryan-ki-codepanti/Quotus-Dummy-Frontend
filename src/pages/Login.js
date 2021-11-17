import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../redux";

const Login = ({ host , user , setUser }) => {


    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user")){
            navigate("/messenger"  , { replace: true })
        }
    }, [ navigate ])


    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLoginSubmit = async () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const res = await fetch(`${host}/auth/local` , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                identifier: email ,
                password
            })
        });

        const data = await res.json();
        if (data.statusCode !== 400){
            data.user.token = data.jwt;
            localStorage.setItem("user" , JSON.stringify(data.user));
            setUser(data.user);
        }
        else{
            setUser(null)
        }

    };
    console.log(host);
    return (
        <div className="login-form">
            <h1> Login here </h1>
            <input 
                type="text" 
                placeholder="Enter your email" 
                ref={emailRef}
            />
            <br />
            <input
                type="password"
                placeholder="Enter your password"
                ref={passwordRef}
            />

            <div>
                <button onClick={ handleLoginSubmit }> Login </button>
            </div>

            { 
                user
                ? <p> Logged in </p>
                : <p> Not logged in </p>
            }
        </div>
    );
};

const mapStateToProps = ({ auth }) => ({
    host: auth.host,
    user: auth.user
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
});

export default connect(mapStateToProps , mapDispatchToProps)(Login);

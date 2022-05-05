import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom'
import {useActions} from "../../hooks/useActions";

interface IDtoStatic {
    email: string,
    password: string

}

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const {userLogin} = useActions();

    const sendData = ({email, password}: IDtoStatic) => {

            userLogin({email, password});
    }


    return (
        <Wrapper>
            <Title>Auth</Title>
            <label>E-mail:</label>
            <Input type="text" id="mail" name="mail" onChange={(event) => {
                setMail(event.target.value)
            }}/>
            <label>Password:</label>
            <Input type="password" id="password" name="password" onChange={(event) => {
                setPassword(event.target.value)
            }}/>
            <Button onClick={() => {
                sendData({email, password})
            }}>
                LOGIn
            </Button>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`

`
const Input = styled.input`
  width: 200px;
`
const Button = styled.button`
  border-radius: 6px;
  width: 100px;
  height: 30px;
  margin: 10px;
  border-width: 0;
  background-color: whitesmoke;
  cursor: pointer;
`
export default Auth;

import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {authActionDispatch} from "../../store/actions/loginAction";
import {useNavigate} from 'react-router-dom'

interface IDtoStatic {
    email: string,
    password: string

}

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');


    const sendData = ({email, password}: IDtoStatic) => {
        dispatch(authActionDispatch({email, password}))
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
            <Button type="submit" value="Submit" onClick={() => {
                sendData({email, password})
            }}/>
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
const Button = styled.input`
  border-radius: 6px;
  width: 100px;
  height: 30px;
  margin: 10px;
  border-width: 0;
  background-color: whitesmoke;
  cursor: pointer;
`
export default Auth;

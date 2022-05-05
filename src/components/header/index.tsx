import React from 'react';
import styled from "styled-components";
import UserIcon from "../../assets/images/svgs/header-logo.svg"
import {Container} from "../../ui/containers";
import Logo from "../../assets/images/logotype.png"
const Header = () => {
    return (
        <Headers>
            <Container>
                <HeaderContent>
                    <LogoImg src={Logo} />

                    <UserInfo>
                        <div>name surname</div>
                        <img src={UserIcon}/>
                    </UserInfo>
                </HeaderContent>
            </Container>
        </Headers>
    );
};
const Headers = styled.div`
  background-color: #22313F;
  color: white;
  padding: 10px 0;
`
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const LogoImg = styled.img`
  width: 140px;
  border-radius: 6px;
`
const UserInfo = styled.div`
  margin-left: auto;
  align-items: center;
  display: flex;
  min-width: 150px;
  justify-content: space-between;
`
export default Header;

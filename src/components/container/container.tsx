import React from 'react';
import styled from "styled-components";

type ContainerProps = {
    image: string,
    name: string,
}
const ContainerBack = ({name, image}: ContainerProps): JSX.Element => {
    return (
        <Card>
            <Image alt="char" src={image}/>
            <div>
                {name}
            </div>
        </Card>

    );
};
const Card = styled.div`
  width: 300px;
  height: 100px;
  border-radius: 15px;
  border: 1px solid #b7b7b7;
  background: rgba(186, 202, 227, 0.57);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;

  &:hover {
    background: rgba(227, 232, 243, 0.57);
  }
`
const Image = styled.img`
  object-fit: contain;
  object-position: center;
  width: 70px;
  height: 70px;
  border-radius: 10px;
`
export default ContainerBack;

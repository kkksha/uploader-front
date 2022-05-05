import React from 'react';
import styled from "styled-components";

type RightProps = {
    setPanel?: any,
    panel?: string

}

const CenterPart = (props: RightProps) => {

    return (
        <Wrapper>
            <Text> Upload your {props.panel} </Text>
            <Text>↓</Text>
            {
                (props.panel) === "Audio" ?  <WrapperInput type={"file"} accept={"audio/mp3"}/>:
                    (props.panel) === "Video" ? <WrapperInput type={"file"} accept={"video/mp4"}/> :
                        (props.panel) === "File" ? <WrapperInput type={"file"} accept={"*"}/> :<WrapperInput type={"file"} accept={"image/png, image/jpeg"}/>
            }


        </Wrapper>
    );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 66px);
`
const WrapperInput = styled.input`
  margin: 40px 0;

`
const Text = styled.span`
  font-size: 40px;
  
`
export default CenterPart;

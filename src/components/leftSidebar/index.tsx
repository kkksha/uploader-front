import React from 'react';
import styled from "styled-components";
import AudioIcon from "../../assets/images/icons8-audio-skimming-48.png"
import VideoIcon from "../../assets/images/icons8-video-48.png"
import FileIcon from "../../assets/images/icons8-file-48.png"
import ImageIcon from "../../assets/images/icons8-image-48.png"
type LeftProps = {
    setPanel?:any,
    panel?:string

}
const LeftSidebar = (props:LeftProps) => {
    const  BUTTONS = [
        {
            title:"Audio",
            icon:AudioIcon
        },
        {
            title:"Video",
            icon:VideoIcon
        },
        {
            title:"File",
            icon:FileIcon
        },
        {
            title:"Image",
            icon:ImageIcon
        },
    ]
    return (
        <Sidebars>
            {
                BUTTONS.map((item,index)=>{
                    return(
                        <Button onClick={()=>{ props.setPanel(item.title) }}>
                            <ButtonImage src={item.icon}/>
                            {item.title}

                        </Button>
                    )
                })
            }

        </Sidebars>
    );
};
const Sidebars = styled.div`
  background-color: #4B77BE;
  height: calc(100vh - 66px);
  width: 400px;
  color: white;
`
const ButtonImage = styled.img`

`
const Button = styled.div`
  width: 400px;
  height: calc((100vh - 66px) / 4 - 1px);
  border-bottom: #030325 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #ffffff;
  cursor: pointer;
  flex-direction:column;
  :active {
    background-color: #213554;
  }

  :hover {
    background-color: #476fb2;
  }
`
export default LeftSidebar;

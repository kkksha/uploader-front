import React from 'react';
import styled from "styled-components";
import AudioIcon from "../../assets/images/icons8-audio-skimming-48.png";
import VideoIcon from "../../assets/images/icons8-video-48.png";
import FileIcon from "../../assets/images/icons8-file-48.png";
import ImageIcon from "../../assets/images/icons8-image-48.png";

const Sidebar = () => {
    const  LINES =[
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

        </Sidebars>
    );
};
const Sidebars = styled.div`
  background-color: #a5cae3;
  height: calc(100vh - 66px);
  width: 400px;
  
`
export default Sidebar;

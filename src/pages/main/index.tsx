import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import Layout from "../Layout";
import Sidebar from "../../components/rightSideBar";
import {Container} from "../../ui/containers";
import LeftSidebar from "../../components/leftSidebar";
import CenterPart from "../../components/mainPageCenter";
import axios from 'axios';
interface IField {
    url?: string,
    data?: string,
    type: string
}

interface IDtoStatic {
    [key:string]: IField,

}
const MainPage = () => {
    const [staticContent, setStaticContent] = useState<IDtoStatic[]>([]);
    const [panel, setPanel] = useState("Audio")
    useEffect(() => {
        axios.get("").then((response) => {
            setStaticContent(response.data.content)
        })
    }, [])
    return (
        <Layout>
            <Sidebars>
                <LeftSidebar panel={panel} setPanel={setPanel}/>
                <Container>
                    <CenterPart panel={panel} setPanel={setPanel}/>
                </Container>
                <Sidebar/>
            </Sidebars>
        </Layout>
    );
};

const Sidebars = styled.div`
  display: flex;
`
export default MainPage;

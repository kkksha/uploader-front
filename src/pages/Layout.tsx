import React from 'react';
import Header from '../components/header';
import {Container, ContainerFluid} from "../ui/containers"

type LayoutProps = {
    children: React.ReactNode,
}
const Layout = (props: LayoutProps) => {


    return (
        <>
            <ContainerFluid>
                <Header/>
            </ContainerFluid>


                <main>
                    {props.children}
                </main>


        </>
    );

};

export default Layout;

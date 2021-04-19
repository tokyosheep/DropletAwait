import styled from "styled-components";

export const AIContainer = {
    Container:styled.div`
        display:grid;
        grid-template-columns:100%;
        grid-template-rows:50px minmax(100px,1fr) 50px;
        grid-template-areas:
        "Header"
        "Main"
        "Footer"
        ;
    `,
    HeaderCompo:styled.header`
        grid-area:Header;
        margin: auto;
    `,
    MainCompo:styled.main`
        grid-area:Main;
        margin: auto;
    `,
    FooterCompo:styled.footer`
        grid-area:Footer;
    `
};
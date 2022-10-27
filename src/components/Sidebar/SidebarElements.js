import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'


export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-size: 1.5rem;
    text-decoration: none;
`

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
`;

export const SidebarContent = styled.div`
    font-size: 13px;
    font-family: 'Poppins';
    z-index: -1;

    &:hover{
        background-color: '#0c2556';
        color: '#fff';
    }
`;

export const Labels = styled.label`
    font-weight: bold;
    margin-left: 5px;
    text-align: right;
    font-size:13px

    &:hover{
        background: '#0c2556';
        color: '#fff';
    }
`;


export const SidebarContainer = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    position: sticky;
    top: 50px;
`
export const SidebarWrapper = styled.div`
    padding: ;
    color: ;
`
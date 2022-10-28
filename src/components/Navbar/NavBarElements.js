import styled from 'styled-components';

export const NavbarContainer = styled.div `
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
@media screen and (max-width: 768px) {
    width: 650px;

}
`
    
export const NavbarWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 0px ;
    display: flex;
    align-items: center;
    justify-content: space-between;
@media screen and (max-width: 768px) {
    width: 650px
}
`
export const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: white;
    cursor: pointer;
`
export const TopLeft = styled.div``

export const TopLeft1 = styled.div`
    float: right;
`

export const TopRight = styled.div`
    display: flex;
    align-items: center;
`
export const IconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
@media screen and (max-width: 768px) {
    margin-right: 5px;

}
`
export const IconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`
export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`

export const Divq = styled.div `
    margin-left:-65%;
    @media screen and (max-width: 1000px) {
    display: none;
}

@media screen and (max-width: 768px) {
    display: none;

}
`
import React from "react";

import styled from 'styled-components';

const B = styled.button`

background-color: white;
color: black;
font-size:25px;
border: none;
border-radius: 20px;
width: 100px;
margin: 20px;
margin-top:30px;
height: 50px;

&:hover {
    background-color: #e9ecf2;
    color: black;
}

`;

class BtnNext extends React.Component {


    render() {
        return <B onClick = {() => this.props.click()}>More</B>;
    }

}

export default BtnNext;
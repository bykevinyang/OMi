import React from "react";

import styled from 'styled-components';

const B = styled.button`

background-color: #0d1117;
color: white;
font-weight: bold;
font-size:30px;
border: none;
border-radius: 7px;
width: 200px;
margin: 20px;
margin-top:30px;
height: 60px;

&:hover {
    background-color: white;
    color: black;
}

`;

class BtnNext extends React.Component {


    render() {
        return <B onClick = {() => this.props.click()}>not here</B>;
    }

}

export default BtnNext;
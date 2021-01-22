import React from 'react';

import styled from 'styled-components';
import ToControl from './ToControl';

const Above = styled.div`
    height: 27%;
`;

const Wrapp = styled.div`

    width: 100%;
    height: 100%;
    color: white;
    `;

const Title = styled.p`
    margin: 0;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    `;
const Para = styled.p`
    margin: 10px 0 0 0;
    font-size 60px;
    font-weight: bold;
    `;


const Exit = styled.button`
    width: 150px;
    height: 50px;
    background: #0d1117;
    color: white;
    border-radius: 3px;
    border: none;
    font-size: 30px;
    font-weight: bold;

    &:hover{
        background: White;
        color: Black;
    }   
`;

const Next = styled.button`
    width: 150px;
    height: 50px;
    background: #0d1117;
    color: white;
    border-radius: 3px;
    border: none;
    font-size: 30px;
    font-weight: bold;

    &:hover{
        background: White;
        color: Black;
    }
`;

const Btns = styled.div`
    height: 50px;
    margin-top: 20%;
`;


class Disease extends React.Component {

    


    render() {


        return <Wrapp>
                <Above />
                <Title>We think you might have</Title>
                <Para>{this.props.name}</Para>
                
            <Btns>
                <Exit onClick = {() => this.props.click()}>Exit</Exit>
                <Next>Next</Next>
            </Btns>
        </Wrapp>;
    }

}

export default Disease;
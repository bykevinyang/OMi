import React from 'react';
import load from "../img/loader.gif";
import styled from 'styled-components';
import ToControl from './ToControl';

const Above = styled.div`
    height: 40%;
`;

const Wrapp = styled.div`

    width: 100%;
    height: 100%;
    color: white;
    `;

const Title = styled.p`
    margin: 0;
    font-size: 45px;
    text-align: center;
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

const Loading = styled.button`
    width: 150px;
    height: 50px;
    background: #0d1117;
    border: none;
    font-size: 30px;
    font-weight: bold;
    outline: none;
`;

const Btns = styled.div`
    height: 50px;
    margin-top: 20%;
`;


class Disease extends React.Component {

    
    state = {
        i: <Loading><img src={load}></img></Loading>,
        wiki: 0
    }
    
    constructor(props){
        super(props);
        fetch("http://localhost:8080/description/" + props.name)
            .then(res => res.json())
                .then(
                    (result) => {
                            this.setState({i: <Next>Info</Next>, wiki: result.data}); // you are here
                            console.log(this.state.wiki);
                    }
                )
    }
    

    render() {

        

        return <Wrapp>
                <Above />
                <Title>We think you might have</Title>
                <Para>{this.props.name}</Para>
                
            <Btns>
                <Exit onClick = {() => this.props.click()}>Back</Exit>
                {this.state.i}
            </Btns>
        </Wrapp>;
    }

}

export default Disease;
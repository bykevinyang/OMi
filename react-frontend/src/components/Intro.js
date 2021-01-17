import React from 'react';
import styled from 'styled-components';


const OuterDiv = styled.div`
    margin: 0 auto;
    height: 300px;

    margin-bottom: 20px;
`;

const Text1 = styled.div`
    font-size: 25px;
    width: 100%;
    text-align: center;
`;
const Text2 = styled.div`
    font-size: 25px;
    font-weight:bold;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
`;

const Title = styled.div`
    font-size: 80px;
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
`;

const Go = styled.button`
    font-size: 30px;
    font-weight:bold;
    width: 20%;
    height: 80px;
    text-align: center;
    background: white;
    border: none;
    border-radius: 10px;
`;


class Intro extends React.Component {


    render(){

        return <section>
        <OuterDiv>

            <Text1>Introducing OMi</Text1>
            <Title>Online Medical Informant</Title>
            <Text1>A service identifying a patients issue</Text1>
            <Text1>based on their selected symptoms</Text1>

        </OuterDiv>
        <Text2>Search, Select, Indentify. It's that easy.</Text2>
        <Go>Try Now</Go>
        </section>
    }
}

export default Intro;
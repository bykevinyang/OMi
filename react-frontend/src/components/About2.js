import React from 'react';
import styled from 'styled-components';
import rami from "../img/rami.png";
import adam from "../img/adam.png";
import kev from "../img/kevin.png";
import bj from "../img/bj.jpg";

const TitleDiv = styled.div`
    margin: 0 auto;
    padding-top: 40px;
`;

const Text1 = styled.div`
    font-size: 30px;
    text-align: center;
`;

const Title = styled.div`
    font-size: 75px;
    text-align: center;
    font-weight: bold;
    margin: 0 auto;
`;

class About extends React.Component {

    render(){
        return <div>

            <TitleDiv>
                <Title>About us</Title>
                <Text1>the developers</Text1>
            </TitleDiv>

        </div>;
    }

}

export default About;
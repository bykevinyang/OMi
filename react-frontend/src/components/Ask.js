import React from 'react';

import styled from 'styled-components';

const AskWrap = styled.section`
        width: 75%;
        min-width: 300px;
        color: white;
        display: block;
        margin: auto;
        margin-top: 50px;
        margin-bottom: 30px;
        font-size: 60px;
    `;

class Ask extends React.Component {


    state = {
        text: "Tell me about your symptoms!",
    }


    

    render (){

        return <AskWrap>{this.state.text}</AskWrap>;

    }

    setText = (value) => {
        this.setState({text: value});
    }

}

export default Ask;
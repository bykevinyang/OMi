import React from 'react';

import styled from 'styled-components';

const Sym1 = styled.button`

    @keyframes out {
        from { 
            opacity: 1;
        }
        to { 
            opacity: 0;
            margin-left: -500px;
        }
    }

    background-color: black;
    color: white;
    border: 3px solid white;
    border-radius: 20px;
    font-size: 26px;
    padding: 10px 10px 10px 10px;
    width: 30%;
    min-width: 225px;
    margin: 0px;
    margin-top:50px;

    &:focus {
        outline: none;
        animation: out 1s;
        background-color: white;
        color: black;
    }

    &:hover {
        background-color: white;
        color: black;
    }

`;

class Sym extends React.Component {

    state = {
        type: this.props.type,
        temp: "t"
    }

    render (){

        return <div>
            <Sym1 onClick = {() => this.props.click(this.state.type)}> {this.props.type} </Sym1>
            </div>;

    }

}

export default Sym;
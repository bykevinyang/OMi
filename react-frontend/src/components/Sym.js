import React from 'react';
import head from "../img/head.png";
import cough from "../img/cough.png";
import throat from "../img/throat.png";
import rash from "../img/rash.png";
import styled from 'styled-components';

const Sym1 = styled.button`

    @keyframes out {
        from { 
            opacity: 1;
        }
        to { 
            opacity: 0;
        }
    }

    background-color: white;
    color: black;
    font-size:30px;
    border: none;
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
    width: 15%;
    min-width: 150px;
    margin: 20px;
    margin-top:50px;
    height: 40%;
    min-height: 300px;

    &:focus {
        outline: none;
        animation: out 1s;
        background-color: #e9ecf2;
        color: black;
    }

    &:hover {
        background-color: #e9ecf2;
        color: black;
    }

`;
const Text1 = styled.p`
    max-height: 20px;
`;

const Wrapp = styled.p`
    text-align: center;
    margin-top: 0px;
`;

class Sym extends React.Component {

    state = {
        type: this.props.type,
        temp: "t",
        img: 0
    }

    render (){

        console.log(this.state.type);
        let x = "";
        if (this.state.type != undefined){
        let t = this.state.type.replace(" ", "%20").toLowerCase();
        
        
        
        if (t.includes("head")){
             x = head;
        }
        else if (t.includes("throat")){
            x = throat;
       }
        else if (t.includes("skin")){
            x = rash;
       }
        else if (t.includes("cough")){
            x = cough;
       }
        else x = head;

     } else {



         }


        return <span>
                <Sym1 onClick = {() => this.props.click(this.state.type)}> 
                <Wrapp>
                    <img src={x}></img>
                    <br />
                    <br />
                    <Text1>{this.props.type}</Text1>
                </Wrapp>
                    
                </Sym1>
            </span>;

    }

}

export default Sym;
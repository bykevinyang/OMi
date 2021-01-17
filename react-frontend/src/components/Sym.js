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

    background: linear-gradient(to right, #ffffff , #e6f9fc);
    color: black;
    font-size:30px;
    border: none;
    border-radius: 10px;
    width: 240px;
    margin: 20px;
    margin-top:50px;
    height: 350px;

    &:focus {
        outline: none;
        animation: out 1s;
        background-color: #e9ecf2;
        color: black;
        border: 5px solid black;
    }

    &:hover {
        background: white;
        color: black;
        border: 5px solid black;
    }

`;
const Text1 = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

const Wrapp = styled.div`
    margin-top: 50px;
`;
const Wrapp2 = styled.div`
    margin-top: 50px;
    max-height:150px;
    height: 100px;
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


        return <Sym1 onClick = {() => this.props.click(this.state.type)}> 
                <Wrapp>
                    <img src={x}></img>
                </Wrapp>
                <Wrapp2>
                    <Text1>{this.props.type}</Text1>
                </Wrapp2>
                
                    
                </Sym1>;

    }

}

export default Sym;
import React from 'react';

import styled from 'styled-components';

import Search from './Search';

import Sym from './Sym';



class Controls extends React.Component{

    state = {
        isLoaded: false,
        symptomBranch: ["Headache", "Productive Cough", "Clammy Skin", "Throat Sore"],
        searchItems: [],
        control: 0

        
    }

    componentDidMount() {  
        fetch("http://localhost:8080/autocomplete")
          .then(res => res.json())
              .then(
                  (result) => {
                          this.setState({searchItems: result.Symptoms});
                  }
              )  
    }

    searchFound = (name) => {
        fetch("http://localhost:8080/disease/"+name)
            .then(res => res.json())
                .then(
                    (result) => {
                         this.setState({symptomBranch: result.Symptom});
                    }
                )  

            this.setState({control: 1});
                
    }

    render() {

        let display = [];
        for (let i = 0; i < 4; i++) {
            display.push(this.state.symptomBranch[i]);
            //console.log("render log: " + display[i]);
        }
        
        //let r = <Search found = {this.searchFound} items = {this.state.searchItems} />;
        //if (this.state.control === 1){
        

        return <div>
            
            {display.map(s => (
            <Sym click = {this.remove} type = {s} key = {s} />
            
        ))}

        </div>;

    }

    remove = (type) => {

        type = type.replace(" ", "%20");

        let temp = ["error 2"];
        console.log(" --- " + type);
        fetch("http://localhost:8080/disease/"+type.toLowerCase())
            .then(res => res.json())
                .then(
                    (result) => {
                            console.log(result.Disease);
                            if (result.Disease != undefined){
                                temp = ["Found disease! " + result.Disease];
                            } else temp =  [...result.Symptom];
                    }
                )   
            
        /*for (let i = 0; i < temp.length; i++){
            //console.log(temp[i].type + "-" + type);
            if (temp[i].type === type){
                
                temp.splice(i, 1);
                break;
            }
        }*/

        setTimeout(() => {
            this.setState({symptomBranch: temp});
        }, 900);

    }


}

export default Controls;
import React from 'react';

import styled from 'styled-components';

import Search from './Search';

import Sym from './Sym';

import Disease from './Disease';

import Ask from './Ask';



class Controls extends React.Component{

    state = {
        isLoaded: false,
        symptomBranch: ["Headache", "Cough", "Clammy Skin", "Throat Sore"],
        searchItems: [],
        control: 0,
        diseased: false,
        dname: "unset",
        ddesc: "unset",
        blacklist: []
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
                         this.setState({symptomBranch: result.data});
                    }
                )  

            this.setState({control: 1});
                
    }

    render() {

        let display = [];
        let c = 0;
        for (let i = 0; i < this.state.symptomBranch.length; i++) {

            

            let inBL = false;
            if (this.state.blacklist[0] !== undefined)
            for (let z = 0; z < this.state.blacklist.length; z++) {
   
                if (this.state.symptomBranch[i].toLowerCase() === this.state.blacklist[z].toLowerCase())
                    inBL = true;
                
            }

            if (inBL) continue;

            c++;
            display.push(this.state.symptomBranch[i]);
            if (c == 4) break;

            //console.log("render log: " + display[i]);


        }
        let a = <section> </section>;
        let r = <Disease name = {this.state.dname} desc = {this.state.ddesc} />
        if (this.state.diseased == false) {

            a = <Ask />;
            r = 

                display.map(s => (
                <Sym click = {this.remove} type = {s} key = {s} />

                
            ));
        }
        

        return <div>
            {a}
            {r}

        </div>;

    }

    remove = (type) => {


        let pq = [...this.state.blacklist];
        pq.push(type);
        this.setState({blacklist: pq});

        type = type.replace(" ", "%20");

    
        let temp = ["", "", "", ""];
        console.log(" --- " + type);
        fetch("http://localhost:8080/disease/"+type.toLowerCase())
            .then(res => res.json())
                .then(
                    (result) => {
                            console.log("Disease data val: " + result.data.disease);
                            if (result.data.disease != undefined){
                                temp = "";
                                this.setState({diseased: true, dname: result.data.disease, ddesc: result.data.description});
                            } else temp =  [...result.data];
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
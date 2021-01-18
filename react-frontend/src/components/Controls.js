import React from 'react';

import styled from 'styled-components';

import Search from './Search';

import Sym from './Sym';

import Disease from './Disease';

import Ask from './Ask';

import BtnNext from './BtnNext';
import User from './User';

const OuterWrap = styled.div`

    height: 100%;
    background: #0d1117;

`;


class Controls extends React.Component{

    state = {
        isLoaded: false,
        symptomBranch: ["Headache", "Cough", "Clammy Skin", "Throat Sore"],
        firstTime: true,
        firstTime2: true,
        searchItems: [],
        control: 0,
        diseased: false,
        dname: "unset",
        ddesc: "unset",
        blacklist: [],
        final: 0
    }
    

    componentDidMount() {  
        fetch("http://localhost:8080/autocomplete")
          .then(res => res.json())
              .then(
                  (result) => {
                          this.setState({searchItems: result.Symptoms});
                  }
              )  

        User.setId(Math.random().toString().substr(2, 9) + Math.random().toString().substr(2, 3));
        console.log(User.getId());
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
        //for (let i = 0; i < this.state.symptomBranch.length; i++) {
        let keepgoing = true;

        if (this.state.firstTime){
            display = [...this.state.symptomBranch];
        } else
        while (keepgoing){
            
            let i = Math.floor(Math.random() * this.state.symptomBranch.length);  


            //Math.floor(Math.random() * 11);  

            let inBL = false;
            if (this.state.blacklist[0] !== undefined)
            for (let z = 0; z < this.state.blacklist.length; z++) {
   
                if (this.state.symptomBranch[i].toLowerCase() === this.state.blacklist[z].toLowerCase()){
                    inBL = true;
                    console.log("was hre");
                }
                
            }

            if (inBL) continue;

            c++;
            display.push(this.state.symptomBranch[i]);
            if (display.length == 4) keepgoing = false;

            //console.log("render log: " + display[i]);


        }
        let a = <section> </section>;
        let g = <section> </section>;
        let e = <section> </section>;
        let r = <Disease name = {this.state.dname} desc = {this.state.ddesc} click = {this.resetCtrls}/>

        if (this.state.diseased === false) {

            
            a = <Ask />;
            r = 

                display.map(s => (
                <Sym click = {this.remove} type = {s} key = {s} />

                
            ));
            e = <BtnNext click = {this.nextSet}/>
            g = <Search 
            found = {this.remove} 
            items = {this.state.searchItems}
            ></Search>; 
        } else {
            console.log("##" + this.state.ddesc);
        }

        if (this.state.firstTime){ 
            
        }
        

        return <OuterWrap>
            {a}
            {g}
            {r}
            <div>{e}</div>
        </OuterWrap>;

    }

    resetCtrls = () => {
        this.setState({
            isLoaded: false,
            symptomBranch: ["Headache", "Cough", "Clammy Skin", "Throat Sore"],
            firstTime: true,
            firstTime2: true,
            control: 0,
            diseased: false,
            dname: "unset",
            ddesc: "unset",
            blacklist: [],
            final: 0
        });
        console.log("reset complete");

        fetch("http://localhost:8080/clear")
            .then(res => res.json())
                .then(
                    (result) => {
                    }
                )  

        window.scrollTo(0, window.innerHeight);
        
    }

    nextSet = () => {

        if (this.state.firstTime2){
        fetch("http://localhost:8080/symptoms")
          .then(res => res.json())
              .then(
                  (result) => {
                          this.setState({symptomBranch: result.symptoms, firstTime2: false, firstTime: false}); // you are here
                  }
              )  
        } else {
            this.forceUpdate();
        }

    }

    remove = (type) => {


        let pq = [...this.state.blacklist];
        pq.push(type);

        type = type.replace(" ", "%20");
        let ddname = "";
        let dddesc = "";
        let ddd = false;
    
        let temp = ["", "", "", ""];
        console.log(" --- " + type);
        fetch("http://localhost:8080/disease/"+type.toLowerCase())
            .then(res => res.json())
                .then(
                    (result) => {
                            console.log("Disease data val: " + result.data.disease);
                            if (result.data.disease != undefined){
                                
                                if (result.data.disease[0].disease != undefined){
                                    temp = "";
                                    console.log("OAISDHIAHDSA");
                                    ddname = result.data.disease[0].disease;
                                    dddesc =  result.data.disease[0].description;
                                    ddd = true;
                                } else {

                                temp = "";
                                console.log("OAISDHIAHDSA");
                                ddname = result.data.disease;
                                dddesc =  result.data.description;
                                ddd = true;
                                }

                                //this.setState({final: true});
                                this.setState({diseased: ddd, dname: ddname, ddesc: dddesc, blacklist: pq});

                            } else {


                                temp = [];

                                console.log(result.data);

                                if (result.data.symptoms != undefined) {
                                    for (let z = 0; z < result.data.symptoms.length; z++) {
                                    
                                        temp.push(result.data.symptoms[z]);
                                    }

                                } else
                                for (let z = 0; z < result.data.length; z++) {
                                    
                                    temp.push(result.data[z]);
                                }

                                

                            }
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
            console.log("ddd: " + ddd);
            this.setState({symptomBranch: temp, diseased: ddd, dname: ddname, ddesc: dddesc, blacklist: pq, firstTime: false});

        }, 900);

        

    }


}

export default Controls;
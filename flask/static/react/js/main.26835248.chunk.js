(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{34:function(n,t,e){},35:function(n,t,e){},47:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e(1),o=e.n(i),c=e(22),a=e.n(c),s=(e(34),e(35),e(4)),u=e(5),h=e(7),d=e(6),l=e(2),p=e(3);function f(){var n=Object(l.a)(["\n\n    height: 50px;\n    width: 50px;\n    border-radius: 50px;\n    font-weight: bold;\n    font-size: 28px;\n    background: white;\n    position: fixed;\n    left: 25px;\n    top: 25px;\n    border: none;\n\n"]);return f=function(){return n},n}var j=p.a.button(f()),A=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))).upTop=function(){window.scrollTo({left:0,top:0,behavior:"smooth"})},n}return Object(u.a)(e,[{key:"render",value:function(){return Object(r.jsx)(j,{onClick:this.upTop,children:"\u25b2"})}}]),e}(o.a.Component);function b(){var n=Object(l.a)(["\n    float: Right;\n    text-align: center;\n    width: 200px;\n    height: 80%;\n"]);return b=function(){return n},n}function x(){var n=Object(l.a)(["\n    float: center;\n    text-align: center;\n    margin-left: 60px;\n    font-size: 18px;\n    font-weight: bold;\n    width: 200px;\n    height: 100%;\n    padding-top: 4px;\n    border: none;\n    background: white;\n"]);return x=function(){return n},n}function g(){var n=Object(l.a)(["\n    float: left;\n    text-align: left;\n    padding: 4px;\n    padding-left: 10px;\n    color: black;\n    font-size: 35px;\n    width: 200px;\n    height: 100%;\n    font-weight: bolder;\n\n"]);return g=function(){return n},n}function m(){var n=Object(l.a)(["\n    margin: 0 auto;\n    height: 50px;\n    max-height:50px;\n    width: 85%;\n    border-radius: 10px;\n    background: white;\n    margin-bottom: 100px;\n"]);return m=function(){return n},n}function v(){var n=Object(l.a)(["\n    height: 25px;\n    min-height: 10px;\n"]);return v=function(){return n},n}var O=p.a.div(v()),w=p.a.div(m()),C=p.a.span(g()),E=p.a.button(x()),k=p.a.span(b());o.a.Component;function I(){var n=Object(l.a)(["\n\n    margin: 5px 0 0 0;\n    float: top;\n    position: absolute;\n    text-align: left;\n    padding-left: 10px;\n    font-size: 38px;\n    font-weight: bolder;\n\n    &:hover {\n        cursor: default;\n    }\n\n"]);return I=function(){return n},n}function y(){var n=Object(l.a)(["\n\n    witdth: 100%;\n    height: 100%;\n    text-align: center;\n    text-decoration: nonce;\n\n"]);return y=function(){return n},n}function Q(){var n=Object(l.a)(["\n    display: inline-block;\n    float: center;\n    padding: 12px 20px 12px 20px;\n    margin-left: 4%;\n    margin-right: 4%;\n    border-radius: 5px;\n\n    &:hover {\n        cursor: pointer;\n    }\n    font-weight:bold;\n    font-size: 21px;\n    \n"]);return Q=function(){return n},n}function B(){var n=Object(l.a)(["\n\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n\n"]);return B=function(){return n},n}function S(){var n=Object(l.a)(["\n\n    margin: 0 auto;\n    height: 50px;\n    width: 85%;\n    min-width: 600px;\n    border-radius: 50px;\n    background: white;\n\n"]);return S=function(){return n},n}function R(){var n=Object(l.a)(["\n    height: 25px;\n"]);return R=function(){return n},n}var G=p.a.div(R()),Y=p.a.div(S()),z=p.a.ul(B()),M=p.a.li(Q()),F=p.a.a(y()),H=p.a.p(I()),D=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))).al=function(){alert("Coming soon!")},n.scroll4=function(){window.scrollTo({top:2*window.innerHeight,left:0,behavior:"smooth"})},n}return Object(u.a)(e,[{key:"render",value:function(){return Object(r.jsxs)("section",{children:[Object(r.jsx)(G,{}),Object(r.jsxs)(Y,{children:[Object(r.jsx)(H,{children:"OMi"}),Object(r.jsxs)(z,{children:[Object(r.jsx)(M,{onClick:this.scroll4,children:Object(r.jsx)(F,{children:"About"})}),Object(r.jsx)(M,{onClick:this.al,children:Object(r.jsx)(F,{children:"Doctors"})}),Object(r.jsx)(M,{type:"button",onClick:function(n){n.preventDefault(),window.location.href="https://github.com/kevin200617/OMi"},children:Object(r.jsx)(F,{children:"Github"})})]})]})]})}}]),e}(o.a.Component),U=e(8),J=e(27),L=e(25);function N(){var n=Object(l.a)(["\n  max-width: 50%;\n  margin: 0 auto;\n"]);return N=function(){return n},n}var V=p.a.div(N());var W=function(n){var t=Object(i.useState)(0),e=Object(J.a)(t,2);return e[0],e[1],Object(r.jsx)(V,{children:Object(r.jsx)(L.ReactSearchAutocomplete,{items:n.items,onSearch:function(t,e){console.log(t,e),console.log(n.items)},onSelect:function(t){console.log(t),n.found(t.name)},onFocus:function(){console.log("Focused")},showIcon:!1,maxResults:5,placeholder:"Search...",styling:{borderRadius:"5px",fontSize:"22px",fontWeight:"bold",lineHeight:"1.2"},autoFocus:!0})})},T="data:image/png;base64,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",P=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(u.a)(e,[{key:"componentDidMount",value:function(){window.scrollTo(0,window.innerHeight)}},{key:"render",value:function(){return Object(r.jsx)("div",{})}}]),e}(o.a.Component);function K(){var n=Object(l.a)(["\n\n    @keyframes out {\n        from { \n            opacity: 1;\n        }\n        to { \n            opacity: 0;\n        }\n    }\n\n    background: linear-gradient(to right, #ffffff , #ffffff);\n    color: black;\n    font-size:24px;\n    border: 5px solid white;\n    border-radius: 7px;\n    width: 285px;\n    margin: 10px;\n    vertical-align: top;\n    height: 120px;\n    padding: 5px;\n\n    &:focus {\n        outline: none;\n        animation: out 1s;\n        background-color: #e9ecf2;\n        color: black;\n        border: 5px solid black;\n    }\n\n    &:hover {\n        background: white;\n        color: black;\n        border: 5px solid black;\n    }\n\n"]);return K=function(){return n},n}var X=p.a.button(K()),Z=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))).state={type:n.props.type,temp:"t",img:0},n.scroll=function(){window.scrollTo({top:window.innerHeight,left:0,behavior:"smooth"})},n}return Object(u.a)(e,[{key:"render",value:function(){var n=this;console.log(this.state.type);if(void 0!=this.state.type){var t=this.state.type.replace(" ","%20").toLowerCase();t.includes("head")?T:t.includes("throat")?"data:image/png;base64,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":t.includes("skin")?"data:image/png;base64,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":t.includes("cough")?"data:image/png;base64,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":T}var e=Object(r.jsxs)(X,{onClick:function(){return n.props.click(n.state.type)},children:[" ",this.props.type," "]});return""==this.state.type&&(e=Object(r.jsx)(P,{})),e}}]),e}(o.a.Component);function q(){var n=Object(l.a)(["\n    height: 50px;\n    margin-top: 20%;\n"]);return q=function(){return n},n}function _(){var n=Object(l.a)(["\n    width: 150px;\n    height: 50px;\n    background: #0d1117;\n    border: none;\n    font-size: 30px;\n    font-weight: bold;\n    outline: none;\n"]);return _=function(){return n},n}function $(){var n=Object(l.a)(["\n    width: 150px;\n    height: 50px;\n    background: #0d1117;\n    color: white;\n    border-radius: 3px;\n    border: none;\n    font-size: 30px;\n    font-weight: bold;\n\n    &:hover{\n        background: White;\n        color: Black;\n    }\n"]);return $=function(){return n},n}function nn(){var n=Object(l.a)(["\n    width: 150px;\n    height: 50px;\n    background: #0d1117;\n    color: white;\n    border-radius: 3px;\n    border: none;\n    font-size: 30px;\n    font-weight: bold;\n\n    &:hover{\n        background: White;\n        color: Black;\n    }   \n"]);return nn=function(){return n},n}function tn(){var n=Object(l.a)(["\n    margin: 10px 0 0 0;\n    font-size 60px;\n    font-weight: bold;\n    "]);return tn=function(){return n},n}function en(){var n=Object(l.a)(["\n    margin: 0;\n    font-size: 45px;\n    text-align: center;\n    "]);return en=function(){return n},n}function rn(){var n=Object(l.a)(["\n\n    width: 100%;\n    height: 100%;\n    color: white;\n    "]);return rn=function(){return n},n}function on(){var n=Object(l.a)(["\n    height: 40%;\n"]);return on=function(){return n},n}var cn=p.a.div(on()),an=p.a.div(rn()),sn=p.a.p(en()),un=p.a.p(tn()),hn=p.a.button(nn()),dn=p.a.button($()),ln=p.a.button(_()),pn=p.a.div(q()),fn=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(n){var i;return Object(s.a)(this,e),(i=t.call(this,n)).state={i:Object(r.jsx)(ln,{children:Object(r.jsx)("img",{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP////////7+/v7+/v////7+/v7+/v7+/iH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="})}),wiki:0},fetch("http://localhost:8080/description/"+n.name).then((function(n){return n.json()})).then((function(n){i.setState({i:Object(r.jsx)(dn,{children:"Info"}),wiki:n.data}),console.log(i.state.wiki)})),i}return Object(u.a)(e,[{key:"render",value:function(){var n=this;return Object(r.jsxs)(an,{children:[Object(r.jsx)(cn,{}),Object(r.jsx)(sn,{children:"We think you might have"}),Object(r.jsx)(un,{children:this.props.name}),Object(r.jsxs)(pn,{children:[Object(r.jsx)(hn,{onClick:function(){return n.props.click()},children:"Back"}),this.state.i]})]})}}]),e}(o.a.Component);function jn(){var n=Object(l.a)(["\n        width: 75%;\n        min-width: 300px;\n        color: white;\n        display: block;\n        margin: auto;\n        margin-bottom: 40px;\n        font-weight: bold;\n        font-size: 60px;\n    "]);return jn=function(){return n},n}function An(){var n=Object(l.a)(["\n    height: 50px;\n"]);return An=function(){return n},n}var bn=p.a.div(An()),xn=p.a.section(jn()),gn=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))).state={text:"Tell us about your symptoms!"},n.setText=function(t){n.setState({text:t})},n}return Object(u.a)(e,[{key:"render",value:function(){return Object(r.jsxs)("section",{children:[Object(r.jsx)(bn,{}),Object(r.jsx)(xn,{children:this.state.text}),";"]})}}]),e}(o.a.Component);function mn(){var n=Object(l.a)(["\n\nbackground-color: white;\ncolor: black;\nfont-size:25px;\nborder: none;\nborder-radius: 20px;\nwidth: 100px;\nmargin: 20px;\nmargin-top:30px;\nheight: 50px;\n\n&:hover {\n    background-color: #e9ecf2;\n    color: black;\n}\n\n"]);return mn=function(){return n},n}var vn=p.a.button(mn()),On=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){var n=this;return Object(r.jsx)(vn,{onClick:function(){return n.props.click()},children:"More"})}}]),e}(o.a.Component),wn=function(){var n="";return{getId:function(){return n},setId:function(t){n=t}}}();function Cn(){var n=Object(l.a)(["\n    height: 78%;\n    width: 80%;\n    min-width: 630px;\n    padding: 0px;\n    margin: 0 auto;\n"]);return Cn=function(){return n},n}function En(){var n=Object(l.a)(["\n    height: 40%;\n    width: 50%;\n    min-width: 650px;\n    padding: 0px;\n    margin: 0 auto;\n    margin-top: 40px;\n"]);return En=function(){return n},n}function kn(){var n=Object(l.a)(["\n\n    height: 100%;\n\n"]);return kn=function(){return n},n}var In=p.a.div(kn()),yn=p.a.div(En()),Qn=p.a.div(Cn()),Bn=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))).state={isLoaded:!1,symptomBranch:["Headache","Cough","Clammy Skin","Throat Sore"],firstTime:!0,firstTime2:!0,searchItems:[],control:0,diseased:!1,dname:"unset",ddesc:"unset",blacklist:[],final:0,constSI:[]},n.resetCtrls=function(){n.setState({isLoaded:!1,symptomBranch:["Headache","Cough","Clammy Skin","Throat Sore"],firstTime:!0,firstTime2:!0,control:0,diseased:!1,dname:"unset",ddesc:"unset",searchItems:n.state.constSI,blacklist:[],final:0}),console.log("reset complete"),window.scrollTo(0,window.innerHeight)},n.nextSet=function(){n.state.firstTime?fetch("http://localhost:8080/fsymptoms/m/m").then((function(n){return n.json()})).then((function(t){n.setState({symptomBranch:t.data.symptoms,firstTime2:!1,firstTime:!1})})):n.forceUpdate()},n.remove=function(t){var e=Object(U.a)(n.state.blacklist);e.push(t),t=t.replace(" ","%20");var r="",i=!1,o=["","","",""];t=t.toLowerCase(),console.log(" --- "+t),fetch("http://localhost:8080/disease/"+t+"/u/"+wn.getId()).then((function(n){return n.json()})).then((function(c){if(console.log("SENT: "+t),console.log("RECEIVED: "+JSON.stringify(c.data)),console.log("disease: "+c.data.disease),void 0!=c.data.disease)o=[],console.log("found disease: init"),r=c.data.disease[0].disease_name,i=!0,console.log("found disease: set name"),setTimeout((function(){n.setState({diseased:i,dname:r,ddesc:"",blacklist:e})}),800);else if(o=[],console.log(c.data),void 0!=c.data.symptoms)for(var a=0;a<c.data.symptoms.length;a++)o.push(c.data.symptoms[a]);else for(var s=0;s<c.data.length;s++)o.push(c.data[s])})),setTimeout((function(){console.log("ddd: "+i),fetch("http://localhost:8080/symptoms/u/"+wn.getId()+"/m/a").then((function(n){return n.json()})).then((function(t){var c=Object(U.a)(t.data.symptoms);n.setState({symptomBranch:o,diseased:i,dname:r,ddesc:"",blacklist:e,firstTime:!1,searchItems:c})}))}),500)},n}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=this;wn.setId(Math.random().toString().substr(2,9)+Math.random().toString().substr(2,3)),console.log(wn.getId()),fetch("http://localhost:8080/fsymptoms/m/a").then((function(n){return n.json()})).then((function(t){n.state.constSI=Object(U.a)(t.data.symptoms);var e=Object(U.a)(t.data.symptoms);n.setState({searchItems:e})}))}},{key:"render",value:function(){var n=this,t=[],e=!0,i=[];if(this.state.firstTime)t=Object(U.a)(this.state.symptomBranch);else for(;e;){for(var o=Math.floor(Math.random()*this.state.symptomBranch.length);i.includes(o)&&this.state.symptomBranch.length>=4;)o=Math.floor(Math.random()*this.state.symptomBranch.length),console.log("dupe checked - Len:"+this.state.symptomBranch.length);i.push(o);var c=!1;if(void 0!==this.state.blacklist[0]&&this.state.symptomBranch.length>0)for(var a=0;a<this.state.blacklist.length;a++)console.log("to lower: "+this.state.symptomBranch[o]),this.state.symptomBranch[o].toLowerCase()===this.state.blacklist[a].toLowerCase()&&(c=!0,console.log("was hre"));c||(t.push(this.state.symptomBranch[o]),t.length>=4&&(e=!1),console.log(t.length))}var s=Object(r.jsx)("section",{children:" "}),u=Object(r.jsx)("section",{children:" "}),h=Object(r.jsx)("section",{children:" "}),d=Object(r.jsx)(Qn,{children:Object(r.jsx)(fn,{name:this.state.dname,desc:this.state.ddesc,click:this.resetCtrls})});return!1===this.state.diseased?(s=Object(r.jsx)(gn,{}),d=Object(r.jsxs)(yn,{children:[t.map((function(t){return Object(r.jsx)(Z,{click:n.remove,type:t},t)}))," "]}),h=Object(r.jsx)(On,{click:this.nextSet}),u=Object(r.jsx)(W,{found:this.remove,items:this.state.searchItems})):console.log("##"+this.state.ddesc),this.state.firstTime,Object(r.jsxs)(In,{children:[s,u,d,Object(r.jsx)("div",{children:h})]})}}]),e}(o.a.Component);function Sn(){var n=Object(l.a)(["\n    font-size: 30px;\n    font-weight:bold;\n    width: 250px;\n    height: 80px;\n    text-align: center;\n    background: white;\n    border: none;\n    border-radius: 10px;\n\n    &:hover {\n        background: #d5d5d5;\n    }\n\n"]);return Sn=function(){return n},n}function Rn(){var n=Object(l.a)(["\n    font-size: 80px;\n    text-align: center;\n    font-weight: bold;\n    margin-top: 10px;\n    margin-bottom: 20px;\n"]);return Rn=function(){return n},n}function Gn(){var n=Object(l.a)(["\n    font-size: 25px;\n    font-weight:bold;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 20px;\n"]);return Gn=function(){return n},n}function Yn(){var n=Object(l.a)(["\n    font-size: 25px;\n    width: 100%;\n    text-align: center;\n"]);return Yn=function(){return n},n}function zn(){var n=Object(l.a)(["\n    margin: 0 auto;\n    height: 300px;\n    margin-top: 75px;\n    margin-bottom: 40px;\n"]);return zn=function(){return n},n}var Mn=p.a.div(zn()),Fn=p.a.div(Yn()),Hn=p.a.div(Gn()),Dn=p.a.div(Rn()),Un=p.a.button(Sn()),Jn=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){var n;return Object(s.a)(this,e),(n=t.call(this)).scroll=function(){window.scrollTo({top:window.innerHeight,left:0,behavior:"smooth"})},n.myRef=o.a.createRef(),n}return Object(u.a)(e,[{key:"render",value:function(){return Object(r.jsxs)("section",{children:[Object(r.jsxs)(Mn,{ref:this.myRef,children:[Object(r.jsx)(Fn,{children:"Introducing OMi"}),Object(r.jsx)(Dn,{children:"Online Medical Informant"}),Object(r.jsx)(Fn,{children:"A service identifying a patients issue"}),Object(r.jsx)(Fn,{children:"based on the symptoms that they are experiencing"})]}),Object(r.jsx)(Hn,{children:"Search, Select, Indentify. It's that easy."}),Object(r.jsx)(Un,{onClick:this.scroll,children:"Try Now"})]})}}]),e}(o.a.Component);function Ln(){var n=Object(l.a)(["\n\n    height: 100vh;\n    min-height: 700px;\n    width: 100%;\n    max-width: 100%;\n    min-width: 755px;\n    background: #0d1117;\n\n"]);return Ln=function(){return n},n}function Nn(){var n=Object(l.a)(["\n    min-height: 100vh;\n    width: 100%;\n    max-width: 100%;\n    min-width: 755px;\n    background-image: linear-gradient(90deg, #DEA0B5 , #C2C2E3, #B3E3EA);\n\n"]);return Nn=function(){return n},n}function Vn(){var n=Object(l.a)(["\n\n    height: 100vh;\n    min-height: 700px;\n    width: 100%;\n    max-width: 100%;\n    min-width: 755px;\n    background-image: linear-gradient(90deg, #DEA0B5 , #C2C2E3, #B3E3EA);\n\n"]);return Vn=function(){return n},n}var Wn=p.a.div(Vn()),Tn=p.a.div(Nn()),Pn=p.a.div(Ln()),Kn=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){var n=Object(r.jsx)(Wn,{children:this.props.children});return"black"==this.props.c&&(n=Object(r.jsx)(Pn,{children:this.props.children})),"adapt"==this.props.c&&(n=Object(r.jsx)(Tn,{children:this.props.children})),Object(r.jsx)("section",{children:n})}}]),e}(o.a.Component),Xn=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(u.a)(e,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,left:0,behaviour:"auto"})}},{key:"render",value:function(){return Object(r.jsx)("div",{})}}]),e}(o.a.Component),Zn=e.p+"media/rami.195912f9.png",qn=e.p+"media/adam.f7c3d43c.png",_n=e.p+"media/kevin.1810e86e.png",$n=e.p+"media/bj.940e779c.jpg";function nt(){var n=Object(l.a)(["\n    margin-top: -20px;\n    margin-left: 20px;\n"]);return nt=function(){return n},n}function tt(){var n=Object(l.a)(["\n    font-size: 20px;\n    margin-top: -10px;\n"]);return tt=function(){return n},n}function et(){var n=Object(l.a)(["\n    font-size: 40px;\n    font-weight: bold;\n"]);return et=function(){return n},n}function rt(){var n=Object(l.a)(["\n    border-radius:100px;\n    float: right;\n    width: 200px;\n    height: 200px;\n"]);return rt=function(){return n},n}function it(){var n=Object(l.a)(["\n    border-radius:100px;\n    width: 200px;\n    height: 200px;\n    float: left;\n"]);return it=function(){return n},n}function ot(){var n=Object(l.a)(["\n    display: inline-block;\n    float: right;\n    margin-right: 100px;\n    width: 600px;\n    height: 225px;\n    padding: 10px;\n    border-radius: 10px;\n    background: white;\n"]);return ot=function(){return n},n}function ct(){var n=Object(l.a)(["\n    float: left;\n    width: 600px;\n    margin-left: 100px;\n    padding: 10px;\n    height: 225px;\n    border-radius: 10px;\n    background: white;\n    display: inline-block;\n"]);return ct=function(){return n},n}function at(){var n=Object(l.a)(["\n    text-align: center;\n    height: 225px;\n    margin-bottom: 50px;\n"]);return at=function(){return n},n}function st(){var n=Object(l.a)(["\n    font-size: 80px;\n    text-align: center;\n    font-weight: bold;\n    margin-top: 0px;\n    margin-bottom: 20px;\n"]);return st=function(){return n},n}function ut(){var n=Object(l.a)(["\n    font-size: 25px;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 60px;\n"]);return ut=function(){return n},n}function ht(){var n=Object(l.a)(["\n    margin: 0 auto;\n    padding-top: 40px;\n"]);return ht=function(){return n},n}var dt=p.a.div(ht()),lt=p.a.div(ut()),pt=p.a.div(st()),ft=p.a.div(at()),jt=p.a.span(ct()),At=p.a.span(ot()),bt=p.a.img(it()),xt=p.a.img(rt()),gt=p.a.p(et()),mt=p.a.p(tt()),vt=p.a.div(nt());o.a.Component;function Ot(){var n=Object(l.a)(["\n    margin-bottom: 40px;\n    max-height: 360px;\n"]);return Ot=function(){return n},n}function wt(){var n=Object(l.a)(["\n    font-size: 22px;\n    text-align: center;\n    margin-top: 7px;\n"]);return wt=function(){return n},n}function Ct(){var n=Object(l.a)(["\n    font-size: 22px;\n    text-align: center;\n"]);return Ct=function(){return n},n}function Et(){var n=Object(l.a)(["\n    font-size: 28px;\n    font-weight: bold;\n    text-align: center;\n    margin: 15px 0 10px 0;\n"]);return Et=function(){return n},n}function kt(){var n=Object(l.a)(["\n    overflow: hidden;\n    padding-left: 35px;\n    margin-top: 10px;\n"]);return kt=function(){return n},n}function It(){var n=Object(l.a)(["\n    width: 160px;\n    height: 160px;\n    float: right;\n"]);return It=function(){return n},n}function yt(){var n=Object(l.a)(["\n    width: 445px;\n    min-width: 445px;\n    height: 180px;\n    min-height: 180px;\n    max-height: 180px;\n    background: white;\n    border-radius: 100px;\n    overflow: hidden;\n    float: right;\n    margin: 10px;\n    padding-right: 10px;\n"]);return yt=function(){return n},n}function Qt(){var n=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    border-radius: 100px;\n    margin-top: 10px;\n"]);return Qt=function(){return n},n}function Bt(){var n=Object(l.a)(["\n    overflow: hidden;\n    padding-right: 35px;\n    margin-top: 10px;\n"]);return Bt=function(){return n},n}function St(){var n=Object(l.a)(["\n    width: 160px;\n    height: 160px;\n    float: left;\n"]);return St=function(){return n},n}function Rt(){var n=Object(l.a)(["\n    width: 35%;\n    min-width: 443px;\n    height: 180px;\n    background: white;\n    border-radius: 100px;\n    overflow: hidden;\n    float: left;\n    margin: 10px;\n    padding-left: 10px;\n"]);return Rt=function(){return n},n}function Gt(){var n=Object(l.a)(["\n    overflow: hidden;\n    display: inline-block;\n    width: 75%;\n    max-width: 75%;\n    font-family: Arial;\n    \n"]);return Gt=function(){return n},n}function Yt(){var n=Object(l.a)(["\n    font-size: 75px;\n    text-align: center;\n    font-weight: bold;\n    margin: 0 auto;\n"]);return Yt=function(){return n},n}function zt(){var n=Object(l.a)(["\n    font-size: 30px;\n    text-align: center;\n"]);return zt=function(){return n},n}function Mt(){var n=Object(l.a)(["\n    margin: 0 auto;\n    padding-top: 40px;\n    margin-bottom: 60px;\n"]);return Mt=function(){return n},n}var Ft=p.a.div(Mt()),Ht=p.a.div(zt()),Dt=p.a.div(Yt()),Ut=p.a.div(Gt()),Jt=p.a.div(Rt()),Lt=p.a.div(St()),Nt=p.a.div(Bt()),Vt=p.a.img(Qt()),Wt=p.a.div(yt()),Tt=p.a.div(It()),Pt=p.a.div(kt()),Kt=p.a.div(Et()),Xt=p.a.div(Ct()),Zt=p.a.div(wt()),qt=p.a.div(Ot()),_t=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(Ft,{children:[Object(r.jsx)(Dt,{children:"About us"}),Object(r.jsx)(Ht,{children:"the developers"})]}),Object(r.jsx)(qt,{children:Object(r.jsxs)(Ut,{children:[Object(r.jsxs)(Jt,{children:[Object(r.jsx)(Lt,{children:Object(r.jsx)(Vt,{src:Zn})}),Object(r.jsxs)(Nt,{children:[Object(r.jsx)(Kt,{children:"Rami Janini"}),Object(r.jsx)(Xt,{children:"Backend Developer"}),Object(r.jsx)(Xt,{children:"Data Scientist"}),Object(r.jsx)(Zt,{children:"from Jordan"})]})]}),Object(r.jsxs)(Wt,{children:[Object(r.jsx)(Tt,{children:Object(r.jsx)(Vt,{src:qn})}),Object(r.jsxs)(Pt,{children:[Object(r.jsx)(Kt,{children:"Adam Isenberg"}),Object(r.jsx)(Xt,{children:"Fullstack Developer"}),Object(r.jsx)(Xt,{children:"Computer Scientist"}),Object(r.jsx)(Zt,{children:"from South Africa"})]})]})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)(Ut,{children:[Object(r.jsxs)(Jt,{children:[Object(r.jsx)(Lt,{children:Object(r.jsx)(Vt,{src:_n})}),Object(r.jsxs)(Nt,{children:[Object(r.jsx)(Kt,{children:"Kevin Yang"}),Object(r.jsx)(Xt,{children:"Backend Developer"}),Object(r.jsx)(Xt,{children:"Editor"}),Object(r.jsx)(Zt,{children:"from America"})]})]}),Object(r.jsxs)(Wt,{children:[Object(r.jsx)(Tt,{children:Object(r.jsx)(Vt,{src:$n})}),Object(r.jsxs)(Pt,{children:[Object(r.jsx)(Kt,{children:"Byeongjun Moon"}),Object(r.jsx)(Xt,{children:"Product Designer"}),Object(r.jsx)(Xt,{children:"UI/UX Designer"}),Object(r.jsx)(Zt,{children:"from Canada"})]})]})]})})]})}}]),e}(o.a.Component);var $t=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)(Kn,{children:[Object(r.jsx)(D,{}),Object(r.jsx)(Jn,{})]}),Object(r.jsxs)(Kn,{c:"black",children:[Object(r.jsx)(A,{}),Object(r.jsx)(Bn,{})]}),Object(r.jsx)(Kn,{c:"adapt",children:Object(r.jsx)(_t,{})})]})},ne=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,49)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;e(n),r(n),i(n),o(n),c(n)}))};a.a.render(Object(r.jsxs)(o.a.StrictMode,{children:[Object(r.jsx)($t,{}),Object(r.jsx)(Xn,{})]}),document.getElementById("root")),window.scrollTo({top:0,left:0,behaviour:"auto"}),ne()}},[[47,1,2]]]);
//# sourceMappingURL=main.26835248.chunk.js.map
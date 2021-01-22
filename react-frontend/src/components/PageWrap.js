import React from 'react';

import styled from 'styled-components';

const Wr1 = styled.div`

    height: 100vh;
    min-height: 700px;
    width: 100%;
    max-width: 100%;
    min-width: 755px;
    background-image: linear-gradient(90deg, #DEA0B5 , #C2C2E3, #B3E3EA);
    padding: 25px 0 25px 0;
`;

const Wr1adapt = styled.div`
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    min-width: 755px;
    background-image: linear-gradient(90deg, #DEA0B5 , #C2C2E3, #B3E3EA);
    padding: 25px 0 25px 0;
`;

const Wr = styled.div`

    height: 100vh;
    min-height: 700px;
    width: 100%;
    max-width: 100%;
    min-width: 755px;
    background: #0d1117;
    padding: 25px 0 25px 0;
`;

class Page1 extends React.Component {


    render() {

        let wr = <Wr1>{this.props.children}</Wr1>;
        if (this.props.c == "black") wr =  <Wr>{this.props.children}</Wr>;
        if (this.props.c == "adapt") wr =  <Wr1adapt>{this.props.children}</Wr1adapt>;

        return(

            <section>{wr}</section>

        );
    }

}

export default Page1;
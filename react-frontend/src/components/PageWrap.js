import React from 'react';

import styled from 'styled-components';

const Wr1 = styled.div`

    height: 100vh;
    width: 100%;
    min-width: 755px;
    background-image: linear-gradient(110deg, #DEA0B5 , #C2C2E3, #B3E3EA);
    padding: 25px;
`;

const Wr = styled.div`

    height: 100vh;
    width: 100%;
    min-width: 755px;
    background: #0d1117;
    padding: 25px;
`;

class Page1 extends React.Component {


    render() {

        let wr = <Wr1>{this.props.children}</Wr1>;
        if (this.props.c == "black") wr =  <Wr>{this.props.children}</Wr>;

        return(

            <section>{wr}</section>

        );
    }

}

export default Page1;
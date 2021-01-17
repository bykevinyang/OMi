import React from 'react';

import styled from 'styled-components';

const Wr = styled.div`

    height: 100%;
    background-image: linear-gradient(to right, #BFF6EC , #C7CCE7);

`;

class Page1 extends React.Component {


    render() {

        return(

            <Wr>{this.props.children}</Wr>

        );
    }

}

export default Page1;
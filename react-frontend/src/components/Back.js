import React from 'react';

import styled from 'styled-components';

const Back = styled.button`

    height: 60px;
    width: 60px;
    border-radius: 25px;

`;

class Back extends React.Component {


    render() {
        return <Back>↺</Back>;
    }

}

export default Back;
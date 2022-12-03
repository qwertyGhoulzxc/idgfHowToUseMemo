import React from 'react';
import styled from "styled-components";

const Img = styled.img`
width: 150px;
  height: 150px;
`

const ListElem = ({values}) => {
    return (
        <div>
            {console.log(`elem draw${values.id}`)}
            <Img src={values.thumbnailUrl} />
            <p>{values.title}</p>
        </div>
    );
};

export default ListElem;
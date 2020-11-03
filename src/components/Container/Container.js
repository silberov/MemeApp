import React from 'react';
import Card from '../Card/Card';

function Container(props) {
    console.log("cont props ", props.search);
    let searchArr = [];
    props.memes && props.memes.map((meme) => meme.name.includes(props.search) && searchArr.push(meme));
    console.log("new", searchArr);
    return(
        <>
            {searchArr.map((item) => <Card name={item.name} url={item.url}/>)}
        </>
    );
}

export default Container;
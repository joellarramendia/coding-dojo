import React from "react";
import { useParams } from "react-router-dom";

export default function Color() {
    const { word, color } = useParams();
    const style = {
        color: color || 'black'
    };
    if (isNaN(word)){
      return <p>El parámetro "word" no es un número</p>  
    }
    return <h2 style={style}>{word}</h2>;
}
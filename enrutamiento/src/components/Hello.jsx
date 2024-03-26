import React from "react";
import { useParams } from "react-router-dom";

export default function Hello() {
    const { word } = useParams();
    return <h2>{word}</h2>;
}
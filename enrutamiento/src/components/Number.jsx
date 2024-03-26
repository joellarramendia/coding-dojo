import React from "react";
import { useParams } from "react-router-dom";

export default function Number() {
    const { number } = useParams();
    return <h2>{number}</h2>;
}
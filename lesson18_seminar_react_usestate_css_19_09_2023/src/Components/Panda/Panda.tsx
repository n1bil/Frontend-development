import React from "react";
import style from './Panda.module.css';
import pandaImage from './img/Image20230920165457.jpg'

function Panda():JSX.Element {
    

    return (
        <div className="{style.container}">
            <h1 className="{style.heading}">Panda</h1>
            <p className="{style.description}">Info about Panda</p>
            <h2>First way to use images through import</h2>
            <img src={pandaImage} alt="imgPanda" />
            <h2>Second way to use images through import</h2>
            <img src='C:\Users\Admin\Documents\Front-End\lesson18_seminar_react_usestate_css_19_09_2023\public\Image20230920165457.jpg' alt="imgPanda" />
            <h2>Third way to use images through import</h2>
            <img src='https://media.istockphoto.com/id/177841009/nl/foto/baby-giant-panda-on-the-tree.jpg?s=612x612&w=0&k=20&c=60O4IQP5ThIdYPwuQ_CH20HaQP8dsm4k1wP6AXlvSQE=' alt="imgPanda" />
        </div>
    );
}

export default Panda;
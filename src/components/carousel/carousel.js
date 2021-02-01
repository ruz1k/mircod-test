import React from 'react'

import {openModal} from "../actions/modal";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Slider from "react-slick";
import { Input, Select } from 'antd';
import './carousel.sass'

import sun from "../../img/temp-sun.svg";
import active from "../../img/temp-sun-active.svg"
import plus from "../../img/plus.svg"

import {
    selectedOption1,
    selectedOption2,
    selectedOption3,
    selectedOption4,
    selectedOption5,
    selectedOption6,
    selectedOption7,
    selectedOption8,
    selectedOption9,
    selectedOption10,
    selectedOption11
} from "../actions/options";

const Carousel = (props) => {
    const {
        option1,
        option2,
        option3,
        option4,
        option5,
        option6,
        option7,
        option8,
        option9,
        option10,
        option11,
    } = props
    let settings = {
        draggable: false,
        dots: false,
        className: 'option-carousel',
        slidesToShow: 11,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>
    }
    return (
        <div>
            <Slider {...settings} >
                <div className={`option ${option1 === true ? "active" : ""}`}>
                    <button onClick={props.selectedOption1} className="option__img">
                        {option1 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Temperature</span>
                </div>
                <div className={`option ${option2 === true ? "active" : ""}`}>
                    <button onClick={props.selectedOption2} className="option__img">
                        {option2 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Cloud temperature</span>
                </div>
                <div className={`option ${option3 === true ? "active" : ""}`}>
                    <button onClick={props.selectedOption3} className="option__img">
                        {option3 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Water temperature</span>
                </div>
                <div className={`option ${option4 === true ? "active" : ""}`}>
                    <button onClick={props.selectedOption4} className="option__img">
                        {option4 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Dust temperature</span>
                </div>
                <div className={`option ${option5 === true ? "active" : ""}`}>
                    <button onClick={props.selectedOption5} className="option__img">
                        {option5 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Cloud temperature</span>
                </div>
                <div className={`option ${option6 === true ? "active" : ""}`}>
                    <button onClick={props.selectedOption6} className="option__img">
                        {option6 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Water temperature</span>
                </div>
                <div className={`option ${option7 === true ? "active" : ""}`}>
                    <button onClick={props.selectedOption7} className="option__img">
                        {option7 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Temperature</span>
                </div>
                <div className={`option ${option8 === true ? "active" : ""}`}>
                    <button onClick={props.selectedOption8} className="option__img">
                        {option8 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Temperature</span>
                </div>
                <div className={`option ${option9 === true ? "active" : ""}`}>
                    <button onClick={props.selectedOption9} className="option__img">
                        {option9 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Temperature</span>
                </div>
                <div className={`option ${option10 === true ? "active" : ""}`}>
                    <button onClick={props.selectedOption10} className="option__img">
                        {option10 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Temperature</span>
                </div>
                <div className="option add-custom">
                    <button onClick={() => {
                        props.openModal({
                            title: "New Option",
                            content: <AddOption />
                        })
                    }} className="option__img">
                        <img alt='' src={plus}/>
                    </button>
                    <span>Add custom</span>
                </div>
                <div className={`option ${option11 === true ? "active" : ""}`}>
                    <button onClick={props.selectedOption11} className="option__img">
                        {option11 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                    </button>
                    <span>Temperature</span>
                </div>
            </Slider>
        </div>
    )
}

/// Добавление опций, сделал многовыборочный
const AddOption = () => {
    const {Option} = Select
    const children = [];
    for (let i = 0; i < 10; i++) {
        children.push(<Option key={i}>Option {i}</Option>);
    }
    return (
        <form className="modal-form">
            <Input className="form__item" placeholder="Option Name" allowClear />
            <Select
                className="form__item"
                mode="multiple"
                allowClear
                placeholder="Please select options "
                style={{width: "100%"}}
            >
                {children}
            </Select>
            <button className="form__item" type="submit">
                Apply
            </button>
        </form>
    )
}

/// Custom стрелки для карусели, стрелка далее
const SampleNextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", color: "black"}}
            onClick={onClick}
        />
    );
}

/// Custom стрелки для карусели, стрелка назад
const SamplePrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block"}}
            onClick={onClick}
        />
    );
}

const mapStateToProps = ({ options: {
    option1,
    option2,
    option3,
    option4,
    option5,
    option6,
    option7,
    option8,
    option9,
    option10,
    option11,
} }) => {
    return {
        option1,
        option2,
        option3,
        option4,
        option5,
        option6,
        option7,
        option8,
        option9,
        option10,
        option11,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            openModal,
            selectedOption1,
            selectedOption2,
            selectedOption3,
            selectedOption4,
            selectedOption5,
            selectedOption6,
            selectedOption7,
            selectedOption8,
            selectedOption9,
            selectedOption10,
            selectedOption11
        },
        dispatch
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
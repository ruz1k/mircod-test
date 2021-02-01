import React from 'react'

import Carousel from '../../carousel/carousel'
import RangePicker from "../../range/range";

import './mircod.sass'
import Fade from 'react-reveal/Fade';
import {DatePicker, Input, Select} from "antd";

import {openModal} from "../../actions/modal";
import {
    connectionSelected1,
    connectionSelected2,
    connectionSelected3,
    connectionSelected4,
    connectionSelected5,
    connectionSelected6,
} from "../../actions/connection";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import liveView from "../../../img/live-view.png"
import active from "../../../img/temp-sun-active.svg";
import sun from "../../../img/temp-sun.svg";
import back from "../../../img/back.svg"
import next from "../../../img/next.svg"
import complete from "../../../img/complete.svg"
import connection from "../../../img/connection.svg"

const Mircod = (props) => {
    const {
        value,
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
        connection1,
        connection2,
        connection3,
        connection4,
        connection5,
        connection6
    } = props
    /// Длина дистанции
    const stepCount = new Array(50)
    return (
        <div className="main__container">
            <div className='container__content'>
                <div className='container__options'>
                    <Carousel/>
                </div>
                <div className="container__device-block">
                    <div className="device-block__content">
                        <div className="about">
                            <div className="content__choose-options">
                                <p>Choosen <span>Options:</span></p>
                                <div className={`option ${option1 === true ? "choosen" : "unchoosen"}`}>
                                    <div className="option__img">
                                        {option1 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                                    </div>
                                </div>
                                <div className={`option ${option2 === true ? "choosen" : "unchoosen"}`}>
                                    <div className="option__img">
                                        {option2 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                                    </div>
                                </div>
                                <div className={`option ${option3 === true ? "choosen" : "unchoosen"}`}>
                                    <div className="option__img">
                                        {option3 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                                    </div>
                                </div>
                                <div className={`option ${option4 === true ? "choosen" : "unchoosen"}`}>
                                    <div className="option__img">
                                        {option4 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                                    </div>
                                </div>
                                <div className={`option ${option5 === true ? "choosen" : "unchoosen"}`}>
                                    <div className="option__img">
                                        {option5 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                                    </div>
                                </div>
                                <div className={`option ${option6 === true ? "choosen" : "unchoosen"}`}>
                                    <div className="option__img">
                                        {option6 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                                    </div>
                                </div>
                                <div className={`option ${option7 === true ? "choosen" : "unchoosen"}`}>
                                    <div className="option__img">
                                        {option7 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                                    </div>
                                </div>
                                <div className={`option ${option8 === true ? "choosen" : "unchoosen"}`}>
                                    <div className="option__img">
                                        {option8 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                                    </div>
                                </div>
                                <div className={`option ${option9 === true ? "choosen" : "unchoosen"}`}>
                                    <div className="option__img">
                                        {option9 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                                    </div>
                                </div>
                                <div className={`option ${option10 === true ? "choosen" : "unchoosen"}`}>
                                    <div className="option__img">
                                        {option10 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                                    </div>
                                </div>
                                <div className={`option ${option11 === true ? "choosen" : "unchoosen"}`}>
                                    <div className="option__img">
                                        {option11 === true ? <img alt='' src={active}/> : <img alt='' src={sun}/>}
                                    </div>
                                </div>
                            </div>
                            <div className="content__live-view">
                                <div className="live-view__header">
                                    <h1>White label W-394900 XP</h1>
                                    <button onClick={() => {
                                        props.openModal({
                                            title: "Order Now",
                                            content: <OrderNow/>
                                        })
                                    }}>Order Now
                                    </button>
                                </div>
                                <div className="live-view__body">
                                    <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
                                        erat
                                        consequat
                                        auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per
                                        conubia
                                        nostra,
                                        per i
                                    </p>
                                    <p>
                                        nceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
                                        condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.
                                        Proin
                                        condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat,
                                        velit
                                        mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci
                                        enim.
                                    </p>
                                </div>
                                {connection1 || connection2 || connection3 || connection4 || connection5 || connection6 === true && value !== 0 ?
                                    <Fade top>
                                        <div className="live-view__img">
                                            <img alt='' src={liveView}/>
                                            <span>LIVE
                                        VIEW</span>
                                        </div>
                                    </Fade> : <></>
                                }
                            </div>
                        </div>
                        <div className="content__settings">
                            <div className="settings__steps">
                                <div className='steps__flex-box'>
                                    <div className="steps__item">
                                        <img alt='' src={complete}/>
                                    </div>
                                    <div className="steps__item">
                                        <img alt='' src={complete}/>
                                    </div>
                                    <div className="steps__item active">
                                        <img alt='' src={complete}/>
                                    </div>
                                    <div className="steps__item">
                                    </div>
                                </div>
                                <span>Complete 3 steps of 4</span>
                            </div>
                            <div className='settings__body'>
                                <h2>TRANSMISSION<span>DISTANCE</span></h2>
                                <RangePicker steps={Array.from(Array(51).keys())}/>
                                <div className='body__connection'>
                                    <p>CHOOSE <span>TYPE OF CONNECTION</span></p>
                                    <div className="connection__container">
                                        {connection1 || connection2 || connection3 || connection4 || connection5 || connection6 === false ?
                                            <>
                                                <button onClick={props.connectionSelected1} className="container__item">
                                                    <img src={connection} alt=''/>
                                                </button>
                                                <button onClick={props.connectionSelected1} className="container__item">
                                                    <img src={connection} alt=''/>
                                                </button>
                                                <button onClick={props.connectionSelected1} className="container__item">
                                                    <img src={connection} alt=''/>
                                                </button>
                                                <button onClick={props.connectionSelected1} className="container__item">
                                                    <img src={connection} alt=''/>
                                                </button>
                                                <button onClick={props.connectionSelected1} className="container__item">
                                                    <img src={connection} alt=''/>
                                                </button>
                                                <button onClick={props.connectionSelected1} className="container__item">
                                                    <img src={connection} alt=''/>
                                                </button>
                                                <button onClick={props.connectionSelected1} className="container__item">
                                                    <img src={connection} alt=''/>
                                                </button>
                                                <button onClick={props.connectionSelected1} className="container__item">
                                                    <img src={connection} alt=''/>
                                                </button>
                                            </>
                                            : <span>None</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='step-btn next-page valid'>
                        <img alt='' src={next}/>
                    </div>
                    <div className='step-btn back disable'>
                        <img alt='' src={back}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const OrderNow = () => {
    const {Option} = Select
    return (
        <form className="modal-form">
            <Input className="form__item" placeholder="Name" allowClear/>
            <Input className="form__item" placeholder="Surname" allowClear/>
            <DatePicker className="form__item" style={{width: "100%"}} placeholder="Birth date"/>
            <Select className="form__item" placeholder="Select City" style={{width: "100%"}}>
                <Option value="moscow">Moscow</Option>
                <Option value="kazan">Kazan</Option>
                <Option value="moscow">Moscow</Option>
                <Option value="moscow">Moscow</Option>
                <Option value="moscow">Moscow</Option>
                <Option value="moscow">Moscow</Option>
            </Select>
            <button className="form__item" type="submit">
                Order
            </button>
        </form>
    )
}

const mapStateToProps = (
    {
        options: {
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
        },
        connection: {
            connection1,
            connection2,
            connection3,
            connection4,
            connection5,
            connection6,
        },
        range: {
            value
}
    }) => {
    return {
        value,
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
        connection1,
        connection2,
        connection3,
        connection4,
        connection5,
        connection6,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            openModal,
            connectionSelected1,
            connectionSelected2,
            connectionSelected3,
            connectionSelected4,
            connectionSelected5,
            connectionSelected6,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Mircod);
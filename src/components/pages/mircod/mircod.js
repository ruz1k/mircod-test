import React from 'react'

import Carousel from '../../carousel/carousel'
import RangePicker from "../../range/range";

import './mircod.sass'
import {DatePicker, Input, Select} from "antd";

import {openModal} from "../../actions/modal";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import liveView from "../../../img/live-view.png"
import active from "../../../img/temp-sun-active.svg";
import sun from "../../../img/temp-sun.svg";

const Mircod = (props) => {
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
                                    <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
                                        consequat
                                        auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia
                                        nostra,
                                        per i
                                    </p>
                                    <p>
                                        nceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
                                        condimentum
                                        sit
                                        amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                                        fermentum
                                        nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut
                                        aliquam
                                        massa nisl quis neque. Suspendisse in orci enim.
                                    </p>
                                </div>
                                <img src={liveView}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<button onClick={() => {*/}
                {/*    props.openModal({*/}
                {/*        title: "Order Now",*/}
                {/*        content: <h1>Hello</h1>*/}
                {/*    })*/}
                {/*}}>Show modal</button>*/}
                {/*<RangePicker steps={[ 0, 500, 1000, 5000, 10000 ]} />*/}
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

const mapStateToProps = ({
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
                             }
                         }) => {
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
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Mircod);
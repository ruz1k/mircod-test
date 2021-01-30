import React from 'react'
import {openModal} from "../../actions/modal";
import {bindActionCreators} from "redux";
import { connect } from "react-redux";

const Mircod = (props) => {
    return (
        <div>
            <button onClick={() => {
                props.openModal({
                    title: "Order Now",
                    content: <h1>Hello</h1>
                })
            }}>Show modal</button>
        </div>
    )
}

const mapStateToProps = () => {
    return {
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
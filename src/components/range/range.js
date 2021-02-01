import React from "react";
import {rangeUpdated} from "../actions/range";
import {connect} from "react-redux";

const RangePicker = (props) => {
    const {steps, value} = props
    const handleChange = e => {
        props.rangeUpdated(e.target.value, steps)
    }

    const min = steps[0]
    const max = steps[steps.length - 1];
    return (
        <div>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
            <p>{min}</p>
            <p>{max}</p>
        </div>
    )
}

const mapStateToProps = ({ range: { value } }) => {
    return {
        value
    };
};

const mapDispatchProps = {
    rangeUpdated,
};

export default connect(mapStateToProps, mapDispatchProps)(RangePicker);
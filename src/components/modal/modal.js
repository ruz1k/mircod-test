import React from "react";

import {Button, Modal} from "antd";
import "./modal.sass"

import {connect} from "react-redux";
import {openModal} from "../actions/modal";

const ModalBlock = (props) => {
    const {openModal, visible, title = "", content} = props;
    return (
        <Modal
            title={title}
            onCancel={openModal}
            visible={visible}
            footer={
                <>
                    <Button onClick={openModal} style={{marginRight: 8}}>
                        Cancel
                    </Button>
                </>
            }
        >
            {content}
        </Modal>
    );
}

const mapStateToProps = ({modal: {visible, title, content}}) => {
    return {
        visible,
        title,
        content,
    };
};

const mapDispatchProps =
    {
        openModal,
    };

export default connect(mapStateToProps, mapDispatchProps)(ModalBlock);
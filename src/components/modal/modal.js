import React, { Component } from "react";
import { Button, Modal } from "antd";
import { connect } from "react-redux";
import {openModal} from "../actions/modal";

class ModalBlock extends Component {
    render() {
        const { openModal, visible, title = "", content } = this.props;

        return (
            <Modal
                title={title}
                onCancel={openModal}
                visible={visible}
                footer={
                    <Button onClick={openModal} style={{ marginRight: 8 }}>
                        Cancel
                    </Button>
                }
            >
                {content}
            </Modal>
        );
    }
}

const mapStateToProps = ({ modal: { visible, title, content } }) => {
    return {
        visible,
        title,
        content,
    };
};

const mapDispatchProps = {
    openModal,
};

export default connect(mapStateToProps, mapDispatchProps)(ModalBlock);
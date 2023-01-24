import React, {useState, useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import { ModalContext } from "../context/ModalContext/ModalContext";

// import {createBrand, createType} from "../../http/deviceAPI";

const CustomModal = ({show, title, placeholder, value, setValue}) => {

    const { closeModal } = useContext(ModalContext);

    const addBrand = () => {
        // createBrand({name: value}).then(data => {
        //     setValue('')
        //     onHide()
        // })
    }

    return (
        <Modal
            show={show}
            onHide={closeModal}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={placeholder}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={closeModal}>Close</Button>
                <Button variant="outline-success" onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;
import React, {useContext} from 'react';
import {Button, Container} from "react-bootstrap";
import ModalProvider, { modalType } from '../context/ModalContext/ModalContextProvider';
import { ModalContext } from "../context/ModalContext/ModalContext";
import CustomModal from '../components/Modal';
// import CreateBrand from "../components/modals/CreateBrand";
// import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const { openModal, activeModal } = useContext(ModalContext);    

    const openBrandModal = () => {
        openModal({
            typeModal: modalType.ADD_BRAND,
            modalContent: {
                title: "Add brand",
                placeholder: "Fil name of brand",
                onChange: "MODAL MODAL MODAL"
            }
        });
    }

    const openTypeModal = () => {        
        openModal({
            typeModal: modalType.ADD_TYPE,
            modalContent: {
                title: 'Add type',
                placeholder: "Fil name of type",
                onChange: "MODAL MODAL MODAL"
            }
        });
    }

    const openDeviceModal = () => {
        openModal({
            typeModal: modalType.ADD_DEVICE,
            modalContent: {
                title: 'Add device',
                placeholder: "Fil name of device",
            }
        });
    }

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => openTypeModal()}
            >
                Add type
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => openBrandModal()}
            >
                Add brand
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => openDeviceModal()}
            >
                Add device
            </Button>
            {/* <CustomModal show={activeModal.typeModal} /> */}
        </Container>
    );
};


const AdminPanel = () => {
    return (
        <ModalProvider>
            <Admin />
        </ModalProvider>
    )
}

export default AdminPanel;
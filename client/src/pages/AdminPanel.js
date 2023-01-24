import React, {useContext} from 'react';
import {Button, Container} from "react-bootstrap";
import ModalProvider from '../context/ModalContext/ModalContextProvider';
import { ModalContext } from "../context/ModalContext/ModalContext";

// import CreateBrand from "../components/modals/CreateBrand";
// import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const { openModal } = useContext(ModalContext);    

    const openBrandModal = () => {
        openModal({
            title: "Add brand",
            placeholder: "Fil name of brand",
            onChange: "MODAL MODAL MODAL"
        });
    }

    const openTypeModal = () => {        
        openModal({
            title: 'Add type',
            placeholder: "Fil name of type",
        });
    }

    const openDeviceModal = () => {
        openModal({
            title: 'Add device',
            placeholder: "Fil name of device",
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
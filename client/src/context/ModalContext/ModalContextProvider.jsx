import React, {useState} from "react";

import { ModalContext } from "./ModalContext";
import CustomModal from "../../components/Modal";

export const modalType = {
    ADD_BRAND: 'ADD_BRAND',
    ADD_TYPE: 'ADD_TYPE',
    ADD_DEVICE: 'ADD_DEVICE'
}

const initActiveModal = {
    typeModal: '',
    modalContent: null
}

const ModalProvider = ({ children }) => {
    const [activeModal, setIsActiveModal] = useState(initActiveModal);

    const openModal = ({typeModal = '', modalContent = null}) => {
        setIsActiveModal({ typeModal, modalContent });
    }

    const closeModal = () => {
        setIsActiveModal(initActiveModal)
    }

    const valueModalProvider = {
        openModal,
        closeModal,
        activeModal
    }

    return (
        <div className="ModalContext">
            <ModalContext.Provider value={valueModalProvider}>
                <CustomModal 
                    typeModal={activeModal.typeModal} 
                    titleModal={activeModal.modalContent?.title} 
                    placeholder={activeModal.modalContent?.placeholder} 
                />
                {children}
            </ModalContext.Provider>
        </div>
    )
}

export default ModalProvider;
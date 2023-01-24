import React, {useState} from "react";

import { ModalContext } from "./ModalContext";
import CustomModal from "../../components/Modal";

const ModalProvider = ({ children }) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState();
    const [value, setValue] = useState('');

    console.log(value);

    const openModal = (modalConfig) => {
        setModalContent(modalConfig);
        setModalOpened(true);
    }

    const closeModal = () => {
        setModalOpened(false);
        setModalContent({})
        setValue('')
    }

    const valueModalProvider = {
        openModal,
        closeModal
    }

    return (
        <div className="ModalContext">
            <ModalContext.Provider value={valueModalProvider}>
                <CustomModal 
                    show={modalOpened} 
                    title={modalContent?.title} 
                    placeholder={modalContent?.placeholder} 
                    value={value}
                    setValue={setValue}
                />
                {children}
            </ModalContext.Provider>
        </div>
    )
}

export default ModalProvider;
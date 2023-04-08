
import React, {FC} from 'react'
import ReactDOM from 'react-dom'
import StyledModal from './styledModal'
import StyledModalContent from './styledModalContent'

type ModalProps = {
    children: any,
    onClose: () => void,
    isModal: boolean
}

const Modal: FC<ModalProps> = ({children, onClose, isModal}) => {
    if (!isModal) return null
    return (ReactDOM.createPortal(    
        <StyledModal onClick={onClose}>
            <StyledModalContent onClick={e => e.stopPropagation()}>
                {children}
            </StyledModalContent>
        </StyledModal>,
        document.body))
}

Modal.displayName = 'Modal'

export default Modal

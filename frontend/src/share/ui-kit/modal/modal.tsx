import React, {FC, MouseEventHandler, ReactNode} from 'react'
import ReactDOM from 'react-dom'
import {StyledModal, StyledModalContent} from './styled'
import {Simulate} from 'react-dom/test-utils'
import keyDown = Simulate.keyDown

type ModalProps = {
    children: ReactNode,
    isOpen?: boolean
    onClose?: () => void
}

const Modal: FC<ModalProps> = ({
    children,
    onClose,
    isOpen = false
}) => {
    if (!isOpen) return null
    
    const contentClickHandler: MouseEventHandler = (e) => e.stopPropagation()
    
    return (ReactDOM.createPortal(
        <StyledModal onClick={onClose}>
            <StyledModalContent $color="rgb(247, 248, 250)" onClick={contentClickHandler}>
                {children}
            </StyledModalContent>
        </StyledModal>,
        document.body))
}

Modal.displayName = 'Modal'

export default Modal

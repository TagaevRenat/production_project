import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string,
    isOpen: boolean;
    onClose: ()=> void
    lazy?: boolean
}

export const LoginModal = ({
    className, isOpen, onClose, lazy,
}: LoginModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={lazy}
        >
            <LoginForm />
        </Modal>
    );
};

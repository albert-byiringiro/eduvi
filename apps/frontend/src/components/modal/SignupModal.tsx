import React from 'react';
import ModalWrapper from './ModalWrapper';
import Signup from '../../pages/auth/Signup';

interface SignupModalProps {
  handleClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ handleClose }) => {
  return (
    <ModalWrapper onClose={handleClose}>
      <Signup />
    </ModalWrapper>
  );
};

export default SignupModal;

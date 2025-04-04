import { useState } from 'react';
import SignupModal from './SignupModal';

const SignupModalDemo: React.FC = () => {
  const [showSignModal, setshowSignModal] = useState(false);

  const handleCloseModal = () => {
    setshowSignModal(false);
  };

  return (
    <div className="flex items-center justify-center p-6">
      <button
        onClick={() => setshowSignModal(true)}
        className="px-6 py-2 text-black transition-all duration-200 rounded-lg bg-primary-600 hover:bg-primary-700 focus:scale-95"
      >
        Sign Up
      </button>

      {showSignModal && <SignupModal handleClose={handleCloseModal} />}
    </div>
  );
};

export default SignupModalDemo;

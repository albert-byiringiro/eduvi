import { IconType } from 'react-icons';
import { AiOutlineGooglePlus } from 'react-icons/ai';

interface SocialAuthButtonProps {
  icon: IconType;
  provider: string;
  iconColor?: string;
  action: 'Login' | 'Signup';
  onClick?: () => void;
  className?: string;
}

export const SocialAuthButton = ({
  icon: Icon,
  provider,
  iconColor = '#e93e30',
  action,
  onClick,
  className = '',
}: SocialAuthButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center w-full gap-3 px-4 py-3 mb-6 
          transition-colors border border-gray-300 rounded-lg hover:bg-gray-50 ${className}`}
      type="button"
      onClick={onClick}
    >
      <Icon size={24} color={iconColor} />
      <span className="text-gray">{`${action} with ${provider}`}</span>
    </button>
  );
};

// Optional: Create preset buttons for common providers
export const GoogleAuthButton = ({
  action,
  onClick,
}: {
  action: 'Login' | 'Signup';
  onClick?: () => void;
}) => {
  return (
    <SocialAuthButton
      icon={AiOutlineGooglePlus}
      provider="Google"
      iconColor="#E93E30"
      action={action}
      onClick={onClick}
    />
  );
};

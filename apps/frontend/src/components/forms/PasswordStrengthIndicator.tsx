// components/forms/PasswordStrengthIndicator.tsx
interface PasswordStrengthIndicatorProps {
  strength: number;
  password: string;
}

export const PasswordStrengthIndicator = ({
  strength,
  password,
}: PasswordStrengthIndicatorProps) => {
  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="flex items-center mb-1">
        <div className="flex-1 h-2 mr-2 bg-gray-200 rounded">
          <div
            className={`h-2 rounded ${
              strength === 0
                ? 'w-0'
                : strength === 1
                  ? 'w-1/4 bg-red-500'
                  : strength === 2
                    ? 'w-2/4 bg-yellow-500'
                    : strength === 3
                      ? 'w-3/4 bg-blue-500'
                      : 'w-full bg-green-500'
            }`}
          />
        </div>
        <span className="text-xs text-gray-500">
          {strength === 0
            ? 'Very weak'
            : strength === 1
              ? 'Weak'
              : strength === 2
                ? 'Medium'
                : strength === 3
                  ? 'Strong'
                  : 'Very strong'}
        </span>
      </div>
      <p className="text-xs text-gray-500">
        Password must be at least 8 characters and include uppercase, numbers, and special
        characters
      </p>
    </div>
  );
};

const calculatePasswordStrength = (password: string) => {
  if (!password) return 0;
  return [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;
};

export default calculatePasswordStrength;

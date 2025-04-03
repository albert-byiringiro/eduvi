import { useState } from 'react';
import Button from '../common/Button';
import { AiOutlineGooglePlus, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { Controller, useForm } from 'react-hook-form';
import Input from '../common/Input';
import { CiMail } from 'react-icons/ci';
import calculatePasswordStrength from '../../utils/calculatePasswordStrength';
import signupSchema, { SignupFormData } from '../../SignupSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomCheckbox from '../common/CustomCheckbox';

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const watchPassword = watch('password');

  const passwordStrength = calculatePasswordStrength(watchPassword);

  const onSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
      <button
        className="flex items-center justify-center w-full gap-3 px-4 py-3 mb-6 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50"
        type="button"
      >
        <AiOutlineGooglePlus size={24} color="#E93E30" />
        <span className="text-gray">Signup with Google</span>
      </button>

      <div className="mb-6 text-center">
        <span className="text-gray">- Or signup with your email -</span>
      </div>

      <div className="space-y-4">
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <Input
              label="Full Name"
              placeholder="Esther Howard"
              icon={<AiOutlineUser />}
              error={errors.fullName?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              type="email"
              label="Email"
              placeholder="al.example@gmail.com"
              icon={<CiMail />}
              error={errors.email?.message}
              {...field}
            />
          )}
        />

        <div>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                label="Password"
                placeholder="**********"
                icon={<AiOutlineLock />}
                error={errors.password?.message}
                {...field}
              />
            )}
          />

          {watchPassword && (
            <div className="mt-2">
              <div className="flex items-center mb-1">
                <div className="flex-1 h-2 mr-2 bg-gray-200 rounded">
                  <div
                    className={`h-2 rounded ${
                      passwordStrength === 0
                        ? 'w-0'
                        : passwordStrength === 1
                          ? 'w-1/4 bg-red-500'
                          : passwordStrength === 2
                            ? 'w-2/4 bg-yellow-500'
                            : passwordStrength === 3
                              ? 'w-3/4 bg-blue-500'
                              : 'w-full bg-green-500'
                    }`}
                  />
                </div>
                <span className="text-xs text-gray-500">
                  {passwordStrength === 0
                    ? 'Very weak'
                    : passwordStrength === 1
                      ? 'Weak'
                      : passwordStrength === 2
                        ? 'Medium'
                        : passwordStrength === 3
                          ? 'Strong'
                          : 'Very strong'}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Password must be at least 8 characters and include uppercase, numbers, and special
                characters
              </p>
            </div>
          )}
        </div>

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <Input
              type="password"
              label="Confirm Password"
              placeholder="**********"
              icon={<AiOutlineLock />}
              error={errors.confirmPassword?.message}
              {...field}
            />
          )}
        />
      </div>

      <div className="mt-6">
        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <CustomCheckbox
              id="terms"
              checked={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              containerClassName="mt-2"
              error={errors.terms?.message}
              label={
                <>
                  I agree to the{' '}
                  <a href="/terms" className="font-medium text-primary-900 hover:underline">
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="font-medium text-primary-900 hover:underline">
                    Privacy Policy
                  </a>
                </>
              }
            />
          )}
        />
      </div>

      <Button className="w-full my-6" type="submit" loading={isSubmitting}>
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </Button>

      <p className="text-sm text-center text-gray">
        Already have an account?{' '}
        <a href="/signin" className="text-primary-900 hover:underline">
          Sign in
        </a>
      </p>
    </form>
  );
}

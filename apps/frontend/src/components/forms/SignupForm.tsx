import { useState } from 'react';
import Button from '../common/Button';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { Controller, useForm } from 'react-hook-form';
import Input from '../common/Input';
import { CiMail } from 'react-icons/ci';
import calculatePasswordStrength from '../../utils/calculatePasswordStrength';
import signupSchema, { SignupFormData } from '../../SignupSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomCheckbox from '../common/CustomCheckbox';
import { GoogleAuthButton } from '../common/buttons/SocialAuthButton';
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator';

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
      <GoogleAuthButton action={'Signup'} />

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
            <PasswordStrengthIndicator strength={passwordStrength} password={watchPassword} />
          )}
        </div>
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

      <Button className="w-full mt-8" type="submit" loading={isSubmitting}>
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </Button>

      <p className="mt-6 text-sm text-center text-gray-500">
        Already have an account?{' '}
        <a href="/signin" className="text-primary-600 hover:underline">
          Sign in
        </a>
      </p>
    </form>
  );
}

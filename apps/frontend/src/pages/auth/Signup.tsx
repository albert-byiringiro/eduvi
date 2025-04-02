import eduviLogo from '../../assets/img/eduvi-dummy-logo.png';
import signupIllustration from '../../assets/img/signup-illustration.svg';
import Input from '../../components/common/Input';
import { ChangeEvent, FormEvent, useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { AiOutlineGooglePlus, AiOutlineUser } from 'react-icons/ai';
import Button from '../../components/common/Button';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  return (
    <div className="w-full min-h-screen grid grid-cols-2 bg-white">
      <div className="p-12 flex flex-col justify-center">
        <div className="mb-12">
          <img src={eduviLogo} alt="Eduvi Logo" className="h-10 mb-6" />
          <h1 className="text-4xl font-bold text-primary-900 mb-4">
            Welcome to <br />
            Eduvi Online <br />
            Learning Platform
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={signupIllustration} alt="Learning Illustration" className="w-4/5" />
        </div>
      </div>

      <div className="p-12 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
          <button
            className="w-4/5 flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg mb-8 hover:bg-gray-50 transition-colors"
            type="button"
          >
            <AiOutlineGooglePlus size={32} color="#E93E30" />
            <span className="text-gray">Signup with google</span>
          </button>

          <div className="text-center mb-8">
            <span className="text-gray">- Or signup with your email -</span>
          </div>

          <div className="space-y-6">
            <Input
              type="text"
              label="Full Name"
              value={formData.fullName}
              name="fullName"
              placeholder="Esther Howard"
              onChange={handleInputChange}
              icon={<AiOutlineUser />}
            />

            <Input
              type="email"
              label="Email"
              value={formData.email}
              name="email"
              placeholder="al.example@gmail.com"
              onChange={handleInputChange}
              icon={<CiMail />}
            />

            <Input
              type="password"
              label="Password"
              value={formData.password}
              name="password"
              placeholder="**********"
              onChange={handleInputChange}
              icon={<CiMail />}
            />
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 fill-purple-700"
            />
            <label htmlFor="terms" className="text-sm text-gray">
              I agreed to the{' '}
              <a href="/terms" className="text-primary-900 font-medium">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors my-6">
            Sign Up
          </button> */}

          <Button className="w-full my-6">Sign up</Button>

          <p className="text-center text-sm text-gray">
            Already have account?{' '}
            <a href="/signin" className="text-purple-600 hover:text-purple-700">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

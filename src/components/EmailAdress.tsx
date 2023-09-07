import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface FormData {
  email: string;
}

interface EmailAddressProps {
  errors: FieldErrors;
  register: UseFormRegister<FormData>;
}

const validateEmail = (value: string) => {
  if (!value) {
    return 'Email obligatory';
  }
  if (!/\S+@\S+\.\S+/.test(value)) {
    return 'Valid email required';
  }
  return true;
};


export const EmailAdress: React.FC<EmailAddressProps> = ({ errors, register }) => {
  return (
    <div className="flex flex-col mt-5 gap-2">
      <label className="font-bold text-xs text-gray-700" htmlFor="email">
        Email Address {errors.email && errors.email.message && (
          <p role="alert" className='text-red-700'>{errors.email.message.toString()}</p>
        )}
      </label>
      <input
        className={`border border-spacing-1 p-3 rounded-md ${errors.email ? 'bg-red-200 border-red-500 text-red-700' : 'border-black-200'}`}
        type="email"
        placeholder="email@company.com"
        {...register('email', { required: true, validate: validateEmail })}
      />
    </div>
  );
};



import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { FormData } from './types';

interface AddressInfoStepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const AddressInfoStep = ({ register, errors }: AddressInfoStepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Address Information
        </h2>
        <p className="text-gray-600 mt-2">Where are you located?</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
          <input
            {...register('country', { required: 'Country is required' })}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your country"
          />
          {errors.country && <span className="text-red-500 text-sm mt-1">{errors.country.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
          <input
            {...register('city', { required: 'City is required' })}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your city"
          />
          {errors.city && <span className="text-red-500 text-sm mt-1">{errors.city.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
          <input
            {...register('zipCode', { 
              required: 'Zip code is required',
              minLength: { value: 3, message: 'Invalid zip code' }
            })}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your zip code"
          />
          {errors.zipCode && <span className="text-red-500 text-sm mt-1">{errors.zipCode.message}</span>}
        </div>
      </div>
    </div>
  );
};

export default AddressInfoStep;

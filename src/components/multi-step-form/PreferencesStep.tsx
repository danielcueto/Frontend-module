import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { FormData } from './types';

interface PreferencesStepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const PreferencesStep = ({ register, errors }: PreferencesStepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Contact Preferences
        </h2>
        <p className="text-gray-600 mt-2">How would you like us to reach you?</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">Preferred Contact Method</label>
          <div className="space-y-3">
            {[
              { value: 'email', label: 'Email', icon: '📧' },
              { value: 'phone', label: 'Phone', icon: '📞' },
              { value: 'whatsapp', label: 'WhatsApp', icon: '💬' }
            ].map((option) => (
              <label key={option.value} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  {...register('contactMethod', { required: 'Please select a contact method' })}
                  type="radio"
                  value={option.value}
                  className="w-4 h-4 text-green-600 focus:ring-green-500"
                />
                <span className="ml-3 text-lg">{option.icon}</span>
                <span className="ml-2 text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.contactMethod && <span className="text-red-500 text-sm mt-1">{errors.contactMethod.message}</span>}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="flex items-center cursor-pointer">
            <input
              {...register('newsletter')}
              type="checkbox"
              className="w-4 h-4 text-green-600 focus:ring-green-500 rounded"
            />
            <span className="ml-3 text-gray-700">
              Subscribe to our newsletter for updates and promotions
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PreferencesStep;

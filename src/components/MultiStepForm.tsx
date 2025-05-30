import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { FormData } from './multi-step-form/types';
import { ProgressIndicator } from './multi-step-form/ProgressIndicator';
import PersonalInfoStep from './multi-step-form/PersonalInfoStep';
import AddressInfoStep from './multi-step-form/AddressInfoStep';
import PreferencesStep from './multi-step-form/PreferencesStep';
import ReviewStep from './multi-step-form/ReviewStep';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: 18,
    email: '',
    country: '',
    city: '',
    zipCode: '',
    contactMethod: 'email',
    newsletter: false,
  });
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const totalSteps = 4;
  // React Hook Form setup
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: formData
  });

  const handleNext = (data: FormData) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinalSubmit = () => {
    setSubmittedData(formData);
    setCurrentStep(1);
    setFormData({
      name: '',
      age: 18,
      email: '',
      country: '',
      city: '',
      zipCode: '',
      contactMethod: 'email',
      newsletter: false,
    });
    reset();
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
        
        {currentStep < 4 ? (
          <form onSubmit={handleSubmit(handleNext)}>
            {currentStep === 1 && <PersonalInfoStep register={register} errors={errors} />}
            {currentStep === 2 && <AddressInfoStep register={register} errors={errors} />}
            {currentStep === 3 && <PreferencesStep register={register} errors={errors} />}
            
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                >
                  Previous
                </button>
              )}
              
              <button
                type="submit"
                className={`px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 ${
                  currentStep === 1 ? 'ml-auto' : ''
                }`}
              >
                {currentStep === 3 ? 'Review' : 'Next'}
              </button>
            </div>
          </form>
        ) : (
          <div>
            <ReviewStep formData={formData} />
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
              >
                Previous
              </button>
              
              <button
                onClick={handleFinalSubmit}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Submit Form
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Display submitted data */}
      {submittedData && (
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-green-800 mb-4">✅ Form Submitted Successfully!</h3>
          <div className="text-sm text-green-700">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Location:</strong> {submittedData.city}, {submittedData.country}</p>
            <p><strong>Contact Method:</strong> {submittedData.contactMethod}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;

import type { FormData } from './types';

interface ReviewStepProps {
  formData: FormData;
}

const ReviewStep = ({ formData }: ReviewStepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Review & Submit
        </h2>
        <p className="text-gray-600 mt-2">Please review your information</p>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Personal Information</h3>
            <p><span className="font-medium">Name:</span> {formData.name}</p>
            <p><span className="font-medium">Age:</span> {formData.age}</p>
            <p><span className="font-medium">Email:</span> {formData.email}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
            <p><span className="font-medium">Country:</span> {formData.country}</p>
            <p><span className="font-medium">City:</span> {formData.city}</p>
            <p><span className="font-medium">Zip Code:</span> {formData.zipCode}</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Preferences</h3>
          <p><span className="font-medium">Contact Method:</span> {formData.contactMethod}</p>
          <p><span className="font-medium">Newsletter:</span> {formData.newsletter ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;

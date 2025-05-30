import type { ProgressIndicatorProps } from './types';

export const ProgressIndicator = ({ currentStep, totalSteps }: ProgressIndicatorProps) => (
  <div className="flex items-center justify-center mb-8">
    {Array.from({ length: totalSteps }, (_, index) => {
      const stepNumber = index + 1;
      const isActive = stepNumber === currentStep;
      const isCompleted = stepNumber < currentStep;
      
      return (
        <div key={stepNumber} className="flex items-center">
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold
            ${isActive ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : ''}
            ${isCompleted ? 'bg-green-500 text-white' : ''}
            ${!isActive && !isCompleted ? 'bg-gray-200 text-gray-500' : ''}
            transition-all duration-300 transform ${isActive ? 'scale-110' : ''}
          `}>
            {isCompleted ? '✓' : stepNumber}
          </div>
          {stepNumber < totalSteps && (
            <div className={`
              w-16 h-1 mx-2
              ${stepNumber < currentStep ? 'bg-green-500' : 'bg-gray-200'}
              transition-colors duration-300
            `} />
          )}
        </div>
      );
    })}
  </div>
);

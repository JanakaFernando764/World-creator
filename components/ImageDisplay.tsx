
import React from 'react';
import { SpinnerIcon } from './icons/SpinnerIcon';

interface ImageDisplayProps {
  isLoading: boolean;
  generatedImage: string | null;
}

const WelcomeMessage: React.FC = () => (
    <div className="text-center text-gray-400">
        <h3 className="text-2xl font-cinzel text-gray-300">Your Canvas Awaits</h3>
        <p className="mt-2">Select a realm and click 'Generate' to bring a new world to life.</p>
    </div>
);

const LoadingIndicator: React.FC = () => (
    <div className="flex flex-col items-center justify-center text-purple-300">
        <SpinnerIcon className="w-12 h-12" />
        <p className="mt-4 text-lg animate-pulse">Forging new worlds...</p>
    </div>
);

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ isLoading, generatedImage }) => {
  return (
    <div className="w-full max-w-4xl mx-auto aspect-video bg-black/50 rounded-2xl shadow-inner border border-purple-500/20 flex items-center justify-center p-4">
      {isLoading ? (
        <LoadingIndicator />
      ) : generatedImage ? (
        <img
          src={generatedImage}
          alt="Generated fantasy landscape"
          className="w-full h-full object-contain rounded-lg"
        />
      ) : (
        <WelcomeMessage />
      )}
    </div>
  );
};

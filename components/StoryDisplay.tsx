
import React from 'react';
import { SpinnerIcon } from './icons/SpinnerIcon';

interface StoryDisplayProps {
  isLoading: boolean;
  story: string | null;
}

const LoadingIndicator: React.FC = () => (
    <div className="flex items-center justify-center text-purple-300">
        <SpinnerIcon className="w-6 h-6 mr-3" />
        <p className="text-lg animate-pulse">Weaving the tale...</p>
    </div>
);

export const StoryDisplay: React.FC<StoryDisplayProps> = ({ isLoading, story }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 bg-gray-800/60 rounded-2xl shadow-lg border border-purple-500/20 p-6 backdrop-blur-sm">
      <h3 className="text-xl font-cinzel text-purple-300 mb-4">The Tale of this Realm</h3>
      {isLoading ? (
        <LoadingIndicator />
      ) : story ? (
        <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{story}</p>
      ) : null}
    </div>
  );
};


import React, { useState, useCallback } from 'react';
import { CategorySelector } from './components/CategorySelector';
import { ImageDisplay } from './components/ImageDisplay';
import { StoryDisplay } from './components/StoryDisplay';
import { generateFantasyLandscape, generateFantasyStory } from './services/geminiService';
import { FantasyCategory } from './types';
import { CATEGORIES, PROMPT_STYLES, CREATURE_OPTIONS, PEOPLE_OPTIONS, OBJECT_OPTIONS, ATMOSPHERE_OPTIONS } from './constants';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FantasyCategory | null>(CATEGORIES[0]);
  const [atmospherePrompt, setAtmospherePrompt] = useState<string>('');
  const [creaturesPrompt, setCreaturesPrompt] = useState<string>('');
  const [peoplePrompt, setPeoplePrompt] = useState<string>('');
  const [objectsPrompt, setObjectsPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generatedStory, setGeneratedStory] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);
  const [isStoryLoading, setIsStoryLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!selectedCategory) {
      setError("Please select a category first.");
      return;
    }

    setIsImageLoading(true);
    setError(null);
    setGeneratedImage(null);
    setGeneratedStory(null);

    const promptParts = [
      'Epic fantasy landscape',
      selectedCategory.prompt,
      atmospherePrompt,
      creaturesPrompt ? `with ${creaturesPrompt}` : '',
      peoplePrompt ? `with ${peoplePrompt}` : '',
      objectsPrompt ? `with ${objectsPrompt}` : '',
      PROMPT_STYLES
    ];
    const prompt = promptParts.filter(p => p).join(', ');


    try {
      const imageData = await generateFantasyLandscape(prompt);
      setGeneratedImage(`data:image/jpeg;base64,${imageData}`);
      setIsImageLoading(false);

      setIsStoryLoading(true);
      try {
        const storyData = await generateFantasyStory(prompt);
        setGeneratedStory(storyData);
      } catch (storyError) {
         console.error(storyError);
         // Don't show a blocking error, just fail gracefully
         setGeneratedStory("The bards were too busy to sing of this land. Please try generating a new world.");
      } finally {
        setIsStoryLoading(false);
      }

    } catch (err) {
      console.error(err);
      setError("Failed to generate image. The model may be unavailable. Please try again later.");
      setIsImageLoading(false);
    }
  }, [selectedCategory, atmospherePrompt, creaturesPrompt, peoplePrompt, objectsPrompt]);
  
  const isLoading = isImageLoading || isStoryLoading;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed" 
        style={{backgroundImage: "url('https://picsum.photos/seed/fantasybg/1920/1080')"}}
      >
        <div className="min-h-screen bg-black bg-opacity-70 backdrop-blur-sm">
          <header className="py-6 text-center border-b border-purple-500/30 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold font-cinzel tracking-wider text-shadow-glow">
              AI Fantasy World Generator
            </h1>
            <p className="text-purple-300 mt-2 text-lg">Craft your own epic realms</p>
          </header>

          <main className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto bg-gray-800/50 p-6 md:p-8 rounded-2xl shadow-2xl border border-purple-400/20 backdrop-blur-md">
              <h2 className="text-2xl font-cinzel font-bold mb-4 text-purple-300">1. Choose a Realm</h2>
              <CategorySelector
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />

              <h2 className="text-2xl font-cinzel font-bold mt-8 mb-4 text-purple-300">2. Choose the Atmosphere</h2>
               <div>
                    <label htmlFor="atmosphere" className="sr-only">Atmosphere & Weather</label>
                    <select
                      id="atmosphere"
                      value={atmospherePrompt}
                      onChange={(e) => setAtmospherePrompt(e.target.value)}
                      className="w-full p-3 bg-gray-700/80 rounded-lg border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 appearance-none"
                      aria-label="Atmosphere and weather"
                    >
                      <option value="">-- None --</option>
                      {ATMOSPHERE_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                </div>
              
              <h2 className="text-2xl font-cinzel font-bold mt-8 mb-4 text-purple-300">3. Populate Your World</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="creatures" className="block text-sm font-medium text-purple-200 mb-2">Creatures & Animals</label>
                    <select
                      id="creatures"
                      value={creaturesPrompt}
                      onChange={(e) => setCreaturesPrompt(e.target.value)}
                      className="w-full p-3 bg-gray-700/80 rounded-lg border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 appearance-none"
                      aria-label="Creatures and animals"
                    >
                      <option value="">-- None --</option>
                      {CREATURE_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="people" className="block text-sm font-medium text-purple-200 mb-2">People & Villagers</label>
                    <select
                      id="people"
                      value={peoplePrompt}
                      onChange={(e) => setPeoplePrompt(e.target.value)}
                      className="w-full p-3 bg-gray-700/80 rounded-lg border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 appearance-none"
                      aria-label="People and villagers"
                    >
                      <option value="">-- None --</option>
                      {PEOPLE_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                   <div className="md:col-span-2">
                    <label htmlFor="objects" className="block text-sm font-medium text-purple-200 mb-2">Objects & Structures</label>
                    <select
                      id="objects"
                      value={objectsPrompt}
                      onChange={(e) => setObjectsPrompt(e.target.value)}
                      className="w-full p-3 bg-gray-700/80 rounded-lg border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 appearance-none"
                      aria-label="Objects and structures"
                    >
                      <option value="">-- None --</option>
                      {OBJECT_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
              </div>


              <h2 className="text-2xl font-cinzel font-bold mt-8 mb-4 text-purple-300">4. Summon Your World</h2>
              <div className="text-center">
                <button
                  onClick={handleGenerate}
                  disabled={isLoading || !selectedCategory}
                  className="bg-purple-600 text-white font-bold text-lg py-3 px-12 rounded-lg shadow-lg hover:bg-purple-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50"
                >
                  {isImageLoading ? 'Conjuring...' : (isStoryLoading ? 'Storytelling...' : 'Generate Landscape')}
                </button>
              </div>
            </div>

            <div className="mt-8 md:mt-12">
              {error && <p className="text-center text-red-400 bg-red-900/50 p-4 rounded-lg">{error}</p>}
              <ImageDisplay isLoading={isImageLoading} generatedImage={generatedImage} />
              {generatedImage && <StoryDisplay isLoading={isStoryLoading} story={generatedStory} />}
            </div>
          </main>

          <footer className="text-center py-6 text-gray-500 text-sm">
              <p>Powered by Google Gemini. Images and stories are AI-generated.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;

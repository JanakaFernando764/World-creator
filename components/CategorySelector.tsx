
import React from 'react';
import type { FantasyCategory } from '../types';

interface CategorySelectorProps {
  categories: FantasyCategory[];
  selectedCategory: FantasyCategory | null;
  onSelectCategory: (category: FantasyCategory) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {categories.map((category) => {
        const isSelected = selectedCategory?.id === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className={`p-4 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-opacity-50
              ${isSelected 
                ? 'bg-purple-600 text-white shadow-lg ring-2 ring-purple-400' 
                : 'bg-gray-700/80 hover:bg-gray-600/80 focus:ring-purple-500'
              }`
            }
          >
            <div className="mb-2">{category.icon}</div>
            <span className="font-semibold text-sm md:text-base">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
};

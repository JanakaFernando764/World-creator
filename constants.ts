
import React from 'react';
import type { FantasyCategory } from './types';

// FIX: Replaced JSX with React.createElement to allow icon definitions in a .ts file.
// This resolves TypeScript parsing errors.
const CastleIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" }));
const FortressIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M5.25 14.25h13.5m-13.5 0V6.75A2.25 2.25 0 017.5 4.5h9a2.25 2.25 0 012.25 2.25v7.5m-13.5 0v4.5a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-4.5m-4.5-.75v.008" }));
const ForestIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5m-4.5 0H6.375c-.621 0-1.125-.504-1.125-1.125V11.25m12.75 0v-4.875c0-.621-.504-1.125-1.125-1.125h-2.25c-.621 0-1.125.504-1.125 1.125V11.25m12.75 0h-4.5m-4.5 0H3.875c-.621 0-1.125-.504-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V11.25m5.25 0V3.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V8.25" }));
const TempleIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9.75l9-6.375 9 6.375M3 9.75h18v.001M3 9.75v11.25m18-11.25v11.25m-15-11.25v11.25m3-11.25v11.25m3-11.25v11.25m3-11.25v11.25M12 5.25l-2.25 2.25m4.5 0L12 5.25" }));
const IslandIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.158 0L12.5 8.25" }));
const DesertIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" }));
const VillageIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5m-4.5 0H6.375c-.621 0-1.125-.504-1.125-1.125V11.25a9 9 0 0118 0v8.625c0 .621-.504 1.125-1.125 1.125H18.375m-13.5 0V11.25" }));


export const CATEGORIES: FantasyCategory[] = [
  // FIX: Invoking icon components as functions instead of using JSX tags.
  { id: 'castle', name: 'Castle', prompt: 'a majestic and imposing fantasy castle on a mountain peak', icon: CastleIcon() },
  { id: 'fortress', name: 'Fortress', prompt: 'a formidable dwarven fortress carved into a snow-covered mountain', icon: FortressIcon() },
  { id: 'forest', name: 'Enchanted Forest', prompt: 'a mystical enchanted forest with giant glowing mushrooms and ancient trees', icon: ForestIcon() },
  { id: 'temple', name: 'Ancient Temple', prompt: 'a forgotten, overgrown ancient temple with intricate carvings and a mysterious aura', icon: TempleIcon() },
  { id: 'islands', name: 'Floating Islands', prompt: 'a breathtaking landscape of floating islands with waterfalls cascading into the clouds', icon: IslandIcon() },
  { id: 'desert', name: 'Desert Kingdom', prompt: 'a grand desert kingdom with ornate sandstone architecture and a bustling oasis', icon: DesertIcon() },
  { id: 'village', name: 'Medieval Village', prompt: 'a cozy and charming medieval village nestled in a lush green valley at dawn', icon: VillageIcon() }
];

export const PROMPT_STYLES = "cinematic, hyperdetailed, photorealistic, epic scale, dramatic skies, glowing lights, surreal fantasy concept art, volumetric lighting, unreal engine 5, octane render, trending on artstation";

export const ATMOSPHERE_OPTIONS: string[] = [
  'Misty and ethereal morning',
  'Dramatic sunset with twin suns',
  'Starry night with a vibrant aurora',
  'Stormy skies with crackling lightning',
  'Golden hour in a serene valley',
  'Overcast day with a gentle rain',
  'During a magical meteor shower',
  'Haunting moonlight filtering through fog',
  'Air filled with glowing pollen',
  'Crystal-clear day with a gentle breeze',
];

export const CREATURE_OPTIONS: string[] = [
  'A majestic griffin soaring',
  'A herd of glowing deer',
  'A sleeping ancient dragon',
  'Swarms of tiny, mischievous fairies',
  'A pack of shadow wolves prowling',
  'Ancient, moss-covered treants',
  'Phoenixes nesting in high cliffs',
  'A solitary unicorn by a stream',
  'Giant eagles circling mountain peaks',
  'A kraken in a misty lake',
];

export const PEOPLE_OPTIONS: string[] = [
  'A lone knight on horseback',
  'A bustling market square with villagers',
  'A procession of robed mages',
  'Elven archers in the trees',
  'A dwarven mining expedition',
  'A group of humble farmers',
  'A royal court in session',
  'Mysterious cloaked figures trading secrets',
  'Children playing in a meadow',
  'A solitary wizard in a tower',
];

export const OBJECT_OPTIONS: string[] = [
  'Ancient, overgrown ruins',
  'A shimmering magical portal',
  'A circle of standing stones',
  'A forgotten, ornate sword in a stone',
  'Crystal formations glowing with inner light',
  'A network of rope bridges between cliffs',
  'An abandoned wizard\'s observatory',
  'A majestic elven ship at a dock',
  'A hidden treasure chest overflowing with gold',
  'Giant, mysterious statues of forgotten gods',
];

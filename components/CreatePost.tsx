import React, { useState } from 'react';
import { Video, Image as ImageIcon, Smile, Wand2, Loader2 } from 'lucide-react';
import { CURRENT_USER } from '../constants';
import { generatePostContent } from '../services/geminiService';

interface CreatePostProps {
  onPostCreate: (content: string, image?: string) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onPostCreate }) => {
  const [content, setContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [showAiInput, setShowAiInput] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    onPostCreate(content);
    setContent('');
    setShowAiInput(false);
  };

  const handleAiGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    try {
      const generatedText = await generatePostContent(prompt);
      setContent(generatedText);
      setShowAiInput(false);
      setPrompt('');
    } catch (error) {
      alert("Failed to generate AI content. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <div className="flex gap-3 mb-4">
        <img
          src={CURRENT_USER.avatar}
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors cursor-text" onClick={() => (document.getElementById('post-input') as HTMLInputElement)?.focus()}>
          <input
            id="post-input"
            type="text"
            placeholder={`What's on your mind, ${CURRENT_USER.name.split(' ')[0]}?`}
            className="bg-transparent w-full focus:outline-none text-gray-700 placeholder-gray-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      
      {/* AI Assistant Toggle/Area */}
      {showAiInput && (
        <div className="mb-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
          <label className="block text-xs font-semibold text-blue-800 mb-1 uppercase">✨ Gemini Magic Assistant</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              className="flex-1 border border-blue-200 rounded-md px-3 py-1 text-sm focus:outline-none focus:border-blue-500"
              placeholder="E.g., A funny joke about programming..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAiGenerate()}
            />
            <button 
              onClick={handleAiGenerate}
              disabled={isGenerating || !prompt}
              className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center gap-1"
            >
              {isGenerating ? <Loader2 className="animate-spin h-4 w-4" /> : <Wand2 className="h-4 w-4" />}
              Generate
            </button>
          </div>
        </div>
      )}

      <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
        <div className="flex gap-2 sm:gap-6">
          <button className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1.5 rounded-lg transition-colors">
            <Video className="text-red-500 h-6 w-6" />
            <span className="text-gray-500 font-medium text-sm hidden sm:block">Live Video</span>
          </button>
          <button className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1.5 rounded-lg transition-colors">
            <ImageIcon className="text-green-500 h-6 w-6" />
            <span className="text-gray-500 font-medium text-sm hidden sm:block">Photo/video</span>
          </button>
          <button className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1.5 rounded-lg transition-colors">
            <Smile className="text-yellow-500 h-6 w-6" />
            <span className="text-gray-500 font-medium text-sm hidden sm:block">Feeling/activity</span>
          </button>
        </div>
        
        {/* Magic Button */}
        <button 
            onClick={() => setShowAiInput(!showAiInput)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors text-sm font-medium ${showAiInput ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 text-gray-500'}`}
        >
            <Wand2 className={`h-5 w-5 ${showAiInput ? 'text-blue-600' : 'text-purple-500'}`} />
            <span className="hidden sm:block">AI Assist</span>
        </button>

        {content && (
            <button 
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors ml-2"
            >
                Post
            </button>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
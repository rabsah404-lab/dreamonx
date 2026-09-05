import React, { useState } from 'react';
import { Play, Clock, Sparkles, Youtube, ArrowRight } from 'lucide-react';
import { VIDEOS } from '../data/dreamonxData';
import { VideoTutorial } from '../types';
import { VideoModal } from '../components/VideoModal';

interface VideosPageProps {
  onOpenDemo: () => void;
}

export const VideosPage: React.FC<VideosPageProps> = ({ onOpenDemo }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoTutorial | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Getting Started', 'POS & Retail', 'E-Invoicing Compliance', 'Mobile Apps'];

  const filteredVideos = activeCategory === 'All'
    ? VIDEOS
    : VIDEOS.filter(v => v.category === activeCategory);

  return (
    <div id="videos-page-container" className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Youtube className="w-3.5 h-3.5 text-red-600" /> Video Tutorials & Walkthroughs
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            All Video Guides
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Discover a collection of helpful video tutorials to master Dreamonx. Watch, explore, and level up your operational skills!
          </p>

          {/* Category Tabs */}
          <div className="pt-2 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-white text-[11px] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {video.duration}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                    {video.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span>Watch Tutorial</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs text-center space-y-3 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900">Want Personalized Staff Training?</h3>
          <p className="text-slate-600 text-xs sm:text-sm">
            Our onboarding team conducts dedicated Zoom or on-site team training sessions for accounting, sales, and warehouse staff across Pakistan.
          </p>
          <button
            onClick={onOpenDemo}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm inline-flex items-center gap-1.5 cursor-pointer"
          >
            Request Team Training Demo <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={true}
          onClose={() => setSelectedVideo(null)}
          youtubeId={selectedVideo.youtubeId}
          title={selectedVideo.title}
        />
      )}
    </div>
  );
};

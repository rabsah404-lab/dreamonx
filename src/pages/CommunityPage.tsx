import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  Sparkles, 
  X, 
  Share2, 
  UserCheck, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { BLOG_POSTS } from '../data/dreamonxData';
import { BlogPost } from '../types';

interface CommunityPageProps {
  onOpenDemo: () => void;
  onOpenOfflinePos: () => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onOpenDemo, onOpenOfflinePos }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeTag, setActiveTag] = useState<string>('all');
  const [copied, setCopied] = useState(false);

  const allTags = Array.from(new Set(BLOG_POSTS.flatMap(p => p.tags))).slice(0, 10);

  const filteredPosts = activeTag === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.tags.includes(activeTag));

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="community-page-container" className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Knowledge Base & Best Practices
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            ERP & Business Automation Community
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Practical insights on Pakistani tax laws, wholesale distribution workflows, retail POS optimization, and FBR e-invoicing compliance.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveTag('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTag === 'all'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            All Articles
          </button>
          {allTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer capitalize ${
                activeTag === tag
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-emerald-500/50 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold">
                    <UserCheck className="w-3 h-3 text-emerald-400" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span>See More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Pagination bar matching original */}
        <div className="py-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>Page 1 of 7 — Total 61 Posts</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-400 disabled:opacity-50 cursor-not-allowed">
              Prev
            </button>
            {['1', '2', '3', '4', '5', '6', '7'].map((p) => (
              <button
                key={p}
                className={`w-8 h-8 rounded-lg text-xs font-semibold ${
                  p === '1'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {p}
              </button>
            ))}
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-semibold">
              Next
            </button>
          </div>
        </div>

      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full bg-slate-900 shrink-0">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover opacity-80"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[11px] font-bold">
                  {selectedPost.author}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white leading-snug drop-shadow-md">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <span>Published: {selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 text-emerald-700 hover:underline font-semibold cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied Link!' : 'Share'}</span>
                </button>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
                {selectedPost.content}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Related Topics:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPost.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs">
                  <p className="font-bold text-emerald-900">Need to implement this for your business?</p>
                  <p className="text-emerald-700">Test Dreamonx with your exact company data risk-free.</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenDemo();
                  }}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap shadow-xs"
                >
                  Start 6-Day Demo 🔥
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

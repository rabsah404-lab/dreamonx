import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId?: string;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  youtubeId = 'BGIqQBUEm_k',
  title = 'Dreamonx ERP System Walkthrough & Demo',
}) => {
  if (!isOpen) return null;

  return (
    <div 
      id="video-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div 
        id="video-modal-dialog"
        className="bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-slate-800 animate-in zoom-in-95 duration-200"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
          <h4 className="font-semibold text-sm truncate max-w-md">{title}</h4>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-4 bg-slate-950 text-slate-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Dreamonx ERP Pakistan - Official Walkthrough & Training Channel</span>
          <span className="text-emerald-400">Call +92 329 1040470 for live 1-on-1 team training</span>
        </div>
      </div>
    </div>
  );
};

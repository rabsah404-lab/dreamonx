import React, { useState } from 'react';
import { 
  X, 
  Download, 
  CheckCircle2, 
  Laptop, 
  WifiOff, 
  HardDrive, 
  RefreshCw, 
  ShieldCheck, 
  ArrowRight,
  Printer
} from 'lucide-react';

interface OfflinePosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfflinePosModal: React.FC<OfflinePosModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadDone, setDownloadDone] = useState(false);

  if (!isOpen) return null;

  const handleStartDownload = () => {
    setDownloading(true);
    setDownloadProgress(0);
    setDownloadDone(false);

    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      setDownloadProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setDownloading(false);
        setDownloadDone(true);
      }
    }, 250);
  };

  return (
    <div 
      id="offline-pos-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div 
        id="offline-pos-modal-dialog"
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white p-6 relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-2 border border-emerald-500/30">
            <WifiOff className="w-3.5 h-3.5" /> 100% Offline Capable • Free Forever
          </div>
          <h3 className="text-2xl font-bold tracking-tight">Download Free Offline Dreamonx POS</h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-lg">
            High-speed retail billing without internet dependency. Experience rapid barcode scanning and thermal receipt printing right on your Windows PC.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
              <span className="block text-xs text-emerald-800 font-medium">Price</span>
              <span className="text-lg font-bold text-emerald-700">100% Free</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs text-slate-500 font-medium">Setup Time</span>
              <span className="text-lg font-bold text-slate-900">5 Mins</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs text-slate-500 font-medium">Internet</span>
              <span className="text-lg font-bold text-slate-900">Not Required</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs text-slate-500 font-medium">Support</span>
              <span className="text-lg font-bold text-slate-900">24/7 Helpline</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No signup or registration required</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant barcode scanning & thermal printer support</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Local SQLite database — zero lag checkout</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Automatic cloud sync when internet returns</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daily cashier closing & cash drawer balances</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Stock management and inventory warnings</span>
              </div>
            </div>
          </div>

          {/* Download Action Area */}
          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-medium text-emerald-400">Windows 10 / 11 Desktop Edition (64-bit)</span>
                <p className="text-sm font-bold text-white">Dreamonx_Offline_POS_v3.2_Setup.exe (84.2 MB)</p>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                SHA-256 Verified
              </span>
            </div>

            {downloading && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Downloading package...</span>
                  <span className="font-mono">{downloadProgress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-200" 
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {downloadDone ? (
              <div className="p-3 bg-emerald-950/70 border border-emerald-500/40 rounded-lg text-xs space-y-1 text-emerald-200">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Download Complete!
                </p>
                <p>
                  Run <strong>Dreamonx_Offline_POS_v3.2_Setup.exe</strong> from your Downloads folder. Follow the 2-minute on-screen wizard to launch your POS.
                </p>
                <p className="text-[11px] text-emerald-300 pt-1">
                  Need assistance with thermal printer configuration? Call our technical helpline: <strong>+92 323 6683663</strong>.
                </p>
              </div>
            ) : (
              <button
                disabled={downloading}
                onClick={handleStartDownload}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-semibold rounded-xl text-sm transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                {downloading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Preparing Installer...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" /> Download Free Offline POS Now
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Supported: ESC/POS Thermal Printers, Handheld Barcode Scanners</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  titleComponent,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1.02]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -40]);

  return (
    <div
      className="py-12 sm:py-20 md:py-28 relative flex items-center justify-center [perspective:1000px]"
      ref={containerRef}
    >
      <div className="w-full relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
          {titleComponent}
        </div>
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            translateY: translate,
            boxShadow:
              '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 180px 65px #00000003',
          }}
          className="max-w-6xl mx-auto w-full border-4 border-[#6C6C6C]/40 p-2 sm:p-4 md:p-6 bg-[#1f2937] rounded-2xl md:rounded-3xl shadow-2xl transition-all"
        >
          <div className="w-full overflow-hidden bg-slate-900 rounded-xl md:rounded-2xl border border-slate-700/50">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

'use client';

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = (current / total) * 100;
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="font-poppins text-xs text-[#53565A]">
          Question {current} of {total}
        </span>
        <span className="font-poppins text-xs text-[#53565A]">
          {Math.round(progress)}% complete
        </span>
      </div>
      {/* Progress bar track */}
      <div className="h-2 w-full bg-[#E9EAEE] rounded-full overflow-hidden">
        <div 
          className="h-full bg-brand-red rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
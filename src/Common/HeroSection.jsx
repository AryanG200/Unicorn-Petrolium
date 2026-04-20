import React from 'react';

const HeroSection = ({ data }) => {
  const hasPrimary = Boolean(data?.primaryButton);
  const hasSecondary = Boolean(data?.secondaryButton);
  const showCtas = hasPrimary || hasSecondary;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center md:-mt-16 pt-4 md:pt-8">
      {}
      <div className="absolute inset-0 z-0">
        <img
          src={data.backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.log('Image failed to load:', data.backgroundImage);
            e.target.style.display = 'none';
          }}
        />
      </div>

      {}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border-[1.5px] border-[#EDA94E] animate-fade-in-scale">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight text-left">
            {data.title}
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black mb-8 max-w-3xl text-left">
            {data.subtitle}
          </p>

          {showCtas && (
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center">
              {hasPrimary && (
                <button 
                  className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:opacity-90 transition-all active:scale-95 flex items-center justify-center space-x-2 shadow-lg shadow-[#E99322]/20"
                  style={{ backgroundColor: data.primaryButtonColor || '#E99322' }}
                >
                  <span>{data.primaryButton}</span>
                  <span className="text-xl">→</span>
                </button>
              )}
              
              {hasSecondary && (
                <button 
                  className="bg-white/80 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg border-2 hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center"
                  style={{ 
                    color: data.secondaryButtonColor || '#E99322',
                    borderColor: data.secondaryButtonColor || '#E99322'
                  }}
                >
                  {data.secondaryButton}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
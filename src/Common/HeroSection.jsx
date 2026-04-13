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
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl border-[1.5px] border-[#EDA94E] animate-fade-in-scale">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 leading-tight text-left">
            {data.title}
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black mb-8 max-w-3xl text-left">
            {data.subtitle}
          </p>

          {showCtas && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {hasPrimary && (
                <button 
                  className="text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg hover:opacity-90 transition-colors flex items-center space-x-2"
                  style={{ backgroundColor: data.primaryButtonColor || '#E99322' }}
                >
                  <span>{data.primaryButton}</span>
                  <span className="text-lg sm:text-xl">→</span>
                </button>
              )}
              
              {hasSecondary && (
                <button 
                  className="bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg border-2 hover:bg-gray-50 transition-colors"
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
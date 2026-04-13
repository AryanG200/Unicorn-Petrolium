import React from 'react';
import Card from './Card';

const Section = ({ 
  type = 'default',
  heading,
  subheading,
  cards = [],
  buttonText,
  onButtonClick,
  className = ''
}) => {
  const renderSectionContent = () => {
    switch (type) {
      case 'strengths':
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{heading}</h2>
            <p className="text-xl text-gray-600 mb-12">{subheading}</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  type="strength"
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
            
            {buttonText && (
              <button 
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors flex items-center space-x-2 mx-auto"
                onClick={onButtonClick}
              >
                <span>{buttonText}</span>
                <span className="text-lg">→</span>
              </button>
            )}
          </div>
        );
      
      case 'products':
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{heading}</h2>
            <p className="text-xl text-gray-600 mb-12">{subheading}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  type="product"
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  buttonText={card.buttonText}
                />
              ))}
            </div>
          </div>
        );
      
      case 'industries':
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{heading}</h2>
            <p className="text-xl text-gray-600 mb-12">{subheading}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  type="industry"
                  icon={card.icon}
                  title={card.label}
                />
              ))}
            </div>
            
            {buttonText && (
              <button 
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors flex items-center space-x-2 mx-auto"
                onClick={onButtonClick}
              >
                <span>{buttonText}</span>
                <span className="text-lg">→</span>
              </button>
            )}
          </div>
        );
      
      case 'certifications':
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{heading}</h2>
            <p className="text-xl text-gray-600 mb-12">{subheading}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-8">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  type="certification"
                  image={card.logo}
                  title={card.name}
                  description={card.fullName}
                />
              ))}
            </div>
            
            {buttonText && (
              <button 
                className="text-orange-500 hover:text-orange-600 font-medium flex items-center space-x-2 mx-auto"
                onClick={onButtonClick}
              >
                <span>{buttonText}</span>
                <span className="text-lg">→</span>
              </button>
            )}
          </div>
        );
      
      case 'news':
        return (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">{heading}</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  type="news"
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  buttonText={card.linkText}
                />
              ))}
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{heading}</h2>
            <p className="text-xl text-gray-600 mb-8">{subheading}</p>
            
            <div className="grid gap-6">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  {...card}
                />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {renderSectionContent()}
      </div>
    </section>
  );
};

export default Section; 
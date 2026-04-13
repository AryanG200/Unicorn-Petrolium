import React from 'react';

const Card = ({ 
  type = 'default', 
  icon, 
  title, 
  description, 
  image, 
  buttonText, 
  onClick,
  className = ''
}) => {
  const renderCardContent = () => {
    switch (type) {
      case 'strength':
        return (
          <div className="flex flex-col h-full text-center">
            <div className="mb-4">
              {icon && icon.startsWith('/') ? (
                <img
                  src={icon}
                  alt={title}
                  className="w-16 h-16 mx-auto object-contain"
                />
              ) : (
                <div className="text-4xl">{icon}</div>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-700 text-base leading-relaxed flex-1">{description}</p>
          </div>
        );
      
      case 'product':
        return (
          <div className="text-center">
            <div className="mb-4">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
            {buttonText && (
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                {buttonText}
              </button>
            )}
          </div>
        );
      
      case 'industry':
        return (
          <div className="text-center border border-orange-300 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          </div>
        );
      
      case 'certification':
        return (
          <div className="text-center">
            <div className="mb-3">
              <img 
                src={image} 
                alt={title} 
                className="w-16 h-16 mx-auto object-contain"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            <p className="text-xs text-gray-600 mt-1">{description}</p>
          </div>
        );
      
      case 'news':
        return (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs">
                {description}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm mb-3">{description}</p>
              <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                {buttonText}
              </button>
            </div>
          </div>
        );
      
      case 'manufacturing':
        return (
          <div className="text-center">
            <div className="mb-6">
              {icon && icon.startsWith('/') ? (
                <img 
                  src={icon} 
                  alt={title} 
                  className="w-full h-48 object-cover rounded-lg mx-auto"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-4xl">{icon}</span>
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{description}</p>
          </div>
        );
      
      default:
        return (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        );
    }
  };

  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex ${className}`}
      onClick={onClick}
    >
      {renderCardContent()}
    </div>
  );
};

export default Card;
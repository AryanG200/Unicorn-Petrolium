import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export default function FloatingSidebar({ navigationData, ns = 'products' }) {
  const { t } = useTranslation(ns);
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState({});

  const isActive = (itemLink) => {
    return location.pathname === itemLink;
  };

  const isSubItemActive = (subItems) => {
    return subItems && subItems.some(subItem => location.pathname === subItem.link);
  };

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className={`lg:self-start w-full`} style={{ alignSelf: 'flex-start', width: '100%' }}>
      <div className="bg-white shadow-xl rounded-sm border border-gray-400 w-full">
        <div className="space-y-0">
          {navigationData.categories.map((item, index) => {
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isExpanded = expandedItems[item.id];
            const isItemActive = isActive(item.link) || isSubItemActive(item.subItems);
            
            return (
              <div key={item.id} className="border-b border-gray-400 last:border-b-0">
                <Link
                  to={item.link}
                  className={`block px-6 py-4 ${
                    isItemActive
                      ? 'bg-[#E99322] text-white'
                      : 'text-black hover:bg-[#E99322]/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold flex-1" style={{ fontFamily: 'Segoe UI' }}>
                      {t('categories.' + item.id + '.name', item.name)}
                    </span>
                    {hasSubItems ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleExpanded(item.id);
                        }}
                        className={`font-bold text-lg ml-6 ${
                          isItemActive ? 'text-white' : 'text-black'
                        }`}
                      >
                        {isItemActive ? '⌄' : '>'}
                      </button>
                    ) : (
                      <span className={`font-bold text-lg ml-6 ${isItemActive ? 'text-white' : 'text-black'}`}>
                        {isItemActive ? '⌄' : '>'}
                      </span>
                    )}
                  </div>
                </Link>
                
                {}
                {hasSubItems && isExpanded && (
                  <div>
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subItem.id}
                        to={subItem.link}
                        className={`block px-8 py-3 text-sm border-l-2 ${
                          isActive(subItem.link)
                            ? 'bg-[#E99322]/20 text-[#E99322] border-[#E99322]'
                            : 'text-gray-600 hover:bg-gray-50 border-transparent hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{t('subItems.' + subItem.id + '.name', subItem.name)}</span>
                          <span className={`text-xs ${
                            isActive(subItem.link) ? 'text-[#E99322]' : 'text-gray-400'
                          }`}>
                            {isActive(subItem.link) ? '●' : '○'}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 
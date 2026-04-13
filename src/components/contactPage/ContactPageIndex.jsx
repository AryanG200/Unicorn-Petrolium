import React from 'react';
import { contactData } from './contactData';
import HeroSection from '../../Common/HeroSection';
import Section from '../../Common/Section';

const ContactPageIndex = () => {
  return (
    <div className="min-h-screen">
      <HeroSection data={contactData.hero} />
      <Section title={contactData.contactInfo.heading} subtitle="">
        <p className="text-gray-700">{contactData.contactInfo.description}</p>
      </Section>
    </div>
  );
};

export default ContactPageIndex;

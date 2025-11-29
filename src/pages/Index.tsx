import { useState } from 'react';
import NavigationMenu from '@/components/NavigationMenu';
import BackgroundEffects from '@/components/BackgroundEffects';
import QuizSection from '@/components/QuizSection';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('binder');

  const handleQuizClick = () => {
    setActiveSection('quiz');
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundEffects />
      
      <NavigationMenu 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onQuizClick={handleQuizClick}
      />

      <main className="ml-64 p-8 relative z-10">
        {activeSection === 'quiz' ? (
          <QuizSection />
        ) : (
          <HeroSection />
        )}
      </main>
    </div>
  );
};

export default Index;

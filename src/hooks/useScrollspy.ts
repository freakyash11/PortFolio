import { useState, useEffect } from 'react';

export function useScrollspy(ids: string[], offset: number = 80) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      for (let i = elements.length - 1; i >= 0; i--) {
        const element = elements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(element.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
}

export function scrollToSection(sectionId: string, offset: number = 80) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

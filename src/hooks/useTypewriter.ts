import { useState, useEffect } from 'react';

export const useTypewriter = (texts: string[], speed: number = 100, pause: number = 2000) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (currentArrayIndex >= texts.length) setCurrentArrayIndex(0);
    
    const currentWord = texts[currentArrayIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < currentWord.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prev => prev + currentWord[currentIndex]);
            setCurrentIndex(prev => prev + 1);
          }, speed);
          
          return () => clearTimeout(timeout);
        } else {
          // Pause at the end of typing
          const timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pause);
          
          return () => clearTimeout(timeout);
        }
      } else {
        // Deleting phase
        if (currentText.length > 0) {
          const timeout = setTimeout(() => {
            setCurrentText(prev => prev.slice(0, -1));
          }, speed / 2);
          
          return () => clearTimeout(timeout);
        } else {
          // Move to next word after deleting
          setIsDeleting(false);
          setCurrentIndex(0);
          setCurrentArrayIndex(prev => (prev + 1) % texts.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts, speed, pause, currentArrayIndex]);

  return currentText;
};
// src/utils/animations.js
import { keyframes } from '@mui/material/styles';

// Keyframes for various animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideInLeft = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInRight = keyframes`
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const shimmer = keyframes`
  from {
    background-position: -200px 0;
  }
  to {
    background-position: 200px 0;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Helper function to create animation styles
export const createAnimation = (animation, duration = 0.8, delay = 0, iterationCount = 1) => ({
  animation: `${animation} ${duration}s ease-out ${delay}s ${iterationCount === 'infinite' ? 'infinite' : iterationCount}`,
  opacity: 0,
  animationFillMode: 'forwards',
});

// Function to create staggered animations for lists of items
export const staggeredAnimation = (animation, baseDelay = 0, itemDelay = 0.1) => (index) => 
  createAnimation(animation, 0.5, baseDelay + (index * itemDelay));

// Animation configurations for different sections
export const animationConfigs = {
  header: createAnimation(fadeIn, 0.6, 0),
  skill: staggeredAnimation(slideInRight),
  experience: staggeredAnimation(slideInLeft, 0.2),
  project: staggeredAnimation(slideInUp, 0.2),
  contact: createAnimation(fadeIn, 0.8, 0.3),
};

// Custom hooks for intersection observer-based animations
export const useInViewAnimation = (animation, threshold = 0.1) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return [ref, inView ? animation : { opacity: 0 }];
};
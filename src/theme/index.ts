// Using CSS custom properties for theming with Chakra UI v3
export const colors = {
  primary: '#2A6EDB',           
  secondary: '#7AAFCF',         
  textPrimary: '#E4E8EC',      
  textMuted: '#A3A9AF',         
  backgroundPrimary: '#0D1014', 
  backgroundSecondary: '#1B1F23', 
  backgroundTertiary: '#24292E',  
  surface: '#24292E',
  border: '#3A434A',
  borderSubtle: '#2A3137',
  success: '#5FBFA2',
  warning: '#E0B85A',
  error: '#D97B7B',
  info: '#1E5BC7',             
};

// Gradient text styles for highlighted content
export const gradients = {
  primaryToSecondary: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
};

// Utility function for gradient text
export const gradientTextStyles = {
  background: gradients.primaryToSecondary,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

// Utility function for gradient backgrounds
export const gradientBackgroundStyles = {
  background: gradients.primaryToSecondary,
};





export default colors;
// src/colors/theme.js

const colors = {
    primary: '#1434A4',
    secondary: '#2ecc71',
    background: '#ffff',
    textPrimary: '#333333',
    textSecondary: '#7f8c8d',
    white: '#ffffff',
    black: '#000000',
    blue:'#0047AB',
    grey: '#bdc3c7',
    error: '#e74c3c',
    warning: '#f1c40f',
    success: '#2ecc71',
    info: '#3498db',
  };
  
  const theme = {
    colors,
    fontSizes: {
      small: 12,
      medium: 16,
      large: 20,
      xlarge: 24,
    },
    spacing: {
      small: 8,
      medium: 16,
      large: 24,
      xlarge: 32,
    },
    borderRadius: {
      small: 4,
      medium: 8,
      large: 12,
    },
    button: {
      primary: {
        backgroundColor: colors.primary,
        color: colors.white,
        padding: 16,
        borderRadius: 8,
      },
      secondary: {
        backgroundColor: colors.secondary,
        color: colors.white,
        padding: 16,
        borderRadius: 8,
      },
    },
    text: {
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.textPrimary,
      },
      subheader: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.textSecondary,
      },
      body: {
        fontSize: 16,
        color: colors.textPrimary,
      },
      caption: {
        fontSize: 12,
        color: colors.textSecondary,
      },
    },
  };
  
  export default theme;
  
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'secondary',
    values: [
      {
        name: 'normal',
        value: '#f4f4f4',
      },
      {
        name: 'primary',
        value: '#49654D',
      },
      {
        name: 'secondary',
        value: '#8BA989',
      },
    ],
  },
  layout: 'fullscreen',
};

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'bloodOrange',
  colors: {
    bloodOrange: [
      '#FFE8E0',
      '#FFD0C2',
      '#FFB7A3',
      '#FF9E84',
      '#FF8565',
      '#FF6C46',
      '#FF4713',
      '#FF3000',
      '#CC2900',
      '#992000',
    ],
  },
  spacing: {
    xxl: `calc(3rem* var(--mantine-scale))`,
    xxs: `calc(0.2rem* var(--mantine-scale))`,
  },
});

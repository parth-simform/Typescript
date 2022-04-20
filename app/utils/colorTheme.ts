// Light theme colors
export declare type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    error: string;
  };
};

// Dark theme colors
const DarkTheme: Theme = {
  dark: true,
  colors: {
    background: 'rgb(1, 1, 1)',
    border: 'rgb(39, 39, 41)',
    card: 'black',
    notification: 'rgb(255, 69, 58)',
    primary: 'rgb(10, 132, 255)',
    text: 'rgb(229, 229, 231)',
    error: '#EF9A9A',
  },
};

// Light theme colors
const DefaultTheme: Theme = {
  dark: false,
  colors: {
    border: 'rgb(39, 39, 41)',
    card: 'white',
    notification: 'rgb(255, 69, 58)',
    background: '#fffff',
    primary: '#B39DDB',
    text: 'black',
    error: '#EF9A9A',
  },
};

export {DarkTheme, DefaultTheme};

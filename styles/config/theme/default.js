const theme = {};

theme.palette = {
  primary: [
    '#0066FF', // 0: Default
    '#3A78F5', // 1: Darken 4%
    '#3775F2', // 2: Darken 5%
    'rgba(68, 130, 255, 0.2)', // 3: Fade 20%
    '#4C8AFF', // 4: Lighten 3%
    'rgba(68, 130, 255, 0.75)', // 5: Fade 75%
    '#6AA8FF', // 6: Lighten 15%
    '#63A1FF', // 7: Lighten 12%
    '#3F7DFA', // 8: Darken 2%
    '#3369e7', // 9: Algolia color
    '#5896FF', // 10: Lighten 8%
    '#2b69e6', // 11:
    '#236cfe', // 12: darken 10%
    '#4d88ff' // 13: Lighten 5%
  ],
  green: [
    '#A1CCC3', // 0: LightGreen
    '#72B3A5',
    '#439987',
    '#148069',
    '#033329' // 4: DarkGreen
  ],
  purple: [
    '#C1ACD8', // 0: LightPurple
    '#A187BD',
    '#8260A7',
    '#633891',
    '#382051' // 4: DarkPurple
  ],
  red: [
    '#DA9D9D', // 0: LightRed
    '#C76C6C',
    '#B53B3B',
    '#A20A0A',
    '#7A0808' // 4: DarkRed
  ],
  yellow: [
    '#F1E2A5', // 0: LightYellow
    '#EBD477',
    '#E4C54A',
    '#DDB71D',
    '#A68916' // 4: DarkYellow
  ],
  blue: [
    '#9CBDC9', // 0: LightBlue
    '#7BA7B7',
    '#5A91A5',
    '#446D7B',
    '#395058' // 4: DarkBlue
  ],
  grayscale: [
    '#CCCCCC', // 0: LightGrey
    '#999999',
    '#666666',
    '#333333',
    '#000000' // 4: Black
  ],
  gradient: [
    'linear-gradient(90deg, rgba(0,247,167,1) 0%, rgba(4,245,237,1) 100%)',
    'linear-gradient(90deg, rgba(17,215,151,1) 0%, rgba(14,209,203,1) 100%)'
  ],
  darkGrayScale: ['#1C1C1F', '#252529', '#3A3B3C'],
  darkGreen: ['#11d797', '#0ed1cb', 'rgba(125,245,241,0.7)']
};

theme.fonts = {
  quicksand: 'Quicksand, sans-serif',
  roboto: 'Roboto, sans-serif'
};

theme.dark = {
  grayscale: ['#1C1C1F', '#252529', '#3A3B3C']
};

export default theme;

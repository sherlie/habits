import { style, styleVariants } from '@vanilla-extract/css';

export const dayStyle = style({
  width: '14%',
  backgroundColor: '#f7e9fb',
  borderRadius: '0.8em',
  margin: '0.2em',
  padding: '0.8em 0.5em',
});

export const dayState = styleVariants({
  today: {
    backgroundColor: 'rgb(119, 91, 145)',
    color: 'white',
  },
  future: {
    backgroundColor: 'rgb(227, 227, 227)',
  },
});

export const dayTitle = style({
  fontSize: '0.8em',
  fontWeight: 'bold',
  textAlign: 'center',
});

export const date = style({
  fontSize: '1.2em',
  fontWeight: 'bold',
  textAlign: 'center',
});

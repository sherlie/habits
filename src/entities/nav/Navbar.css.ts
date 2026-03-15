import { style } from '@vanilla-extract/css';

export const nav = style({
  backgroundColor: 'rgb(119, 91, 145)',
});

export const navList = style({
  padding: '0.5em',
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
});

export const navLink = style({
  textDecoration: 'none',
  fontWeight: 'bold',
  color: 'white',
})
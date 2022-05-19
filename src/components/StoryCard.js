import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import cardImg from '../CardMedia.png';

import PropTypes from 'prop-types';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Plus Jakarta Sans',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Plus Jakarta Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400&display=swap');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
})

const StoryCard = ({ selected, hover }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card sx={{ maxWidth: 345, boxShadow: hover ? '0px 0px 0px 2px #65e9d9' : 'none', borderRadius: '10px', width: '229px', height: '150px', border: selected && '1px solid #3d8479', fontFamily: 'Plus Jakarta Sans', }}>
        <CardMedia
          component="img"
          height="100"
          image={cardImg}
          alt="card image"
        />
        <CardContent sx={{ height: '50px', padding: '8px', }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox size="small" checked={selected} sx={{
              '&.Mui-checked': {
                color: '#21B6A8',
              },
            }} />} label="Flood zone 3" />
          </FormGroup>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default StoryCard

StoryCard.propTypes = {
  selected: PropTypes.bool,
  hover: PropTypes.bool,
}
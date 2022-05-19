import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import './StoryCard.css';


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
  }
})

const StoryCard = ({ selected, hover }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345, boxShadow: hover ? '0px 0px 0px 2px #65e9d9' : 'none', borderRadius: '10px', width: '229px', height: '150px', border: selected && '1px solid #3d8479', fontFamily: 'Plus Jakarta Sans', }}>
        <CardMedia
          component="img"
          height="100"
          image={cardImg}
          alt="card image"
        />
        <CardContent sx={{ height: '50px', padding: '8px 10px', }}>
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
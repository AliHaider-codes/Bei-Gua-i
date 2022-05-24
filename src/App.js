import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const bull = (
  <Box
    component="span"
    sx={{ mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const theme = createTheme({
  palette: {
    background: {
      default: '#434834'
    },
    primary: {
      main: '#b4ff00',
    },
    shape: {
      borderRadius: 80,
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const StyledFab1 = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -50,
  left: 0,
  right: 150,
  margin: '0 auto',
  borderRadius: 12,
});
const StyledFab2 = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -50,
  left: 150,
  right: 0,
  margin: '0 auto',
  borderRadius: 12,
  color: 'black',
  
});

const StyledAppBar = styled(AppBar)({
  borderRadius: 20,
  padding: 20,
});

const Card1 = styled(Card)({
  backgroundColor: 'black',
  position: 'relative',
  top: 250,
  width: 500,
  margin: '0 auto',
  borderRadius: 12,
});


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography align="center" variant="h4" component="div" sx={{ flexGrow: 1 }}>
            BEI GUA-I
          </Typography>
          <Button color="inherit"><InstagramIcon /></Button>
        </Toolbar>
      </StyledAppBar>
    </Box>
      <React.Fragment>
        <CssBaseline />
        <div id='a'>
        <StyledAppBar position="fixed" color='primary' border-radius='shape' sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer">
              
            </IconButton>
            <StyledFab1 color="primary" font-family='cursive'>Si</StyledFab1>
            <StyledFab2 color="primary" font-family='cursive'>No</StyledFab2>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit">
              
            </IconButton>
            <IconButton color="inherit">
              
            </IconButton>
          </Toolbar>
        </StyledAppBar>
        </div>
      </React.Fragment>
      
      <Card1 align="center" background="#e5ffa6" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="#e5ffa6" variant="h5" component="div">
          POI VI INSEGNO! Hey Ya!
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card1>
      </ThemeProvider>
    </>
  );
}

export default App;

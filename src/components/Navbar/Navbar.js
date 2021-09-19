import * as React from 'react';
import {
  AppBar,
  Hidden,
  IconButton,
  Toolbar,
  Typography,

} from '@mui/material';

import Profile from './Profile';
import Notification from './Notification';
import { Box } from '@mui/system';
import ListIcon from '@mui/icons-material/List';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function ButtonAppBar() {

  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <AcUnitIcon sx={{color: 'white'}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Hidden mdDown>
            <Box sx = {{display: "flex"}}>
              <Notification />
              <Typography variant="h8" sx = {{padding: '8px 0px 0px 8px'}}>
                Gaurav Chadha
              </Typography>
              <Profile />
            </Box>
          </Hidden>
          <Hidden mdUp>
            <IconButton sx={{color: 'inherit'}}>
              <ListIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
  );
}

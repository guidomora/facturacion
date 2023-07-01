import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import { Grid, Link } from '@mui/material';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NextLink href="/" passHref legacyBehavior>
            <Link>
              <Typography variant="h6" sx={{ margin: 1, color: "white"}}>
                Monotributo
              </Typography>
            </Link>
          </NextLink>
          <Box flex={1} />
          <NextLink href="/GuidoPage" passHref legacyBehavior>
            <Link>
              <Button sx={{ margin: 1, color: "white", backgroundColor: "orange" }} variant="contained">
                <Typography>Guido</Typography>
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/PatriciaPage" passHref legacyBehavior>
            <Link>
              <Button sx={{ margin: 1, color: "white", backgroundColor: "orange" }} variant="contained">
                <Typography>Patricia</Typography>
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/HugoPage" passHref legacyBehavior>
            <Link>
              <Button sx={{ margin: 1, color: "white", backgroundColor: "orange" }} variant="contained">
                <Typography>Hugo</Typography>
              </Button>
            </Link>
          </NextLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
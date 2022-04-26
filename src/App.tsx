import React from 'react';

import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import styled from '@emotion/styled';

import memories from './images/memories.png';
import Form from './components/Form/form';
import Posts from './components/Posts/posts';

const MemoriesImg = styled.img`
  height: 60px;
  width: 60px;
`;

const App = () => {
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <MemoriesImg src={memories} alt='memories' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

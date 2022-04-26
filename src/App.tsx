import React from 'react';

import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import styled from '@emotion/styled';

import memories from './images/memories.png';
import Form from './components/Form/form';
import Posts from './components/Posts/posts';

const StyledAppBar = styled(AppBar)`
  border-radius: 15px;
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StyledTypography = styled(Typography)`
  color: rgba(0,183,255,1);
`;
const StyledImg = styled.img`
  height: 60px;
  margin-left: 15px;
  width: 60px;
`;

const App = () => {
  return (
    <Container maxWidth='lg'>
      <StyledAppBar position='static' color='inherit'>
        <StyledTypography variant='h2' align='center'>Memories</StyledTypography>
        <StyledImg src={memories} alt='memories' />
      </StyledAppBar>
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

import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import styled from '@emotion/styled';

import { getPosts } from './actions/posts';
import IDispatch from './interfaces/dispatch';

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
  const [currentId, setCurrentId] = useState<string | null>(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    (dispatch as IDispatch)(getPosts());
  }, [dispatch]);

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
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

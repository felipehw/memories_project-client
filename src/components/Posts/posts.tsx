import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, CircularProgress } from '@mui/material';
import styled from '@emotion/styled';

import { ICombinedState } from '../../reducers';
import Post from './Post/post';

const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
`;

const Posts = () => {
  const posts = useSelector((state: ICombinedState) => state.posts);
  console.log(posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <StyledGrid container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </StyledGrid>
    )
  );
};

export default Posts;

/*
// Posts styles

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));
*/
import React from 'react';
import { useSelector } from 'react-redux';
import { ICombinedState } from '../../reducers';

import Post from './Post/post';

const Posts = () => {
  const posts = useSelector((state: ICombinedState) => state.posts);
  console.log(posts);

  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;

/*
// Posts styles

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));

*/
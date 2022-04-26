import React from 'react';
import Post from './Post/post';

const Posts = () => {
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
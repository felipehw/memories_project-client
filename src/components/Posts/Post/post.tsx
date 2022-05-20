import React from 'react';
import moment from 'moment';

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { ThumbUpAlt, Delete, MoreHoriz } from '@mui/icons-material';
import styled from '@emotion/styled';

import IPost from '../../../interfaces/post';
import memories from '../../../images/memories.png';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  height: 100%;
  position: relative;
`;
const StyledCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
`;
const StyledOverlayedLeftDiv = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
`;
const StyledOverlayedRightDiv = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
`;
const StyledDetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const StyledButton = styled(Button)`
  color: white;
`;
const StyledTypography = styled(Typography)`
  padding: 0 16px;
`;
const StyledCardActions = styled(CardActions)`
  padding: 0 16px 8px 16px;
  display: flex;
  justify-content: space-between;
`;
type PostProps = {
  post: IPost,
};
const Post = ({ post }: PostProps) => {
    const tagsString = post.tags.map((tag, index, tags) => {
      return (index < tags.length - 1) ? `#${tag}, ` : `#${tag}`;
    });
    const postImage = post.selectedFile ? post.selectedFile : memories;
    return (
        <StyledCard>
          <StyledCardMedia image={postImage} title={post.title} />
          <StyledOverlayedLeftDiv>
            <Typography variant='h6'>{post.creator}</Typography>
            <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
          </StyledOverlayedLeftDiv>
          <StyledOverlayedRightDiv>
            <StyledButton size='small' onClick={() => {}}>
              <MoreHoriz />
            </StyledButton>
          </StyledOverlayedRightDiv>
          <StyledDetailsDiv>
            <Typography variant='body2' color='textSecondary'>{tagsString}</Typography>
          </StyledDetailsDiv>
          <CardContent>
            <StyledTypography variant='h5' gutterBottom >{post.message}</StyledTypography>
          </CardContent>
          <StyledCardActions>
            <Button size='small' color='primary' onClick={() => {}}>
              <ThumbUpAlt fontSize='small' /> Like {post.likeCount}
            </Button>
            <Button size='small' color='primary' onClick={() => {}}>
              <Delete fontSize='small' /> Delete
            </Button>
          </StyledCardActions>
        </StyledCard>
    );
};

export default Post;

/*
// Post styles
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  grid: {
    display: 'flex',
  },
});
*/
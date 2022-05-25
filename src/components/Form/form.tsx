import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase64 from 'react-file-base64';

import { TextField, Button, Typography, Paper } from '@mui/material';
import styled from '@emotion/styled';

import IDraftPost from '../../interfaces/draftPost';
import IDispatch from '../../interfaces/dispatch';
import { createPost, updatePost } from '../../actions/posts';
import { ICombinedState } from '../../reducers';

const StyledPaper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(2)};
  & .MuiTextField-root {
    margin: ${(props) => props.theme.spacing(1)};
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledFileInputDiv = styled.div`
  width: 97%;
  margin: 10px 0;
`;
const StyledSubmitButton = styled(Button)`
  margin-bottom: 10px;
`;

type FormProps = {
  currentId: string | null,
  setCurrentId: React.Dispatch<React.SetStateAction<string | null>>,
};
const Form = ({ currentId, setCurrentId }: FormProps) => {
    const blankPostDraft: IDraftPost = { title: '', message: '', creator: '', tags: [], selectedFile: ''};
    const [postDraft, setPostDraft] = useState(blankPostDraft);
    const tagsJoinedString = postDraft.tags.join(', ');

    const postToBeUpdated = useSelector(
      (state: ICombinedState) => currentId ? state.posts.find((post) => post._id === currentId) : undefined
    );
    useEffect(() => {
      if (postToBeUpdated) setPostDraft(postToBeUpdated);
    }, [postToBeUpdated]);
    const title = `${postToBeUpdated ? 'Editing': 'Creating'} a Memory`;

    const dispatch = useDispatch() as IDispatch;

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
      const normalizedPost = {
        ...postDraft,
        tags: postDraft.tags.filter((tag) => (tag.length > 0))
      };
      event.preventDefault();
      if (currentId) {
        dispatch(updatePost(currentId, normalizedPost));
      } else {
        dispatch(createPost(normalizedPost));
      }
      clear(); // TODO: How we can invoke this after a successful `handleSubmit`? A field in the reducer with date (`LastSuccessfulInsert`) ... that when it changes, we clean?
    };
    const clear = () => {
      setCurrentId(null);
      setPostDraft(blankPostDraft);
    };
    const onChangeTagsTextField : React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const inputText = e.target.value;
      let tags: string[] = inputText.split(/,\s*/);
      tags = tags
        .map((tag) => tag.replace(/^#+/, ''))
        .filter((tag, index) => (tag.length > 0) || (index === tags.length - 1));
      setPostDraft({...postDraft, tags: tags});
    };
    const onDoneFileBase64 = (file: FileBase64Types.FileInfo | FileBase64Types.FileInfo[]) => {
      setPostDraft({ ...postDraft, selectedFile: (file as FileBase64Types.FileInfo).base64 });
    };
    return (
        <StyledPaper>
          <StyledForm autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Typography variant='h6'>{title}</Typography>
            <TextField
              name='creator' label='Creator'
              variant='outlined' fullWidth
              value={postDraft.creator} onChange={(e) => setPostDraft({ ...postDraft, creator: e.target.value })}
            />
            <TextField
              name='title' label='Title'
              variant='outlined' fullWidth
              value={postDraft.title} onChange={(e) => setPostDraft({ ...postDraft, title: e.target.value })}
            />
            <TextField
              name='message' label='Message'
              variant='outlined' fullWidth
              value={postDraft.message} onChange={(e) => setPostDraft({ ...postDraft, message: e.target.value })}
            />
            <TextField
              name='tags' label='Tags'
              variant='outlined' fullWidth
              value={tagsJoinedString} onChange={onChangeTagsTextField}
            />
            <StyledFileInputDiv>
              <FileBase64 multiple={false} onDone={onDoneFileBase64} />
            </StyledFileInputDiv>
            <StyledSubmitButton type='submit' variant='contained' color='primary' size='large' fullWidth>
              Submit
            </StyledSubmitButton>
            <Button variant='contained' color='secondary' size='small' fullWidth onClick={clear}>
              Clear
            </Button>
          </StyledForm>
        </StyledPaper>
    );
};

export default Form;

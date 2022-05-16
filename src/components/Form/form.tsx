import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';

import { TextField, Button, Typography, Paper } from '@mui/material';
import styled from '@emotion/styled';

import IDraftPost from '../../interfaces/draftPost';

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

const Form = () => {
    const postDraft: IDraftPost = { title: '', message: '', creator: '', tags: [], selectedFile: ''};
    const [postData, setPostData] = useState(postDraft);
    const tagsJoinedString = postData.tags.join(', ');

    const handleSubmit = () => {
      // TODO
    };
    const clear = () => {
      // TODO
    };
    const onChangeTagsTextField : React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const inputText = e.target.value;
      const tags: string[] = inputText.split(/,\s*/);
      setPostData({...postData, tags: tags});
    };
    const onDoneFileBase64 = (file: FileBase64Types.FileInfo | FileBase64Types.FileInfo[]) => {
      setPostData({ ...postData, selectedFile: (file as FileBase64Types.FileInfo).base64 });
    };
    return (
        <StyledPaper>
          <StyledForm autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Typography variant='h6'>Creating a Memory</Typography>
            <TextField
              name='creator' label='Creator'
              variant='outlined' fullWidth
              value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
            />
            <TextField
              name='title' label='Title'
              variant='outlined' fullWidth
              value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />
            <TextField
              name='message' label='Message'
              variant='outlined' fullWidth
              value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}
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

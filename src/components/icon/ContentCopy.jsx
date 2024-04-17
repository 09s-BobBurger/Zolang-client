import React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const ContentCopy = ({ onClick }) => {
    return (
        <ContentCopyIcon onClick={onClick} style={{color: "white", position:"fixed", right:"0"}} />
    );
};

export default ContentCopy;
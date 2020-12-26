import commentBox from 'commentbox.io';
import React, { useEffect } from 'react';

export const Comments = ():JSX.Element => {
  useEffect(() => {
    const removeCommentBox = commentBox(process.env.COMMENTBOX_ID);
    return removeCommentBox();
  }, []);
  return <div className="commentbox" />;
};


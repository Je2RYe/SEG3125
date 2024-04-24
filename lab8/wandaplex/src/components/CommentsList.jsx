// CommentsList.js
import React from 'react';
import { useTranslation } from "react-i18next";
import '../css/CommentsList.css';

const CommentsList = ({ comments }) => {
  const {t}=useTranslation();
  
  return (
    <div className="comments-list-container">
      <h2>{t("Comments")}</h2>
      {comments.map((comment, index) => (
        <div key={index}>
          <p><strong>{comment.name}</strong>: {comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;

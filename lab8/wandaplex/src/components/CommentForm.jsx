// CommentForm.js
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import '../css/CommentForm.css';

const CommentForm = ({ addComment }) => {
  const {t}=useTranslation();
  const [warning, setWarning] = useState('');
  const maxWords = 200;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setWarning('Please enter your name.'); 
    }
    else if (!formData.comment.trim()) {
      setWarning('Please enter your comment.');
    }
    else{
      addComment(formData);
      setFormData({
        name: '',
        email: '',
        comment: ''
        
      });
      window.alert('Your comment has been Successfully submitted!');
    }
  };

  const handleChange = (e) => {
    const inputWords = e.target.value.split(/\s+/);
    if (inputWords.length > maxWords) {
      setWarning(`Maximum ${maxWords} words allowed.`);
    }
    else{
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setWarning('');
    }
  };

  const wordCount = formData.comment.split(/\s+/).filter(Boolean).length;

  return (
    
    <div className="comment-form-container" id="comment-form">
      <h2>{t("Addcomment")}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder={t("YourName")} value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder={t("YourEmail")} value={formData.email} onChange={handleChange} />
        
        
          <textarea name="comment" placeholder={t("YourComment")} value={formData.comment} onChange={handleChange}></textarea>
          <span className="word-count" style={{color:wordCount > maxWords ? 'red' : 'inherit' }}>
            {wordCount}/{maxWords}
            </span>
       
        <button type="submit">{t("Submit")}</button>
      </form>
      {warning && <p style={{ color: '#ff0202' }}>{warning}</p>}
    </div>
    
  );
};

export default CommentForm;

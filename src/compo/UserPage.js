import React, { useState } from 'react';
import dummyPic from '../image/dummy.png';
import ReplyPage from '../compo/ReplyPage';
const UserPage = (props) => {
  const [comments, setComments] = useState([{
    id: '1',
    author: 'Mahesh',
    date: 'Today at 5:42PM',
    text: 'so good'
  },

  ]);
  const [commentText, setCommentText] = useState('');
  const [showReply,setShowReply]=useState(false);

  const postComment = () => {
    if (commentText !== '') {
      let data = {
        id: "2",
        author:props.loginUser,
        date:'Today at 5:42PM',
        text: commentText
      }
      setComments((old)=>[...old,data] );
      setCommentText('');

    } else {
      alert("comment field should not be empty");
    }
  }
  return (
    <div>
      <div style={{ textAlign: "right" }}><button className="ui button">Logout</button></div>
      <div>
        <div className="ui input" >
        <input type="text" placeholder="Enter post..." onChange={(e) => { setCommentText(e.target.value) }} value={commentText}/>
        </div>
        <button className="ui primary button" onClick={postComment}>Post</button>
      </div>
      <h3 className="ui dividing header">comments</h3>
      {
        comments.map((item, index) => {
          return (
            <div key={index} className="ui comments">
              <div className="comment">
              
                <a className="avatar">
                <img src={dummyPic} />
                </a>
                <div className="content">
                  <a className="author">{item.author}</a>
                  <div className="metadata">
                    <span className="date">{item.date}</span>
                  </div>
                  <div className="text">
                    {item.text}
                  </div>
                  <div className="actions">
                    <a className="reply" onClick={()=>{setShowReply(!showReply)}}>Reply</a>
                   { showReply && <div><ReplyPage/></div>}
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default UserPage;
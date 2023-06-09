import React from "react";
import { useState } from "react";
import ShowAccount from "./ShowAccount";
import '../../styles/homepageStyles/addComment.css';
import '../../styles/ColorScheme.css';
import sendImg from '../../icons/send.svg';
import loadImg from '../../icons/loadImg.svg';

export default function AddComment() {
    const [postDataType, setPostDataType] = useState({
        typeAreaVal: "",
        files: FileList
    });

    const updateTypeAreaVal = (event) => {
    setPostDataType(prevPostDataType => {
        return {...prevPostDataType, typeAreaVal: event.target.value};
    });
    }
    
    const UploadFilesHandler = (event) => {
    setPostDataType(prevPostDataType => {
        return {...prevPostDataType, files: event.target.files};
    });
    }
    
    const postComment = () => {
        alert("New Comment");
    }

    return (
        <div className="addComment">
            <ShowAccount account={{name:null, picture: require('../../photos/KevinHart.jpg'), uploadDate:null}}/>
            <div className="commentInput">
                <input id="comment-input" onChange={updateTypeAreaVal} type="text" placeholder="Write a comment..."/>
                <label htmlFor="file-input" className="file-input">
                    <img src={loadImg} />
                </label>
                <input id="file-input" type="file" onChange={UploadFilesHandler} hidden/>
                <button className='sendBtn' onClick={postComment}><img src={sendImg} alt="send" /></button>
            </div>
        </div>
    );
}
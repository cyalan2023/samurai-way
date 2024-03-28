import React from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"

export const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h2>my posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post message={"Hi allloxa helllo"} likeCount={"0"}/>
            <Post message={"viva vindeta"} likeCount={"32"}/>
        </div>
    );
};


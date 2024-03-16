import React from 'react';
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message={"Hi allloxa helllo"}/>
            <Post message={"viva vindeta"}/>
        </div>
    );
};


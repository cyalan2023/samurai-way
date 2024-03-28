import React from 'react';
import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likeCount: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="" alt=""/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>

    );
};


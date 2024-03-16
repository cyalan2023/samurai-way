import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://s1.1zoom.ru/b5050/115/Tropics_Coast_Branches_481275_3840x2400.jpg" alt=""/>
            </div>
            <div>
                ava + desctription
            </div>
            <MyPosts/>
        </div>

    );
};


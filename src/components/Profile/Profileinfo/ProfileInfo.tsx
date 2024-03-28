import React from 'react';
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://s1.1zoom.ru/b5050/115/Tropics_Coast_Branches_481275_3840x2400.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desctription
            </div>
        </div>
    );
};


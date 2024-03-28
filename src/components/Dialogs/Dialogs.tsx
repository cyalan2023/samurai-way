import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsProps = {
    id: string
    name: string
}
type MessageProps = {
    message: string
}
const DialogItem = (props: DialogsProps) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageProps) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <DialogItem name={"Dimych"} id={"1"}/>
                    <DialogItem name={"Sasha"} id={"2"}/>
                    <DialogItem name={"Evgen"} id={"3"}/>
                </div>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"Aloxa"}/>
                <Message message={"Hello"}/>

            </div>
        </div>
    );
};


import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

export type MessagePropsType = {
    message : MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img id={'hw1-avatar-' + props.message.user.avatar} src={props.message.user.avatar} alt = {""}/>
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.user.name} className={s.name}>
                        {props.message.user.name}
                    </div>
                    <pre id={'hw1-text-' + props.message.message.text} className={s.messageText}>
                        {props.message.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.message.time} className={s.time}>
                {props.message.message.time}
            </div>
        </div>
    )
}

export default Message

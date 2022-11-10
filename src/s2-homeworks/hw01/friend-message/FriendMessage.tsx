import React from 'react'
import s from './FriendMessage.module.css'
import avatar from "../avatar.png";


type propsFriendMessage = {
    message: {
        id: number,
        user: {
            avatar: string,
            name: string,
        },
        message: {
            text: string,
            time: string,
        },
    }
}
const FriendMessage = (props: propsFriendMessage) => {

    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img id={'hw1-friend-avatar-' + props.message.user.avatar} src={props.message.user.avatar} alt = {avatar}/>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.user.name}
                        className={s.friendName}
                    >
                        {props.message.user.name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.message.text}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.message.time}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {props.message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage

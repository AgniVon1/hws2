import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback:  (name: string) => void
}

export const pureAddUser = (name: string, setError: (p:string) => void, setName: (p:string) => void, addUserCallback: (p:string) => void) => {
    if (name.trim() === "")
        setError('Ошибка! Введите имя!')
    else {
        addUserCallback(name)
        setName('')
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (error:string) => void) => {
    // если имя пустое - показать ошибку
    if (name.trim() ==="") setError('Ошибка! Введите имя!')
}

export const pureOnEnter = (e:KeyboardEvent<HTMLInputElement>, addUser: ()=>void ) => {
    // если нажата кнопка Enter - добавить
    if (e.key === "Enter")
        addUser()
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {

    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value)
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length - 1
    const lastUserName = users[totalUsers].name

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

import React from 'react'
import { useGlobalStore } from '../lib/global-store'
import * as uuid from 'uuid'

export default function Users() {
    const { users, setUsers } = useGlobalStore()

    const addUser = React.useCallback(
        () => {
            const newId = uuid.v4()
            setUsers({
                ...users,
                [newId]: {
                    id: newId,
                    name: `New User ${ Math.floor(Math.random() * 100)}`
                }
            })
        },
        [users, setUsers]
    )

    return <div>
        <ol>
            {Object.values(users).map(user => <li key={user.id}>{user.name}</li>)}
        </ol>
        <button onClick={addUser}>Add User</button>
    </div>
}

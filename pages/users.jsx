import React from 'react'
import { useRouter } from 'next/router'
import * as uuid from 'uuid'

import { useGlobalStore } from '../lib/global-store'

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
        <button onClick={addUser}>Add User</button>
        <ol>
            {Object.values(users).map(user => <li key={user.id}>{user.name} - {user.id}</li>)}
        </ol>
    </div>
}

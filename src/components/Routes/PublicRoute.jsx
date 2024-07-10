import { useContext, useEffect, useState } from 'react'

import { Route } from 'react-router-dom'

import UserContext from '../../context/User/UserContext'
export default function PublicRoute({ component: Component, ...props }) {

    const userCtx = useContext(UserContext)

    const { authStatus, verifyingToken } = userCtx

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            await verifyingToken()
            setLoading(false)
        }

        fetchData();
    }, [authStatus])

    return (
        <Route {...props} render={props => {
            if (loading) return null

            return authStatus ?
                (<Component {...props} />)
                :
                (<Component />)
        }
        } />
    )


}
import React, { useState } from 'react'
import { di } from '@di/index';
import { AllUsersUseCase } from '@application/users/index';
import { USER_SYMBOLS, UserDom } from '@domain/users/index';
import { Failure, NoParams } from '@core/index';

function useUser() {
    const allUsersUseCase = di.get<AllUsersUseCase>(USER_SYMBOLS.USER_LIST);
    const [users, setUsers] = useState<UserDom[]>([]); 
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<boolean>(false); 

    React.useEffect(() => {
        async function fetchData() {
            const resultData = await allUsersUseCase?.execute(NoParams)
            resultData.fold((data: UserDom[]) => setUsers(data), (_: Failure) => setError(true))
            setLoading(false)
        }
        fetchData()
    },[allUsersUseCase])
    return {
        users,
        loading,
        error
    };
}
export { useUser }
import React, { useState } from 'react'

import { AllUsersUseCase } from '@application/users/index';

import { Failure, NoParams } from '@core/index';
import { CreatePublicationUseCase } from '@application/post/commands/create-post.usecase';
import { PostRequestDom, PostResponseDom } from '@domain/post';
import { UserDom } from '@domain/users';

function usePost(  allUserUseCase: AllUsersUseCase, 
    createPostUseCase: CreatePublicationUseCase

) {
    //const allUsersUseCase = di.get<AllUsersUseCase>(USER_SYMBOLS.USER_LIST);
    const [users, setUsers] = useState<UserDom[]>([]); 
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<boolean>(false); 

    React.useEffect(() => {
        async function fetchData() {
            const resultData = await allUserUseCase?.execute(NoParams)
            resultData.fold((data: UserDom[]) => setUsers(data), (_: Failure) => setError(true))
            setLoading(false)
        }
        fetchData()
    },[allUserUseCase])

    const addPost = async (newPost: PostRequestDom) => {
        const result = await createPostUseCase?.execute(newPost)
        result.fold((_: PostResponseDom) => {console.log("post",_)}, (_: Failure) => console.log("fall",_))
    };

    return {
        users,
        loading,
        addPost,
        error
    };
}
export { usePost }
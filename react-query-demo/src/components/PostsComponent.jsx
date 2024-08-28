import React from "react";
import { useQuery } from "react-query"
import { useQueryClient } from "react-query";

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const PostsComponent = () => {

    const queryClient = useQueryClient();

    const {data, isError, isLoading, isFetching, refetch} = useQuery('fetchPosts', fetchPosts, {
        staleTime: 6000,
        cacheTime: 10000,
        refetchOnWindowFocus: true,  
        keepPreviousData: true 
    });


    // Handle Loading State
    if (isLoading) return <div>Loading...</div>

    // Handle Error 
    if (isError) return <div>There was an error loading data</div>;


    return(
        <div>

            <h2>Posts</h2>
            {isFetching && <div>Refreshing Data...</div>}
            <button onClick={() => refetch()}>Refetch Data</button>
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default PostsComponent;

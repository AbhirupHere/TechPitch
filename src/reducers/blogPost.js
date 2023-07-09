const initialBlogState = {
    blogDetails: {},
    error: null,
}

export default function blogPosts(state= initialBlogState, action){
    switch(action.type){
        case 'ADD_BLOG_SUCCESSFUL':
            return{
                ...state,
                blogDetails: action.blogDetails,
            }
        case 'RETRIEVE_BLOG_SUCCESSFUL':
            return{
                ...state,
                blogDetails: action.blogDetails,
            }
        case 'ADD_BLOG_FAILED':
            return{
                ...state,
                error: action.error,
            }
        case 'RETRIEVE_BLOG_FAILED':
            return{
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
}
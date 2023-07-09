import { collection, addDoc } from "firebase/firestore";
import { db } from "../store/fireStore";


export function addBlogSuccessful(blogDetails){
    return{
        type: 'ADD_BLOG_SUCCESSFUL',
        blogDetails,
    }
}

export function addBlogFailed(errorMessage){
    return{
        type: 'ADD_BLOG_FAILED',
        error: errorMessage,
    }
}

export function addBlog(authorName, userId, blogTitle, headerImage, blogContent){
    return async (dispatch) => {
        try {
        const docRef = await addDoc(collection(db, "blogPosts"), {
            authorName,
            userId,
            blogTitle,
            headerImage,
            blogContent,
        });
        console.log("Document written with ID: ", docRef.id);
        dispatch(addBlogSuccessful({authorName, userId, blogTitle, headerImage, blogContent}));
        } catch (error) {
        console.error("Error adding document: ", error);
        console.log("Error message: ", error.message);
        }
    }
}

export function retrieveBlogSuccessful(blogDetails){
    return{
        type: 'RETRIEVE_BLOG_SUCCESSFUL',
        blogDetails,
    }
}

export function retrieveBlogFailed(blogDetails){
    return{
        type: 'RETRIEVE_BLOG_FAILED',
        blogDetails,
    }
}

export function retrieveBlog(blogDetails){
    return{
        type: 'BLOG_ADDED_SUCCESSFUL',
        blogDetails,
    }
}


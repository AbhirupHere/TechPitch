import { doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from 'react-router-dom';
import { db } from "../store/fireStore";
import { useEffect, useState } from "react";
import Aside from "./Aside";

const BlogPost = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  // console.log("blogId", blogId);

  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [headerImage, setHeaderImage] = useState("");
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const blogDocRef = doc(db, "blogPosts", blogId);
        const blogDocSnap = await getDoc(blogDocRef);
        if (blogDocSnap.exists()) {
          const blogData = blogDocSnap.data();
          setBlogTitle(blogData.blogTitle);
          setBlogContent(blogData.blogContent);
          setAuthorName(blogData.authorName);
          setHeaderImage(blogData.headerImage);
        } else {
          // Handle the case when the blog post doesn't exist
          navigate('/Page404');
          // console.log("Page Not Found!!!!");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setError(error);
      }
    };

    if (blogId) {
      fetchBlogPost();
    }
  }, [blogId]);

  if (error) {
    return <div style={{textAlign: 'middle'}}><h1>Error: {error.message}</h1></div>;
  }

  return (
    <div id="content">
        <main>
          <header id="blog-header">
            <h1>{blogTitle}</h1>
          </header>

          <div id="author-container">
            <img
              id="author-img"
              src= "https://cdn-icons-png.flaticon.com/128/1995/1995562.png"
              alt="author"
            />
            <span id="author-name">
              <a href="">{authorName}</a>
            </span>
            <span className="slash">&#47;</span>
            <span id="author-topic">
              <a href="">Engineering</a>
            </span>
          </div>

          <article id="blog-content">
            <div id="blog-image-container">
              <div id="views">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/709/709724.png"
                  alt="views"
                />
                <span>
                  <b>Views:</b>
                </span>
                <span>
                  <b>1,137</b>
                </span>
              </div>
              {!(headerImage == "") &&
                <img
                  id="blog-header-image"
                  src= {headerImage}
                  alt="header-image"
                />
              }
            </div>
            <div dangerouslySetInnerHTML={{ __html: blogContent }}></div>
          </article>
        </main>
      <Aside /> 
    </div>
  );
}
export default BlogPost;
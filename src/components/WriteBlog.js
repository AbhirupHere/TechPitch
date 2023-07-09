import React from "react";
import { connect } from "react-redux";

import { addBlog } from "../actions/blogPost";

class WritePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      headerImage: "",
      content: "",
    };
  }

  handleAuhtorChange = (e) => {
    this.setState({ author: e.target.value });
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleHeaderChange = (e) => {
    this.setState({ headerImage: e.target.value });
  };

  handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Store or post the blog content, e.g., send it to a server or save it in a database
    this.props.dispatch(addBlog(this.state.author, this.props.auth.user.userId, this.state.title, this.state.headerImage, this.state.content));
    // Clear the input fields
    this.setState({ author: "", title: "", headerImage: "", content: "" });
  };

  render() {
    const { author, title, headerImage, content } = this.state;
    const renderedContent = content.replace(/\n/g, "<br>");

    return (
      <div className="blog-write">
        <h1>
          Hi! Thank you for Contributing
          <br />
          Hope You Write Something Interesting
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input className="blog-author"
            type="text"
            required
            value={author}
            onChange={this.handleAuhtorChange}
            placeholder="Name of the Author of this Blog"
          />
          <input className="blog-title"
            type="text"
            required
            value={title}
            onChange={this.handleTitleChange}
            placeholder="Blog Title"
          />
          <input className="blog-header-img"
            type="link"
            value={headerImage}
            onChange={this.handleHeaderChange}
            placeholder="You can add a header image link for your blog"
          />
          <textarea
          className="blog-content"
            value={content}
            required
            onChange={this.handleContentChange}
            placeholder="Write your blog content here..."
          />
          <button type="submit">Publish</button>
        </form>

        <div>
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: renderedContent }}></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(WritePost);

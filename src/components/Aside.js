import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Aside extends Component {
    render() {
        return (
        <div id='aside-section'>
            <section id="subscription" className="widget">
                <h4 className="widget-title">Subscribe now to stay updated with new technology trends</h4>

                <div id="subscribe-form">
                    <form action="">
                        <label htmlFor="input-name">Name</label>
                        <input id="input-name" name="name" type="text"/>
                        <label htmlFor="input-email">Email *</label>
                        <input id="input-email" name="input-email" type="text" required=""/>
                        <button className="sub-btn" type="submit">SUBSCRIBE</button>
                    </form>
                </div>
            </section>

            <section id="search" className="widget">
                <form action="">
                    <input type="text" placeholder="Search..."/>
                    <button type="submit"><img src="https://cdn-icons-png.flaticon.com/128/149/149852.png" alt="Search"/></button>
                </form>
            </section>

            <section id="recent-posts" className="widget">
                <h4 className="widget-title">Recent Posts</h4>

                <ul>
                    <li>
                        <p><Link to='/post/Ys3pGXb3gLU1nEKbulPS'>Useful Tools that Every Web Developer Must Know</Link></p>
                    </li>
                    <li>
                        <p><Link to='/post/VclHvtoaLkWID6eRNe81'>The Art of Responsive Web Design: Crafting Websites for All Devices</Link></p>
                    </li>
                    <li>
                        <p><a href="https://www.exampleblog.com">10 Essential JavaScript Libraries for Front-End Development</a></p>
                    </li>
                    <li>
                        <p><a href="https://www.exampleblog.com">The Future of Artificial Intelligence in Web Development</a></p>
                    </li>
                    <li>
                        <p><a href="https://www.exampleblog.com">Mastering CSS Grid: Create Beautiful Layouts with Ease</a></p>
                    </li>
                </ul>
            </section>

            <section id="recommended-resources" className="widget">
                <h4 className="widget-title">Recommended Resources</h4>

                <ul>
                    <li>
                        <p><a href="https://www.exampleresource.com">FreeCodeCamp</a> - A nonprofit organization providing a wealth of coding tutorials and projects to learn web development for free.</p>
                    </li>
                    <li>
                        <p><a href="https://www.exampleresource.com">CSS-Tricks</a> - A popular website with articles, tutorials, and resources for web developers, focusing on CSS and front-end techniques.</p>
                    </li>
                    <li>
                        <p><a href="https://www.exampleresource.com">Smashing Magazine</a> - A leading web design and development resource with insightful articles, trends, and tutorials.</p>
                    </li>
                    <li>
                        <p><a href="https://www.exampleresource.com">MDN Web Docs</a> - Mozilla Developer Network's extensive documentation and guides for web technologies.</p>
                    </li>
                    <li>
                        <p><a href="https://www.exampleresource.com">Frontend Masters</a> - An online learning platform offering in-depth courses on various front-end topics taught by industry experts.</p>
                    </li>
                </ul>
            </section>

            <section id="categories" className="widget">
                <h4 className="widget-title">Categories</h4>

                <ul>
                    <li><a href="">Android</a></li>
                    <li><a href="">General</a></li>
                    <li><a href="">Interview Experiences</a></li>
                    <li><a href="">Machine Learning</a></li>
                    <li><a href="">Ruby</a></li>
                    <li><a href="">Uncategorized</a></li>
                    <li><a href="">Web Development</a></li>
                </ul>
            </section>
        </div>
        );
    }
}

export default Aside;

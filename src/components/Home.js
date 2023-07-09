import React, { Component } from "react";
import Aside from "./Aside";

class Home extends Component {
  render() {
    return (
      <div id="content">
        <main>
          <header id="blog-header">
            <h1> Welcome to the TechPitch Blog! </h1>
          </header>

          <div id="author-container">
            <img
              id="author-img"
              src="https://cdn-icons-png.flaticon.com/128/1995/1995562.png"
              alt="author"
            />
            <span id="author-name">
              <a href="">AbhirupBhowal</a>
            </span>
            <span className="slash">&#47;</span>
            <span id="author-topic">
              <a href="">Web Development</a>
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
              <img
                id="blog-header-image"
                src="https://code.visualstudio.com/assets/images/Hundreds-of-Extensions.png"
                alt="best coding practices"
              />
            </div>
            <p>
              Explore the latest front-end technologies, design trends, and industry insights in our TechHub Blog. Stay up-to-date with the ever-evolving world of web development and discover new ways to enhance your skills and build amazing user experiences. Let's dive in!
            </p>

            <section>
              <h2 className="h-style">Front-End Frameworks</h2>
              <p>
                Front-end frameworks have transformed the way we build web applications. Dive into the world of popular frameworks like React, Angular, and Vue.js. Discover their key features, strengths, and use cases. Unleash the power of component-based architecture and learn how these frameworks can boost your productivity and streamline your development process.
              </p>
            </section>

            <section>
              <h2 className="h-style">Design and UX</h2>
              <p>
                User experience (UX) and design play a crucial role in creating successful websites and applications. Explore the principles of intuitive design, usability, and accessibility. Learn how to effectively use colors, typography, and layout to create visually appealing and user-friendly interfaces. Dive into the world of design systems, wireframing, and prototyping tools to streamline your design workflow and deliver delightful user experiences.
              </p>
            </section>

            <section>
              <h2 className="h-style">JavaScript and Beyond</h2>
              <p>
                JavaScript is the language of the web, but there's so much more to explore. Discover the latest JavaScript features and ECMAScript versions. Dive into TypeScript and explore its benefits for large-scale projects. Uncover the power of functional programming with libraries like Ramda and Lodash. Stay updated with the ever-evolving JavaScript ecosystem and broaden your skill set.
              </p>
            </section>

            <section>
              <h2 className="h-style">Performance Optimization</h2>
              <p>
                Performance is crucial for providing a great user experience. Learn techniques to optimize website speed, including code splitting, lazy loading, and caching strategies. Explore performance auditing tools and learn how to identify and fix performance bottlenecks. Dive into image optimization, minification, and compression techniques to create blazing-fast websites that keep users engaged.
              </p>
            </section>

            <section>
              <h2 className="h-style">Mobile Development</h2>
              <p>
                Mobile devices dominate the digital landscape. Discover the world of mobile development with frameworks like React Native and Flutter. Explore the nuances of responsive design and mobile-first development. Learn how to build cross-platform mobile apps that provide a seamless experience across iOS and Android devices. Delve into mobile app performance optimization and app store deployment strategies.
              </p>
            </section>

            <section>
              <h2 className="h-style">Testing and Debugging</h2>
              <p>
                Robust testing and effective debugging are essential for delivering high-quality applications. Dive into unit testing, integration testing, and end-to-end testing with popular frameworks like Jest and Cypress. Explore debugging techniques and tools to diagnose and fix issues quickly. Learn best practices for error handling, logging, and monitoring to ensure your applications are stable and reliable.
              </p>
            </section>

            <section>
              <h2 className="h-style">Deployment and DevOps</h2>
              <p>
                Explore the world of deployment and DevOps to streamline your development workflow. Learn about continuous integration and continuous deployment (CI/CD) practices. Dive into containerization with Docker and orchestration with Kubernetes. Discover cloud services like AWS, Azure, and GCP for scalable and reliable hosting. Explore serverless architecture and build serverless applications with services like AWS Lambda and Firebase Functions.
              </p>
            </section>

            <section>
              <h2 className="h-style">Front-End Trends</h2>
              <p>
                Stay ahead of the curve with the latest front-end trends and emerging technologies. Dive into topics like progressive web apps (PWAs), serverless computing, artificial intelligence (AI), and machine learning (ML) in the context of web development. Explore the impact of voice interfaces, chatbots, and virtual reality (VR) on user experiences. Broaden your horizons and get inspired by the cutting-edge advancements in front-end technology.
              </p>
            </section>

            <section>
              <h2 className="h-style">Community and Resources</h2>
              <p>
                Join the vibrant community of web developers. Connect with fellow developers through forums, meetups, and conferences. Discover online learning platforms, tutorials, and resources to further enhance your skills. Explore coding challenges, open-source projects, and hackathons to apply your knowledge and collaborate with others. The web development community is full of support and endless opportunities for growth.
              </p>
            </section>

            <p>
              Stay tuned for more exciting articles, tutorials, and expert insights in the TechHub Blog. We're dedicated to helping you stay ahead of the curve in the fast-paced world of front-end development. Keep learning, keep experimenting, and keep pushing the boundaries of what's possible!
            </p>
            
          </article>
        </main>

        <Aside />
      </div>
    );
  }
}
export default Home;

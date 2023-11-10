import React from "react";
import Nav from "../../Components/Navbar/Navbar/Nav";

const Blog = () => {
  return (
    <div>
      <Nav></Nav>
      <div className=" max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto space-y-12 px-6">
        <img
          src="https://i.ibb.co/C1Q1Mds/top-view-workspace-with-laptop-notebook.jpg"
          alt=""
          className="h-[400px] w-full object-cover rounded-lg object-center"
        />
        <h1 className="text-6xl text-medium text-black text-center">
          Welcome to the Fundamental Blog
        </h1>

        <div className="space-y-8 tracking-wider leading-8">
          {/* Question 01 */}
          <div className="space-y-6">
            <h3 className="text-2xl text-black font-medium">
              1. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h3>
            <p className="text-gray-500">
              Access tokens and refresh tokens are commonly used in
              authentication systems, especially in the context of OAuth 2.0 and
              similar authorization frameworks. They are essential for secure
              and efficient user authentication and authorization.
            </p>

            <div className="text-gray-500">
              <span className="text-black font-medium text-xl">
                Access Token:
              </span>{" "}
              <br />
              <p className="px-10">
                <span className="text-4xl font-bold mr-4">.</span>An access
                token is a credential used to access protected resources on
                behalf of a user or application. It grants permissions for
                specific actions or access to specific data. <br />
                <span className="text-4xl font-bold mr-4">.</span>Access tokens
                have a limited lifespan, typically a short period (e.g., minutes
                to hours), to reduce the risk if they are compromised.
                <br />
                <span className="text-4xl font-bold mr-4">.</span>Access tokens
                are sent with each API request to authenticate the user or
                application and grant access to the requested resource.
              </p>
            </div>

            <div className="text-gray-500 ">
              <span className="text-black font-medium text-xl">
                Refresh Token:
              </span>
              <br />
              <p className="px-10 space-y-2">
                <span className="text-4xl font-bold mr-4">.</span> A refresh
                token is a long-lived credential that is used to obtain new
                access tokens when the old ones expire. They are typically
                stored securely on the client side.
                <br />
                <span className="text-4xl font-bold mr-4">.</span> Refresh
                tokens are used to request a new access token without requiring
                the user to log in again, as long as the refresh token is still
                valid.
                <br />
                <span className="text-4xl font-bold mr-4">.</span>They are more
                secure than access tokens because they have a longer lifespan
                and are not sent with every request.
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="text-xl text-black font-bold">
                How Access and Refresh Tokens Work:
              </h1>
              <div className="px-10 flex flex-col">
                <span className="text-gray-500">
                  {" "}
                  1. The user or application authenticates with a server and
                  receives an access token and a refresh token.
                </span>
                <br />
                <span className="text-gray-500">
                  2. The access token is used to make authenticated API
                  requests. It is sent with each request as a bearer token in
                  the request header.
                </span>
                <br />
                <span className="text-gray-500">
                  3. When the access token expires, the client can use the
                  refresh token to request a new access token without the need
                  for the user to log in again.
                </span>
                <br />
                <span className="text-gray-500">
                  4. The server validates the refresh token, and if it's still
                  valid, it issues a new access token.
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-xl text-black font-bold ">
                Where to Store Tokens on the Client-Side:
              </h1>
              <div className="space-y-2">
                <span className="text-black font-medium text-xl">
                  Access Token:
                </span>{" "}
                <br />
                <p className="px-10 flex flex-col">
                  <span>
                    Access tokens should be stored securely on the client side,
                    typically in memory, and should not be exposed to JavaScript
                    code. They are sensitive credentials.
                  </span>
                  <span>
                    You can use HTTP-only cookies or browser's local storage to
                    store access tokens, but these methods have security
                    implications. Storing them in a memory variable is often
                    recommended to minimize security risks.
                  </span>
                  <span>
                    Access tokens should be transmitted over secure connections
                    (HTTPS) to prevent interception.
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-black font-medium text-xl">
                  Refresh Token:
                </span>{" "}
                <br />
                <p className="px-10 flex flex-col">
                  <span>
                    Refresh tokens are even more sensitive and long-lived, and
                    they should be stored securely.
                  </span>

                  <span>
                    Refresh tokens should be stored securely on the client side,
                    but you should consider using more secure methods like
                    HTTP-only cookies with the SameSite attribute set to
                    "Strict" and "Secure" to protect against CSRF attacks.
                    Alternatively, you can store them in secure storage like the
                    browser's secure cookie storage.
                  </span>
                  <span>
                    The handling of refresh tokens requires careful
                    consideration to ensure their security.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Question 02 */}

          <div className="w-full h-2 bg-black rounded-md"></div>
          <div>
            <div className="space-y-4">
              <h1 className="text-2xl text-black font-medium">
                {" "}
                What is express js?
              </h1>
              <p>
                Express.js is a popular web application framework for Node.js.
                It simplifies the development of web applications and APIs by
                providing a set of robust features and tools for building web
                services. Express.js is minimal and flexible, making it suitable
                for creating various types of web applications, from simple REST
                APIs to more complex full-stack applications.
              </p>

              <div className="space-y-2 px-10">
                <h3 className="text-black font-medium">
                  Key features of Express.js include:
                </h3>

                <p className="text-gray-500">
                  <span className="font-bold text-black">1. Routing:</span>{" "}
                  Express provides a straightforward and flexible routing
                  system, allowing you to define routes, handle HTTP requests,
                  and send responses.
                </p>
                <p className="text-gray-500">
                  <span className="font-bold text-black">2. Middleware:</span>{" "}
                  Middleware functions can be used to perform tasks such as
                  authentication, logging, and error handling. Express
                  middleware is easy to integrate into the request-response
                  cycle.
                </p>
                <p className="text-gray-500">
                  <span className="font-bold text-black">
                    3. Template Engines:
                  </span>{" "}
                  While Express itself doesn't have a template engine, it can be
                  easily integrated with popular template engines like Pug, EJS,
                  and Handlebars for server-side rendering.
                </p>
                <p className="text-gray-500">
                  <span className="font-bold text-black">
                    4. Static File Serving:
                  </span>{" "}
                  Express can serve static files (e.g., HTML, CSS, JavaScript,
                  images) using built-in middleware, making it convenient for
                  front-end development.
                </p>
                <p className="text-gray-500">
                  <span className="font-bold text-black">
                    5. Integration with Databases:
                  </span>{" "}
                  Express can be used with various databases and ORM
                  (Object-Relational Mapping) libraries, making it versatile for
                  data-driven applications.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <h1 className="text-2xl text-black font-medium">
                {" "}
                What is Nest JS?
              </h1>
              <p>
                Nest.js, on the other hand, is a progressive Node.js framework
                for building efficient, reliable, and scalable server-side
                applications. It uses TypeScript as its primary programming
                language and draws inspiration from Angular for its module-based
                structure and dependency injection system. Nest.js aims to
                provide an organized and maintainable architecture for
                server-side development.
              </p>

              <div className="space-y-2 px-10">
                <h3 className="text-black font-medium">
                  Key features of Express.js include:
                </h3>

                <p className="text-gray-500">
                  <span className="font-bold text-black">Modularity: </span>{" "}
                  Nest.js encourages building applications using modules,
                  allowing you to structure your code and manage dependencies
                  effectively.
                </p>
                <p className="text-gray-500">
                  <span className="font-bold text-black">
                    2. Dependency Injection:{" "}
                  </span>{" "}
                  Nest.js employs a powerful dependency injection system that
                  makes it easy to manage and inject dependencies into your
                  components.
                </p>
                <p className="text-gray-500">
                  <span className="font-bold text-black">3. Middleware:</span>{" "}
                  Similar to Express, Nest.js supports middleware for processing
                  HTTP requests and responses at various points in the
                  application.
                </p>
                <p className="text-gray-500">
                  <span className="font-bold text-black">4. Decorators:</span>
                  Nest.js uses decorators to define routes, inject dependencies,
                  and manage various aspects of your application.
                </p>
                <p className="text-gray-500">
                  <span className="font-bold text-black">
                    5. Built-in Support for WebSockets:
                  </span>{" "}
                  Nest.js includes built-in support for WebSockets, making it
                  suitable for real-time applications.
                </p>
                <p className="text-gray-500">
                  <span className="font-bold text-black">
                    6. Integration with Libraries:{" "}
                  </span>
                  Nest.js can work with various libraries and tools, including
                  TypeORM for database interactions and GraphQL for building
                  GraphQL APIs.
                </p>
                <p className="text-gray-500">
                  <span className="font-bold text-black">7. Testing:</span>
                  Nest.js provides utilities for testing your application,
                  making it easier to ensure the quality of your code.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-2 bg-black rounded-md"></div>
        <div className="space-y-12">
          <h1 className="text-4xl text-black font-bold">Building Job Wave - Unveiling the Code</h1>
          <div className="space-y-8">
            <p className="text-gray-500">
              <span className="font-bold text-black"> Introduction:</span>
              Welcome to the deep dive into the code of Job Wave, your go-to platform for seamless job search and posting. In this blog post, we'll explore the intricacies of the frontend and backend development, the technologies employed, and the rationale behind design decisions.
            </p>

            <p className="text-gray-500">
              <span className="font-bold text-black"> Frontend Development</span>
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Tech Stack Overview</span>Our frontend is powered by React, Tailwind, React Router DOM, DaisyUI, Axios, and Toast. Each technology was carefully selected to enhance the user experience and streamline the development process.
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">User-Friendly Home Page</span>The homepage is the gateway to Job Wave, featuring a clean navigation bar, eye-catching banner, and categorized job listings. Learn how we implemented job categories and facilitated user-friendly navigation.
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Why Choose Us Section</span>Discover the unique features and advantages highlighted in this section for both job seekers and employers. It's not just a platform; it's a tailored experience.
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">User Authentication</span>Delve into the intricacies of user authentication. We walk you through the registration process and showcase the simplicity of social login options.


            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Job Listings</span>Explore the "All Jobs" page, where job listings are categorized. We explain how non-registered users can use the search filter to find relevant opportunities.
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Job Posting and Management</span>Registered users can post job listings effortlessly. Learn how the "My Jobs" section allows users to manage and view the jobs they've posted.
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Job Application Tracking</span>We detail the process of users applying for jobs and keeping track of their applications in the "Applied Jobs" section.
            </p>


            <p className="text-gray-500">
              <span className="font-bold text-black"> Backend Development</span>
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Tech Stack Overview</span>Our backend relies on JWT, CORS, MongoDB, Express, and Dotenv for security. Discover why each component was chosen and the security measures in place.
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">User Authentication</span>Unveil the backend implementation of user authentication. We discuss the secure handling of user registration and login.
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Job Posting and Management</span>Explore how the backend processes job postings and manages the "My Jobs" section.
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Job Posting and Management</span>Understand the security measures implemented using Dotenv and other technologies to ensure a secure environment.
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-black">Conclusion</span>In conclusion, Job Wave is not just a platform; it's a culmination of thoughtful design and meticulous development. This deep dive into the code gives you a glimpse of the expertise and effort behind its creation.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

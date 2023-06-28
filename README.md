<h1 align="center">
  Title: QuickLink URL Shortener with Nodejs
</h1>

QuickLink is an intuitive web application designed to simplify URL management. It enables users to shorten URLs, add personal notes, and keep track of click statistics. With QuickLink, you can efficiently handle your shortened URLs, annotate them with relevant notes, easily search for saved URLs and notes, and conveniently monitor click counts for each shortened URL.

<h2>
  How to Run the Project:
</h2>

To run the QuickLink URL Shortener project, follow these steps:
1. Install Node.js on your machine if you haven't already (https://nodejs.org).
2. Clone the repository: `git clone <repository_url>`.
3. Navigate to the project directory.
4. Install the required dependencies by running the command `npm install`.
5. In the server.js file, replace the database connection URI or you can also use it without replacing it as I have provided a valid URI.
6. Run the application: `npm run url`.
7. Access the application in your web browser at: `http://localhost:8000`.

<h2>
 Accessing the Application:
</h2>

1. Open your web browser and visit `http://localhost:8000` to access the QuickLink application.
2. Start using the application to shorten URLs, add notes, search the urls and notes and track click statistics.

<h2>
Deployment
</h2>
<a href="https://quicklink-shortener.onrender.com/">Visit the QuickLink site</a>

<h2>
 Dependencies:
</h2>

- ejs
- express
- mongoose
- nodemon
- shortid

<h2>
Working of the Project :
</h2>

The internal working of the project involves several key components and processes. Here's a breakdown of the internal workings:

   - Node.js and Express:

       - Node.js was used as the runtime environment for the application.
       - Express.js was employed as the web framework.
       - Node.js provided a powerful and scalable platform for server-side development.
       - Express.js facilitated efficient handling of HTTP requests and responses.
    - ejs:
       - The `ejs` templating engine was employed.
       - `ejs` dynamically rendered HTML templates on the server-side.
       - HTML content with embedded JavaScript logic could be efficiently generated.
   - MongoDB:
       - MongoDB was chosen as the database solution to store shorten URLs and associated details.
         
   - Short ID Generation:
       - `shortid` library was used to shorten urls.
       - Shortid generated unique and compact identifiers for shortened URLs.
       - Each shortened URL had a distinct identifier.
    
   - Number of Clicks:
       - The application tracked the number of clicks on shortened URLs.
       - A 'clicks' counter was implemented.
       - The counter was incremented by 1 for each click event.

   - Searching Data:
       - A filtering mechanism was implemented on the frontend.
       - Users could search and display specific data based on their input criteria.
       - The filtering feature enhanced the user experience and facilitated data exploration.
   - Header and Footer: 
       - Header and footer components were implemented.
       - These components appeared consistently across the entire application.
       - The header and footer provided a unified navigation experience for users.
    
   - CSS and Bootstrap:
       - Custom CSS styles were implemented.
       - CSS styles enhanced the visual presentation of the application.
       - The Bootstrap framework was leveraged for predefined styles and components.
       - Bootstrap ensured a consistent and responsive design across devices.


<h2>
My Key Learnings:
</h2>
   
   During the development of the QuickLink application, I gained valuable insights and practical experience in various aspects of web development. Here are my key learnings:

- Full Stack Development: Successfully implemented Full Stack Development by seamlessly integrating server-side and client-side components in a unified project leveraging Express, EJS, and Node.js. 
- Search Functionality: Implemented a search feature for efficient querying of URLs and notes. 
- Click Tracking: Tracked the number of clicks on shortened URLs for user engagement insights. 
- MongoDB Cloud Database: Successfully connected to and utilized a MongoDB cloud database. 
- Debugging Skills: Developed expertise in debugging type errors, Axios errors, and HTTP status codes. 
- Working with HTML, CSS, and Bootstrap: Worked with HTML templates and static files and Styled the application using Bootstrap and CSS.
- README Documentation: Created well-structured README files to provide clear instructions and guidance for other developers.
- Deployment on Render: Successfully deployed the application on the Render platform for seamless accessibility and scalability. 

<h2>
Resources:
</h2>

During the development of the QuickLink application, I referred to various resources to enhance my knowledge and skills. Here are the websites and YouTube channels I utilized:

- W3Schools(https://www.w3schools.com/)
- Stack overflow for debugging
- WebDev simplified youtube video(https://www.youtube.com/c/webdevsimplified)
- MongoDB tutorial from code with harry youtube channel(https://youtu.be/oSIv-E60NiU)
- npm website: Used to reference documentation and syntax for working with npm packages.(https://www.npmjs.com/)












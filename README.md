<h1 align="center">
  Title: QuickLink URL Shortener with Nodejs
</h1>

Project Description:
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
7. Access the application in your web browser at: `http://localhost:3000`.

<h2>
 Accessing the Application:
</h2>

1. Open your web browser and visit `http://localhost:3000` to access the QuickLink application.
2. Start using the application to shorten URLs, add notes, search the urls and notes and track click statistics.

<h2>
 Dependencies:
</h2>

- ejs
- express
- mongoose
- nodemon
- shortid

<h2>
Internal working of my Project :
</h2>

The internal working of the project involves several key components and processes. Here's a breakdown of the internal workings:

   - Node.js and Express: The application was built using Node.js as the runtime environment and Express.js as the web framework. Node.js provided a powerful and scalable platform, while Express.js facilitated handling HTTP requests and responses efficiently.
   - MongoDB: To store user information, including hashed passwords, I opted for MongoDB as the database solution. The Mongoose library was employed for data modeling and interaction, simplifying the integration between the application and the database.
   - Short ID Generation: Generating unique and compact identifiers for shortened URLs was made possible by utilizing the shortid library. This library ensured that each shortened URL had a distinct identifier.
   - Number of Clicks : The number of clicks on shortened URLs was tracked by incrementing the 'clicks' counter by 1 for each click event.
   - ejs: The ejs templating engine was employed to dynamically render HTML templates on the server-side, enabling efficient generation of HTML content with embedded JavaScript logic.
   - CSS and Bootstrap: Custom CSS styles were implemented to enhance the visual presentation of the application. Additionally, the Bootstrap framework was leveraged to utilize its predefined styles and components, resulting in a consistent and responsive design across different devices.
   - Searching Data: To facilitate data searching and filtering, a filtering mechanism was implemented on the frontend. This enabled users to search and display specific data based on their input criteria, enhancing the user experience.
   - Header and Footer: A consistent user interface was achieved by implementing header and footer components that appeared across the entire application. This ensured a unified navigation experience for users.

<h2>
Key Learnings:
</h2>
   
   During the development of the QuickLink application, I gained valuable insights and practical experience in various aspects of web development. Here are my key learnings:

   -Full Stack Development: As a new web developer, working on the QuickLink application allowed me to gain valuable experience in implementing both the server-side and client-side components. This comprehensive involvement provided me with a holistic understanding of web development, from the backend to the frontend

  -Bootstrap and CSS: Leveraging the power of Bootstrap, I enhanced the application's visual design without the need to write extensive CSS code. Using its predefined styles and components, I created a professional and visually appealing user interface.

  -Search Functionality: I implemented a search feature that allowed users to quickly find specific notes or URLs within the application. This improved the usability of the application and enhanced the user experience.

  -Click Tracking: By implementing click tracking, I was able to monitor the number of clicks on shortened URLs. This feature provided valuable insights into the popularity and engagement of the URLs, helping users track their links' performance.

  -Writing Structured README: I gained experience in writing a well-structured README file for the project. This documentation serves as a guide for other developers, providing clear instructions on how to set up and use the application effectively.







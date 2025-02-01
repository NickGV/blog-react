# Blogi

Blogi is a simple blogging application built with React. It allows users to create, read, update, and delete blog posts. The application now uses a custom API built by the developer.

## Visit the page here: [Visit](https://blogi-nickgv.netlify.app)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/nickgv/blogi.git`
2. Navigate to the project directory: `cd blogi`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Usage

To use the application, follow these steps:

1. Open your web browser and navigate to `http://localhost:3000`
2. You will see the homepage of the blog. Click on the "Explore" link to see all the available blog posts.
3. Click on a blog post to view its details. You can also create a new post by clicking the "New Post" link.
4. To delete a post, click the trash icon next to the post title.

## Features

- Create, read, update, and delete blog posts
- Markdown support for writing posts
- Responsive design for desktop and mobile devices
- User authentication (coming soon)

## API

The application uses a custom API built with Express and Prisma. The API provides endpoints for user authentication, managing posts, and managing comments.

### Endpoints

- `POST /auth/signup`: Sign up a new user
- `POST /auth/login`: Log in an existing user
- `GET /posts`: Get all posts
- `GET /posts/:id`: Get a single post by ID
- `POST /posts`: Create a new post (requires authentication)
- `PUT /posts/:id`: Update a post by ID (requires authentication)
- `DELETE /posts/:id`: Delete a post by ID (requires authentication)
- `POST /comments`: Create a new comment (requires authentication)
- `GET /comments/post/:postId`: Get comments for a specific post
- `PUT /comments/:id`: Update a comment by ID (requires authentication)
- `DELETE /comments/:id`: Delete a comment by ID (requires authentication)

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
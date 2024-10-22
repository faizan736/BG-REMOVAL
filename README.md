# Background Removal

This website removes backgrounds from images quickly, making the image subject stand out clearly.

It features:
    Backend: Built with Node.js and Express.
    Frontend: Developed using React with Vite for the build tool.
    Styling: Styled with Tailwind CSS.
    Database: Uses MongoDB for data storage.
    Authentication: Managed with clerk.
    AI platform: Clipdrop Ai used .
    
### Prerequisites

-   **Node.js** (v14 or later)
-   **npm** (v6 or later) or **yarn**

### Installation

#### Backend

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `backend` directory with the following content:
        ```plaintext
        MONGODB_URI=your_mongo_uri
        CLERK_WEBHOOK_SECRET=your_clerk_key
        CLIPDROP_API=your_clipdrop_key
        ```

#### Frontend

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `frontend` directory with the following content:
        ```plaintext
        VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
        VITE_BACKEND_URL='http://localhost:4000'
        ```

## 🏃‍♂️ Running the Project

### Backend

1. Start the backend server:

    ```bash
    npm run server
    ```

    The backend will run on [http://localhost:4000](http://localhost:4000).

### Frontend

1. Start the frontend development server:

    ```bash
    npm run dev
    ```

    The frontend will run on [http://localhost:5173](http://localhost:5173).

## 📬 Contact

For any questions or issues, please contact [Faizanbasha736@gmail.com](Faizanbasha736@gmail.com).

```plaintext
Feel free to customize any sections or details to better fit your project or preferences!
```


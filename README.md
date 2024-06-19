Book Search and Purchase Application


This application allows users to search for books using the Google Books API, view details of selected books, and purchase books with a simple payment form. The application is built using React and utilizes several components for different functionalities.

Components:

Main: Handles the search input and fetches book data from the Google Books API.

Card: Displays book cards with basic information and opens a modal with detailed information on click.

Modal: Shows detailed information about the selected book and includes a button to purchase the book.

Cart: Handles the payment process, allowing users to enter their payment information and process the payment.

Installation:

1. Clone the Repository

2. Install dependencies: npm install

3. Start the development server: npm start



API Integration

The application uses the Google Books API to fetch book data. Replace YOUR_API_KEY in the Main component with your actual Google Books API key.

axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=YOUR_API_KEY&maxResults=40`)

# Koffee - Angular E-commerce Web App with Stripe

## About the project
This project connects to a mock products API that I have built to retrieve a list of products. The user can browse through the various products and add them to their cart. The cart items are saved in the local storage so that they remain even after the user closes the browser. The cart has a functional feature where users can add or delete items from their cart. The checkout process is seamlessly integrated with <a href="https://stripe.com">Stripe</a>. 

The Stripe integration is built using node.js and express.js, providing a powerful and scalable backend platform for the ecommerce site.
To improve performance, the project implements lazy loading for certain components. This means that certain components will only be loaded when needed, rather than all at once.


The header style is also changed based on the current URL route. This allows for a better user experience as the header adjusts to the current page the user is on.
The products are also sorted by category to make it easier for users to find what they are looking for.<br>

Live web application: <a href="https://koffeeshop.netlify.app/">Click Here</a></p>

## Project Functionalities
<ul>
    <li><strong>Connects to mock products API:</strong> The project is connected to a mock API that provides a list of products for the user to browse and purchase.</li>
    <li><strong>Functional cart:</strong> Users can add and delete items from their cart as they shop.</li>
    <li><strong>Stripe Mock Checkout:</strong> User is able to successfully complete test payment transaction.</li>
    <li><strong>Lazy loading components:</strong> The project uses lazy loading to optimize performance and improve the user experience.</li>
    <li><strong>Header style changed based on URL route:</strong> The header style changes depending on the route that the user is on. This helps to improve the overall design and user experience of the site.</li>
    <li><strong>Products sorted by category:</strong> The products are sorted by category, making it easier for users to find what they are looking for.</li>
</ul>

## My Experience
I wanted to challenge myself and try building something more advanced, so I decided to take on the task of building a full ecommerce website. It was a challenging project, but I enjoyed the process of learning and developing my skills as a web developer. The end result was a fully functional ecommerce site that is able to sell products and process transactions online. It was a rewarding experience and I am proud of the end result.

## Built With

- Angular
- TypeScript
- Node.js
- Express.js
- Stripe API
- Mock API


## Stripe Checkout flow
<p>** CHECKOUT PORTAL IS ON TEST MODE, PAYMENT WILL NOT PROCESS IF PERSONAL CREDITCARD NUMBER INFORMATION IS USED  **</p>
<p>FOR CHECKOUT USE:</p>
<ul>
    <li><strong>Email:</strong> test@example.com</li>
    <li><strong>Card Number:</strong> 4242 4242 4242 4242</li>
</ul>

<p><strong>Example:</strong></p>
<p align="center"><img src="./src/assets/images/test-checkout-cart-stripe.png" width=600 height=400></p>
<p align="center"><img src="./src/assets/images/test-checkout-stripe.png" width=600 height=400></p>
<p align="center"><img src="./src/assets/images/test-checkout-processing-stripe.png" width=600 height=400></p>
<p align="center"><img src="./src/assets/images/test-checkout-success-stripe.png" width=600 height=400></p>


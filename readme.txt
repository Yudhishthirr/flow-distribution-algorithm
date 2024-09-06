Implementation Steps

1. Data Structure :

I have define two classes, Astrologer and User, to represent the attributes and current flow status. 
These will be stored in memory for now, but can later be connected to a database.

2. Algorithm Design :

I implement a round-robin approach to distribute users evenly among astrologers,
with adjustments for top astrologers based on their multiplier.

Adjusting Flow for Top Astrologers
The astrologers who are marked as isTopAstrologer will have their flow adjusted based on the multiplier. 
This can be toggled through an API to either increase or decrease their flow.

3. API Design :

I build a simple REST API using express.js. Endpoints will include:

GET /astrologers: Fetch all astrologers and their flow status.
POST /allocate: Allocate users to astrologers based on the algorithm.
PATCH /astrologers/
/toggle: Toggle top astrologer status and adjust flow multiplier.

4. Backend Implementation :

The backend logic uses Express.js to handle user requests and manages the flow distribution by interacting with the algorithm. 
I store astrologers and users in memory for simplicity, but this can be connected to a database (like MongoDB).

Testing

I write tests using Mocha and Chai to validate the functionality of the algorithm.

Additional Considerations

Scalability: 
I can scale this by using a database for storing astrologers and users and implementing techniques like batching to process large volumes of users efficiently.

Security: 
Implement JWT-based authentication for securing the API, especially when toggling astrologer settings or allocating users.

Final Deliverables
Node.js backend code implementing the flow distribution algorithm.
API documentation explaining how to interact with the endpoints.
Test cases to validate the algorithm under different scenarios.
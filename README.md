MongoDB-Relationship-Patterns
│── models/
│   ├── user.js        // 🟢 One-to-Few (Embedded Documents)
│   ├── order.js       // 🟡 One-to-Many (>1000) with ObjectId References
│   ├── post.js        // 🔴 One-to-Squillions (>10000) handling large data


⚡ Relationship Types
🟢 One-to-Few (user.js)

Small number of related items (e.g., user with a few addresses or phone numbers).

Uses embedded documents for efficiency.

🟡 One-to-Many (order.js)

Medium number of related items (up to thousands).

Uses ObjectId references for better scalability.

🔴 One-to-Squillions (post.js)

Very large related datasets (e.g., comments on viral posts).

Uses referencing with pagination, indexing, and separate collections for performance.


# 📦 MongoDB Relationship Patterns with Mongoose  

This repository demonstrates three key types of **one-to-many relationships** using MongoDB and Mongoose, reflecting real-world application patterns:  

- 🟢 **One-to-Few (Embedded Documents)**  
- 🟡 **One-to-Many (References using ObjectIds)**  
- 🔴 **One-to-Squillions (Massive Volumes of Related Data)**  

---

## 📂 Folder Structure  

```bash
MongoDB-Relationship-Patterns/
│── models/
│   ├── user.js   # 🟢 One-to-Few (Embedded Documents)
│   ├── order.js  # 🟡 One-to-Many (>1000) with ObjectId References
│   ├── post.js   # 🔴 One-to-Squillions (>10000) handling large data
│
│
│── package.json  # Project dependencies
│── README.md     # Project documentation

# Elle - A learning management application


## Description

This app was built as an online learning management portal for students to subscribe to courses created by their teachers to facilitate online learning.

### Tech

```
- React and React Router
- Redux for state management (work in progress)
- SASS
- Axios for API
- ExpressJS, NodeJS and MongoDb for database
- Rechart.js for data visualisation
- Socket.io for chat and game functionality (work in progress)

```

### User Stories

```
The student should be able to:
- view a dashboard of his/her course achievements (data-driven learning experience)
- enroll in courses
- view a main/preview of the course 
- start and save progress in the attempt of the course
- chat with other students and/or teachers
- play multi-player games with other students

The teacher should be able to:
- Upload course content
```

---

### Planning and Development Process
I started out with sketching on figma the overall flow of the app and the various functionality/user stories I wanted to incorporate into Elle. Then I moved onto figuring out the overall model structure of the database. I had to decide between using PostgreSQL (SQL) and MongoDB (noSQL) databases. I eventually decided on mongoDB as I decided to not restrict the structure of the courses model, which would fit better in the noSQL database. The main challenge of this app was time management to be able to deliver the desired functionality within a week.

### Unsolved problems/Work In Progress

- pagination and completion of lessons
- chat functionality
- game functionality
- media query to adapt to screen size
```




# Virtual Classroom(Web-App)
<!--A web application for online classroom where you can create your own class or can join someone else's. An online Assignment creation / submission and Grading application. -->

- A Full Stack web application for an online classroom where you can create your own class or can join someone elseโs.
- Mentors/teachers can create assignments, create quiz/tests, add study materials and can grade students submissions.
Students can directly access all the study materials on one portal, can submit assignments, get graded and and can
even ask doubts on the portal.
- There is also a discussion tab where teachers can interact virtually with the class and students can ask their queries.

Check it out at [DS Classroom](https://dsvirtualclassroom.herokuapp.com/) ๐


[![HitCount](http://hits.dwyl.com/Deeksha2501/Online_Classroom_Web_App.svg)](http://hits.dwyl.com/Deeksha2501/Online_Classroom_Web_App)

## Setting up

    npm install
    npm run devStart

Page will automatically get refreshed after you change anything in your files.

### Screenshots of the project

#### Welcome page
![welcome image](./public/wecome.png)

#### Dashboard of user
![dashboard](./public/dashboard.png)

#### Create Assignment (teacher dashboard)
![assignment creation](./public/create_assign.png)

#### Page showing submission of students
![submitted work](./public/marks.png)

### File Tree

```
Online_Classroom_Web_App
โโโ .env
โโโ .gitignore
โโโ node_modules
โโโ package.json
โโโ Procfile
โโโ package.lock.json
โโโ README.md
โโโ app.js
โโโ assignment
โ   โโโ app.js
โโโ homework
โ   โโโ app.js
โโโ config
โ   โโโ auth.js
โ   โโโ key.js
โ   โโโ password.js
โโโ db
โ   โโโ projectdb.js
โ   โโโ schema.js
โโโ models
โ   โโโ User.js
โโโ models
โ   โโโ User.js
โ   โโโ key.js
โ   โโโ password.js
โโโ public
โ   โโโ DSwithname.png
โ   โโโ dash_img.png
โ   โโโ stylesheet.css
โโโ routes
โ   โโโ index.js
โ   โโโ users.js
โ   โโโ password.js
โโโ views
โ   โโโ dashboard.ejs
โ   โโโ index.ejs
โ   โโโ layout.ejs
โ   โโโ login.ejs
โ   โโโ post_something.ejs
โ   โโโ register.ejs
โ   โโโ welcome.ejs
.   โโโ faculty
.   |   โโโ class_creation.ejs
.   |   โโโ classes.ejs
    |   โโโ faculty_assign_create.ejs
    |   โโโ faculty_classwork.ejs
    |   โโโ faculty_dashboard.ejs
    |   โโโ faculty_students.ejs
    |   โโโ faculty_submitted_hw.ejs
    โโโ faculty
    |   โโโ create_assignment.ejs
    |   โโโ given_assignment.ejs
    |   โโโ join-class.ejs
    |   โโโ student_classwork.ejs
    |   โโโ student_dashboard.ejs
    |   โโโ student_people.ejs
    |   โโโ submitted_homework.ejs
    โโโ partials
    |   โโโ footer.ejs
    |   โโโ header.ejs
    
```

# About

This app is a website for my brother's record store. It contains information
regarding his business as well as pictures and a blog. The blog can be viewed
along with the comments for each blog post when a user is logged out. When a
user is logged in the user can create comments for a blog, edit blogs that
they've created, and delete blogs they've created.

When first beginning the project I wanted to create a webpage that had blogs and
an e-commerce functionality. I first began with revamping the authorization
layout by creating a new sidebar and removing modals entirely from my app.
Once that was complete I started to research how to implement Stripe, an
e-commerce API that is very developer friendly. Unfortunately, I think I may
have overcomplicated the problem in the early stages of implementation. After
several failed attempts I decided to postpone Stripe implementationm and focus
on getting blogs and blog comments out of the way.

I wanted to make the UI for blogs really nice so I spent a lot of time making
all of the CRUD actions intuitive to use. I encountered some bugs along the way
that held me up but I was finally able to complete this feature.

Unfortunately I was not able to implement Stripe during this project. I realized
about half-way through that I wouldn't be able to implement it so I decided to
attempt to implement cookies. After a half-a-day of reading rails docs I settled
for storing the user token in local storage and then retrieving that token upon
page re-visit as a way to persist user log in states.

If I were to have more time on this project I would defintely want to implement
Stripe along with the two models I've created on the backend but haven't set a
relationship to yet.

I am most proud of my sidebar and how my jquery works to create a descent blog
experience (everything responds as expected). Also, while I was not able to
implement all of the features I wanted to. The documentation I read and other
things I learned while trying was a good experience that I will build off of.

![Alt text](https://github.com/SquirtleSquad1988/moody-lords-front-end/blob/master/Screen%20Shot%202017-03-30%20at%2011.49.02%20PM.png "Moody Lords Home")

# Dependencies

- npm install

# User Stories

- As a user I want to be able to visit the page and view blog posts so I can see Moody Lord's posts
- As a user I want to be able to view information about Moody Lords Record Shop
- As a user I want to be able to comment on Moody Lord's blog posts
- As a user I want to be able to view all blog posts if I'm not signed in
- As a user I want to be able to delete my comment if I own it
- As a user I want to be able to delete my blog if I own it
- A a user I want to view records for sale so I can see if I want to purchase any

# Technologies Used

- AJAX, JavaScript, jQuery, Ruby, Ruby on Rails, Handlebars, Bootstrap, HTML, CSS

# Wireframes and ERD

-  [Wireframes](http://imgur.com/a/YJwub)
-  [ERD](http://imgur.com/a/hBUcj)

# Links

- [Backend GitHub Repository](https://github.com/SquirtleSquad1988/moody-lords-back-end)
- [Backend Deployed URL](https://gentle-woodland-20573.herokuapp.com/)
- [Frontend Deployed URL](https://squirtlesquad1988.github.io//moody-lords-front-end/)

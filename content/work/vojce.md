---
key: "work"
title: "vojce"
tags: ["leisure", "web", "android"]
start: 2015
---
A social web application for creating and answering micro-polls. This is a pet side-project that I keep coming back to but never finished. Through the years i've attempted to rewrite the front-end 3 (and a half) times, which has allowed me to indulge in many new frameworks and technologies.
<!-- end -->
When discussing any kind of topic among your friends and you disagree in some matter, it could be interesting to find out what the general public thinks about it. Maybe it is about something important like the election, filosofical like life after death, useful like book review opinions or something completely absurd like what color the dress is. What if...? Would you rather...? What is most important...?

The goal is to provide a platform where people not only can get **direct result** after **anonymously voting** on a poll, but can also filter the results to view **statistics** on certain properties of the voters like nationality, age and gender. People should be able to search for polls, follow them, add poll tags for filtering and discuss in the comments.

####Back-end 
**REST** server written in **Node.js**® with **Express** as the web application framework. The database is **MongoDB** and I am using **Mongoose** as ODM.

####Front-end: 
First iteration in 2015 I attempted to write this in **AngularJS** (Angular 1.4), and **Bootstrap**. I did not like the framework, and later swapped it for **Aurelia** which was still in alpha stage, and **SemanticUI** as CSS framework. I got far enough to publish a first version at [vojce.com](https://www.vojce.com/). Later I realized, that it is not a web application I wanted for this project.

The next version of the client was written with **React Native** and **Redux**. The project has come far enough to be able to vote, see results, and view basic statistics about the genders and age of the voters. Although, since this was my first encounter with React, I have begun refactoring the client to a better state.
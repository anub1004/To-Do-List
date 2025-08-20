Responsive To-Do List with Alarm & Speech Notifications
Overview

This is a responsive To-Do list web application built with HTML, CSS, and JavaScript. It allows users to:

Add tasks with optional date-time reminders.

Mark tasks as completed with speech feedback.

Automatically play an audio alarm when a task’s time is reached.

Persist tasks using localStorage.

Responsive design for desktop, tablet, and mobile screens.

Features

Add Tasks

Enter a task and optionally select a date-time for reminders.

Click the Add button to save the task.

Task Completion

Click a task to mark it as completed.

A speech notification says “Task Completed”.

Delete Tasks

Click the × button to delete a task.

A speech notification says “Task deleted”.

Audio Alarm Reminders

If a task has a date-time set, the app will play an audio alarm when the current time matches.

The alarm plays only once per task.

Tasks with past times are automatically removed.

Persistence

All tasks are saved in the browser using localStorage, so tasks remain after refreshing the page.

Responsive Design

Works on desktops, tablets, and mobile devices.

Layout adjusts automatically for small screens: input fields, buttons, and task list resize and stack vertically.

Technologies Used

HTML5 – Structure of the app.

CSS3 – Styling, including responsive design using media queries.

JavaScript (ES6+) – Logic for task management, speech notifications, date-time checks, and localStorage.

Web Audio API – For speech synthesis and alarm sound.

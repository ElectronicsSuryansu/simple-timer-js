Simple JavaScript Timer with Lap Feature

A lightweight and beginner-friendly timer web app built using HTML, CSS, and JavaScript.
It includes essential timer controls like Start, Stop, Pause, Reset, and a Lap Timer to record split times.

 Features

Start Timer – Begin the stopwatch.

Pause Timer – Temporarily halt the timer without resetting.

Stop Timer – Stop and freeze the timer.

Reset Timer – Set everything back to 00:00:00.

Lap Functionality – Record multiple lap times while the timer is running.

Responsive UI – Works smoothly on mobile and desktop.

Clean & Modern Look – Styled using CSS.
Project Structure
 /PROJECTTIMER
│── index.html
│── style.css
│── script.js
│── README.md
Technologies Used

HTML5 for structure

CSS3 for styling

JavaScript (ES6) for stopwatch logic
How Lap Works

Every time you press the Lap button while the timer is running,
the current time is pushed to a list and displayed below the timer.

Laps do not affect the main timer.
JavaScript main logic:

Uses setInterval() to update milliseconds, seconds, and minutes.

Uses flags (like running/paused states) to control the flow.

Lap times stored in an array and displayed dynamically.
Future Improvements (Optional)

Add hour support

Export lap times as .txt or .csv

Add animations

Add dark mode

Add sound alerts


Author Suryansu Jha

-Suryansu Jha
A student learning Web Dev, Electronics, and JavaScript projects.

# Code explanation

I chose to implement the styled calculator.

The page code is located in src/app/app.component.ts.
The page template is located in src/app/app.component.html.
The page styles are located in src/app/app.component.scss.

Theming is controlled by adding a theme CSS class to the outermost DIV
element containing all of the page HTML.  Upon selection of a theme in the
dropdown above the calculator, the appropriate class is added to the DIV.
The styling is then defined by CSS rulesets, one SCSS grouping per theme.

Button layout is done using Bootstrap's responsive grid layout, where
columns are given a different number of units in the total grid width,
and that allotment of units differs, depending on the general viewport
width.

Styling of button states is done with a combination of Angular event binding
and Angular CSS class binding.  Upon the mouse down event on a button,
the button is marked as the active one.  An "active" CSS class, whose
ruleset defines the button state when the mouse is down, is applied to
the currently active button.  Upon the mouse up event, no button is marked
as the active one, and so no button contains the "active" CSS class.

Note: I found the exercise's "Mockups" and "Colors" sections
ambiguous and incomplete, so I felt I had to make some choices based on
educated guesses.  For example, the "base" color in Theme 2 is in
grayscale, but the corresponding mockup shows no grayscale colors.  When
in doubt, I chose to follow the "Colors" section directives to the letter.
There were also no colors provided for the button states illustrated in
the "Mockups" section.  I assumed the illustrated states were showing
what the buttons should look like when pressed, and for that, I used
the mockups as a loose guideline.

Also upon the mouse up event, a call is made to function "readInput" that
at this point just logs the clicked button to the browser console.  In
the event the clicked button was the "equals" sign, the current total
is logged, via a call to function "showResults".  Note that the
calculator total is not actually updated at any point.  I opted to leave
that to the fictitious "other development team".

# Technical choices

I chose to use Angular 8, Bootstrap 4, and SCSS because I have had recent
experience with them, and so I have a good comfort level.  Additionally,
Bootstrap's grid layout provides an accessible way to implement a responsive
design.  Angular is also based on TypeScript, and specifying variable
and function argument typing provides a sort of comment-less level of code
self-documentation.

# Trade-offs

Angular may be a heavy framework for this exercise, particularly since the
page content never changes.

# With more time

With more time, I would have made the page template more concise and elegant,
in particular reducing the noise of the nearly duplicated code for event
binding on each calculator button.  I may have introduced a data model for
the buttons and their layout, and in the page template had a more
programmatic approach based on the model.

# InfoGenerator
This is a web app to generate json files with randomized user information populated in them

Currently it's a fairly basic code that only pulls from a small object in the app.js file and displays a random number of "people." But I intend to extend it to pull from its own master JSON file and to add several customization options.

# Current features
-Upon clicking "generate" app will fill textarea with a random selection of user data (up to 10 objects) formatted for JSON

-User can select number of objects they want generated. When empty or 0 a random number (up to 10) is generated instead. Field does not accept anything other than numbers.

-User can specify which key/value pairs to include in JSON via checkboxes

-Generates "email" value based on firstName and lastName values along with randomized domain, defaults to "example" if no name boxes checked


# Planned features
-Add some CSS to make it pretty

-Move current dataPool object to its own JSON file and extend its contents

-Add a button to copy data to clipboard (maybe, current select button is funcitonal)

-Allow user to instead fill in custom e-mail domain to populate "email" value

-Randomly generated phone number value (will contain 555 to prevent creating real numbers on accident)

-Eventual allowing user to designate area code (optional)

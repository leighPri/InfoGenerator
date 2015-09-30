# InfoGenerator
This is a web app to generate json files with randomized user information populated in them

Currently it's a fairly basic code that only pulls from a small object in the app.js file and displays a random number of "people." But I intend to extend it to pull from its own master JSON file and to add several customization options.

# Current features
-Upon clicking "generate" app will fill textarea with a random selection of user data (up to 10 objects) formatted for JSON

-User can select number of objects they want generated. When empty or 0 a random number (up to 10) is generated instead. Field does not accept anything other than numbers.

-User can specify which available key/value pairs to include in JSON via checkboxes

-Generates "email" value based on firstName and lastName values along with randomized domain, defaults to "example" if no name boxes checked

-Generates a fake phone number (US format, starts with "555"). User can designate a custom area code. If field is left blank
or invalid a random one will be generated.


# Planned features
-Move current dataPool object to its own JSON file and extend its contents

-Add a button to copy data to clipboard (maybe, current select button is functional)

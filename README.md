# Senior Center Management Studio
The app lives on the url: https://d2bnj46sw9kk10.cloudfront.net/

# USER DOCUMENTATION
User Documentation is written for admin users. The site is supported for both desktop use and mobile use.

### Logging In
Every page of the site besides login and documentation is locked behind a secure login. Request a username/password from Brandon.may1026@gmail.com. Admins can create other admin accounts once logged in.

### Adding Members
Once logged in, click on the "Members" button, and then on Add. Fill in all of the information for the member being added, and then click submit. A member will be added to the database. After adding a member, the table will refresh and you will see the member in the table.

### Updating Members
From the members page, simply click the update button in the row of the member you'd like to add. This will populate a modal with the current member information that you can change however you'd like. Click save to modify the member in the database.

### Deleting Members
Once logged in, click on the delete button in the member table to remove from the database. Be careful, this is one-click and cannot be undone.

### Adding Volunteers
Works just like adding members.

### Updating Volunteers
Works just like updating members.

### Deleting Volunteers
Works just like deleting members.

### Adding Activities
Works just like adding members.

### Updating Activities
Works just like updating members.

### Deleting Activities
Works just like deleting members.

### Adding/Removing Member to Activity
Navigate to the Activities (Services) tab. Here you can click "Manage Members" next to any activity. This will generate a list of members at the Senior Center. To add that member to an activity, simply click the add button next to their name. You will see a list of members added to that activity. You can not add a member that has already been added. You can remove a member from an activity the same way. Deleting a member will remove them from an activity.

### Export Reports
Navigate to the Reports tab. Here you'll find buttons to download each of the tables in our database. Browser's that are currently supported are: Chrome, Firefox, and Brave. The files are .csv, which can be opened and updated in Excel.

# DEVELOPER DOCUMENTATION
- Github Repository: https://github.com/Rusty89/SeniorCenterManagmentStudio
- The latest stable/release version can be found on the 'master' branch of the GitHub repository.
- The 'develop' branch of the GitHub repository is used for development between stable releases.
* Directory Organization - 
- All test files and documentation is located in the root directory
- Lambda functions for database interaction is located in the root directory under "client-app-lambda"
- The angular webapp is located in the root directory under "client-app"

## Build the Application
After installing Node.js, navigate to the /client-app/ folder of the project. Run 'npm install' to install all dependencies. Run 'ng serve' to build the development version of the app. The /dist/ folder is what will need to be uploaded to S3 to publish to the web.

## Database
The database used for the project is AWS DynamoDB. This uses NoSQL, and uses  the json format to return information. We used the AWS web console to build the tables, but you can also use boto3 to build the tables in python (https://boto3.amazonaws.com/v1/documentation/api/latest/guide/dynamodb.html). You will need a table for members, activities, etc.
* Members table uses 'id' as the table key
* Activites table uses 'act_id' as the table key
* Volunteers table uses 'vol_id' as the table key
* Involvements uses 'involve_id' as the table key 

## Hosting
The angular build files are hosted in a AWS S3 bucket. This will load the angular app when you go to the domain set on the bucket, allowing you to host the app for free, and then can set up a domain name to point at the bucket it self. 

## Test the Software
- Link to Travis CI : https://travis-ci.org/Rusty89/SeniorCenterManagmentStudio/
- Currently using Travis CI to test builds of the project.
- Use Selenium IDE to run side tests
- Unit tests are handed by Angular
* Automated Testing 
- Travis CI


## Known Bugs
* ~~Refreshing while it is hosted on S3 currently does not work (2/24/19)~~
* Mobile needs optimized (2/24/19)
* ~~Adding a member opens a new page instead of a pop-up modal (3/1/2019)~~
* ~~DB key is on a month (3/1/2019)~~
* ~~ngModel breaks app when wrapped with login functionality (3/13/2019)~~
* ~~If a bad username or password are supplied at login, no error message is given (3/14/2019)~~
* ~~Modals don't die on a page switch or reload (3/14/2019)~~
* ~~Modals keep generating by repeat button presses instead of toggline on/off (3/14/2019)~~
* ~~Member/Services modals don't render under the scope of login functionality (3/14/2019)~~
* ~~All form text is centered where it shouldn't be (3/14/2019)~~
* ~~Some forms don't fit well in modals (3/29/2019)~~
* ~~Activities form has extra fields not used/relevant to activities(3/29/2019)~~
* ~~No Reports features are implemented, the reports buttons do nothing(3/29/2019~~
* ~~Involvments report does not yield useful data(4/10/2019)~~
* Cannot export the activity involvement table to CSV (4/11/2019)
* Removing Members/Volunteers/Activities from the db is one-click, no warning (4/11/2019)



Email Brandon.may1026@gmail.com for any additional support needed


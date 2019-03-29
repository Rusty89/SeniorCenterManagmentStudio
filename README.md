# Senior Center Management Studio
The app lives on the url: https://d32v9t9jekje0e.cloudfront.net/

# USER DOCUMENTATION
User Documentation is written for admin users. The site is supported for both desktop use and mobile use.

### Logging In
Every page of the site besides login and documentation is locked behind a secure login. Request a username/password from Brandon.may1026@gmail.com. Admins can create other admin accounts once logged in.

### Adding Members
Once logged in, click on the members button, and then on Add. Fill in all of the information for the member being added, and then click submit. A member will be added to the database. After adding a member, you must navigate to a different page and then back to see the member load. Refreshing is still not working right.

### Updating Members
From the members page, simply click the update button in the row of the member you'd like to add. This will populate a modal with the current member information that you can change however you'd like.

### Deleting Members
Once logged in, click on the delete button in the member table to remove from the database

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

### Print Reports
This feature is not yet supported.

### Export Reports
This feature is not yet supported.

# DEVELOPER DOCUMENTATION
- Github Repository: https://github.com/Rusty89/SeniorCenterManagmentStudio
- The latest stable/release version can be found on the 'master' branch of the GitHub repository.
- The 'develop' branch of the GitHub repository is used for development between stable releases.
* Directory Organization - 
- All test files and documentation is located in the root directory
- Lambda functions for database interaction is located in the root directory under "client-app-lambda"
- The angular webapp is located in the root directory under "client-app"

## Build the Application
Run 'ng serve'. The /dist folder is what will need to be uploaded to S3.

## Database
The database used for the project is AWS DynamoDB. This uses NoSQL, and uses json's to return the information to you. We used the AWS web console to build the tables, but you can also use boto3 to build the tables in python (https://boto3.amazonaws.com/v1/documentation/api/latest/guide/dynamodb.html). You will need a table for members, activities, etc.
* Members table uses 'id' as the table key
* Activites uses 'act_id' as the table key

## Hosting
The angular build files are hosted in a AWS S3 bucket. This will load the angular app when you go to the domain set on the bucket, allowing you to host the app for free, and then can set up a domain name to point at the bucket it self. 

## API Gateway

## Test the Software
- Link to Travis CI : https://travis-ci.org/Rusty89/SeniorCenterManagmentStudio/
- Currently using Travis CI to test builds of the project.
* Automated Testing 
- Travis CI


## Known Bugs
* ~~Refreshing while it is hosted on S3 currently does not work (2/24/19)~~
* Mobile needs optimized (2/24/19)
* ~~Adding a member opens a new page instead of a pop-up modal (3/1/2019)~~
* DB key is on a month (3/1/2019)
* ~~ngModel breaks app when wrapped with login functionality (3/13/2019)~~
* If a bad username or password are supplied at login, no error message is given (3/14/2019)
* ~~Modals don't die on a page switch or reload (3/14/2019)~~
* ~~Modals keep generating by repeat button presses instead of toggline on/off (3/14/2019)~~
* ~~Member/Services modals don't render under the scope of login functionality (3/14/2019)~~
* ~~All form text is centered where it shouldn't be (3/14/2019)~~
* Some forms don't fit well in modals (3/29/2019)
* Activities form has extra fields not used/relevant to activities
* No Reports features are implemented, the reports buttons do nothing
* 

Email Brandon.may1026@gmail.com for any additional support needed


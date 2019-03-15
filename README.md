# Senior Center Managment Studio

# USER DOCUMENTATION
User Documentation is written for admin users. The site is supported for both desktop use and mobile use.

### Logging In
There are temporarily two forms of login for added sercurity. The first uses a username/password handled by Amazon before any site pages can be accessed. To request access, please email Brandon (see below).

The second is a login/registration system written by us. Currently, anyone can register for an account and has admin access after login. All pages are locked down until logged in. Passwords are (temporarily) stored in plain text in a database, please do not use real username/password combinations used elsewhere. 

### Adding Members
Once logged in, click on the members button, and then on Add. Fill in all of the information for the member being added, and then click submit. A member will be added to the database.

### Deleting Members
Once logged in, click on the delete button in the member table to remove from the database

### Adding Activities

### Deleting Activities

### Print Reports

### Export Reports

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

## Bugs
* Refreshing while it is hosted on S3 currently does not work (2/24/19)
* Mobile needs optimized (2/24/19)
* ~~Adding a member opens a new page instead of a pop-up modal (3/1/2019)~~
* DB key is on a month (3/1/2019)
* ~~ngModel breaks app when wrapped with login functionality (3/13/2019)~~
* If a bad username or password are supplied at login, no error message is given (3/14/2019)
* Modals don't die on a page switch or reload (3/14/2019)
* Modals keep generating by repeat button presses instead of toggline on/off (3/14/2019)
* Member/Services modals don't render under the scope of login functionality (3/14/2019)
* All form text is centered where it shouldn't be (3/14/2019)

Email Brandon.may1026@gmail.com for any additional support needed

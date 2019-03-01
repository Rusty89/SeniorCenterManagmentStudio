# Senior Center Managment Studio

# USER DOCUMENTATION
User Documentation is written for admin users. The site is supported for both desktop use and mobile use.
### Adding Members
Once logged in(not currently available), click on the members button, and then on Add. Fill in all of the information for the member being added, and then click submit. Member should be added to the database.

### Deleting Members
Once logged in(not currently available), click on the members button, and then on update/remove.

### Adding Activities

### Deleting Activities

### Print Reports

### Export Reports


# DEVELOPER DOCUMENTATION
- Github Repository: https://github.com/Rusty89/SeniorCenterManagmentStudio
- The latest stable/release version can be found on the 'master' branch of the GitHub repository.
- The 'develop' branch of the GitHub repository is used for development between stable releases.
* Directory Organization - 
- All HTML and CSS files are stored in the 'Web App HTML and CSS' folder.

## Build the Software
Run 'ng build'. The /dist folder is what will need to be uploaded to S3.

## Database
The database used for the project is AWS DynamoDB. This uses NoSQL, and uses json's to return the information to you. We used the AWS web console to build the tables, but you can also use boto3 to build the tables in python (https://boto3.amazonaws.com/v1/documentation/api/latest/guide/dynamodb.html). You will need a table for members, activities, etc.
* Members table uses 'id' as the table key
* Activites uses 'act_id' as the table key

## Hosting
The angular build files are hosted in a AWS S3 bucket. This will load the angular app when you go to the domain set on the bucket, allowing you to host the app for free, and then can set up a domain name to point at the bucket it self. 

## API Gateway


## User login's
Login and user privileges are handled through Amazon Cognito.

## Test the Software
- Link to Travis CI : https://travis-ci.org/Rusty89/SeniorCenterManagmentStudio/
- Currently using Travis CI to test builds of the project. Intentional fail set up looking for Javascript files.
* Automated Testing 
- Travis CI

## Bugs
* Refreshing while it is hosted on S3 currently does not work.(2/24/19)
* Mobile buttons not responsive.(2/24/19)
* Stores Date of Birth as the month only, not as day month and year.(2/24/19)
* Add a member opens a new page instead of a pop-up (3/1/2019)
* DB key is on a month (3/1/2019)

Email Brandon.may1026@gmail.com for any additional support needed

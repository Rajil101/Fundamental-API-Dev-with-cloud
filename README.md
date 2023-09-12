# Fundamental-API-Dev-with-cloud

 
* In the index.js we have the witten code as main file for execution and the schemas and model is integrated in the same through the usermodel.js,
  
the application would be running through the usage of nodemon which is a tool that helps develop Node.js based applications by automatically restarting 

the node application when file changes in the directory and helps to get better utilisation.




.....



* Here first to make an empty directory for the package initialisation, then we have to install the node,nodemon,express the in the terminal,

npm install -y

npm install express nodemon




......

* After these create an model folder on same directory and create the user model where the schema will be build and export it so we can use in the main js file.



......

* You can import the file by simply write require function for example, 

require('./model/usermodel.js')




.......

*There are multiple headers in the rest api architecture:

GET
PUT
POST
ATTACH
etc




.....

* In these project the get and post method have been use with various function of updatation to removal also creating the structure of schema with differential ways of utility.




......

*For database in the project I have used the mongodb atlas as the objective of these for integrating the cloud based application rather then the local level database usage and you can use mongodb compass  if you want the local database creation, in that few lines of code of creating the model can be write in the same main file like here is the {index.js}. 





.....

* If you want to create the atlas database, first you have to login to platform,

In your organisation you can create another named project for better atomicity.



..

=> Firstly you have to create an cluster of you choice of region and pricing moreover you can access free cluster creation with using "shared" catagory
then name the database of you choice and collection which will be the inner schemas of your database.


..

=> Now edit the browse collection with your set of schema type and save.



..

=> Then click on the connect option in the database deployment and find the link of your conneted database for the link to be connected in the "moongoose.connect()"  function.
therefore the link of the connected database will be edited with the password which you have created at the time of database creation.




....

***You can experiment in the creation and headers usage with your choice***



....

* Attaching few screenshot for refrence:


...
  
![Database-collection](https://github.com/Rajil101/Fundamental-API-Dev-with-cloud/assets/86475883/feb698aa-ce74-424a-8428-72e5d9c5848d)




...
![Get method url](https://github.com/Rajil101/Fundamental-API-Dev-with-cloud/assets/86475883/de71fcc5-84ea-4227-ba06-03dc9325be1a)




....
![Post method url](https://github.com/Rajil101/Fundamental-API-Dev-with-cloud/assets/86475883/dc8fd468-064b-443b-aad2-520cec119508)



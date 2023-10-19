# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions:

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?
FSWD Ilene
Your answer: In order to fix this you will need to do a migration to add a new column into your second model called Student. Create the migration by typing in your terminal: rails g migration AddForeignID or whatever you want to call your new migration. Then in that migration model add the column. While adding a new column you will need to ensure that you type in the add_column :table_name (which will be your student table model. The model you want your column to be added into) and then :foreign_id_name (this has to be what your model is called when you created the Cohort class. In this case it should be cohort_id) finally you add :data_type

Researched answer: Start off by generating a migration. In the terminal run: rails g migration NameOfMigration this will allow you to add a column to the student table. Then edit the generated migration file by using add_column :students, :cohort_id, :integer. Make sure to save this by typing: rails db:migrate in the terminal. Finish creating the belongs_to inside the students model, so the Students belongs_to a Cohort. This will allow the foreign key to work!

more content:

2. Which RESTful routes must always be passed params?
FSWD Aleja
Your answer: edit, delete, show, and update because to do perform any of those actions we need to know on what entry we are perfoming them

Researched answer: the show RESTful route lists one item in a particular mode, the delete RESTful destroys one item and removes information, the update RESTful route is the right convenction for the edit and update method because update can patch(edit) or put(update)

more content:

3. Name three rails generator commands. What is created by each?
FSWD Mal
Your answer: rails generate model + model information creates a new model and adds the values it requires. rails generate migration creates a migration that makes changes to the database. Those are the only two I can remember, sorry!!

Researched answer: rails generate scaffold creates the files required to start a new rails app.

more content:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

FSWD Anabella

action: "GET" location: /students CONTROLLER METHOD: showing action ACTION PERFORMED: retrieving or reading data regarding students

action: "POST" location: /students CONTROLLER METHOD: creating action ACTION PERFORMED: creating or adding new data on the server, creation of a new student record or resource

action: "GET" location: /students/new CONTROLLER METHOD: showing action ACTION PERFORMED: retrieving or reading data for a new student record

action: "GET" location: /students/2 CONTROLLER METHOD: showing action ACTION PERFORMED: retrieving or reading data for a new student record

action: "GET" location: /students/2/edit CONTROLLER METHOD: showing action ACTION PERFORMED: editing data aassociated with the ID of 2

action: "PATCH" location: /students/2 CONTROLLER METHOD: updating action ACTION PERFORMED: apply changes or modification data for a new student record

action: "DELETE" location: /students/2 CONTROLLER METHOD: destoying an existing resource ACTION PERFORMED: removing or deleting the specific student ID of 2.

more content:

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.
FSWD Dre
1- As a user, I want to be able to create a new to-do item so that I can add tasks I need to complete.

2- As a user, I want to be able to set a due date for each to-do item so that I can prioritize my tasks.

3- As a user, I want to be able to categorize my to-do items into different lists or categories (e.g., work, personal, shopping) for better organization.

4- As a user, I want to mark to-do items as completed so that I can track my progress.

5- As a user, I want to edit the details of a to-do item (e.g., title, description, due date) in case I need to make changes.

6- As a user, I want to be able to delete to-do items that are no longer relevant or necessary.

7- As a user, I want to set reminders or notifications for important to-do items to help me stay on track.

8- As a user, I want to be able to prioritize to-do items by assigning them a level of importance or urgency.

9- As a user, I want to view all my to-do items in a list format so I can quickly see what tasks I need to complete.

10- As a user, I want to search and filter my to-do items based on different criteria, such as due date, category, or priority, to find specific tasks easily.

more content:

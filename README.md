# back-end

/--------------------------------------------/ CLASS ROUTES /-----------------------------------/

GET CLASSES
/api/classes


get classes example:

    "id": 1,
    "class_name": "Jogging",
    "class_date": "2020-07-25",
    "class_time": "09:00:00",
    "duration": 45,
    "intensity": "moderate",
    "location": "track",
    "number_of_attendees": 5,
    "max_class_size": 10

GET CLASS BY ID
/api/classes/:id

POST CLASS
/api/classes

UPDATE CLASSES
/api/classes/:id

DELETE CLASSES
/api/classes/:id



/--------------------------------------------/ CLIENT ROUTES /-----------------------------------/

REGISTER CLIENT

/api/client/register

register example:

    "username":"client1",
	"password":"password1"

LOGIN CLIENT

/api/client/login

LOGOUT CLIENT

/api/client/logout

/--------------------------------------------/ INSTRUCTOR ROUTES /-----------------------------------/



REGISTER INSTRUCTOR

/api/instructor/register

register example:


    "username":"instructor1",
	"password":"password1"


LOGIN INSTRUCTOR

/api/instructor/login

LOGOUT INSTRUCTOR

/api/instructor/logout

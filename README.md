# Simple user form

The app is made of two parts:

- front-end written in React that presents a form with four fields. The form is built with react-hook-form. It uses the api-client library that was generated with open api schema generator.
  As this is just a recruitment task there is no automation around this process. It was done manually once and used api schema is saved as 'events-api.schema.json' in the back-end directory.

- back-end written with nest-js that uses mongoose ORM to connect to mongodb instance. It validates the model using idomatic nestjs validation pipe.

Both projects has configuration injected via environment variables. They are coming with Dockerfiles that are build just on one layer (so the images are quite big).

## Build and run the projects

To run the project install [docker](link-to-docker).

1. Open command line in the root directory `event-form`.
2. Run the command `docker-compose up`.

> It will run
>
> - mongodb document database on `localhost:27017`
> - mongo-express database client on `localhost:3050`
> - front-end on `localhost:3051`
> - back-end on `localhost:3052`

To access the swagger of the back-end and see available endpoints go to `localhost:3052/api`.
To check if the submitted form is saving data correctly go to `localhost:3050` and then look at `test` database. It should contain `evententities` collection.

### Scope

I've decided not to write any tests for this task.
The reason for that is I've spent a lot of time learning how to create a back-end and I didn't have enough time.
Also, there is only validation logic, so all test I would've write would be integration tests which are costly to create. (There is barely any logic I could test with unit testing)

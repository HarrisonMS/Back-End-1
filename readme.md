## API Documentation
**BASE URL** https://w-l-j.herokuapp.com
- Attach endpoints to the end of the base URL in order to make HTTP Requests.

### Table of Contents
Endpoints that do _**not**_ require authentication (Not Protected):

| Requests        | Endpoints          | Description
|-----------------|--------------------|--------------------|
|<a href="#register">GET Registration</a>  | /api/auth/register | <b>POST</b> request to register new user
|<a href="#login">GET Login</a>            | /api/auth/login|  <b>POST</b> request to login new user

Endpoints that **_DO_** require authentication (Protected):
<b>GET</b> request endpoints:

| Requests         | Endpoints | Description
|----------------- | --------------------|---------------------|
|<a href="#users">GET Users</a>                    | /api/users |<b>GET</b> request to get all users
|<a href="#userID">GET User By ID</a>              | /api/users/:id | <b>GET</b> by user id gets user by id
|<a href="#allWorkouts">GET All workouts</a>       | /api/workouts | <b>GET</b> request get all workouts
|<a href="#workoutID">GET Workout by ID</a>        | /api/workouts/:id | <b>GET</b> request to get all workouts by thier ID
|<a href="#exercises">GET exercises</a>            | /api/exercises | <b>GET</b> request to get all exercises
|<a href="#exercisesID">GET exercises by ID</a>    | /api/exercises/:id| <b>GET</b> request to get exercises by thier ID
|<a href="#userID">GET workouts_exercises</a>              | /api/w-e | <b>GET</b> request to get all workouts_exercises  

<b>POST</b> request endpoints:

| Requests         | Endpoints | Description
|----------------- | --------------------|---------------------|
|<a href="#workouts">POST workout</a>                    | /api/workouts |<b>POST</b> request to add new workout
|<a href="#exerciese">POST exercise</a>              | /api/exercises | <b>POST</b> request to add new exercise
|<a href="#workouts_exercise">POST workouts_exercises</a>       | /api/w-e | <b>POST</b> request to add new Workouts_exercises

<b>DEL</b> request endpoints:

| Requests         | Endpoints | Description
|----------------- | --------------------|---------------------|
|<a href="#users">DEL user by ID</a>                    | /api/users/:id |<b>POST</b> request to delete user by ID



<hr />

<div id="register"></div>

## [POST] Registration 

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/auth/registration

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|username (required)           | string (4+ characters) |
|password (required)       | string (4+ characters)    |


_An example of how the body should appear:_

```js
{
	"username": "carly",
	"password": "carly"
}
```

### What will be returned:

_You will receive the user object an a JWT._

```js
{
  "id": 11,
  "username": "carly",
  "workouts": []
}
```

<hr />

<div id="login"></div>

## [POST] Log In

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/auth/login

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|name (required)           | string (4+ characters) |
|password (required)       | string (8+ characters)    |

_An example of how the body should appear:_

```js
{
	"username": "carly",
	"password": "carly"
}
```

### What will be returned:

_You will receive the user object, and a JWT._

```js
{
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhcmx5IiwiaWF0IjoxNTc4NTA5NzA3LCJleHAiOjE1Nzg1MTMzMDd9.Acex4zwKvpcphwd_Jc6z0HR6SZscrK79oMIleg_4tt8",
  "message": "Welcome carly!"
}
```

<hr />

<div id="users"></div>

## [GET] Users

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/users

### What will be returned:
_An array of all users within the database._
```js
[
  {
    "id": 11,
    "username": "carly"
  },
  {
    "id": 4,
    "username": "elizabeth2"
  },
  {
    "id": 2,
    "username": "jade"
  },
  {
    "id": 10,
    "username": "jade Savage"
  },
  {
    "id": 3,
    "username": "lilly"
  },
  {
    "id": 1,
    "username": "maddy"
  },
  {
    "id": 7,
    "username": "savanna"
  },
  {
    "id": 8,
    "username": "savanna2"
  },
  {
    "id": 9,
    "username": "savanna23"
  }
]
```

<hr />


<div id="userID"></div>

## [GET] User by ID

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/users/:id

**NOTE:** Be sure to include the `id` of an existing user on the end of the endpoint.

### What will be returned:
_An object of the user information._

```js
{
  "id": 2,
  "username": "jade",
  "workouts": [
    {
      "id": 4,
      "name": "workout name",
      "exercises": 0
    },
    {
      "id": 5,
      "name": "leg Workout",
      "exercises": 0
    },
    {
      "id": 6,
      "name": "arm Workout",
      "exercises": 1
    }
  ]
}
```

<hr />

<div id="Allworkouts"></div>


## [GET] All workouts

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/workouts

**NOTE:** returns all workouts in database for all users

### What will be returned:
_An object of the workouts information._

```js
[
  {
    "id": 1,
    "name": "workout name",
    "date": null,
    "user_id": 1
  },
  {
    "id": 2,
    "name": "leg Workout",
    "date": null,
    "user_id": 1
  },
  {
    "id": 3,
    "name": "arm Workout",
    "date": null,
    "user_id": 1
  },
  {
    "id": 4,
    "name": "workout name",
    "date": null,
    "user_id": 2
  },
  {
    "id": 5,
    "name": "leg Workout",
    "date": null,
    "user_id": 2
  },
  {
    "id": 6,
    "name": "arm Workout",
    "date": null,
    "user_id": 2
  },
]
```

<hr />

## [GET] All workouts by id

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/workouts/:id

**NOTE:** returns all workouts in database by id

### What will be returned:
_An object of the workout by id._

```js
{
  "id": 11,
  "name": "brain Workout",
  "date": null,
  "user_id": 10
}
```

<hr />

<div id="AllExercises"></div>


## [GET] All Exercises

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/exercises

**NOTE:** returns all exercises in database

### What will be returned:
_An object of the exercise information._

```js
[
  {
    "id": 1,
    "name": "Squats",
    "region": "Quads"
  },
  {
    "id": 2,
    "name": "Curls",
    "region": "Biceps"
  },
  {
    "id": 3,
    "name": "Pushups",
    "region": "Chest"
  },
  {
    "id": 4,
    "name": "Lunges",
    "region": "Hamstrings"
  },
  {
    "id": 5,
    "name": "Pull Ups",
    "region": "Back"
  },
  {
    "id": 6,
    "name": "testExercises",
    "region": "brain"
  },
  {
    "id": 7,
    "name": "testExercises2",
    "region": "brain"
  }
]
```

<hr />

## [GET] All Exercises by id

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/exercises/:id

**NOTE:** returns exercises by exercise_id

### What will be returned:
_An object of the exercises by id._

```js
{
  "name": "Pushups",
  "region": "Chest"
}
```

<hr />

## [GET] All workoutExercises

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/w-e

**NOTE:** returns all workoutExercises in database

### What will be returned:
_An object of the workoutsexercise information._

```js
[
  {
    "id": 1,
    "reps": 10,
    "sets": 10,
    "workout_id": 1,
    "exercise_id": 1
  },
  {
    "id": 2,
    "reps": 10,
    "sets": 10,
    "workout_id": 1,
    "exercise_id": 2
  },
  {
    "id": 3,
    "reps": 10,
    "sets": 10,
    "workout_id": 1,
    "exercise_id": 3
  },
  {
    "id": 4,
    "reps": 10,
    "sets": 10,
    "workout_id": 2,
    "exercise_id": 1
  },
  {
    "id": 5,
    "reps": 10,
    "sets": 10,
    "workout_id": 2,
    "exercise_id": 2
  },
  {
    "id": 6,
    "reps": 10,
    "sets": 10,
    "workout_id": 2,
    "exercise_id": 3
  },
 
]
```

<hr />

<hr />

<div id="workout"></div>

## [POST] Registration 

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/auth/workout

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|name (required)           | string |
|user_id (required)       | integer    |


_An example of how the body should appear:_

```js
  {
    "name": "testing workout",
    "user_id": 10
  }
```

### What will be returned:

workouts id will be returned 

```js
[
  16
]
```

<hr />

<div id="exercise"></div>

## [POST] exercise

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/auth/exercise

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|name (required)           | string |
|region (required)       | string   |


_An example of how the body should appear:_

```js
  {
    "name": "Coding",
    "region": "the brain"
  }
```

### What will be returned:

exercise id will be returned

```js
[
  9
]
```

<hr />

## [POST] workouts_exercise

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/auth/w-e

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|reps (required)            | integer   |
|sets(required)             | integer   |
|workouts_id(required)      | integer   |
|sets(required)             | integer   |

_An example of how the body should appear:_

```js

    "reps": 10,
    "sets": 10,
    "workout_id": 6,
    "exercise_id": 7
}

```

### What will be returned:

workouts_exercise id will be returned

```js
[
  11
]
```

<hr />


<div id="user"></div>

## [DEL] User by ID

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/auth/users/:id

_An example of how the endpoint should appear:_

```js
https://w-l-j.herokuapp.com/api/users/7
```

### What will be returned:

message saying user was deleted and number of users removed

```js
{
  "message": "user deleted",
  "removed": 1
}
```

<hr />
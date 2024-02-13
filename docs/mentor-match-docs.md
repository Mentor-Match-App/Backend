# MENTOR MATCH API DOCUMENTATION

# User API Spec

## Endpoint

https://shy-lime-bream-cuff.cyclic.app

## Login User

Endpoint : `POST /login`

Request Body :

```json
{
	"name": "string",
	"email": "string",
	"photoURL": "string"
}
```

Response :

```json
{
	"error": false,
	"message": "User logged in successfully",
	"user": {
		"id": "string",
		"name": "string"
	},
	"token": "string"
}
```

## Select Role User

Endpoint : `PATCH /users/:id/select-role`

Headers : `Authorization: Bearer <token>`

Params: `:id` (user id)

Request Body :

```json
{
	"selectedRole": "string"
}
```

Response :

```json
{
	"error": false,
	"message": "Role selected successfully"
}
```

## Update Mentee Profile

Endpoint : `PATCH /users/mentee/:id/profile`

Headers : `Authorization: Bearer <token>`

Params: `:id` (mentee's user id)

Request Body :

```json
{
	"job": "string",
	"school": "string",
	"skills": ["string"],
	"location": "string",
	"about": "string"
}
```

Response :

```json
{
	"error": false,
	"message": "User profile updated successfully"
}
```

## Register as Mentor

Endpoint : `PATCH /users/mentor/:id/register`

Headers : `Authorization: Bearer <token>`

Params: `:id` (mentor's user id)

Request Body :

```json
{
	"gender": "string",
	"job": "string",
	"company": "string",
	"location": "string",
	"skills": ["string", "string"],
	"linkedin": "string",
	"portofolio": "string",
	"experiences": [
		{
			"role": "string",
			"company": "string"
		}
	],
	"about": "string"
}
```

Response :

```json
{
	"error": false,
	"message": "Mentor registered successfully"
}
```

## Filter Class Mentor by Education Level and Category

Endpoint : `GET /class/filter-mentors`

Query Params : `educationLevel` (string), `category` (string)

Response :

```json
{
	"error": false,
	"message": "Filtered mentors fetched successfully",
	"mentors": [
		{
			"name": "string",
			"photoUrl": "string",
			"experiences": [
				{
					"jobTitle": "string",
					"company": "string"
				}
			]
		}
	]
}
```


# Class API Spec

## Create Class

Endpoint : `POST /class`

Headers : `Authorization: Bearer <token>`

Request Body :

```json
{
  "mentorId": "string",
  "educationLevel": "string",
  "category": "string",
  "name": "string",
  "description": "string",
  "terms": "string",
  "price": "number",
  "durationInDays": "number"
}

```

Response Body Success :

```json
{
	"error": false,
	"message": "Class created successfully",
}
```

## Get All Class 

Endpoint : `GET /class/all`

Headers : `Authorization: Bearer <token>`

Response Body Success :

```json
{
	"error": false,
	"message": "success",
	"classes": [
		
	]
}
```

## Get Premium Class By Id

Endpoint : `GET /class/:id`

Headers : `Authorization: Bearer <token>`

Response Body Success :

```json
{
	"error": false,
	"message": "success",
	"class": {
		"id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
		"education_level": "SMA",
		"subject": "Kimia",
		"name": "Chemistry 101",
		"price": 100000,
		"duration_in_month": 3,
		"description": "Belajar kimia dari dasar",
		"requirement": ["Mengerti dasar-dasar kimia", "Mengerti dasar-dasar matematika"]
	}
}
```


# MENTOR MATCH API DOCUMENTATION

# User API Spec

## Endpoint

https://shy-lime-bream-cuff.cyclic.app

## Register User

Endpoint : GET /register

Response :

```json
{
	"error": false,
	"message": "User Created",
	"user": {
		"id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
		"email": "jeremylewimth@gmail.com"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNzQyYmI2NC1iMWMzLTQwNjctYjVkYi0zMDBlOGVhNmJjZmYiLCJpYXQiOjE3MDI1MzgwNTgsImV4cCI6MTcwMjc1NDA1OH0.nQ3KUw___m1jq9-qbqhP_LpUSy3W3FJ4ButywzRQI78"
}
```

## Login User

Endpoint : GET /login

Response :

```json
{
	"error": false,
	"message": "success",
	"user": {
		"id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
		"email": "jeremylewimth@gmail.com"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNzQyYmI2NC1iMWMzLTQwNjctYjVkYi0zMDBlOGVhNmJjZmYiLCJpYXQiOjE3MDI1MzgzMjYsImV4cCI6MTcwMjc1NDMyNn0.jyrm1WsGrrIzJPwU8J3h2QWteKMdl8bz-QkJ_JzuQGE"
}
```

## Select Role User

Endpoint : POST /select-role

Response :

```json
{
	"error": false,
	"message": "Role selected successfully",
	"user": {
		"user_type": "Mentor"
	}
}
```

## Update Mentee Profile

Endpoint : PATCH /users/mentee/current

Headers :

- Authorization : token

Request Body :

```json
{
	"job": "Mahasiswa",
	"school": "Universitas Mikroskil",
	"skills": ["Javascript", "PHP", "Python"],
	"location": "Medan",
	"about": "Saya adalah seorang mahasiswa yang sedang belajar pemrograman"
}
```

Response :

```json
{
	"error": false,
	"message": "Profile set successfully",
	"user": {
		"job": "Mahasiswa",
		"school": "Universitas Mikroskil",
		"skills": ["Javascript", "PHP", "Python"],
		"location": "Medan",
		"about": "Saya adalah seorang mahasiswa yang sedang belajar pemrograman"
	}
}
```

## Update Mentor Profile

Endpoint : PATCH /users/mentor/current

Headers :

- Authorization : token

Request Body :

```json
{
	"gender": "Male",
	"job": "Programmer",
	"company": "Microsoft",
	"location": "Medan",
	"skills": ["Javascript", "PHP", "Python"],
	"linkedin": "https://www.linkedin.com/in/jeremy-lewimthon-9b0b3b1b2/",
	"portofolio": "https://drive.google.drive.com/123123123",
	"experience": [
		{
			"role": "Software Engineer",
			"company": "Google"
		},
		{
			"role": "UX Designer",
			"company": "Apple"
		}
	]
}
```

Response :

```json
{
	// response body

	"error": false,
	"message": "Profile set successfully",
	"user": {
		"gender": "Male",
		"job": "Programmer",
		"company": "Microsoft",
		"location": "Medan",
		"skills": ["Javascript", "PHP", "Python"],
		"linkedin": "https://www.linkedin.com/in/jeremy-lewimthon-9b0b3b1b2/",
		"portofolio": "https://drive.google.drive.com/123123123",
		"experience": [
			{
				"role": "Software Engineer",
				"company": "Google"
			},
			{
				"role": "UX Designer",
				"company": "Apple"
			}
		]
	}
}
```

## Get All Mentee

Endpoint : GET /mentees

Response :

```json
{
	"error": false,
	"message": "success",
	"mentees": [
		{
			"id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
			"job": "Mahasiswa",
			"school": "Universitas Mikroskil",
			"skills": ["Javascript", "PHP", "Python"],
			"location": "Medan",
			"about": "Saya adalah seorang mahasiswa yang sedang belajar pemrograman"
		},
		{
			"id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
			"job": "Mahasiswa",
			"school": "Universitas Mikroskil",
			"skills": ["Javascript", "PHP", "Python"],
			"location": "Medan",
			"about": "Saya adalah seorang mahasiswa yang sedang belajar pemrograman"
		}
	]
}
```

## Get All Mentor

Endpoint : GET /mentor/all

Response :

```json
{
	"error": false,
	"message": "success",
	"mentors": [
		{
			"id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
			"name": "jeremy"
		},

		{
			"id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
			"name": "jeremy"
		}
	]
}
```

# Class API Spec

## Create Premium Class

Endpoint : POST /class/create

Request Body :

```json
{
	"education_level": "SMA",
	"subject": "Kimia",
	"name": "Chemistry 101",
	"price": 100000,
	"duration_in_month": 3,
	"description": "Belajar kimia dari dasar",
	"requirement": ["Mengerti dasar-dasar kimia", "Mengerti dasar-dasar matematika"]
}
```

Response Body Success :

```json
{
    "error": false,
    "message": "Class created successfully",
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

## Get All Premium Class

Endpoint : GET /class/all

Response Body Success :

```json
{
    "error": false,
    "message": "success",
    "classes": [
        {
            "id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
            "education_level": "SMA",
            "subject": "Kimia",
            "name": "Chemistry 101",
            "price": 100000,
            "duration_in_month": 3,
            "description": "Belajar kimia dari dasar",
            "requirement": ["Mengerti dasar-dasar kimia", "Mengerti dasar-dasar matematika"]
        },
        {
            "id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
            "education_level": "SMA",
            "subject": "Kimia",
            "name": "Chemistry 101",
            "price": 100000,
            "duration_in_month": 3,
            "description": "Belajar kimia dari dasar",
            "requirement": ["Mengerti dasar-dasar kimia", "Mengerti dasar-dasar matematika"]
        }
    ]
}
```

## Get Premium Class By Id

Endpoint : GET /class/:id

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

# Community API Spec

## Create Community

Endpoint : POST /community/create

Request Body :

```json
{
	"name": "Medan Dev",
	"link": "medandev",
	"image": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
}
```

Response Body Success :

```json
{
	"error": false,
	"message": "Community created successfully",
	"community": {
		"id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
		"name": "Medan Dev",
		"link": "medandev",
		"image": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
	}
}
```

## Get All Community

Endpoint : GET /community/all

Response Body Success :

```json
{
	"error": false,
	"message": "success",
	"communities": [
		{
			"id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
			"name": "Medan Dev",
			"link": "medandev",
			"image": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
		},
		{
			"id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
			"name": "Medan Dev",
			"link": "medandev",
			"image": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
		}
	]
}
```

## Get Community By Id

Endpoint : GET /community/:id

Response Body Success :

```json
{
	"error": false,
	"message": "success",
	"community": {
		"id": "3742bb64-b1c3-4067-b5db-300e8ea6bcff",
		"name": "Medan Dev",
		"link": "medandev",
		"image": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
	}
}
```
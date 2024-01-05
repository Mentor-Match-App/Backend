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
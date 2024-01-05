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
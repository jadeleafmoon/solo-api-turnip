# Welcome to the Turnip API!

This was created during my time as a student at Code Chrysalis.

### What is Turnip?

Turnip is an app that allows you to buy and sell used items.

### What is this API?
With this API, you'll be able to browse the available products.

## Getting Started

Steps to using this API:
1. Clone this repo to your computer
2. Install and launch Postman
3. Run localhost:3000 in Postman

Use the following format to make HTTP requests:
```
GET localhost:3000/products/2
```


## Endpoints

### **GET /products**

This will get all products.

Request URI Example:
```
GET /api/products
```

Reponse:
```
[
    {
        "id": 1,
        "name": "Ball",
        "price": 5
    },
    {
        "id": 2,
        "name": "Game",
        "price": 10.50
    },
    {
        "id": 3,
        "name": "Chocolate",
        "price": 15.99
    }
]
```

### **GET /products/:id**

This will get a product with the specified id.

Request URI Example:
```
GET /api/products/2
```

Reponse:
```
[
    {
        "id": 2,
        "name": "Game",
        "price": 10.50
    }
]
```

### **POST /products**

Request URI Example:
```
POST /api/products/
```

Request Body Example:
```
{
    "id": 4,
    "name": "Brush",
    "price": 99.99
}
```

Response:
```
The product Brush has been added.
```

### **PATCH /products/:id**

Request URI Example:
```
PATCH /api/products/4
```

Request Body Example:
```
{
    "name": "Hairbrush",
    "price": 80.50
}
```

Response:
```
The product Brush with id 4 has been updated.
```

### **DELETE /products/:id**

Request URI Example:
```
DELETE /api/products/3
```

Response:
```
The product Chocolate has been deleted.
```
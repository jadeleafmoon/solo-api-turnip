# Welcome to the Turnip API!

This was created during my time as a student at Code Chrysalis.

### What is Turnip?

Turnip is an app that allows you to buy and sell used items.

### What is this API?
With this API, you'll be able to browse the available products.

## Getting Started

Steps to using this API:
1. Clone this repo to your computer


## Endpoints

### **GET /products**

Request URI Example
```
GET /node_modulesproducts
```

Reponse 
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

### **POST /products**

Request URI Example
```
POST /products/
```

Request Body Example
```
{
    "id": 4,
    "name": "Brush",
    "price": 99.99
}
```

Response
```
The product Brush has been added.
```

### **PATCH /products/:id**

Request URI Example
```
PATCH products/4
```

Request Body Example
```
{
    "name": "Hairbrush",
    "price": 80.50
}
```

Response
```
The product Brush with id 4 has been updated.
```

### **DELETE /products/:id**

Request URI Example
```
DELETE products/3
```

Response
```
The product Chocolate has been deleted.
```


## Product Management API Endpoints:
### 1.Create product
- Endpoint: /api/products
- Method: POST
- Sample Request Body: 
{
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
    }
}

### 2. Retrieve a List of All Products
- Endpoint: /api/products
- Method: GET

### 3. Retrieve a Specific Product by ID
- /api/products/:productId
- Method: GET

### 4. Update Product Information
- Endpoint: /api/products/:productId
- Method: PUT

### 5. Delete a Product
- Endpoint: /api/products/:productId
- Method: DELETE

### 6. Search a product
- Endpoint: /api/products?searchTerm=productName
- Method: GET

## Order Management API Endpoints:

### 1.Create a New Order
- 1.Create a New Order
- Endpoint: /api/orders
- Method: POST
- Request Body:{
    "email": "level2@programming-hero.com",
    "productId": "5fd67e890b60c903cd8544a3",
    "price": 999,
    "quantity": 1
}

### 2.Retrieve All Orders
- Endpoint: /api/orders
- Method: GET

### 3. Retrieve Orders by User Email
- Endpoint: /api/orders?email=level2@programming-hero.com
- Method: GET
from fastapi import FastAPI
from fastapi import HTTPException
from tortoise.contrib.fastapi import register_tortoise
from fastapi.middleware.cors import CORSMiddleware
from models import (admin_pydantic, admin_pydanticIn, Admin, user_pydantic, user_pydanticIn, User, crop_pydantic, crop_pydanticIn, Crop, blog_pydantic, blog_pydanticIn, Blog)
# from models import (supplier_pydantic, supplier_pydanticIn, Supplier, product_pydantic, product_pydanticIn, Product)

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def index():
    return {"Message": "Successfully Connected!"}

# Admin APIs
@app.post("/admin")
async def add_admin(admin_info: admin_pydanticIn):
    admin_obj = await Admin.create(**admin_info.dict(exclude_unset=True))
    response = await admin_pydantic.from_tortoise_orm(admin_obj)
    return {"status": "ok", "data": response}

@app.get("/admin")
async def get_all_admin():
    response = await admin_pydantic.from_queryset(Admin.all())
    return {"status": "ok", "data": response}

@app.get("/admin/{admin_id}")
async def get_specific_admin(admin_id: int):
    response = await admin_pydantic.from_queryset_single(Admin.get(id=admin_id))
    return {"status": "ok", "data": response}

@app.put("/admin/{admin_id}")
async def update_admin(admin_id: int, update_info: admin_pydanticIn):
    admin = await Admin.get(id=admin_id)
    update_info = update_info.dict(exclude_unset=True)
    admin.first_name = update_info["first_name"]
    admin.last_name = update_info["last_name"]
    admin.username = update_info["username"]
    admin.password = update_info["password"]
    await admin.save()
    response = await admin_pydantic.from_tortoise_orm(admin)
    return {"status": "ok", "data": response}

@app.delete("/admin/{admin_id}")
async def delete_admin(admin_id: int):
    admin = await Admin.get(id=admin_id)
    await admin.delete()
    return {"status": "ok"}


# User APIs
@app.post("/user")
async def add_user(user_info: user_pydanticIn):
    user_obj = await User.create(**user_info.dict(exclude_unset=True))
    response = await user_pydantic.from_tortoise_orm(user_obj)
    return {"status": "ok", "data": response}

@app.get("/user")
async def get_all_user():
    response = await user_pydantic.from_queryset(User.all())
    return {"status": "ok", "data": response}

@app.get("/user/{user_id}")
async def get_specific_user(user_id: int):
    response = await user_pydantic.from_queryset_single(User.get(id=user_id))
    return {"status": "ok", "data": response}

@app.put("/user/{user_id}")
async def update_user(user_id: int, update_info: user_pydanticIn):
    user = await User.get(id=user_id)
    update_info = update_info.dict(exclude_unset=True)
    user.first_name = update_info["first_name"]
    user.last_name = update_info["last_name"]
    user.username = update_info["username"]
    user.password = update_info["password"]
    await user.save()
    response = await user_pydantic.from_tortoise_orm(user)
    return {"status": "ok", "data": response}

@app.delete("/user/{user_id}")
async def delete_user(user_id: int):
    user = await User.get(id=user_id)
    await user.delete()
    return {"status": "ok"}


# Crop APIs
@app.post("/crop/{user_id}")
async def add_crop(user_id: int, crop_details: crop_pydanticIn):
    user = await User.get(id=user_id)
    crop_details = crop_details.dict(exclude_unset=True)
    crop_obj = await Crop.create(**crop_details, created_by = user)
    response = await crop_pydantic.from_tortoise_orm(crop_obj)
    return {"status": "ok", "data": response}

@app.get("/crop")
async def get_all_crop():
    crops = await Crop.filter().prefetch_related("created_by")
    response = []
    for crop in crops:
        crop_dict = crop_pydantic.from_orm(crop).dict()
        user_dict = user_pydantic.from_orm(crop.created_by).dict()
        crop_dict["created_by"] = user_dict
        response.append(crop_dict)
    return {"status": "ok", "data": response}


@app.get("/crop/{crop_id}")
async def get_specific_crop(crop_id: int):
    crop = await Crop.filter(id=crop_id).prefetch_related("created_by").first()
    if not crop:
        raise HTTPException(status_code=404, detail="Crop not found")
    crop_dict = crop_pydantic.from_orm(crop).dict()
    user_dict = user_pydantic.from_orm(crop.created_by).dict()
    crop_dict["created_by"] = user_dict
    return {"status": "ok", "data": crop_dict}

@app.put("/crop/{crop_id}")
async def update_crop(crop_id: int, update_info: crop_pydanticIn):
    crop = await Crop.get(id=crop_id)
    update_info = update_info.dict(exclude_unset=True)
    crop.name = update_info["name"]
    crop.description = update_info["description"]
    crop.image = update_info["image"]
    crop.season = update_info["season"]
    crop.soil_type = update_info["soil_type"]
    crop.price = update_info["price"]
    await crop.save()
    response = await crop_pydantic.from_tortoise_orm(crop)
    return {"status": "ok", "data": response}

@app.delete("/crop/{crop_id}")
async def delete_crop(crop_id: int):
    crop = await Crop.get(id=crop_id)
    await crop.delete()
    return {"status": "ok"}


# Blog APIs
@app.post("/blog/{user_id}")
async def add_blog(user_id: int, blog_info: blog_pydanticIn):
    user = await User.get(id=user_id)
    blog_obj = await Blog.create(**blog_info.dict(exclude_unset=True))
    response = await blog_pydantic.from_tortoise_orm(blog_obj)
    return {"status": "ok", "data": response}

@app.get("/blog")
async def get_all_blog():
    response = await blog_pydantic.from_queryset(Blog.all())
    return {"status": "ok", "data": response}

@app.get("/blog/{blog_id}")
async def get_specific_blog(blog_id: int):
    response = await blog_pydantic.from_queryset_single(Blog.get(id=blog_id))
    return {"status": "ok", "data": response}

@app.put("/blog/{blog_id}")
async def update_blog(blog_id: int, update_info: blog_pydanticIn):
    blog = await Blog.get(id=blog_id)
    update_info = update_info.dict(exclude_unset=True)
    blog.title = update_info["title"]
    blog.image = update_info["image"]
    blog.tags = update_info["tags"]
    blog.content = update_info["content"]
    await blog.save()
    response = await blog_pydantic.from_tortoise_orm(blog)
    return {"status": "ok", "data": response}

@app.delete("/blog/{blog_id}")
async def delete_blog(blog_id: int):
    blog = await Blog.get(id=blog_id)
    await blog.delete()
    return {"status": "ok"}



# @app.get('/')
# def index():
#     return {"Msg": "go to /docs for the API documentation"}

# # Supplier
# @app.post('/supplier')
# async def add_supplier(supplier_info: supplier_pydanticIn):
#     supplier_obj = await Supplier.create(**supplier_info.dict(exclude_unset=True))
#     response = await supplier_pydantic.from_tortoise_orm(supplier_obj)
#     return {"status": "ok", "data": response}

# @app.get('/supplier')
# async def get_all_suppliers():
#     response = await supplier_pydantic.from_queryset(Supplier.all())
#     return {"status": "ok", "data": response}

# @app.get('/supplier/{supplier_id}')
# async def get_specific_supplier(supplier_id: int):
#     response = await supplier_pydantic.from_queryset_single(Supplier.get(id=supplier_id))
#     return {"status": "ok", "data": response}

# @app.put('/supplier/{supplier_id}')
# async def update_supplier(supplier_id: int, update_info: supplier_pydanticIn):
#     supplier = await Supplier.get(id=supplier_id)
#     update_info = update_info.dict(exclude_unset=True)
#     supplier.name = update_info['name']
#     supplier.company = update_info['company']
#     supplier.email = update_info['email']
#     supplier.phone = update_info['phone']
#     await supplier.save()
#     response = await supplier_pydantic.from_tortoise_orm(supplier)
#     return {"status": "ok", "data": response}

# @app.delete('/supplier/{supplier_id}')
# async def delete_supplier(supplier_id: int):
#     supplier = await Supplier.get(id=supplier_id)
#     await supplier.delete()
#     return {"status": "ok"}

# # Product
# @app.post('/product/{supplier_id}')
# async def add_product(supplier_id: int, product_details: product_pydanticIn):
#     supplier = await Supplier.get(id=supplier_id)
#     product_details = product_details.dict(exclude_unset=True)
#     product_details['revenue'] += (product_details['quantity_sold'] * product_details['unit_price']) + product_details['revenue']
#     product_obj = await Product.create(**product_details, supplied_by = supplier)
#     response = await product_pydantic.from_tortoise_orm(product_obj)
#     return {"status": "ok", "data": response}

# @app.get("/product")
# async def get_all_products():
#     products = await Product.filter().prefetch_related("supplied_by")
#     response = []
#     for product in products:
#         product_dict = product_pydantic.from_orm(product).dict()
#         supplier_dict = supplier_pydantic.from_orm(product.supplied_by).dict()
#         product_dict["supplied_by"] = supplier_dict
#         response.append(product_dict)
#     return {"status": "ok", "data": response}

# @app.get("/product/{product_id}")
# async def get_specific_product(product_id: int):
#     product = await Product.filter(id=product_id).prefetch_related("supplied_by").first()
#     if not product:
#         raise HTTPException(status_code=404, detail="Product not found")
#     product_dict = product_pydantic.from_orm(product).dict()
#     supplier_dict = supplier_pydantic.from_orm(product.supplied_by).dict()
#     product_dict["supplied_by"] = supplier_dict
#     return {"status": "ok", "data": product_dict}

# @app.put('/product/{product_id}')
# async def update_product(product_id: int, update_info: product_pydanticIn):
#     product = await Product.get(id=product_id)
#     update_info = update_info.dict(exclude_unset=True)
#     product.name = update_info['name']
#     product.quantity_in_stock = update_info['quantity_in_stock']
#     product.quantity_sold = update_info['quantity_sold']
#     product.unit_price = update_info['unit_price']
#     product.revenue += (update_info['quantity_sold'] * update_info['unit_price']) + update_info['revenue']
#     await product.save()
#     response = await product_pydantic.from_tortoise_orm(product)
#     return {"status": "ok", "data": response}

# @app.delete('/product/{product_id}')
# async def delete_product(product_id: int):
#     product = await Product.get(id=product_id)
#     await product.delete()
#     return {"status": "ok"}


register_tortoise(
    app,
    db_url="sqlite://database.sqlite3",
    modules={"models": ["models"]},
    generate_schemas=True,
    add_exception_handlers=True
)
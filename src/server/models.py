from tortoise.models import Model
from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator
from datetime import datetime
import pytz

class Admin(Model):
    id = fields.IntField(pk = True, index = True)
    first_name = fields.CharField(max_length = 20, null = False)
    last_name = fields.CharField(max_length = 20, null = False)
    username = fields.CharField(max_length = 20, unique = True, null = False)
    phone = fields.CharField(max_length = 15, unique = True, null = False)
    password = fields.CharField(max_length = 100, null = False)
    is_verified = fields.BooleanField(default = False)
    IST = pytz.timezone('Asia/Kolkata')
    join_data = fields.DatetimeField(default = datetime.now(IST))

class User(Model):
    id = fields.IntField(pk = True, index = True)
    first_name = fields.CharField(max_length = 20, null = False)
    last_name = fields.CharField(max_length = 20, null = False)
    username = fields.CharField(max_length = 20, unique = True, null = False)
    phone = fields.CharField(max_length = 15, unique = True, null = False)
    password = fields.CharField(max_length = 100, null = False)
    is_verified = fields.BooleanField(default = False)
    IST = pytz.timezone('Asia/Kolkata')
    join_data = fields.DatetimeField(default = datetime.now(IST))

# class District(Model):
#     id = fields.IntField(pk=True)
#     name = fields.CharField(max_length=30, nullable=False)

class Crop(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=50, nullable=False)
    description = fields.TextField()
    image = fields.TextField(default="default")
    season = fields.CharField(max_length=50)
    soil_type = fields.CharField(max_length=50)
    price = fields.IntField(default=0)
    created_by = fields.ForeignKeyField("models.User", related_name="crop_created")

class Blog(Model):
    id = fields.IntField(pk=True)
    title = fields.TextField(nullable=False)
    image = fields.TextField(default="default")
    tags = fields.TextField()
    content = fields.TextField(nullable=False)
    author = fields.ForeignKeyField("models.User", related_name="blog_written")

# Admin Pydantic Models
admin_pydantic = pydantic_model_creator(Admin, name="Admin", exclude=("is_verified",))
admin_pydanticIn = pydantic_model_creator(Admin, name="AdminIn", exclude_readonly=True)
admin_pydanticOut = pydantic_model_creator(Admin, name="AdminOut", exclude=("password",))

# User Pydantic Models
user_pydantic = pydantic_model_creator(User, name="User", exclude=("is_verified",))
user_pydanticIn = pydantic_model_creator(User, name="UserIn", exclude_readonly=True)
user_pydanticOut = pydantic_model_creator(User, name="UserOut", exclude=("password",))

# District Pydantic Models
# district_pydantic = pydantic_model_creator(District, name="District")
# district_pydanticIn = pydantic_model_creator(District, name="DistrictIn", exclude_readonly=True)

# Crop Pydantic Models
crop_pydantic = pydantic_model_creator(Crop, name="Crop")
crop_pydanticIn = pydantic_model_creator(Crop, name="CropIn", exclude_readonly=True)

# Blog Pydantic Models
blog_pydantic = pydantic_model_creator(Blog, name="Blog")
blog_pydanticIn = pydantic_model_creator(Blog, name="BlogIn", exclude_readonly=True)



# class Product(Model):
#     id = fields.IntField(pk=True)
#     name = fields.CharField(max_length=30, nullable=False)
#     quantity_in_stock = fields.IntField(default = 0)
#     quantity_sold = fields.IntField(default = 0)
#     unit_price = fields.DecimalField(max_digits=8, decimal_places=2, default = 0.00)
#     revenue = fields.DecimalField(max_digits=20, decimal_places=2, default=0.00)
#     supplied_by = fields.ForeignKeyField("models.Supplier", related_name="good_supplied")

# class Supplier(Model):
#     id = fields.IntField(pk=True)
#     name = fields.CharField(max_length=20)
#     company = fields.CharField(max_length=20)
#     email = fields.CharField(max_length=100)
#     phone = fields.CharField(max_length=15)

# create pydantic models
# product_pydantic = pydantic_model_creator(Product, name="Product")
# product_pydanticIn = pydantic_model_creator(Product, name="ProductIn", exclude_readonly=True)

# supplier_pydantic = pydantic_model_creator(Supplier, name="Supplier")
# supplier_pydanticIn = pydantic_model_creator(Supplier, name="SupplierIn", exclude_readonly=True)


from fastapi import FastAPI, Query
from enum import Enum

app = FastAPI()

# GET Method:
# - Path Parameters: A value provided in the path and used in the function
# - Predefined Values: Predefined values with Enum
# - Query Parameters

# GET Method


@app.get("/")
def index():
    """
    Default endpoint returning a welcome message.
    """
    return {"message": "Welcome to the FastAPI tutorial."}

# Path parameter


@app.get("/blogs/{id}")
def get_blog_by_id(id: int):
    """
    Retrieve a blog by its ID.
    """
    return {"message": f"Blog by {id}"}

# Path parameters - Type parameters


class BlogTypes(str, Enum):
    short = "short"
    story = "story"


@app.get("/blogs/type/{type}")
def get_blog_type(type: BlogTypes):
    """
    Retrieve blogs based on their types.
    """
    return {"message": f"Blog type is {type}"}

# Query parameters


@app.get("/search/")
def search(q: str = Query(None, min_length=3, max_length=50)):
    """
    Search endpoint to search blogs based on query parameter 'q'.
    """
    return {"message": f"Searching for '{q}'"}

from fastapi import FastAPI, Query, status, Response
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


@app.get("/blogs/{id}", status_code=status.HTTP_200_OK, tags=["blogs"])
def get_blog_by_id(id: int, response: Response):
    """
    Retrieve a blog by its ID.
    """
    if id == 1:
        response.status_code = status.HTTP_200_OK
        return {"message": "Blog id {id}"}
    else:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "Blog not found"}
# Path parameters - Type parameters


class BlogTypes(str, Enum):
    short = "short"
    story = "story"


@app.get("/blogs/type/{type}", tags=["blogs"], summary="Get the blog type", description="Get the blogs type like short, story")
def get_blog_type(type: BlogTypes):
    """
    Retrieve blogs based on their types.
    """
    return {"message": f"Blog type is {type}"}

# Query parameters


@app.get("/search/", tags=["blogs"], summary="Search the blogs", description="Search endpoint to search blogs based on query parameter 'q'.")
def search(q: str = Query(None, min_length=3, max_length=50)):
    """
    Search endpoint to search blogs based on query parameter 'q'.
    """
    return {"message": f"Searching for '{q}'"}

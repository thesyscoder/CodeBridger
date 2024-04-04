"""
Module: blogs_router.py
"""

# Import necessary modules
from fastapi import APIRouter, HTTPException
from typing import List
from models.blog_model import BlogModel

# Create an instance of APIRouter
blogRouter = APIRouter(prefix="/blogs", tags=["blogs"])

# Fake database to store the blogs

fake_db = []


# Create post
@blogRouter.post("/create", response_model=BlogModel)
async def create_blog(blog: BlogModel):
    """
    Create a new blog entry.

    Args:
        blog (BlogModel): The blog entry to create.

    Returns:
        BlogModel: The created blog entry.

    Raises:
        HTTPException: If the blog entry creation fails.
    """
    fake_db.append(blog)
    return blog


# Get the all blogs
@blogRouter.get("/blogs", response_model=List[BlogModel])
async def get_blogs():
    """
    Get all blog entries.

    Returns:
        List[BlogModel]: A list of all blog entries.
    """
    return fake_db


# Get blog by id
@blogRouter.get("/blogs/{blog_id}", response_model=BlogModel)
async def get_blogs_by_id(blog_id: int):
    """
    Get a specific blog entry by its ID.

    Args:
        blog_id (int): The ID of the blog entry to retrieve.

    Returns:
        BlogModel: The blog entry corresponding to the given ID.

    Raises:
        HTTPException: If the blog entry with the given ID is not found.
    """
    for blog in fake_db:
        if blog.id == blog_id:
            return blog
    raise HTTPException(status_code=404, detail="Blog not found")


# Update the blogs
@blogRouter.put("/blogs/{blog_id}", response_model=BlogModel)
async def update_blog(blog_id: int, updated_blog: BlogModel):
    """
    Update a specific blog entry by its ID.

    Args:
        blog_id (int): The ID of the blog entry to update.
        updated_blog (BlogModel): The updated blog entry.

    Returns:
        BlogModel: The updated blog entry.

    Raises:
        HTTPException: If the blog entry with the given ID is not found.
    """
    for index, blog in enumerate(fake_db):
        if blog.id == blog_id:
            fake_db[index] = update_blog
            return update_blog

    raise HTTPException(status_code=404, detail="Blog not found.")


# Delete the blogs
@blogRouter.delete("/blogs/{blog_id}")
async def delete_blog(blog_id: int):
    """
    Delete a specific blog entry by its ID.

    Args:
        blog_id (int): The ID of the blog entry to delete.

    Returns:
        dict: A message indicating the success of the deletion.

    Raises:
        HTTPException: If the blog entry with the given ID is not found.
    """
    for index, blog in enumerate(fake_db):
        if blog.id == blog_id:
            del fake_db[index]
            return {"message": "Blog deleted successfully."}
    raise HTTPException(status_code=404, detail="Blog not found.")

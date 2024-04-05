"""
Module: blog_model.py

Define Pydantic models for a blog entry.

Classes:
    BlogImage: Model representing an image associated with a blog.
    BlogModel: Model representing a blog entry.

Attributes:
    BlogImage.url (str): Image URL for the blog.
    BlogImage.alias (str): Alias for the image.

    BlogModel.id (int): Unique identifier for each blog.
    BlogModel.title (str): Title of the blog.
    BlogModel.content (str): Content of the blog.
    BlogModel.published (bool, optional): Represents whether the blog is published or not.
    BlogModel.tags (List[str], optional): Specify the category of blogs using tags.
    BlogModel.image (BlogImage, optional): Image associated with the blog.

Example:
    BlogModel(
        id=1,
        title="Learn Python FastAPI",
        content="FastAPI is a modern web framework first released in 2018 for building RESTful APIs in Python.",
        published=True,
        tags=["Python", "FastAPI"],
        image=BlogImage(url="https://xyz.com", alias="fastapi-image")
    )
"""

from typing import List, Optional
from pydantic import BaseModel, Field


class BlogImage(BaseModel):
    url: str = Field(
        default=None,
        description="Image URL for the blog.",
        examples=["https://xyz.com"],
    )
    alias: str


class BlogModel(BaseModel):
    id: int = Field(
        default=None, description="Unique identifier for each blog.", examples=[1]
    )
    title: str = Field(
        default=None,
        description="Title of the blog.",
        examples=["Learn Python FastAPI"],
    )
    content: str = Field(
        default=None,
        description="Content of the blog.",
        examples=[
            "FastAPI is a modern web framework first released in 2018 for building RESTful APIs in Python."
        ],
    )
    published: Optional[bool] = Field(
        default=None,
        description="Boolean value representing whether the blog is published or not.",
        examples=[True],
    )
    tags: Optional[List[str]] = Field(
        default=None,
        description="Specify the category of blogs using tags.",
        examples=[["Python", "FastAPI"]],
    )
    image: Optional[BlogImage] = None

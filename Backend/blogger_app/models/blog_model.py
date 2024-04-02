"""
Module: blog_model.py

Define a Pydantic model for a blog entry.

Attributes:
    id (int): Unique identifier for each blog.
    title (str): Title of the blog.
    content (str): Content of the blog.
    published (bool, optional): Represents whether the blog is published or not.

Example:
    BlogModel(
        id=1,
        title="Learn Python FastAPI",
        content="FastAPI is a modern web framework first released in 2018 for building RESTful APIs in Python.",
        published=True
    )
"""

from pydantic import BaseModel, Field
from typing import Optional


class BlogModel(BaseModel):
    id: int = Field(default=None, description="Unique id for each blog.", examples=[1])
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

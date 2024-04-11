"""_summary_

    This file defines Pydantic models for representing and validating data
    related to todo items. These models are used for request/response
    serialization, deserialization, and data validation in the FastAPI application.
"""

from pydantic import BaseModel, Field


class Todo(BaseModel):
    """_summary_

    Args:
        BaseModel (_type_): Pydantic model for TODO
    Attributes:
        id: Optional integer representing the Unique ID for the todo.
        title: Required string with minimum length 1 character represent the title of todo.
        description: Required string representing the description of todo.
        is_completed: Boolean value represent the status completed or not of todo.
    """

    id: int | None = Field(default=None, optional=True)
    title: str = Field(min_length=1, description="Title of todo.")
    description: str = Field(default=None, description="Description of todo.")
    is_completed: bool = Field(default=False, description="Status of todo.")

    class Config:
        orm_mode = True
        from_attributes = True

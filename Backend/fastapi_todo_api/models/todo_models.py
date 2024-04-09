"""_summary_
This file defines SQLAlchemy models that map to database tables.
These models represent the structure of todo items stored in the database.
"""

from sqlalchemy import Column, Integer, String, Boolean
from database.todo_database import Base


# create todo table
class TodoItem(Base):
    """
    SQLAlchemy model for a Todo item stored in the database.

    Attributes:
        id: Primary key integer representing the unique ID of the todo item.
        title: String (not nullable) representing the title of the todo item.
        description: String representing the description of the todo item (optional).
        is_completed: Boolean indicating whether the todo item is marked as completed (default: False).
    """

    __tablename__ = "todos"
    id = Column(Integer, primary_key=True, index=True, unique=True, autoincrement=True)
    title = Column(String, index=True, nullable=False)
    description = Column(String, index=True, nullable=False)
    is_completed = Column(Boolean, index=True, default=False)

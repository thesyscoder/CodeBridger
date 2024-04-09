"""_summary_

This file defines FastAPI API endpoints for managing todo items
(CRUD operations: Create, Read, Update, Delete).
"""

from fastapi import APIRouter, HTTPException, status, Depends
from schemas.todo_schema import Todo
from database.todo_database import get_db
from sqlalchemy.orm import Session
from models.todo_models import TodoItem
from typing import List
# initialize the api router instance
router = APIRouter(
    prefix="/todo",
    tags=["TODO"],
    responses={404: {"description": "Endpoint not found."}},
)


# POST endpoint for create todo
@router.post("/", response_model=Todo)
async def create_todo(todo: Todo, db: Session = Depends(get_db)):
    new_todo = TodoItem(
        title=todo.title, description=todo.description, is_completed=todo.is_completed
    )
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    return new_todo


# GET endpoint for get todo
@router.get("/",response_model=List[Todo])
async def get_all_todo(db:Session=Depends(get_db)):
    todos = db.query(TodoItem).all()
    return [Todo(**todo.__dict__) for todo in todos]
    


# GET endpoint for get the todo by using ID
@router.get("/{id}")
async def get_todo_by_id(id):
    return "{id} todo"


# PUT endpoint for update existing todo
@router.put("/{id}")
async def update_todo_by_id(id):
    return "todo updated."


# DELETE endpoint for delete the todd
@router.delete("/{id}")
async def delete_todo_by_id(id):
    return "deleted."

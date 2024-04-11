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
@router.get("/", response_model=List[Todo])
async def get_all_todo(db: Session = Depends(get_db)):
    todos = db.query(TodoItem).all()
    return [Todo(**todo.__dict__) for todo in todos]


# GET endpoint for get the todo by using ID
@router.get("/{id}", response_model=Todo)
async def get_todo_by_id(id: int, db: Session = Depends(get_db)):
    todo = db.query(TodoItem).filter(TodoItem.id == id).first()
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found.")
    return Todo.from_orm(todo)


# PUT endpoint for update existing todo
@router.put("/{id}")
async def update_todo_by_id(
    id: int, int, updated_todo: Todo, db: Session = Depends(get_db)
):
    todo = db.query(TodoItem).filter(TodoItem.id == id).first()
    if not todo:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Todo not found"
        )

    # Update attributes from request body
    todo.title = updated_todo.title
    todo.description = updated_todo.description
    todo.completed = updated_todo.completed

    db.commit()
    return Todo.from_orm(todo)


# DELETE endpoint for delete the todd
@router.delete("/{id}")
async def delete_todo_by_id(id: int, db: Session = Depends(get_db)):
    todo = db.query(TodoItem).filter(TodoItem.id == id).first()
    if not todo:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Todo not found"
        )
    db.delete(todo)
    db.commit()
    return None


from fastapi import FastAPI

from routes import todo_routes

app = FastAPI(
    title="FastAPI TODO API",
    description="ToDo application using FastAPI, Pydantic, and PostgreSQL",
    version="v0.0.1",
    contact={
        "name": "thesyscoder",
        "email": "thesyscoder.tech@gmail.com",
        "website": "thesyscoder.tech",
    }
)

# include routes
app.include_router(router=todo_routes.router)
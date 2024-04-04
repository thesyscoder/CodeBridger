"""
Module: main.py

Main module for the blogger app.
"""

from fastapi import FastAPI
from routers.blogs_router import blogRouter

app = FastAPI()


@app.get(
    "/",
    tags=["index"],
    summary="Welcome message route for the blogger application.",
    description="Root route of blogger app.",
)
async def index():
    """
    Welcome Message Route

    Returns a welcome message for the blogger application.

    Returns:
        dict: A dictionary containing a welcome message.
    """
    return {"message": "Welcome to the blogger application."}


# include routers
app.include_router(router=blogRouter)

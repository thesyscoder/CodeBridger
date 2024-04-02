"""
Module: main.py

Main module for the blogger app.
"""

# import required modules
from fastapi import FastAPI, Response


# initialize the app instance

app = FastAPI()


# Initialize the root router
@app.get(
    "/",
    tags=["index"],
    description="Root route of blogger app.",
    summary="Welcome message route for the blogger application.",
)
async def index():
    Response.stat
    return {"message": "Welcome to the blogger application."}

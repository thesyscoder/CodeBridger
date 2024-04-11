"""_summary_
    Entry point of BlogPulse application.
"""
# Import all necessary modules
from fastapi import FastAPI


# initialize the fast api instance
app = FastAPI(
    title="BlogPulse",
    description="BlogPulse is a web application built using FastAPI, Pydantic, and SQLAlchemy with PostgreSQL, designed to provide a dynamic and efficient platform for managing and analyzing blog data.",
    version="v0.0.1"
)

@app.get("/",tags=["Root"],description="Default root endpoint of BlogPulse.")
async def root_index():
    return {"message":"Welcome to BlogPulse application."}
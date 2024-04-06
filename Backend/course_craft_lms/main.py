from fastapi import FastAPI
from routes import users_routes, courses_routes, sections_routes
from database.db_connection import create_engine_and_session

# Initialize the FastAPI app instance
app = FastAPI(
    title="Course Craft LMS",
    description="A software platform that helps create, deliver, track, and report on educational courses and training programs. It's like an all-in-one tool for managing the learning process.",
    version="1.0.0",
    contact={"name": "pruthviraj", "email": "thesyscoder.tech@gmail.com"},
)


# Root index endpoint
@app.get(
    "/",
    tags=["root"],
    description="This is the root endpoint of the Course Craft application. It also check the DB initialization.",
)
async def root_index():
    """
    This is the root endpoint of the Course Craft application.

    Returns:
        dict: A welcome message.
    """
    try:
        db = create_engine_and_session()
        return {"message":"Successfully connected to postgreSQL."}
    except RuntimeError as e:
        return {"error": str(e)}
    


# Include app routes
app.include_router(users_routes.router)
app.include_router(courses_routes.router)
app.include_router(sections_routes.router)

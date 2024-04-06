"""This entry point of flask application

"""
# import all necessary modules
from fastapi import FastAPI


# initialize app instance
app = FastAPI(
    title="Course Craft LMS",
    description="A software platform that helps create, deliver, track, and report on educational courses and training programs. It's like an all-in-one tool for managing the learning process.",
    version="1.0.0"
)

# Root index endpoint 
@app.get("/",tags=["root"],description="This is root endpoint of course craft application.")
async def root_index():
    return {"message":"Course Craft LMS : Dive into learning with Course Craft LMS!"}
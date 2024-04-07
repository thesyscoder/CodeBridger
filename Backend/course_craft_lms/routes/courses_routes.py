from fastapi import APIRouter, HTTPException
from typing import List
from schemas.courses_schema import Course

router = APIRouter(
    prefix="/courses",
    tags=["Courses"],
    responses={404: {"description": "User not found."}},
)

# Temperary storage for course
courses = []


# Get all courses
@router.get("/", response_model=List[Course])
async def get_all_courses():
    """
    Retrieves a list off all courses.

    This endpoint fetches all courses from the database.
    """
    return courses


# create a new course
@router.post("/create", response_model=Course)
async def create_course(course: Course):
    """_summary_
    Create a new course
    Args:
        course (Course): Course data to be created.
    Returns:
        Course: The created course.
    """
    courses.append(course)
    return courses


# get course by ID
@router.get("/{id}", response_model=Course)
async def get_course_by_id(id: int):
    """
    Retrieve the course by ID.

    Args:
        id (int): The ID of the course.
    Returns:
        Course: The course data corresponding to the provided ID.
    """
    return courses[id]


# update the course by ID
@router.put("/{id}", response_model=Course)
async def update_user_by_id(id: int, updated_course: Course):
    """_summary_
    Update the course by their ID.
    Args:
        id (int): The ID of the course to update.
        updated_course (Course): The updated course data.

    Returns:
        _type_: Updated course.
    """
    return updated_course


# Delete the course by ID
@router.delete("/{id}")
async def delete_couser_by_id(id: int):
    """
    Delete the course by their ID.

    Args:
        id (int): The ID of the course to delete.

    Returns:
        A message indicating the successfully deleted.
    """
    deleted_course = courses.pop(id)
    return {"message": f"Course {deleted_course[id]} deleted successfully."}

from fastapi import APIRouter, HTTPException, Path
from schemas.user_schema import User
from typing import List

# Create router instance
router = APIRouter(
    prefix="/users", tags=["users"], responses={404: {"description": "User not found."}}
)

# Temporary storage for users
users = []


# Get all users
@router.get("/", response_model=List[User])
async def get_all_users():
    """
    Retrieves a list of all users.

    This endpoint fetches all users from the database
    """
    return users


# Create a new user
@router.post("/create", response_model=User)
async def create_user(user: User):
    """
    Creates a new user.

    Args:
        user (User): User data to be created.

    Returns:
        User: The created user data.
    """
    users.append(user)
    return user


# Get user by ID
@router.get("/{id}", response_model=User)
async def get_user_by_id(id: int = Path(..., description="The ID of user.", ge=0)):
    """
    Retrieves a user by their ID.

    Args:
        id (int): The ID of the user to retrieve.

    Returns:
        User: The user data corresponding to the provided ID.

    Raises:
        HTTPException: If the user with the provided ID is not found.
    """
    if id < 0 or id >= len(users):
        raise HTTPException(status_code=404, detail="User not found")
    return users[id]


# Update user by ID
@router.put("/{id}", response_model=User)
async def update_user(id: int, updated_user: User):
    """
    Updates user information by their ID.

    Args:
        id (int): The ID of the user to update.
        updated_user (User): The updated user data.

    Returns:
        User: The updated user data.

    Raises:
        HTTPException: If the user with the provided ID is not found.
    """
    if id < 0 or id >= len(users):
        raise HTTPException(status_code=404, detail="User not found")
    users[id] = updated_user
    return updated_user


# Delete user by ID
@router.delete("/{id}")
async def delete_user(id: int):
    """
    Deletes a user by their ID.

    Args:
        id (int): The ID of the user to delete.

    Returns:
        dict: A message indicating the successful deletion.

    Raises:
        HTTPException: If the user with the provided ID is not found.
    """
    if id < 0 or id >= len(users):
        raise HTTPException(status_code=404, detail="User not found")
    deleted_user = users.pop(id)
    return {"message": f"User {deleted_user.id} deleted successfully"}

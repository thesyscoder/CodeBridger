"""Module: users.py

Description: Defines API endpoints related to users including CRUD operations.
"""

from fastapi import APIRouter

class UsersRouter:
    """
    Users router to perform CRUD operations.
    """

    def __init__(self):
        self.router = APIRouter(
            prefix="/users",
            tags=["Users"],
            responses={404: {"description": "Users endpoint not found."}},
        )

        # Define routes
        self.router.add_api_route("/", self.create_user, methods=["POST"])
        self.router.add_api_route("/", self.get_users, methods=["GET"])
        self.router.add_api_route("/{id}", self.get_user_by_id, methods=["GET"])
        self.router.add_api_route("/{id}", self.update_user_by_id, methods=["PUT"])
        self.router.add_api_route("/{id}", self.delete_user_by_id, methods=["DELETE"])
        self.router.add_api_route("/", self.delete_users, methods=["DELETE"])

    async def create_user(self):
        """
        Create a new user.
        """
        return {"message": "Created new user."}

    async def get_users(self):
        """
        Get all users.
        """
        return {"message": "List of all users."}

    async def get_user_by_id(self, id: int):
        """
        Get user by ID.
        
        Args:
            id (int): Unique user id, returns user details.
        """
        return {"message": "User found."}

    async def update_user_by_id(self, id: int):
        """
        Update the user by ID.
        
        Args:
            id (int): ID of the user to update.
        """
        return {"message": "User updated."}

    async def delete_user_by_id(self, id: int):
        """
        Delete the user by ID.
        
        Args:
            id (int): ID of the user to delete.
        """
        return {"message": "User deleted."}

    async def delete_users(self):
        """
        Delete all users.
        """
        return {"message": "Deleted all users."}

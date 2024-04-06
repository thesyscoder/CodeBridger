from pydantic import BaseModel, Field

# Define Pydantic schema for user
class User(BaseModel):
    """
    Pydantic schema for user.

    Attributes:
        email (str): User email address.
        password (str): User password.
        is_active (bool): Indicates whether the user is active or not.
    """
    email: str = Field(default=None, description="User email address.")
    password: str = Field(default=None, description="User password.")
    is_active: bool = Field(default=False, description="Is user active or not.")

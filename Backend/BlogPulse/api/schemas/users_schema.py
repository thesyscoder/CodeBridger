"""_summary_
    This file defines the pydantic model for representing and validating data related to user model.
"""
# import all necessary modules
from pydantic import BaseModel

class UserSchema(BaseModel):
    """_summary_
        
    Args:
        BaseModel (_type_): User pydantic model.
    Attributes:
        email: required string representing the user email.
        password: required string representing the user password.
    """
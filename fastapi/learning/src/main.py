from fastapi import FastAPI

# Create FastAPI instance
app = FastAPI()

# Define a route with proper docstring
@app.get("/")
async def read_root():
    """
    Root endpoint.
    
    Returns:
        dict: A dictionary with a message.
    """
    return {"message": "Hello, World"}
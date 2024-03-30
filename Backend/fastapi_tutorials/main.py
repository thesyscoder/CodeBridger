# import required modules

from fastapi import FastAPI

# create app instance

app = FastAPI()


@app.get("/")
async def read_root():
    return "Hello, World"

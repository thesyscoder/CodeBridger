# import all necessary modules
from fastapi import APIRouter, HTTPException


# initiate router instance
router = APIRouter(
    prefix="/sections",
    tags=["sections"],
    responses={404: {"description": "Section not found."}},
)


# Get all sections
@router.get("/{id}")
async def get_all_sections():
    return {"section": []}


@router.get("/{id}/content-blocks")
async def get_section_content_block():
    return {"section": []}


@router.get("/content-blocks/{id}")
async def read_content_block():
    return {"section": []}

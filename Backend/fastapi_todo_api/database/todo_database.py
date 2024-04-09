"""_summary_
This file handles the connection to the PostgreSQL database,
using SQLAlchemy to create an engine and a sessionmaker.
"""

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# postgres database url
SQLALCHEMY_POSTGRES_DATABASE_URL = (
    "postgresql://postgres:root@192.168.31.172:5432/fastapi_todo"
)

engine = create_engine(SQLALCHEMY_POSTGRES_DATABASE_URL)
SessionLocal = sessionmaker(autoflush=False, autocommit=False, bind=engine)

Base = declarative_base()


# Dependency for database session 
def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()
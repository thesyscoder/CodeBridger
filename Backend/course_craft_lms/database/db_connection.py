# import all necessary modules
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError

# Database URL
DATABASE_URL = "postgresql+psycopg2://thesyscoder@192.168.31.104/coursecraftdb"

# function to create SQLAlchemy engine and session


def create_engine_and_session():
    try:
        # create sqlalchemy engine
        engine = create_engine(DATABASE_URL)
        SessionLocal = sessionmaker(autoflush=False, autocommit=False, bind=engine)
        db = SessionLocal()
        db.execute("SELECT 1")
        connected = True
    except SQLAlchemyError as e:
        connected = False
        raise RuntimeError("Unable to connect to database.")
    return db, connected
from src.database import Base, engine
from src.models import TaskDB

Base.metadata.create_all(bind=engine)

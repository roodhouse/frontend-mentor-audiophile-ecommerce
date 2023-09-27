from app.db import Base
from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship

class Category(Base):
    __tablename__ = 'categories'
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    mobile_image = Column(String(500), nullable=False)
    tablet_image = Column(String(500), nullable=False)
    desktop_image = Column(String(500), nullable=False)
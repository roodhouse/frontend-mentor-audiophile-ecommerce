from app.db import Base
from sqlalchemy import Column, Integer, String, Boolean, text

class Orders(Base):
    __tablename__ = 'orders'
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False)
    phone = Column(String(250), nullable=False)
    address = Column(String(250), nullable=False)
    zip = Column(String(250), nullable=False)
    city = Column(String(250), nullable=False)
    country = Column(String(250), nullable=False)
    cash = Column(Boolean)
    eMoney = Column(Boolean)
    status = Column(String(250), server_default=text("'Processing'"))
    total = Column(Integer, nullable=False)
    items = Column(String(250), nullable=False)

from app.db import Base
from sqlalchemy import Column, Integer, String, Boolean, text, DATE, ForeignKey
from sqlalchemy.orm import relationship

class Items(Base):
    __tablename__ = 'items'
    id = Column(Integer, primary_key=True)
    item_name = Column(String(250), nullable=False)
    item_qty = Column(Integer, nullable=False)
    item_price = Column(Integer, nullable=False)
    
    order_id = Column(Integer, ForeignKey('orders.id'))
    orders = relationship("Orders", back_populates="items")
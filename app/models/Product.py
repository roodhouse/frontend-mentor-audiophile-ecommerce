from app.db import Base
from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship

# Classes: 
#   Product
#   Category
#   Includes
#   Images

class Product(Base):
    __tablename__ = 'products'
    id = Column(Integer, primary_key=True)
    slug = Column(String(250), nullable=False)
    name = Column(String(250), nullable=False)
    new = Column(Boolean)
    price = Column(Integer, nullable=False)
    features = Column(String(250), nullable=False)

    # define the relationships to other models
    category_id = Column(Integer, ForeignKey('categories.id'))
    category = relationship('Category', backref='products')
    others_id = Column(Integer, ForeignKey('others.id'))
    others = relationship('Others', backref='products')
    includes = relationship('Includes', backref='products', cascade='all, delete-orphan')
    images = relationship('Images', backref='products', cascade='all, delete-orphan')

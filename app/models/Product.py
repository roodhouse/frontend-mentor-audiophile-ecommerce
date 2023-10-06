from app.db import Base
from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship

class Product(Base):
    __tablename__ = 'products'
    id = Column(Integer, primary_key=True)
    slug = Column(String(250), nullable=False)
    name = Column(String(250), nullable=False)
    new = Column(Boolean)
    price = Column(Integer, nullable=False)
    sku = Column(String(250), nullable=False)
    description = Column(String(250), nullable=False)
    features = Column(String(1250), nullable=False)

    incl_one = Column(String(250))
    incl_one_quan = Column(Integer)
    incl_two = Column(String(250))
    incl_two_quan = Column(Integer)
    incl_three = Column(String(250))
    incl_three_quan = Column(Integer)
    incl_four = Column(String(250))
    incl_four_quan = Column(Integer)
    incl_five = Column(String(250))
    incl_five_quan = Column(Integer)

    main_image_mobile = Column(String(250), nullable=False)
    main_image_tablet = Column(String(250), nullable=False)
    main_image_desktop = Column(String(250), nullable=False)
    gallery_one_mobile = Column(String(250), nullable=False)
    gallery_one_tablet = Column(String(250), nullable=False)
    gallery_one_desktop = Column(String(250), nullable=False)
    gallery_two_mobile = Column(String(250), nullable=False)
    gallery_two_tablet = Column(String(250), nullable=False)
    gallery_two_desktop = Column(String(250), nullable=False)
    gallery_three_mobile = Column(String(250), nullable=False)
    gallery_three_tablet = Column(String(250), nullable=False)
    gallery_three_desktop = Column(String(250), nullable=False)
    category_image_mobile = Column(String(250), nullable=False)
    category_image_tablet = Column(String(250), nullable=False)
    category_image_desktop = Column(String(250), nullable=False)

    others_one_slug = Column(String(250), nullable=False)
    others_one_name = Column(String(250), nullable=False)
    others_one_short = Column(String(250), nullable=False)
    others_one_mobile = Column(String(250), nullable=False)
    others_one_tablet = Column(String(250), nullable=False)
    others_one_desktop = Column(String(250), nullable=False)

    others_two_slug = Column(String(250), nullable=False)
    others_two_name = Column(String(250), nullable=False)
    others_two_short = Column(String(250), nullable=False)
    others_two_mobile = Column(String(250), nullable=False)
    others_two_tablet = Column(String(250), nullable=False)
    others_two_desktop = Column(String(250), nullable=False)

    others_three_slug = Column(String(250), nullable=False)
    others_three_name = Column(String(250), nullable=False)
    others_three_short = Column(String(250), nullable=False)
    others_three_mobile = Column(String(250), nullable=False)
    others_three_tablet = Column(String(250), nullable=False)
    others_three_desktop = Column(String(250), nullable=False)

    # define the relationships to other models
    category_id = Column(Integer, ForeignKey('categories.id'))
    category_name = Column(String(250), nullable=False)
    category = relationship('Category', backref='products')
    
    # images = relationship('Images', backref='products', cascade='all, delete-orphan')

from app.models import Product, Category, Orders, Items
from app.db import Session, Base, engine

#Drop and rebuild tables
Base.metadata.drop_all(engine)
Base.metadata.create_all(engine)

db = Session()

#insert categories
db.add_all([
    Category(
        name='headphones', 
        mobile_image='/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg', 
        tablet_image='/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg', 
        desktop_image='/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg',
        thumbnail='/assets/shared/desktop/image-category-thumbnail-headphones.png' 
        ),
    Category(
        name='speakers', 
        mobile_image='/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg', 
        tablet_image='/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg', 
        desktop_image='/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg',
        thumbnail='/assets/shared/desktop/image-category-thumbnail-speakers.png' 
        ),
    Category(
        name='earphones', 
        mobile_image='/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg', 
        tablet_image='/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg', 
        desktop_image='/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg',
        thumbnail='/assets/shared/desktop/image-category-thumbnail-earphones.png' 
        )
])

db.commit()

#insert products
db.add_all([
    Product(
        slug='yx1-earphones', 
        name='YX1 Wireless Earphones', 
        new=True, 
        price=599,
        sku='YX1',
        description='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.', 
        features='Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.', 
        category_id=3,
        category_name = 'earphones',
        others_one_slug='xx99-mark-one-headphones', 
        others_one_name='XX99 Mark I Headphones',
        others_one_short='XX99 Mark I',
        others_one_mobile='/assets/shared/mobile/image-xx99-mark-one-headphones.jpg', 
        others_one_tablet='/assets/shared/tablet/image-xx99-mark-one-headphones.jpg', 
        others_one_desktop='/assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
        others_two_slug='xx59-headphones', 
        others_two_name='XX59 Headphones',
        others_two_short='XX59', 
        others_two_mobile='/assets/shared/mobile/image-xx59-headphones.jpg', 
        others_two_tablet='/assets/shared/tablet/image-xx59-headphones.jpg', 
        others_two_desktop='/assets/shared/desktop/image-xx59-headphones.jpg',
        others_three_slug='zx9-speaker', 
        others_three_name='ZX9 Speaker',
        others_three_short='ZX9 Speaker',
        others_three_mobile='/assets/shared/mobile/image-zx9-speaker.jpg', 
        others_three_tablet='/assets/shared/tablet/image-zx9-speaker.jpg', 
        others_three_desktop='/assets/shared/desktop/image-zx9-speaker.jpg',
        incl_one='Earphone unit',
        incl_one_quan=2,
        incl_two='Multi-size earplugs',
        incl_two_quan=6,
        incl_three='User manual',
        incl_three_quan=1,
        incl_four='USB-C charging cable',
        incl_four_quan=1,
        incl_five='Travel pouch',
        incl_five_quan=1,
        main_image_mobile='/assets/product-yx1-earphones/mobile/image-product.jpg',
        main_image_tablet='/assets/product-yx1-earphones/tablet/image-product.jpg',
        main_image_desktop='/assets/product-yx1-earphones/desktop/image-product.jpg',
        gallery_one_mobile='/assets/product-yx1-earphones/mobile/image-gallery-1.jpg',
        gallery_one_tablet='/assets/product-yx1-earphones/tablet/image-gallery-1.jpg',
        gallery_one_desktop='/assets/product-yx1-earphones/desktop/image-gallery-1.jpg',
        gallery_two_mobile='/assets/product-yx1-earphones/mobile/image-gallery-2.jpg',
        gallery_two_tablet='/assets/product-yx1-earphones/tablet/image-gallery-2.jpg',
        gallery_two_desktop='/assets/product-yx1-earphones/desktop/image-gallery-2.jpg',
        gallery_three_mobile='/assets/product-yx1-earphones/mobile/image-gallery-3.jpg',
        gallery_three_tablet='/assets/product-yx1-earphones/tablet/image-gallery-3.jpg',
        gallery_three_desktop='/assets/product-yx1-earphones/desktop/image-gallery-3.jpg',
        category_image_mobile='/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg',
        category_image_tablet='/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg',
        category_image_desktop='/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
    ),
    Product(
        slug='xx59-headphones', 
        name='XX59 Headphones', 
        new=False, 
        price=899,
        sku='XX59',
        description='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.', 
        features='These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.', 
        category_id=1,
        category_name='headphones', 
        others_one_slug='xx99-mark-two-headphones', 
        others_one_name='XX99 Mark II Headphones', 
        others_one_short='XX99 Mark II',
        others_one_mobile='/assets/shared/mobile/image-xx99-mark-two-headphones.jpg', 
        others_one_tablet='/assets/shared/tablet/image-xx99-mark-two-headphones.jpg', 
        others_one_desktop='/assets/shared/desktop/image-xx99-mark-two-headphones.jpg',
        others_two_slug='xx99-mark-one-headphones', 
        others_two_name='XX99 Mark I Headphones', 
        others_two_short='XX99 Mark I',
        others_two_mobile='/assets/shared/mobile/image-xx99-mark-one-headphones.jpg', 
        others_two_tablet='/assets/shared/tablet/image-xx99-mark-one-headphones.jpg', 
        others_two_desktop='/assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
        others_three_slug='zx9-speaker', 
        others_three_name='ZX9 Speaker',
        others_three_short='ZX9 Speaker', 
        others_three_mobile='/assets/shared/mobile/image-zx9-speaker.jpg', 
        others_three_tablet='/assets/shared/tablet/image-zx9-speaker.jpg', 
        others_three_desktop='/assets/shared/desktop/image-zx9-speaker.jpg',
        incl_one='Headphone unit',
        incl_one_quan=1,
        incl_two='Replacement earcups',
        incl_two_quan=2,
        incl_three='User manual',
        incl_three_quan=1,
        incl_four='3.5mm 5m audio cable',
        incl_four_quan=1,
        main_image_mobile='/assets/product-xx59-headphones/mobile/image-product.jpg',
        main_image_tablet='/assets/product-xx59-headphones/tablet/image-product.jpg',
        main_image_desktop='/assets/product-xx59-headphones/desktop/image-product.jpg',
        gallery_one_mobile='/assets/product-xx59-headphones/mobile/image-gallery-1.jpg',
        gallery_one_tablet='/assets/product-xx59-headphones/tablet/image-gallery-1.jpg',
        gallery_one_desktop='/assets/product-xx59-headphones/desktop/image-gallery-1.jpg',
        gallery_two_mobile='/assets/product-xx59-headphones/mobile/image-gallery-2.jpg',
        gallery_two_tablet='/assets/product-xx59-headphones/tablet/image-gallery-2.jpg',
        gallery_two_desktop='/assets/product-xx59-headphones/desktop/image-gallery-2.jpg',
        gallery_three_mobile='/assets/product-xx59-headphones/mobile/image-gallery-3.jpg',
        gallery_three_tablet='/assets/product-xx59-headphones/tablet/image-gallery-3.jpg',
        gallery_three_desktop='/assets/product-xx59-headphones/desktop/image-gallery-3.jpg',
        category_image_mobile='/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg',
        category_image_tablet='/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg',
        category_image_desktop='/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
    ),
    Product(
        slug='xx99-mark-one-headphones', 
        name='XX99 Mark I Headphones', 
        new=False, 
        price=1750,
        sku='XX99 MK I',
        description='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.', 
        features='As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.', 
        category_id=1,
        category_name='headphones', 
        others_one_slug='xx99-mark-two-headphones', 
        others_one_name='XX99 Mark II Headphones',
        others_one_short='XX99 Mark II',
        others_one_mobile='/assets/shared/mobile/image-xx99-mark-two-headphones.jpg', 
        others_one_tablet='/assets/shared/tablet/image-xx99-mark-two-headphones.jpg', 
        others_one_desktop='/assets/shared/desktop/image-xx99-mark-two-headphones.jpg',
        others_two_slug='xx59-headphones', 
        others_two_name='XX59 Headphones',
        others_two_short='XX59',
        others_two_mobile='/assets/shared/mobile/image-xx59-headphones.jpg', 
        others_two_tablet='/assets/shared/tablet/image-xx59-headphones.jpg', 
        others_two_desktop='/assets/shared/desktop/image-xx59-headphones.jpg',
        others_three_slug='zx9-speaker', 
        others_three_name='ZX9 Speaker', 
        others_three_short='ZX9 Speaker', 
        others_three_mobile='/assets/shared/mobile/image-zx9-speaker.jpg', 
        others_three_tablet='/assets/shared/tablet/image-zx9-speaker.jpg', 
        others_three_desktop='/assets/shared/desktop/image-zx9-speaker.jpg',
        incl_one='Headphone unit',
        incl_one_quan=1,
        incl_two='Replacement earcups',
        incl_two_quan=2,
        incl_three='User manual',
        incl_three_quan=1,
        incl_four='3.5mm 5m audio cable',
        incl_four_quan=1,
        main_image_mobile='/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
        main_image_tablet='/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
        main_image_desktop='/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
        gallery_one_mobile='/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg',
        gallery_one_tablet='/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg',
        gallery_one_desktop='/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg',
        gallery_two_mobile='/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg',
        gallery_two_tablet='/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg',
        gallery_two_desktop='/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg',
        gallery_three_mobile='/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg',
        gallery_three_tablet='/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg',
        gallery_three_desktop='/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg',
        category_image_mobile='/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
        category_image_tablet='/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
        category_image_desktop='/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
    ),
    Product(
        slug='xx99-mark-two-headphones', 
        name='XX99 Mark II Headphones', 
        new=True, 
        price=2999,
        sku='XX99 MK II',
        description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.', 
        features='Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.', 
        category_id=1,
        category_name='headphones', 
        others_one_slug='xx99-mark-one-headphones', 
        others_one_name='XX99 Mark I Headphones',
        others_one_short='XX99 Mark I', 
        others_one_mobile='/assets/shared/mobile/image-xx99-mark-one-headphones.jpg', 
        others_one_tablet='/assets/shared/tablet/image-xx99-mark-one-headphones.jpg', 
        others_one_desktop='/assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
        others_two_slug='xx59-headphones', 
        others_two_name='XX59 Headphones', 
        others_two_short='XX59',
        others_two_mobile='/assets/shared/mobile/image-xx59-headphones.jpg', 
        others_two_tablet='/assets/shared/tablet/image-xx59-headphones.jpg', 
        others_two_desktop='/assets/shared/desktop/image-xx59-headphones.jpg',
        others_three_slug='zx9-speaker', 
        others_three_name='ZX9 Speaker', 
        others_three_short='ZX9 Speaker',
        others_three_mobile='/assets/shared/mobile/image-zx9-speaker.jpg', 
        others_three_tablet='/assets/shared/tablet/image-zx9-speaker.jpg', 
        others_three_desktop='/assets/shared/desktop/image-zx9-speaker.jpg',
        incl_one='Headphone unit',
        incl_one_quan=1,
        incl_two='Replacement earcups',
        incl_two_quan=2,
        incl_three='User manual',
        incl_three_quan=1,
        incl_four='3.5mm 5m audio cable',
        incl_four_quan=1,
        incl_five='Travel bag',
        incl_five_quan=1,
        main_image_mobile='/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg',
        main_image_tablet='/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg',
        main_image_desktop='/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
        gallery_one_mobile='/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg',
        gallery_one_tablet='/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg',
        gallery_one_desktop='/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
        gallery_two_mobile='/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg',
        gallery_two_tablet='/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg',
        gallery_two_desktop='/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
        gallery_three_mobile='/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg',
        gallery_three_tablet='/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg',
        gallery_three_desktop='/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg',
        category_image_mobile='/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
        category_image_tablet='/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
        category_image_desktop='/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
    ),
    Product(
        slug='zx7-speaker', 
        name='ZX7 Speaker', 
        new=False, 
        price=3500,
        sku='ZX7', 
        description='Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.', 
        features='Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.', 
        category_id=2,
        category_name='speakers', 
        others_one_slug='zx9-speaker', 
        others_one_name='ZX9 Speaker',
        others_one_short='ZX9 Speaker', 
        others_one_mobile='/assets/shared/mobile/image-zx9-speaker.jpg', 
        others_one_tablet='/assets/shared/tablet/image-zx9-speaker.jpg', 
        others_one_desktop='/assets/shared/desktop/image-zx9-speaker.jpg',
        others_two_slug='xx99-mark-one-headphones', 
        others_two_name='XX99 Mark I Headphones',
        others_two_short='XX99 Mark I',
        others_two_mobile='/assets/shared/mobile/image-xx99-mark-one-headphones.jpg', 
        others_two_tablet='/assets/shared/tablet/image-xx99-mark-one-headphones.jpg', 
        others_two_desktop='/assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
        others_three_slug='xx59-headphones', 
        others_three_name='XX59 Headphones',
        others_three_short='XX59', 
        others_three_mobile='/assets/shared/mobile/image-xx59-headphones.jpg', 
        others_three_tablet='/assets/shared/tablet/image-xx59-headphones.jpg', 
        others_three_desktop='/assets/shared/desktop/image-xx59-headphones.jpg',
        incl_one='Speaker unit',
        incl_one_quan=2,
        incl_two='Speaker cloth panel',
        incl_two_quan=2,
        incl_three='User manual',
        incl_three_quan=1,
        incl_four='3.5mm 7.5m audio cable',
        incl_four_quan=1,
        incl_five='7.5m optical cable',
        incl_five_quan=1,
        main_image_mobile='/assets/product-zx7-speaker/mobile/image-product.jpg',
        main_image_tablet='/assets/product-zx7-speaker/tablet/image-product.jpg',
        main_image_desktop='/assets/product-zx7-speaker/desktop/image-product.jpg',
        gallery_one_mobile='/assets/product-zx7-speaker/mobile/image-gallery-1.jpg',
        gallery_one_tablet='/assets/product-zx7-speaker/tablet/image-gallery-1.jpg',
        gallery_one_desktop='/assets/product-zx7-speaker/desktop/image-gallery-1.jpg',
        gallery_two_mobile='/assets/product-zx7-speaker/mobile/image-gallery-2.jpg',
        gallery_two_tablet='/assets/product-zx7-speaker/tablet/image-gallery-2.jpg',
        gallery_two_desktop='/assets/product-zx7-speaker/desktop/image-gallery-2.jpg',
        gallery_three_mobile='/assets/product-zx7-speaker/mobile/image-gallery-3.jpg',
        gallery_three_tablet='/assets/product-zx7-speaker/tablet/image-gallery-3.jpg',
        gallery_three_desktop='/assets/product-zx7-speaker/desktop/image-gallery-3.jpg',
        category_image_mobile='/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg',
        category_image_tablet='/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg',
        category_image_desktop='/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
    ),
    Product(
        slug='zx9-speaker', 
        name='ZX9 Speaker', 
        new=True, 
        price=4500,
        sku='ZX9',
        description='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.', 
        features='Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.', 
        category_id=2,
        category_name='speakers', 
        others_one_slug='zx7-speaker', 
        others_one_name='ZX7 Speaker',
        others_one_short='ZX7 Speaker', 
        others_one_mobile='/assets/shared/mobile/image-zx7-speaker.jpg', 
        others_one_tablet='/assets/shared/tablet/image-zx7-speaker.jpg', 
        others_one_desktop='/assets/shared/desktop/image-zx7-speaker.jpg',
        others_two_slug='xx99-mark-one-headphones', 
        others_two_name='XX99 Mark I Headphones',
        others_two_short='XX99 Mark I',
        others_two_mobile='/assets/shared/mobile/image-xx99-mark-one-headphones.jpg', 
        others_two_tablet='/assets/shared/tablet/image-xx99-mark-one-headphones.jpg', 
        others_two_desktop='/assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
        others_three_slug='xx59-headphones', 
        others_three_name='XX59 Headphones', 
        others_three_short='XX59',
        others_three_mobile='/assets/shared/mobile/image-xx59-headphones.jpg', 
        others_three_tablet='/assets/shared/tablet/image-xx59-headphones.jpg', 
        others_three_desktop='/assets/shared/desktop/image-xx59-headphones.jpg',
        incl_one='Speaker unit',
        incl_one_quan=2,
        incl_two='Speaker cloth panel',
        incl_two_quan=2,
        incl_three='User manual',
        incl_three_quan=1,
        incl_four='3.5mm 10m audio cable',
        incl_four_quan=1,
        incl_five='10m optical cable',
        incl_five_quan=1,
        main_image_mobile='/assets/product-zx9-speaker/mobile/image-product.jpg',
        main_image_tablet='/assets/product-zx9-speaker/tablet/image-product.jpg',
        main_image_desktop='/assets/product-zx9-speaker/desktop/image-product.jpg',
        gallery_one_mobile='/assets/product-zx9-speaker/mobile/image-gallery-1.jpg',
        gallery_one_tablet='/assets/product-zx9-speaker/tablet/image-gallery-1.jpg',
        gallery_one_desktop='/assets/product-zx9-speaker/desktop/image-gallery-1.jpg',
        gallery_two_mobile='/assets/product-zx9-speaker/mobile/image-gallery-2.jpg',
        gallery_two_tablet='/assets/product-zx9-speaker/tablet/image-gallery-2.jpg',
        gallery_two_desktop='/assets/product-zx9-speaker/desktop/image-gallery-2.jpg',
        gallery_three_mobile='/assets/product-zx9-speaker/mobile/image-gallery-3.jpg',
        gallery_three_tablet='/assets/product-zx9-speaker/tablet/image-gallery-3.jpg',
        gallery_three_desktop='/assets/product-zx9-speaker/desktop/image-gallery-3.jpg',
        category_image_mobile='/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg',
        category_image_tablet='/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg',
        category_image_desktop='/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
    )
])

db.commit()

#insert orders
db.add_all([
    Orders(
        date="2023/01/08",
        name='John Rugh', 
        email='rughjm@gmail.com',
        phone='512 563-3817',
        address='105 Palo Duro Ct',
        city='Leander',
        zip='78641',
        state='TX',
        cash=False,
        eMoney=True,
        status='Processing',
        total=599+50+1079,
        items=[
            Items(item_name='YX1 Wireless Earphones', item_qty=1, item_price=599)
        ]
        ),
    Orders(
        date='2022/12/04',
        name='Laura Rugh', 
        email='lauraerugh@gmail.com',
        phone='512 529-9382',
        address='8402 Flagstone Dr',
        city='Austin',
        zip='78757',
        state='TX',
        cash=True,
        eMoney=False,
        status='Processing',
        total=2999+50+1079,
        items=[
            Items(item_name='XX99 Mark II Headphones', item_qty=1, item_price=2999)
        ]
        ),
    Orders(
        date='2023/08/23',
        name='Betty Rugh', 
        email='rughbe@gmail.com',
        phone='713 320-1854',
        address='14518 Dracaena Ct',
        city='Houston',
        zip='77070',
        state='TX',
        cash=False,
        eMoney=True,
        status='Processing',
        total=7499+50+1079,
        items=[
            Items(item_name='ZX9 Speaker', item_qty=1, item_price=4500),
            Items(item_name='XX99 Mark II Headphones', item_qty=1, item_price=2999)
        ]
        )
])

db.commit()

db.close()
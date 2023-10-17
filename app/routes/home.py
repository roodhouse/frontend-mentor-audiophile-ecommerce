from os import getenv
from dotenv import load_dotenv
import json
from flask import Blueprint, send_from_directory, current_app, jsonify, request, session
from app.models import Category, Product, Orders
from app.db import get_db
import logging
import smtplib

load_dotenv()

bp = Blueprint("home", __name__, url_prefix="/")


@bp.route("/")
def index():
    return send_from_directory("../frontend/build", "index.html")


@bp.route("/static/css/<path:filename>")
def serve_static_css(filename):
    return send_from_directory("../frontend/build/static/css", filename)


@bp.route("/static/js/<path:filename>")
def serve_static_js(filename):
    return send_from_directory("../frontend/build/static/js", filename)


@bp.route("/static/media/<path:filename>")
def serve_static_media(filename):
    return send_from_directory("../frontend/build/static/media", filename)


@bp.route("/assets/<path:filename>")
def serve_static_assets(filename):
    return send_from_directory("../frontend/build/assets", filename)


@bp.route("/manifest.json")
def serve_manifest():
    with current_app.open_resource("../frontend/build/manifest.json") as f:
        mainifest_data = json.load(f)
    return jsonify(mainifest_data)


@bp.route("/favicon.ico")
def serve_favicon():
    return send_from_directory("../frontend/build", "favicon.ico")


@bp.route("/logo192.png")
def serve_logo192():
    return send_from_directory("../frontend/build", "logo192.png")


@bp.route("/logo512.png")
def serve_logo512():
    return send_from_directory("../frontend/build", "logo512.png")


# all categories route
@bp.route("/api/category/", methods=["GET"])
def get_all_categories():
    db = get_db()

    categories = db.query(Category).all()

    if categories:
        category_list = [
            {
                "category_id": category.id,
                "category_name": category.name,
                "category_mobile": category.mobile_image,
                "category_tablet": category.tablet_image,
                "category_destktop": category.desktop_image,
                "category_thumbnail": category.thumbnail
            }
            for category in categories
        ]
        return jsonify(category_list)
    else:
        return jsonify({"error": "Category not found"}), 404


# single category route
@bp.route("/api/category/<int:id>", methods=["GET"])
def get_category(id):
    db = get_db()

    category = db.query(Category).filter_by(id=id).one_or_none()

    if category:
        category_info = {
            "category_id": category.id,
            "category_name": category.name,
            "category_mobile": category.mobile_image,
            "category_tablet": category.tablet_image,
            "category_destktop": category.desktop_image,
        }
        return jsonify(category_info)
    else:
        return jsonify({"error": "Category not found"}), 404


# all product route
# product route
@bp.route("/api/product/", methods=["GET"])
def get__all_products():
    db = get_db()

    products = db.query(Product).all()

    if products:
        product_list = [
            {
                "id": product.id,
                "slug": product.slug,
                "name": product.name,
                "sku": product.sku,
                "new": product.new,
                "price": product.price,
                "description": product.description,
                "features": product.features,
                "incl_one": product.incl_one,
                "incl_one_quan": product.incl_one_quan,
                "incl_two": product.incl_two,
                "incl_two_quan": product.incl_two_quan,
                "incl_three": product.incl_three,
                "incl_three_quan": product.incl_three_quan,
                "incl_four": product.incl_four,
                "incl_four_quan": product.incl_four_quan,
                "incl_five": product.incl_five,
                "incl_five_quan": product.incl_five_quan,
                "main_image_mobile": product.main_image_mobile,
                "main_image_tablet": product.main_image_tablet,
                "main_image_desktop": product.main_image_desktop,
                "gallery_one_mobile": product.gallery_one_mobile,
                "gallery_one_tablet": product.gallery_one_tablet,
                "gallery_one_desktop": product.gallery_one_desktop,
                "gallery_two_mobile": product.gallery_two_mobile,
                "gallery_two_tablet": product.gallery_two_tablet,
                "gallery_two_desktop": product.gallery_two_desktop,
                "gallery_three_mobile": product.gallery_three_mobile,
                "gallery_three_tablet": product.gallery_three_tablet,
                "gallery_three_desktop": product.gallery_three_desktop,
                "others_one_slug": product.others_one_slug,
                "others_one_name": product.others_one_name,
                "others_one_short": product.others_one_short,
                "others_one_mobile": product.others_one_mobile,
                "others_one_tablet": product.others_one_tablet,
                "others_one_desktop": product.others_one_desktop,
                "others_two_slug": product.others_two_slug,
                "others_two_name": product.others_two_name,
                "others_two_short": product.others_two_short,
                "others_two_mobile": product.others_two_mobile,
                "others_two_tablet": product.others_two_tablet,
                "others_two_desktop": product.others_two_desktop,
                "others_three_slug": product.others_three_slug,
                "others_three_name": product.others_three_name,
                "others_three_short": product.others_three_short,
                "others_three_mobile": product.others_three_mobile,
                "others_three_tablet": product.others_three_tablet,
                "others_three_desktop": product.others_three_desktop,
                "category_id": product.category_id,
                "category_name": product.category_name,
                "category_image_mobile": product.category_image_mobile,
                "category_image_tablet": product.category_image_tablet,
                "category_image_desktop": product.category_image_desktop
            }
            for product in products
        ]
        return jsonify(product_list)
    else:
        return jsonify({"error": "Category not found"}), 404


# single product route
@bp.route("/api/product/<int:id>", methods=["GET"])
def get_product(id):
    db = get_db()

    product = db.query(Product).filter_by(id=id).one_or_none()

    if product:
        product_info = {
            "id": product.id,
            "slug": product.slug,
            "name": product.name,
            "new": product.new,
            "price": product.price,
            "description": product.description,
            "features": product.features,
            "incl_one": product.incl_one,
            "incl_one_quan": product.incl_one_quan,
            "incl_two": product.incl_two,
            "incl_two_quan": product.incl_two_quan,
            "incl_three": product.incl_three,
            "incl_three_quan": product.incl_three_quan,
            "incl_four": product.incl_four,
            "incl_four_quan": product.incl_four_quan,
            "incl_five": product.incl_five,
            "incl_five_quan": product.incl_five_quan,
            "main_image_mobile": product.main_image_mobile,
            "main_image_tablet": product.main_image_tablet,
            "main_image_desktop": product.main_image_desktop,
            "gallery_one_mobile": product.gallery_one_mobile,
            "gallery_one_tablet": product.gallery_one_tablet,
            "gallery_one_desktop": product.gallery_one_desktop,
            "gallery_two_mobile": product.gallery_two_mobile,
            "gallery_two_tablet": product.gallery_two_tablet,
            "gallery_two_desktop": product.gallery_two_desktop,
            "gallery_three_mobile": product.gallery_three_mobile,
            "gallery_three_tablet": product.gallery_three_tablet,
            "gallery_three_desktop": product.gallery_three_desktop,
            "others_one_slug": product.others_one_slug,
            "others_one_name": product.others_one_name,
            "others_one_mobile": product.others_one_mobile,
            "others_one_tablet": product.others_one_tablet,
            "others_one_desktop": product.others_one_desktop,
            "others_two_slug": product.others_two_slug,
            "others_two_name": product.others_two_name,
            "others_two_mobile": product.others_two_mobile,
            "others_two_tablet": product.others_two_tablet,
            "others_two_desktop": product.others_two_desktop,
            "others_three_slug": product.others_three_slug,
            "others_three_name": product.others_three_name,
            "others_three_mobile": product.others_three_mobile,
            "others_three_tablet": product.others_three_tablet,
            "others_three_desktop": product.others_three_desktop,
            "category_id": product.category_id,
        }
        return jsonify(product_info)
    else:
        return jsonify({"error": "Category not found"}), 404
    

# all orders route
@bp.route("/api/orders/", methods=["GET"])
def get_all_orders():
    db = get_db()

    orders = db.query(Orders).all()

    if orders:
        orders_list = [
            {
                "order_id": order.id,
                "order_date": order.date,
                "order_name": order.name,
                "order_email": order.email,
                "order_phone": order.phone,
                "order_address": order.address,
                "order_zip": order.zip,
                "order_city": order.city,
                "order_state": order.state,
                "order_cash": order.cash,
                "order_emoney": order.eMoney,
                "order_status": order.status ,
                "order_total": order.total,
                "order_items": order.items               
            }
            for order in orders
        ]
        return jsonify(orders_list)
    else:
        return jsonify({"error": "Orders not found"}), 404

# add new order 
@bp.route('/api/orders', methods=['POST'])
def create():
    data = request.get_json()
    db = get_db()

    try:
        #add new order
        new_order = Orders(
            date = data['date'],
            name = data['name'],
            email = data['email'],
            phone = data['phone'],
            address = data['address'],
            zip = data['zip'],
            city = data['city'],
            state = data['state'],
            cash = data['cash'],
            eMoney = data['eMoney'],
            status = data['status'],
            total = data['total'],
            items = data['items']
        )
        db.add(new_order)
        db.commit()
    except KeyError as e:
        logging.error(f'KeyError: {e}')
        db.rollback()
        return jsonify(message='Invalid Data'), 400
    
    ## send email to customer
    email = getenv('EMAIL')
    password = getenv('PASSWORD')

    final_items = ''
    all_items = data["items"]
    all_items_list = all_items.split(", ")
    for item in all_items_list:
        final_items += f'{item}\n'

    formatted_total = f'{data["total"]:,.2f}'
    final_total = f'${str(formatted_total)}'

    # with smtplib.SMTP("smtp.gmail.com", port=587) as connection:
    #     connection.starttls()
    #     connection.login(user=email, password=password)
    #     email_content = f'Subject: Thank you for your order!\n\nHi {data["name"]},\n\nWe appreciate you ordering from us, we know you have other choices. Here is a summary of your order:\n\n{final_items}\nTotal: {final_total}\n\nYour order will be shipped soon to:\n\n{data["address"]}\n{data["city"]},{data["state"]} {data["zip"]}\n\nIf there is a problem with your order please respond to this email.\n\nSincerely,\n\nAudiophile Management'
    #     connection.sendmail(
    #         from_addr=email,
    #         to_addrs=data['email'],
    #         msg=email_content
    #     )
    return jsonify(id = new_order.id)

    

# single order route
@bp.route("/api/orders/<int:id>", methods=["GET"])
def get_order(id):
    db = get_db()

    order = db.query(Orders).filter_by(id=id).one_or_none()

    if order:
        order_info = {
                "order_id": order.id,
                "order_date": order.date,
                "order_name": order.name,
                "order_email": order.email,
                "order_phone": order.phone,
                "order_address": order.address,
                "order_zip": order.zip,
                "order_city": order.city,
                "order_state": order.state,
                "order_cash": order.cash,
                "order_emoney": order.eMoney,
                "order_status": order.status,
                "order_total": order.total,
                "order_items": order.items  
        }
        return jsonify(order_info)
    else:
        return jsonify({"error": "Order not found"}), 404
    
# update single order route
@bp.route("/api/orders/<int:id>", methods=["PUT"])
def update_order(id):
    data = request.get_json()
    db = get_db()

    order = db.query(Orders).filter_by(id=id).one_or_none()

    if order:
        try:
        #update order
            order.date = data['date']
            order.name = data['name']
            order.email = data['email']
            order.phone = data['phone']
            order.address = data['address']
            order.zip = data['zip']
            order.city = data['city']
            order.state = data['state']
            order.cash = data['cash']
            order.eMoney = data['eMoney']
            order.status = data['status']
            order.total = data['total']
            order.items = data['items']

            print('test')
            db.commit()
            return jsonify({"message": "Order updated successfully"})
        
        except KeyError as e:
            logging.error(f'KeyError: {e}')
            db.rollback()
            return jsonify(message='Invalid Data'), 400
    else:
        return jsonify({"error": "Order not found"}), 404

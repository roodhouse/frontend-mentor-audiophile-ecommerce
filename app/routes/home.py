import json
from flask import Blueprint, send_from_directory, current_app, jsonify, request, session
from app.models import Category, Product
from app.db import get_db

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

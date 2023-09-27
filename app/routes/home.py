import json
from flask import Blueprint, send_from_directory, current_app, jsonify, request, session
from app.models import Category, Product
from app.db import get_db

bp = Blueprint('home', __name__, url_prefix='/')

@bp.route('/')
def index():
    return send_from_directory('../frontend/build', 'index.html')

@bp.route('/static/css/<path:filename>')
def serve_static_css(filename):
    return send_from_directory('../frontend/build/static/css', filename)

@bp.route('/static/js/<path:filename>')
def serve_static_js(filename):
    return send_from_directory('../frontend/build/static/js', filename)

@bp.route('/static/media/<path:filename>')
def serve_static_media(filename):
    return send_from_directory('../frontend/build/static/media', filename)

@bp.route('/assets/<path:filename>')
def serve_static_assets(filename):
    return send_from_directory('../frontend/build/assets', filename)

@bp.route('/manifest.json')
def serve_manifest():
    with current_app.open_resource('../frontend/build/manifest.json') as f:
        mainifest_data = json.load(f)
    return jsonify(mainifest_data)

@bp.route('/favicon.ico')
def serve_favicon():
    return send_from_directory('../frontend/build', 'favicon.ico')

@bp.route('/logo192.png')
def serve_logo192():
    return send_from_directory('../frontend/build', 'logo192.png')

@bp.route('/logo512.png')
def serve_logo512():
    return send_from_directory('../frontend/build', 'logo512.png')

# category route
@bp.route('/api/category/<int:id>', methods=['GET'])
def get_category(id):
    db = get_db()
    
    category = db.query(Category).filter_by(id = id).one_or_none()

    if category:
        category_info = {
            'category_id': category.id,
            'category_name': category.name,
            'category_mobile': category.mobile_image,
            'category_tablet': category.tablet_image,
            'category_destktop': category.desktop_image
        }
        return jsonify(category_info)
# product route
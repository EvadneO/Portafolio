"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# @api.route('/user', methods=['GET'])
# def get_user():
#     Usuario = User.query.all()
#     Usuario = list(map(lambda x: x.serialize(),Usuario))
#     return jsonify(Usuario), 200

# @api.route('/portafolio', methods=['GET', 'POST'])
# def portafolio():
#     data = request.get_json()
#     usuario = User.query.filter_by(id=data['id'], name=data['name'], purpose=data['purpose'], technology=data['technology'], link=data[link]).first()
#     if usuario:
#         return jsonify(usuario.serialize()), 200
#     else:
#         return jsonify({"mensaje": "el proyecto no existe"}), 200


# @api.route("/user", methods=['POST'])
# def createProyecto():
#     user = user()
#     user.id = request.json.get('id')
#     user.name = request.json.get('name')
#     user.purpose = request.json.get('purpose')
#     user.technology = request.json.get('technology')
#     user.link = request.json('link')
#     user.save()
    
#     return jsonify(user.serialize()), 201

# @api.route('/crear-portafolio', methods=['POST'])
# def crear_portafolio():
#       data = request.get_json()
#       check_usuario = User.query.filter_by(id=data['id'], name=data['name'], purpose=data['purpose'], technology=data['technology'], link=data[link]).first()
#       if check_usuario:
#           return jsonify({"mensaje": "Proyecto existe"})
      
#       else:
#         new_user = User()
#         new_user.id = request.json.get('id')
#         new_user.name= request.json.get('name')
#         new_user.purpose = request.json.get('purpose')
#         new_user.technology = request.json.get('technology')
#         new_user.link = request.json.get('link')

#         db.sesion.add(new_user)
#         db.session.commit()
      
#         return jsonify(new_user.serialize()), 201
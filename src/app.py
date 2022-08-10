"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User, Experience
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
                                                                                                                              

#from models import Person                                                                                                                                                                                                                                                        
ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response


@app.route('/user', methods=['GET'])
def get_user():
    Usuario = User.query.all()
    Usuario = list(map(lambda x: x.serialize(),Usuario))
    return jsonify(Usuario), 200

@app.route("/user", methods=['POST'])
def createProyecto():
    user = user()
    user.id = request.json.get('id')
    user.name = request.json.get('name')
    user.purpose = request.json.get('purpose')
    user.technology = request.json.get('technology')
    user.link = request.json('link')
    user.save()
    
    return jsonify(user.serialize({'mensaje': "proyectos"})), 201

@app.route('/experience', methods=['GET'])
def get_experience():
    Experiencias = Experience.query.all()
    Experiencias = list(map(lambda x: x.serialize(),Experiencias))
    return jsonify(Experiencias), 200

@app.route("/experience", methods=['POST'])
def createExperiencia():
    experience = user()
    experience.id = request.json.get('id')
    experience.name = request.json.get('name')
    experience.date = request.json.get('date')
    experience.function = request.json.get('function')
    experience.country = request.json('country')
    experience.save()
    
    return jsonify(experience.serialize({'mensaje': "experiencias"})), 201

@app.route('/proyecto', methods=[('GET')])
def listar_proyectos():
    try:
        cursor = conexion.connection.cursor()
        sql = "SELECT id, name, purpose, technology, link"
        cursor.execute(sql)
        datos = cursor.fetchall()
        proyectos = []
        for fila in datos:
            proyecto = {'id': fila[0], 'name': fila[1], 'purpose': fila[2], 'technology': fila[3], 'link': fila[4]}
            proyectos.append(proyecto)
        return jsonify({'proyectos' : proyectos, 'mensaje': "lista de proyectos"})
    except Exception as ex:
        return jsonify({'mensaje': 'Proyecto no existe'})



# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)

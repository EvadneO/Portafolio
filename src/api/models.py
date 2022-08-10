from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    purpose = db.Column(db.String(100))
    technology = db.Column(db.String(100))
    link = db.Column(db.String(100))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def save(self):
        db.session.add(self)  # INSERT
        db.session.commit()  # Guarda el INSERT

    def update(self):
        db.session.commit()  # Guarda el UPDATE

    def delete(self):
        db.session.delete(self)  # DELETE
        db.session.commit()  # Guarda el DELETE

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "purpose": self.purpose,
            "technology": self.technology,
            "link": self.link
        }


class Experience(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    date = db.Column(db.String(100))
    function = db.Column(db.String(180))
    country = db.Column(db.String(100))

    def save(self):
        db.session.add(self)  # INSERT
        db.session.commit()  # Guarda el INSERT

    def update(self):
        db.session.commit()  # Guarda el UPDATE

    def delete(self):
        db.session.delete(self)  # DELETE
        db.session.commit()  # Guarda el DELETE

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "date": self.date,
            "function": self.function,
            "country": self.country,
        }


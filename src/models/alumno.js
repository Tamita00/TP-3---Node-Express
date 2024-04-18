export default class Alumno {
    constructor(username, dni, edad) {
        this.username = username;
        this.dni = dni;
        this.edad = edad;
    }
    
    getUsername() {
        return this.username;
    }
    
    getDni() {
        return this.dni;
    }
    
    getEdad() {
        return this.edad;
    }
    
    getInformacion() {
        return `${this.username} ${this.dni} ${this.edad}`;
    }
}
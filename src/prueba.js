import React, { Component } from 'react';

class Prueba extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenfinal: "",
            empleados: [],
            nombre: '',
            apellido: '',
            run: ''
        };

    }

    ChangeNombre(nombre) {
        console.log(nombre.target.value)
        this.setState({ nombre })
    }
    ChangeApellido(apellido) {
        console.log(apellido)
        this.setState({ apellido })
    }
    ChangerRun(run) {
        console.log(run)
        this.setState({ run })
    }



    handleSubmit(event) {
        alert("el usuario agregado es " + this.state.nombre + this.state.apellido + this.state.run);
    }

    componentDidMount() {
        function rundelfetch() {
            console.log("se ejecuto")
            let nombre = "roberto.espinoza.espinoza@gmail.com";
            let contraseña = "arrayan2020";
            let json = {
                username: nombre,
                password: contraseña
            }
            console.log(JSON.stringify(json))
            var opcionesLogin = {
                method: 'POST',
                body: JSON.stringify(json),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            function sacardatosfetch() {

                return fetch('http://18.220.217.118:8080/api/login/', opcionesLogin).then(function (response) {
                    return response.json();
                }).then(function (token) {
                    return token;
                }).catch(function (error) {
                    console.log(error, error.messaje);
                })
            }
            sacardatosfetch().then(function (token) {
                localStorage.setItem('token', JSON.stringify(token));
            })
        }



        rundelfetch();
        let token = localStorage.getItem('token')
        this.setState({ tokenfinal: token })
        function empleados(newtoken) {
            let header = "JWT " + JSON.parse(newtoken).token
            console.log(header)
            // let parametros = {
            //     method: 'GET',
            //     headers: {
            //         'Authorization': header,
            //         'Content-Type': 'application/json'
            //     }
            // }
            // return fetch('http://18.220.217.118:8080/employee/', parametros).then(function (response) {
            //     return response.json();
            // })

        }
        // empleados(token).then(function (empleados) {
        //     localStorage.setItem('empleados', JSON.stringify(empleados))

        // })
    }





    render() {
        return (
            <div>
                <p> {this.state.tokenfinal}</p>

                <form onSubmit={this.handleSubmit}>
                    <label>Nombre:
                    <input type="text" nombre={this.state.nombre} value={this.state.nombre}onChange={(nombre) => this.ChangeNombre(nombre)} />
                        <br></br>
                    </label>
                    <label>Apellido:
                    <input type="text" apellido={this.state.apellido}  value={this.state.apellido}onChange={(apellido) => this.ChangeApellido(apellido)}/>
                        <br></br>
                    </label>
                    <label>Run:
                    <input type="text" run={this.state.run} value={this.state.run}onChange={(run) => this.ChangeRun(run)} />
                        <br></br>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        )
    }
}

export default Prueba;
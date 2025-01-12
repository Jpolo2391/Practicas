import React from 'react';

export function UsuariosiList() {
    const listado = JSON.parse(localStorage.getItem("listaUsuariosi")) || [];
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Fecha de nacimiento</th>
                        <th>Direccion</th>
                        <th>Genero</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      listado.map(usui => <tr>
                          <td>{usui.nom}</td>
                          <td>{usui.apell}</td>
                          <td>{usui.fen}</td>
                          <td>{usui.dir}</td>
                          <td>{usui.gen}</td>
                          <td>{usui.corr}</td>
                          <td>{usui.cel}</td>
                          </tr>
                        )  
                    }
                </tbody>
            </table>
        </>
    )
}
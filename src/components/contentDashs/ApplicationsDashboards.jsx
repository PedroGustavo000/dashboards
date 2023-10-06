import React from "react";
import './../style/contentdash.css'

function ApplicationDash() {
    return(
        <div className="generalDash">
            <div className="boxesDash">
                <div className="box">
                    <div className="card">
                        <h3>Total de Usuários - <strong>1000</strong></h3>
                        <div className="divisor"></div>
                        <span>
                            Alunos: <strong>50%</strong>
                        </span>
                        <span>
                            Professores: <strong>50%</strong>
                        </span>
                        <div className="divisor"></div>
                    </div>
                </div>
                <div className="box">

                </div>
            </div>
        </div>
    )
}

export default ApplicationDash;
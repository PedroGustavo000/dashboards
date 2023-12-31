import React from "react";
import './../style/contentdash.css'
import {AulasBuscadas, AulasEnsinadas, UsuariosMeses} from "../dashs/ChartsApplication"

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
                    <div className="card_dash">
                        <AulasBuscadas />
                    </div>
                </div>
                <div className="box">
                    <div className="card_dash">
                        <AulasEnsinadas />
                    </div>
                    <div className="card_dash">
                        <UsuariosMeses />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationDash;
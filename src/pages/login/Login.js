import React from "react";
import "./Login.css"
import logo from "../../media/logo_full.png"
import {strings} from "../../strings";
import FormField from "../../components/forms/FormField";
import {FaLock, FaUser} from "react-icons/all";

export default function Login() {
    return (
        <div id={"container"}>
            <img id={"logo"} src={logo} alt={strings().up_cotacoes}/>

            <div id={"frame"}>
                <FormField
                    className={"login-form-field"}
                    icon={FaUser}
                    placeholder={strings().email_cnpj}
                />

                <FormField
                    className={"login-form-field"}
                    icon={FaLock}
                    placeholder={strings().password}
                    type={'password'}/>
            </div>
        </div>
    )
}
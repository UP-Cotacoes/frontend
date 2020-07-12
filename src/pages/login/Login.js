import React from "react";
import "./Login.css"
import logo from "../../media/logo_full.png"
import {strings} from "../../strings";
import FormField from "../../components/forms/FormField";
import {FaLock, FaUser} from "react-icons/all";
import ElevationButton from "../../components/buttons/ElevationButton";

export default function Login() {
    return (
        <div id={"container"}>
            <img id={"logo"} src={logo} alt={strings().up_cotacoes}/>

            <div id={"frame"}>
                <FormField
                    className={"login-form-field login-form-field-email"}
                    icon={FaUser}
                    placeholder={strings().email_cnpj}
                    type={'email'}
                />

                <FormField
                    className={"login-form-field login-form-field-password"}
                    icon={FaLock}
                    placeholder={strings().password}
                    type={'password'}/>

                <ElevationButton
                    className={'login-button'}
                    text={strings().sign_in}
                    upperCase/>
            </div>
        </div>
    )
}
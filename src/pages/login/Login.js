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

                <div id={'login-form-remember-me-container'}>
                    <input type={'checkbox'}/>
                    {strings().remember_me}
                </div>


                <ElevationButton
                    className={'login-button'}
                    text={strings().sign_in}
                    upperCase/>

                <button className={'login-form-clickable-text'} onClick={() => console.log('clicked')}>
                    {strings().forgot_your_password}
                </button>

                <div className={'login-form-register-container'}>
                    <div className={'login-form-text'}>
                        {strings().not_a_member}&nbsp;
                    </div>
                    <button className={'login-form-clickable-text'} onClick={() => console.log('clicked')}>
                        {strings().register}&nbsp;
                    </button>
                    <div className={'login-form-text'}>
                        {strings().make_an_up}
                    </div>

                </div>
            </div>
        </div>
    )
}
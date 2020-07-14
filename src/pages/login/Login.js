import React, {useState} from "react";
import "./Login.css"
import logo from "../../media/logo_full.png"
import {strings} from "../../strings";
import FormField from "../../components/forms/FormField";
import {FaLock, FaUser, FaUserCircle} from "react-icons/all";
import ElevationButton from "../../components/buttons/ElevationButton";
import {post} from "../../network/http";
import {API} from "../../network/endpoints";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    return (
        <div id={"container"}>
            <img id={"logo"} src={logo} alt={strings().up_cotacoes}/>

            <div id={"frame"}>
                <FaUserCircle className={"login-form-user-icon"}/>

                <div className={"login-form-frame-content"}>
                    <FormField
                        className={"login-form-field login-form-field-email"}
                        icon={FaUser}
                        placeholder={strings().email_cnpj}
                        type={'email'}
                        onChange={setEmail}
                        disabled={loading}
                    />

                    <FormField
                        className={"login-form-field login-form-field-password"}
                        icon={FaLock}
                        placeholder={strings().password}
                        type={'password'}
                        onChange={setPassword}
                        disabled={loading}/>

                    <div id={'login-form-remember-me-container'}>
                        <input type={'checkbox'} disabled={loading}/>
                        {strings().remember_me}
                    </div>


                    <ElevationButton
                        className={'login-button'}
                        text={strings().sign_in}
                        onClick={() => attemptLogin()}
                        disabled={loading}
                        upperCase/>

                    <button className={'login-form-clickable-text'} onClick={() => console.log('clicked')}>
                        {strings().forgot_your_password}
                    </button>

                    <div className={'login-form-register-container'}>
                    <span className={'login-form-text'}>
                        {strings().not_a_member}&nbsp;
                    </span>
                        <button className={'login-form-clickable-text'} onClick={() => console.log('clicked')}>
                            {strings().register}&nbsp;
                        </button>
                        <div className={'login-form-text'}>
                            {strings().make_an_up}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

    function attemptLogin() {
        setLoading(true)
        let params = {email: email, password: password}
        post(API.login.url, params)
            .then(res => {
                alert(JSON.stringify(res))
            })
            .catch(err => {
                alert(JSON.stringify(err))
            })
            .finally(() => {
                setLoading(false)
            })
    }
}
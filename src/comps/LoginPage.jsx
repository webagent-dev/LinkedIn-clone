


const LoginPage = () => {
    return (
        <div className='login__container'>
            <section className='login__wrapper'>
                <div className='header'>
                    <h1>Linked</h1>
                     <img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' className='head__logo'/>
                </div>
                <form className='input__wrapper'>
                    <input type='text' autoFocus placeholder='Full Name (required if registering)'/>
                    <input type='text' placeholder='Profile pic Url (optional)'/>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <input type='submit' value='Sign in' className='submit__btn'/>
                </form>
                <p>Not a member? <span className='color'>Register now</span></p>
            </section>
        </div>
    )
}



export default LoginPage
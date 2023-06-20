import './login.css'
import './button.jsx'
import Btn from './button.jsx'
import { useState } from 'react'



const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
const phoneRegex = /^(\+98|0)?9\d{9}$/

function LoginF(){

    const[inputV , setInputV] = useState('')

    const inputSmall = document.getElementById('inputSmall')
 
    function textPandE(){
        const testEmail = emailRegex.test(inputV)
        const textPhone = phoneRegex.test(inputV)

        if(testEmail || textPhone){
            inputSmall.style.display = ''
        }else{
            inputSmall.style.display = 'inline'
        }
    }
   

    return(
        <>
            <div className='container'>
                <div className='loginForm'>
                    <div className='imgDiv'>
                        <img src='https://www.digikala.com/statics/img/svg/logo.svg' className='logo'/>
                    </div>
                    <div className='header'>
                        <h3>ورود</h3>
                        <h3>|</h3>
                        <h3>ثبت نام</h3>
                    </div>
                    <div className='facts'>
                        <p className='factsP'>سلام</p>
                        <p className='factsP'>لطفا شماره موبایل یا ایمیل خود را وارد نمایید</p>
                    </div>
                    <div className='btnInputDiv'>
                        <input type='text' className='textInput' onChange={(event) => setInputV(event.target.value)}/>
                        <small className='regexSmall' id='inputSmall' >شماره موبایل یا ایمیلتون اشتباه است.</small>
                    </div>
                    <Btn onClick={textPandE} />
                    <div className='lastFatc'>
                        <p className='lastP'>ورود شما به معنای پذیرش <a href='https://www.digikala.com/page/terms/'>شرایط دیجی کالا</a> و <a href='https://www.digikala.com/page/privacy/'>قوانین حریم خصوصی </a> میباشد.</p>
                    </div>
                </div>
            </div>

        </>
    )

} 
export default LoginF



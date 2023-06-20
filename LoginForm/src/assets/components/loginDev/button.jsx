import './button.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function Btn(props){
    return(
        <>
        
            <div className='btnContainer'>
                <Button {...props} variant="danger" className='btnSub' type='submit'>Danger</Button>
            </div>

        </>
    )
}

export default Btn
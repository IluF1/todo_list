import styles from './sign_in.module.scss'
import { Input } from '../../components/ui/input/input'
import { Button } from '../../components/ui/button/button'

export default function Sign_in() {
    return <div className = {styles.container}>
        <h1>Войдите в ваш аккаунт</h1>
        <form action="" className = {styles.form}>
            <div className = {styles.input_one}>
                <Input placeholder='Введите ваш email...' style={'default'}/>
            </div>
            <div className = {styles.input_two}>
                <Input placeholder='Введите пароль...' style={'default'}/>
            </div>
            <Button style='default' center>Войти</Button>
        </form>
    </div>
}
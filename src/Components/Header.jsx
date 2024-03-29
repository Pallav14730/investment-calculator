import Logo from '../assets/investment-calculator-logo.png'

export default function Header(){
    return (
        <header id="header">
            <img src={Logo} alt="LOGO" />
            <h1>Investment Calculator</h1>
        </header>
    )
}
function Footer({ condition }){
    return (<footer><p className="mt-10 text-sm text-gray-600">
            {condition ? "You clicked more than 5 times!":"keep clicking...."}
        </p></footer>)
}
export default Footer;
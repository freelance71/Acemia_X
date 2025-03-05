const Corredor = () => {
	const [energia, setEnergia] = useState('0%');
	return (<Energia actualizarEnergia={setEnergia} />);
}

const Energia = ({ actualizarEnergia }) => {
	return(<button onClick={() => actualizar Energia('100%')}></ button>)
}
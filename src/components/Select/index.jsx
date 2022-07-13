import { Container, SelectOptions } from "./style"



export default function Select({options, optionSetter}) {
    return (
        <Container>
                    <SelectOptions onChange={Event => optionSetter(Event.target.value)}>
                        {
                            options.map(({valor, texto}, index) => (
                                <option key={index} value={valor}>{texto}</option>
                            ))
                        }
                    </SelectOptions> 
        </Container>
    )
}
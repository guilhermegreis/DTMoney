import { TransactionsTable } from '../../TransactionsTable';
import { Summary } from '../Summary';
import {Container} from './styles'

export function Dashboard () {
    //Prop drilling = passando uma propriedade varios nvs pra baixo

    return (
        <Container>
            <Summary/>
            <TransactionsTable/>
        </Container>
    );
}
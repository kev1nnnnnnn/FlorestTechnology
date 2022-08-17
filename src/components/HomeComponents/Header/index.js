import * as C from './styles';
import { Card } from 'react-bootstrap';
import works from '../../../assets/img/works.png'


export function Header() {


    return(
        <C.Container>
            <Card className="bg-light text-white text-center">
                <C.Image src={works} alt="fundo"></C.Image>
                <Card.ImgOverlay>
                    <C.SubTitle>Bem-vindo à nossa plataforma!</C.SubTitle>
                    <C.Title>
                    prazer em conhecê-lo
                    </C.Title>
                   <C.Button>Contrate</C.Button>
                </Card.ImgOverlay>
            </Card>
        </C.Container>

    )
}
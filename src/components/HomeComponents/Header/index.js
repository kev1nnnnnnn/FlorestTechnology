import * as C from './styles';
import { Card, Tooltip, OverlayTrigger  } from 'react-bootstrap';
import works from '../../../assets/img/works.png'


export function Header() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          (92) 99608-0250
        </Tooltip>
      );

    return(
        <C.Container>
            <Card className="bg-light text-white text-center">
                <C.Image src={works} alt="fundo"></C.Image>
                <Card.ImgOverlay>
                    
                    <C.Title>
                    Desenvolvimento de <C.Special>sites</C.Special>, <C.Special>sistemas</C.Special> e <C.Special>aplicativos</C.Special>
                    </C.Title>
                    <C.SubTitle>Desenvolvemos sistemas sob medida pensando no processo e modelo de negócio da sua empresa, focando sempre na otimização e aumento da produtividade.</C.SubTitle>
                    <OverlayTrigger
                    placement="right"
                    delay={{show: 25, hide: 400}}
                    overlay={renderTooltip}
                    >
                        <C.Button href="https://bit.ly/3dx8z4K" target="_blank">Realize seu orçamento</C.Button>
                    </OverlayTrigger>
                </Card.ImgOverlay>
            </Card>
        </C.Container>

    )
}
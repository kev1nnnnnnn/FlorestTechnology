import React from "react";
import { RiWhatsappFill } from 'react-icons/ri';
import { Button } from './styles';
import { Tooltip, OverlayTrigger} from 'react-bootstrap';

export function WhatsappBtn() {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          (92) 99608-0250
        </Tooltip>
      );

    return(
        <OverlayTrigger
        placement="left"
        delay={{show: 25, hide: 400}}
        overlay={renderTooltip}
        >
            <Button href="https://bit.ly/3dx8z4K" target="_blank">
                <RiWhatsappFill size={50} color="#25D366"/>
            </Button>
        </OverlayTrigger>
    )
}


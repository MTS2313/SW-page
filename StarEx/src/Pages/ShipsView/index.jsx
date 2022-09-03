import { ListGroup, OverlayTrigger, Popover } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shipsview.style.css";

function StarShips() {
  const state = useLocation();
  let NavProps = state.state.id;
  return (
    <div className="StarShipsVw">
      <ListGroup className="AtrList">
        <ListGroup.Item as="li">{`Name: ${NavProps.name}`}</ListGroup.Item>
        <ListGroup.Item as="li">{`Modelo: ${NavProps.model}`}</ListGroup.Item>
        <ListGroup.Item as="li">{`Classe: ${NavProps.starship_class}`}</ListGroup.Item>
        <ListGroup.Item as="li">{`Fabricante(s): ${NavProps.manufacturer}`}</ListGroup.Item>
        <OverlayTrigger trigger="hover" placement="left" overlay={pricepop}>
          <ListGroup.Item as="li">{`Valor: ${NavProps.cost_in_credits}`}</ListGroup.Item>
        </OverlayTrigger>
        <OverlayTrigger trigger="hover" placement="left" overlay={lengthpop}>
          <ListGroup.Item as="li">{`Largura: ${NavProps.length}`}</ListGroup.Item>
        </OverlayTrigger>
        <OverlayTrigger trigger="hover" placement="left" overlay={crewpop}>
          <ListGroup.Item as="li">{`Operadores: ${NavProps.crew}`}</ListGroup.Item>
        </OverlayTrigger>
        <ListGroup.Item as="li">{`Passageiros Suportados: ${NavProps.passengers}`}</ListGroup.Item>
        <OverlayTrigger trigger="hover" placement="left" overlay={atmpop}>
          <ListGroup.Item as="li">{`Velocidade Da Nave em Uma Atmostera: ${NavProps.max_atmosphering_speed}`}</ListGroup.Item>
        </OverlayTrigger>
        <ListGroup.Item as="li">{`HyperDrive: ${NavProps.hyperdrive_rating}`}</ListGroup.Item>
        <OverlayTrigger trigger="hover" placement="left" overlay={mgltpop}>
          <ListGroup.Item as="li">{`MGLT: ${NavProps.MGLT}`}</ListGroup.Item>
        </OverlayTrigger>
        <OverlayTrigger trigger="hover" placement="left" overlay={crpc}>
          <ListGroup.Item as="li">{`Capacidade de Carga: ${NavProps.cargo_capacity}`}</ListGroup.Item>
        </OverlayTrigger>
        <OverlayTrigger trigger="hover" placement="left" overlay={consu}>
          <ListGroup.Item as="li">{`Consumíveis: ${NavProps.consumables}`}</ListGroup.Item>
        </OverlayTrigger>
      </ListGroup>
    </div>
  );
}

const pricepop = (
  <Popover>
    <Popover.Body>
      O custo desta nova nave estelar, em créditos galácticos.
    </Popover.Body>
  </Popover>
);
const lengthpop = (
  <Popover>
    <Popover.Body>O comprimento desta nave em metros.</Popover.Body>
  </Popover>
);
const crewpop = (
  <Popover>
    <Popover.Body>
      O número de pessoal necessário para operar ou pilotar esta nave.
    </Popover.Body>
  </Popover>
);
const atmpop = (
  <Popover>
    <Popover.Body>
      A velocidade máxima desta nave na atmosfera. "N/A" se esta nave for
      incapaz de voar atmosférico.
    </Popover.Body>
  </Popover>
);
const mgltpop = (
  <Popover>
    <Popover.Body>
      O número máximo de Megalights que esta nave pode viajar.
    </Popover.Body>
  </Popover>
);
const crpc = (
  <Popover>
    <Popover.Body>
      O número máximo de quilogramas que esta nave pode transportar.
    </Popover.Body>
  </Popover>
);
const consu = (
  <Popover>
    <Popover.Body>
      O tempo máximo que esta nave estelar pode fornecer consumíveis para toda a
      sua tripulação sem ter que reabastecer.
    </Popover.Body>
  </Popover>
);
export default StarShips;

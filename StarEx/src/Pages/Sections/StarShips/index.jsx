import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axinst from "../../../Services/api-axios";
import "./starships.style.css";
function StarShips() {
  const [ShipsData, setShipsData] = useState();
  var [IndexTable, setIndexTable] = useState(1);
  let tokenAc = localStorage.getItem("token");
  useEffect(() => {
    axinst.get(`starships/?page=${IndexTable}`).then((i) => {
      setShipsData(i.data.results);
    });
  }, [IndexTable]);

  function next() {
    if (IndexTable < 4) {
      setIndexTable((IndexTable += 1));
    } else {
      alert("Estamos sem naves");
    }
  }

  function back() {
    if (IndexTable > 1) {
      setIndexTable((IndexTable -= 1));
    } else {
      alert("Voltar nunca sera uma opção");
    }
  }
  return ShipsData ? (
    <div className="StarShips">
      <Table size="sm" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Modelo</th>
            {tokenAc ? <th>ViewNav</th> : null}
          </tr>
        </thead>
        <tbody>
          {ShipsData.map((i) => {
            return (
              <tr>
                <td>{i.name}</td>
                <td>{i.model}</td>
                {tokenAc ? (
                  <td>
                    <Link to="/ships" state={{ id: i }}>
                      <Button>Ver</Button>
                    </Link>
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="BtnDiv">
        <Button size="sm" onClick={back} variant="secondary">
          back
        </Button>
        <Button size="sm" onClick={next}>
          next
        </Button>
      </div>
    </div>
  ) : (
    <div className="LoadShips">
      <Spinner animation="border" variant="dark" />
    </div>
  );
}

export default StarShips;

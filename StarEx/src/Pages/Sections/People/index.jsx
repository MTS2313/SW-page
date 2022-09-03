import React, { useEffect, useState } from "react";
import axios from "axios";
import axinst from "../../../Services/api-axios";
import "./people.style.css";
import { Table, Button,Spinner } from "react-bootstrap";
function People() {
  const [PeopleData, setPeopleData] = useState();
  var [TableIndex, setTableIndex] = useState(1);
  useEffect(() => {
    axinst.get(`people/?page=${TableIndex}`).then((i) => {
      setPeopleData(i.data.results);
    });
  }, [TableIndex]);
  function next() {
    if (TableIndex <= 8) {
      setTableIndex((TableIndex += 1));
    } else {
      alert("O Fim e aqui");
    }
  }
  function back() {
    if (TableIndex > 1) {
      setTableIndex((TableIndex -= 1));
    } else {
      alert("O começo e aqui");
    }
  }
  return PeopleData ? (
    <div className="People">
      <Table size="md" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Gênero</th>
            <th>Cor do Cabelo</th>
            <th>Cor dos Olhos</th>
          </tr>
        </thead>
        <tbody>
          {PeopleData.map((i) => {
            return (
              <tr className="RowTable">
                <td>{i.name}</td>
                <td>{i.birth_year}</td>
                <td>{i.gender}</td>
                <td>{i.hair_color}</td>
                <td>{i.eye_color}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="BtnDiv">
      <Button size="sm" onClick={back} variant="secondary">back</Button>
      <Button size="sm" onClick={next}>Next</Button>
      </div>
    </div>
  ) : (
    <div className="LoadPeopleList">
      <Spinner animation="border" variant="dark"/>
    </div>
  );
}

export default People;

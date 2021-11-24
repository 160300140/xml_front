import React from "react";
import {
    Modal,
    Button,
    Form,
    Input,
    Row,
    Col,
    Collapse,
    Select,
    Divider,
    DatePicker,
    Space,
  } from "antd";

/**
Necesita:
const searchOptions = {
    titulo: "Gestión de ventas",
    filter1: "Nombre:",
    filter2: "Clave:",
    filter3: "Fecha inicio:",
    filter4: "Fecha final:",
    filter5: "No. nota:",
    filter6: "Estatus:",
    filter7: "Categoría:",
    filter8: "Empresa:",
    filter9: "Sucursal",
    buttom: "Buscar"

};
Uso:
<SearchComponent options={searchOptions}/>
 */

export default function SearchComponent(props){
    const {options} = props;
    const { Option } = Select;
    //Todos los campos posibles del objeto
    /*
    const {
        titulo, 
        filter1 = "Sin detalles",
        filter2 = "Sin detalles",
        filter3 = "Sin detalles",
        filter4 = "Sin detalles",
        filter5 = "Sin detalles",
        filter6 = "Sin detalles",
        filter7 = "Sin detalles",
        filter8 = "Sin detalles",
        filter9 = "Sin detalles",
        filter10 = "Sin detalles",
        buttom = "Buscar"
    } = options;
*/
    return(
        <>
        <h2>Gestión del cliente</h2>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col>
                {" "}
                <Form>
                  <Form.Item name="name">
                    <p>Nombre del cliente:</p>
                    <Input
                      type="text"
                      name="name"
                      placeholder="mbre del cliente:"
                      style={{ width: 200 }}
                    />
                  </Form.Item>
                </Form>
              </Col>
              <Col>
                {" "}
                <Form>
                  <Form.Item name="lastname">
                    <p>Clave del cliente:</p>
                    <Input
                      type="text"
                      name="lastname"
                      placeholder="Clave del cliente:"
                      style={{ width: 200 }}
                    />
                  </Form.Item>
                </Form>
              </Col>
              <Col>
                {""}
                <Form>
                  <Form.Item name="sex">
                    <p>Estatus</p>
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Estatus"
                    >
                      <Option value="Mujer">Activo</Option>
                      <Option value="Hombre">Baja</Option>
                      <Option value="Otro">Otro</Option>
                    </Select>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
            
        </>
    );
}
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row, ListGroup } from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            <ListGroup horizontal>
                {device.brands.map(brand =>
                    <ListGroup.Item
                        style={{cursor: 'pointer', width: '150px'}}
                        key={brand.id}
                        onClick={() => device.setSelectedBrand(brand)}
                        active={brand.id === device.selectedBrand.id}
                    >
                        {brand.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </Row>
    );
});

export default BrandBar;

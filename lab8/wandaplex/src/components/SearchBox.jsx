import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";
const SearchBox = ({ searchValue, setSearchValues, onSearchSubmit }) => {
  const {t}=useTranslation();
  return (
    <Form className="d-inline-flex" onSubmit={onSearchSubmit}>
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder={t("searchtext")}
            value={searchValue}
            onChange={(e) => setSearchValues(e.target.value)}
            className="mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="custom-submit-btn searchbtn">{t("searchtext")}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
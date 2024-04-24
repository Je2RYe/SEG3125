import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import help_icon from '../assests/help.png'
import { useState,useEffect } from 'react';
import SearchBox from './SearchBox';
import logo from '../assests/logo1.png'
import LanguageSelector from "./languageSelect";
import { useTranslation } from "react-i18next";

const Topbar=({ setSearchValue })=>{
    const [tempSearchValue, setTempSearchValue] = useState('');  
    const {t}=useTranslation();
    const handleSearchSubmit = (e) => {
        e.preventDefault();  
        setSearchValue(tempSearchValue);  
    };

    return(
        <div className='topbar_container'>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary topbar-navbar" fixed="top" data-bs-theme="dark"> 
            <Navbar.Brand href="/"><img src={logo} alt="" className='logoimg'/></Navbar.Brand>
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto search-section">
                        <SearchBox searchValue={tempSearchValue} setSearchValues={setTempSearchValue} onSearchSubmit={handleSearchSubmit}/>
                    </Nav>
                    <Nav className='translate-section'>
                        <LanguageSelector />
                    </Nav>
                    <Nav className='searchbar help-section'>
                        <Button className="custom-submit-btn helpbtn" href="/help">
                            <i className="bi bi-question-circle yellow-icon small-icon">{" "}{t("helptext")}</i>
                        </Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar
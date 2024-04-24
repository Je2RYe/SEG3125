import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";

const Filter = ({ onGenreChange, onScoreChange, onRatingChange,onScoreChange2 }) => {
    const {t}=useTranslation();
    const handleCheck = (genre) => {
        onGenreChange(genre); 
      };
    const handleCheck2 = (score) => {
        onScoreChange(score); 
    };
    const handleCheck3 = (age) => {
        onRatingChange(age); 
    };
    const handleCheck4 = (score) => {
        onScoreChange2(score); 
    };
    return (
        <>
            {/*Genre dropdown*/}
            <div className='dropdown-margin '>
                {[DropdownButton].map((DropdownType, idx)=>  (
                <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="lg"
                    variant="secondary"
                    title={t("genre")}
                    data-bs-theme="dark"
                    className='d-flex justify-content-center'
                >
                    <Form.Check className="sortbar" label = {t("horror")} onChange={() => handleCheck("Horror")}/>
                    <Dropdown.Divider />
                    <Form.Check className="sortbar" label = {t("sf")} onChange={() => handleCheck("Science Fiction")}/>
                    <Dropdown.Divider />
                    <Form.Check className="sortbar" label = {t("Action")} onChange={() => handleCheck("Action")}/>
                    <Dropdown.Divider />
                    <Form.Check className="sortbar" label = {t("Adventure")} onChange={() => handleCheck("Adventure")}/>
                    <Dropdown.Divider />
                    <Form.Check className="sortbar" label = {t("Anime")} onChange={() => handleCheck("Anime")}/>
                    <Dropdown.Divider />
                    <Form.Check className="sortbar" label = {t("Biograph")} onChange={() => handleCheck("Biograph")}/>
                    <Dropdown.Divider />
                    <Form.Check className="sortbar" label = {t("Comedy")} onChange={() => handleCheck("Comedy")}/>
                    <Dropdown.Divider />
                    <Form.Check className="sortbar" label = {t("Crime")} onChange={() => handleCheck("Crime")}/>
                    <Dropdown.Divider />
                    <Form.Check className="sortbar" label = {t("Documentary")} onChange={() => handleCheck("Documentary")}/>
                    <Dropdown.Divider/>
                    
                </DropdownType>               
            ))}
            
            {/*Score dropdown*/}
            {[DropdownButton].map((DropdownType, idx)=>  (
                <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="lg"
                    variant="secondary"
                    title={t("score")}
                    data-bs-theme="dark"
                >
                    <Form.Check className="sortbar"
                        label = {<div> {t("score")}{" > "}2.5 <i className="bi bi-emoji-smile"></i> </div>}
                        onChange={() => handleCheck2(2.5)}>
                     </Form.Check>
                    <Dropdown.Divider />
                    <Form.Check className="sortbar" 
                        label = {<div> {t("score")}{" < "} 2.5 <i className="bi bi-emoji-angry"></i></div>}
                        onChange={() => handleCheck4(2.5)}>
                    </Form.Check>
                
                </DropdownType>               
            ))}

            {/*Rating drop down*/}
            {[DropdownButton].map((DropdownType, idx)=>  (
                <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="lg"
                    variant="secondary"
                    title={t("rating")}
                    data-bs-theme="dark"
                >
                    <Form.Check className="sortbar" label = "G" onChange={() => handleCheck3("G")}></Form.Check>
                    <Dropdown.Divider />
                    <Form.Check className="sortbar" label = "PG" onChange={() => handleCheck3("PG")}></Form.Check>
                    <Dropdown.Divider />
                    <Form.Check className="sortbar" label = "PG-13" onChange={() => handleCheck3("PG-13")}></Form.Check>
                    <Dropdown.Divider />
                    <Form.Check className="sortbar" label = "R" onChange={() => handleCheck3("R")}></Form.Check>
                    <Dropdown.Divider /> 
                </DropdownType>               
            ))}
            </div>
            <div>
                
            </div>
        </>
    )
}
export default Filter
import Topbar from '../components/Topbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import help1 from '../assests/help1.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import help2 from '../assests/help2.png'
import help3 from '../assests/help3.png'
import help4 from '../assests/help4.png'
import { useTranslation } from "react-i18next";
function Help() {
    const [open, setOpen] = useState({});
    const {t}=useTranslation();
    const toggleOpen = (id) => {
        setOpen(prevOpen => ({ ...prevOpen, [id]: !prevOpen[id] }));
    };

    return (
        <div>
            <Topbar />
            <Row className='info_container'>
                
                <Col>
                    <div
                        className='infobar'
                        onClick={() => toggleOpen('section1')}
                        aria-controls="collapse-text-1"
                        aria-expanded={open['section1']}
                    >
                        <h3>{t("q1")}</h3>
                    </div>
                    <Collapse in={open['section1']}>
                        <div id="collapse-text-1">
                            <h5 className=' helptext'>Click the WandaPlex icon in the top left corner of website.
                            <br/>点击网址左上角的WandaPlex图标回到首页
                            </h5>
                            <img src={help1} alt="" className='helpimg' />
                        </div>
                    </Collapse>
                </Col>

                
                <Col>
                    <div
                        onClick={() => toggleOpen('section2')}
                        className='infobar'
                        aria-controls="collapse-text-2"
                        aria-expanded={open['section2']}
                    >
                        <h3>{t("q2")}</h3>
                    </div>
                    <Collapse in={open['section2']}>
                        <div id="collapse-text-2">
                        <h5 className=' helptext'>Click the 2 buttons in the top right corner of website to switch language.
                        <br/>点击网站右上角的2个按钮切换语言。
                        </h5>
                        <img src={help2} alt="" className='helpimg' />
                        </div>
                    </Collapse>
                </Col>
            </Row>
            <Row className='info_container'>
                
                <Col>
                    <div
                        className='infobar'
                        onClick={() => toggleOpen('section3')}
                        aria-controls="collapse-text-3"
                        aria-expanded={open['section3']}
                    >
                        <h3>{t("q3")}</h3>
                    </div>
                    <Collapse in={open['section3']}>
                        <div id="collapse-text-3">
                            <h5 className=' helptext'>Click the Poster of movie in the homepage, then you will go to 
                                the page allows you to add comments and rate the movie.
                                <br/>点击首页的电影海报，您将进入该页面允许您添加评论并对电影进行评分。</h5>
                                <img src={help3} alt="" className='helpimg' />
                        </div>
                    </Collapse>
                </Col>

                
                <Col>
                    <div
                        onClick={() => toggleOpen('section4')}
                        className='infobar'
                        aria-controls="collapse-text-4"
                        aria-expanded={open['section4']}
                    >
                        <h3>{t("q4")}</h3>
                    </div>
                    <Collapse in={open['section4']}>
                        <div id="collapse-text-4">
                        <h5 className=' helptext'>Type the name or letters of movies in the search box, or use the sort bar to choose the categories
                        <br/>在搜索框中键入电影的名称或字母，或使用排序栏选择类别
                        </h5>
                        <img src={help4} alt="" className='helpimg' />
                        </div>
                    </Collapse>
                </Col>
            </Row>
        </div>
    );
}

export default Help;

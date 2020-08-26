import React, { Component } from 'react';
import LinkBox from '../../../Components/linkBox/LinkBox';
import './MainBG.scss';
import DownArrow from './DownArrow';

class MainBG extends Component {
    state = {
        scroll: 0,
        txtShow: false,
        
    };

    componentDidMount(){
        const {index} = this.props;

        this.setScrollPosition(index)
    };

    setScrollPosition = (idx) => {
        this.setState({
            scroll: parseInt(window.innerHeight * (0.7 + (idx - 1)))
        });

        if(idx === 0){
            setTimeout(() => {
                this.setState({txtShow: true})
            }, 100);
        }

        if(idx === 4){
            this.setState({
                scroll: parseInt(window.innerHeight * 3.25)
            });   
        }

        if(idx === 5){
            this.setState({
                scroll: parseInt(window.innerHeight * 4.25)
            }); 
        }
    };

    componentDidUpdate(prevProps, prevState){
        const {scrollPosition} = this.props;
        const {scroll, txtShow} = this.state;
        
        if((prevState.scroll !== scrollPosition) && (scroll <= scrollPosition) && !txtShow){
            this.setState({txtShow: true});
        }
    };

    render() {
        const {backgroundImg, title, info, txtLinkBox, detail, position, height, index} = this.props;
        const {txtShow} = this.state;

        return (
            <div className={`MainBG ${height ? "height-long" : "height-short"}`} style={{backgroundImage: `url(${backgroundImg})`}}>
                <div className={`txtContainer ${position ? "position-left" : "position-right"}`}>
                    <div className={`title ${txtShow ? "txtShow" : ""}`}>
                        <span>{title}</span>
                    </div>
                    <div className={`info ${txtShow ? "txtShow" : ""}`}>
                        {info.map((el, index) => <span key={index}>{el}</span>)}
                    </div>
                    <div className={`detail ${height ? "" : "width-short"} ${txtShow ? "txtShow" : ""}`}>
                        <span>{detail}</span>
                    </div>
                    <div className={`linkBox-container ${txtShow ? "txtShow" : ""}`}>
                        <LinkBox txtLinkBox={txtLinkBox}/>
                    </div>
                </div>
                {!index ? 
                    <div className="arrow-container">
                        <DownArrow />
                    </div> 
                    : ''
                }
            </div>
        );
    }
}

export default MainBG;
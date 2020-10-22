import React, {useState, useContext, createContext} from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }){
    return (
        <Container {...restProps}>
            <Inner>{Children}</Inner>
        </Container>
    )
}
Accordion.Title = function AccordionTitle({ children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}
Accordion.Frame = function AccordionFrame({ children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>;
}
Accordion.Item = function AccordionItem({ children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(False);
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>;
        </ToggleContext.Provider>
    );
}
Accordion.Header = function AccordionHeader({ children, ...restProps}){
    const { toggleShow, setToggleShow} = useContext(ToggleContext);
    return(
        // (toggleShow) => !toggleShow) = if true (or false) then invert on click
        <Header Onclick={()=> setToggleShow((toggleShow) => !toggleShow)}{...restProps}>    
            {children}
        </Header>
    );
}

Accordion.body = function AccordionBody({children, ...restProps}){
    const { toggleShow } = useContext(ToggleContext);
    return toggleShow ? <Body {...restProps}></Body> : null;
}
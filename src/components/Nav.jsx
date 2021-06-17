import React from 'react';
import Menu from './Menu';


class Nav extends React.Component {
    constructor(){
        super();
        this.state = {
            clickMenu:true,
        }
    }

    showSideBar= (estado) => {
        this.setState({
            clickMenu:estado
        })

        this.showMenu();
    }

    showMenu = () => {
        const { clickMenu } = this.state;
        clickMenu === false 
            ? document.body.classList.add("sidenav-toggled")
            : document.body.classList.remove("sidenav-toggled")
    }

    render() { 
        return ( 
            <React.Fragment>
            <Header showSideBar={(estado)=> this.showSideBar(estado)}></Header>
            <Menu />
            </React.Fragment>
         );
    }
}
 
export default Nav;
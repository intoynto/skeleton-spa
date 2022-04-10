import React from "react";
import {connect} from "react-redux";
import {withRouter, TWithRouterProps} from "./withRouter";
import {State,AC_SET_OPEN_MENU} from "./Store";

type Iprops = TWithRouterProps & {
    openMenu:boolean
    setOpenMenu:(open:boolean)=>void
}

type Istate = {

}

class Comp<P extends Iprops,S extends Istate> extends React.Component<P,S>
{
    render()
    {
        const {openMenu}=this.props;
        return (
            <header id="header" className="flex items-center px-4">
                <div className="flex-auto">
                    <div className="text-2xl">Header</div>
                </div>
                <div className="flex items-center gap-2">
                    <div>State <span className="font-semibold">{openMenu?<span>Opened</span>:<span>Closed</span>}</span></div>
                    <div><a onClick={()=>{ this.props.setOpenMenu(!openMenu)} }>Toggle Open</a></div>
                </div>
            </header>
        );
    }
}


function mpToProps(state:State)
{
    return {
        openMenu:state.openMenu,
    }
}

function mpDispatch(dispatch:any)
{
    return {
        setOpenMenu:(open:boolean)=>dispatch({type:AC_SET_OPEN_MENU,payload:open})
    }
}

const Header=connect(mpToProps,mpDispatch)(Comp);

export default withRouter(Header);
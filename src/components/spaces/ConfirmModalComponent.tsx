import { Component } from "react";
import './ConfirModalComponentProps.css';

interface ConfirModalComponentProps{
    show:boolean,
    content:string,
    closeM: () => void
}

export class ConfirModalComponent extends Component<ConfirModalComponentProps>{

    render(){
        if(!this.props.show){
            return null
        }else{
            return <div className="modal">
                <div className="modal-content">
                    <h2>You tried to reserve and ...</h2>
                    <h3 className="modalText">{this.props.content}</h3>
                    <button className='modalButton' onClick={()=>this.props.closeM()}>Ok, close</button>
                </div>
            </div>
        }
    }

}
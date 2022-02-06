import { Component } from "react";
import { Space } from "../../model/Model";
import { DataService } from "../../services/DataServices";
import { SpaceComponent } from "./SpaceComponent";
import {ConfirModalComponent} from './ConfirmModalComponent';

interface SpacesState{
    spaces: Space[],
    showModal: boolean,
    modalContent:string
}

interface SpacesProps{
    dataService: DataService
}

export class Spaces extends Component<SpacesProps,SpacesState>{
    
    constructor(props:SpacesProps){
        super(props)
        this.state={
            spaces:[],
            showModal:false,
            modalContent:''
        }
        this.reserveSpace = this.reserveSpace.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    async componentDidMount() {
        const spaces = await this.props.dataService.getSpaces();
        this.setState({
            spaces: spaces
        });
    }

    private async reserveSpace(spaceId: string){
        const reservationResult = await this.props.dataService.reserveSpace(spaceId);
        if(reservationResult){
            this.setState({
                showModal:true,
                modalContent: `You reserved the space with id ${spaceId} and got the reservation number ${reservationResult}`
            })
        }else{
            this.setState({
                showModal:true,
                modalContent: `You can't reserve the space with id ${spaceId}`
            })
        }
    }

    private renderSpaces(){
        const rows: any[]=[]

        for (const space of this.state.spaces) {
            rows.push(
                <SpaceComponent
                    location={space.location}
                    name={space.name}
                    spaceId={space.spaceId}
                    reserveSpace={this.reserveSpace}
                />
            )
        }
        return rows;
    }

    private closeModal(){
        this.setState({
            showModal:false,
            modalContent:''
        })
    }

    render(){
        return( 
        <div>
            <h2>Welcome to the spaces page!</h2>
            {this.renderSpaces()}
            <ConfirModalComponent 
                closeM={()=>this.closeModal()} 
                content={this.state.modalContent} 
                show={this.state.showModal}
            />
        </div>
    )}
}
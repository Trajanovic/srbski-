// compnent Parent
import React from 'react';
import MM from './modall';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            naslov:'',
            telo:'',
            slika:'' ,
            className:''

        };
        this.setStateHandler = this.setStateHandler.bind(this);
        this.postaviStanje = this.postaviStanje.bind(this);
        this.Stanje = this.Stanje.bind(this);
      /*  this.novoStanje = this.novoStanje.bind(this);*/
    }
    setStateHandler() {
        let image_path = require('../Assets/slike/oblak.jpg');
        this.setState({ naslov: "Naslov Prvi u Modalu", telo:"Novo Prvo telo modala",slika:image_path, className:"btn-danger" });

    };
    postaviStanje(){

      this.setState({naslov: " Zahalnost", telo:"Hvala na poruci",className:"btn-success" });
    };
    Stanje(){
       let image_path = require('../Assets/slike/jumbo.jpg');
       this.setState({naslov: " Novi treci u Modalu", telo:"Novo trece  telo modala", slika: image_path, className:"btn-primary" });
            };
   /* novoStanje(){
        console.log(this.state.data,"iz stanja povratno");
        this.state.data.map((data)=>{
            return(
                <div>
                    {this.state.data.telo}
                </div>
            );
           });

    }*/
    render() {
        return (
            <div>
                <button onClick = {this.setStateHandler} data-toggle="modal" data-target="#modal">SET STATE</button>
                <button onClick = {this.postaviStanje} data-toggle="modal" data-target="#modal">SET STATE2</button>
                <button onClick = {this.Stanje} data-toggle="modal" data-target="#modal">SET STATE3</button>
                <MM telo={this.state.telo} naslov={this.state.naslov} slika={this.state.slika}
                className={this.state.className}  />
            </div>
        );
    }
}
export default App;

// Component child
/// /**
 * Created by trika on 31-Jan-18.
 */
import React,{Component} from 'react';

class Modal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            naslov:this.props.naslov,
            telo: this.props.telo,
            slika: this.props.slika,
            className: this.props.className,
        };
    }
    render(){
          return(
            <div className="modal" id="modal" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className={this.props.className}><strong>{this.props.naslov}</strong></h4>
                            <button type="button" className="close push-right" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5><strong>{this.props.telo}</strong></h5>
                            <img className="img img-responsive" src={this.props.slika} width={100} height={100} alt=" ovo je slika "/>
                            <p>
                               Objasnjenje Slike
                            </p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;

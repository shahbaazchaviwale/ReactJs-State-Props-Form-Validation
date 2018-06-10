import React, { Component } from 'react'
import classnames from "classnames";
export default class ItemForm extends Component {

    constructor(props){
        super(props);
        this.state ={ item_name : '', item_price:''}
        this.errors={}
    }

    // ======================================================================================

    handleChange = (evt) =>{
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    handleSubmit = (evt) =>{
        evt.preventDefault();
       // console.log(this.state);
// validation fro form
       let new_List_filled = this.state;
        let set_error ={};
        if (new_List_filled.item_name === '') set_error.item_name = "empty";
        if (new_List_filled.item_price === '') set_error.item_price = "empty";

        let getNoOfErrors = Object.keys(set_error).length;
        let passFormValid = false;
        if(getNoOfErrors === 0) passFormValid = true; else passFormValid = false;
        this.setState({ errors : set_error});

        if (passFormValid){
            // pass as props to  ITEM LIST component
            this.props.pass_props_add_data(this.state)
            // clear data of text box
            this.setState({ item_name: '', item_price: '' })
        }
        
    }
    // ======================================================================================
  render() {
    return <form onSubmit={this.handleSubmit}>
        <div className="ui divided three column grid">
          <div className="row">
            <div className="column">
              <div className={classnames("ui fluid input field", {
                  errors: !!this.errors.item_name
                })}>
                <input type="text" name="item_name" value={this.state.item_name} onChange={this.handleChange} placeholder=" Item" />
              </div>
            </div>
            <div className="column">
                    <div className={classnames("ui fluid input", {
                        errors: !!this.errors.item_price
                    })}>
                <input type="text" value={this.state.item_price} name="item_price" onChange={this.handleChange} placeholder="Price" />
              </div>
            </div>
            <div className="column">
              <div className="ui fluid input">
                <button className="ui large button" role="button">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>;
  }
}

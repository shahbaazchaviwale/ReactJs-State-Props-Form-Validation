import React, { Component } from 'react'

export default class ItemShow extends Component {
  render() {
    return <div>
        <div class="ui aligned  grid">
          <div class="row">
            <div class="column">
              <div class="ui fluid vertical menu">
                        <div class="item header">
                            Item No. :   {this.props.pass_props_item_details.id}
                        </div>
                        <div class="item header">
                            Item Name. :   {this.props.pass_props_item_details.item_name}
                        </div>
                        <div class="item header">
                            <i aria-hidden="true" className="rupee icon" />  Item Price. :   
                            {this.props.pass_props_item_details.item_price}
                        </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}


import React, { Component } from 'react'
import ItemOderList from "./ItemOrderList";
import ItemShow from "./ItemShow";
import ItemForm from "./ItemForm";

export default class ItemList extends Component {
                 constructor() {
                   super();
                   this.state = { cafeteria: [
                     { id: 1, item_name: "TEA", item_price: 15.0 }, 
                     { id: 2, item_name: "Uttampa Dosa", item_price: 35 }, 
                     { id: 3, item_name: "Veg Biryani", item_price: 45 }, 
                     { id: 4, item_name: "idli", item_price: 25 }, 
                     { id: 5, item_name: "Coffe", item_price: 15 }, 
                     { id: 6, item_name: "Orange Juice", item_price: 30 }, 
                     { id: 7, item_name: "Chikku juice", item_price: 40 }, 
                     { id: 8, item_name: "Egg Omlet", item_price: 35 }, 
                     { id: 9, item_name: "Egg biryani", item_price: 60 }, 
                     { id: 10, item_name: "Chicken biryani", item_price: 100 }
                    ], order_list: [], show_item_details : null };
                 }
                 // ==============================================================================================================

                 // Custom Methods
                 add_order_at_order_list = PassedItemList => {
                   let newOrderList = [...this.state.order_list, PassedItemList];
                   this.setState({ order_list: newOrderList });
                   console.log("add_order_at_order_list", this.state.order_list);
                 };
                 
                 showItem = (get_item_list) =>{
                   console.log(get_item_list);
                    this.setState({
                      show_item_details : get_item_list
                    });
                   console.log('showItem->',this.state.show_item_details);
                 };

  add_new_item =(get_data_from_props)=>{
 //   console.log("get_data_from_props->" , get_data_from_props);
    let get_length = this.state.cafeteria.length;
    let tmp_order_list = Object.assign({}, get_data_from_props, { id: get_length + 1});
    let tmp_new_order_list = [...this.state.cafeteria, tmp_order_list];
    this.setState({cafeteria : tmp_new_order_list});
    console.log("get_data_from_props->", this.state.cafeteria);

  }

                 // ==============================================================================================================
                 render() {
                   return <div className="ui vertical divided grid">
                       <div className="three column row">
                         <div className="column">
                           <h3>Cafeteria Menu</h3>
                           <table className="ui celled striped table">
                             <thead>
                               <tr>
                                 <th colSpan="4">
                                   {/* found this PROPS from ITEM FORM component */}
                                   <ItemForm pass_props_add_data={this.add_new_item} />
                                 </th>
                               </tr>
                               <tr>
                                 <th>#</th>
                                 <th>ITEM</th>
                                 <th>PRICE</th>
                                 <th>ORDER</th>
                               </tr>
                             </thead>
                             <tbody>
                               {this.state.cafeteria.map(
                                 items_list => {
                                   return (
                                     <tr key={items_list.id}>
                                       <td>
                                         {items_list.id}
                                       </td>
                                       <td>
                                         {
                                           items_list.item_name
                                         }
                                       </td>
                                       <td>
                                         <i
                                           aria-hidden="true"
                                           className="rupee icon"
                                         />
                                         {
                                           items_list.item_price
                                         }
                                       </td>
                                       <td>
                                         <div className="ui buttons">
                                           <button
                                             className="ui button"
                                             role="button"
                                             onClick={() =>
                                               this.showItem(
                                                 items_list
                                               )
                                             }
                                           >
                                             View
                                           </button>
                                           <div className="or" />
                                           <button
                                             className="ui positive button"
                                             role="button"
                                             onClick={() =>
                                               this.add_order_at_order_list(
                                                 items_list
                                               )
                                             }
                                           >
                                             Order
                                           </button>
                                         </div>
                                       </td>
                                     </tr>
                                   );
                                 }
                               )}
                             </tbody>
                           </table>
                         </div>

                         <div className="column">
                           <h3>Order Item</h3>
                           {/* Pass New Array object as PROPS to ITEM LIST component 
                        and that PROPS handle by componentDidUpdate() method */}
                           {this.state.order_list ? <ItemOderList pass_props_items={this.state.order_list} /> : null}
                         </div>
                         <div className="column">
                           <h3>Item Details</h3>
                           {this.state.show_item_details ? <ItemShow pass_props_item_details={this.state.show_item_details} /> : null}
                         </div>
                       </div>
                     </div>;
                 }
               }

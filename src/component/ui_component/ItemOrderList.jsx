import React, { Component } from 'react'

export default class ItemOrderList extends Component {
                
               total_items = [];   
               tot_amount = 0;           
                                
                 render() {
                  // let get_actual_length =  ? this.props.pass_props_items : null;
                   this.total_items.push(Object.keys(this.props.pass_props_items).length);  
                   return <div>
                       <table className="ui celled striped table">
                         <thead>
                           <tr>
                             <th colSpan="4">
                               <div className="ui divided four column grid">
                                 <div className="row">
                                   <div className="column">
                                     Items
                                   </div>
                                   <div className="column">
                                   {this.total_items ? this.total_items.length-1 : '0'}
                                   </div>
                                   <div className="column">
                                     Total
                                   </div>
                                   <div className="column">
                                   {0}
                                   </div> 
                                 </div>
                               </div>
                             </th>
                           </tr>
                           <tr>
                             <th>#</th>
                             <th>ITEM</th>
                             <th>PRICE</th>
                           </tr>
                         </thead>
                         <tbody>
                           {this.props.pass_props_items.map(
                             new_oder_list_items => {
                             
                               return (
                                
                                 <tr
                                   key={
                                     new_oder_list_items.id
                                   }
                                 >
                                   <td>
                                     {new_oder_list_items.id}
                                   </td>
                                   <td>
                                     {
                                       new_oder_list_items.item_name
                                     }
                                   </td>
                                   <td>
                                     <i
                                       aria-hidden="true"
                                       className="rupee icon"
                                     />
                                     {
                                       new_oder_list_items.item_price
                                     }
                                   </td>
                                 </tr>
                               );
                             }
                           )}
                         </tbody>
                       </table>
                     </div>;
                   }
                 }

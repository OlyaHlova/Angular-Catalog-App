import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  // To receive parameter in other component
  // Determine the value name to put received data - product
  // If you put nothing into Input - the value name will equal
  // the field name (product), so we can rename it
  // for example 'my-product', but it's not required

  // @Input('my-product') product: IProduct;
  @Input() product!: IProduct;

  details = false;

}


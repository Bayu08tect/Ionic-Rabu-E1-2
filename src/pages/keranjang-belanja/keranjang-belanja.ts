import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-keranjang-belanja.html',
  templateUrl: 'keranjang-belanja.html'
})

export class KeranjangBelanjaPage{
  produkData: {name: string, quantity: number};

  constructor(private navParams: NavParams){
    this.produkData = this.navParams.data;
  }

}
import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  Interpolation = ""
  public imgSrc: string = "https://www.viajali.com.br/wp-content/uploads/2020/02/praias-mais-bonitas-do-brasil-2.jpg"
  public titleImg: string = "Uma praia"

  public position: { x: number, y: number} = { x: 0, y: 0} 

  @Input() public title: String = "Bem vindo!"


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
      console.log("Foi alterado com Sucesso!")
  }

  public alertaInfo(valor: string) {
    window.alert('Mensagem: ' + valor)
  }

  public chamandoEvento(valor: MouseEvent) {
    console.log(valor)
  }


}

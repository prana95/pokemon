import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  @Input('appBorderCard') borderColor='';
  GREY_COLOR='#f5f5f5';
  GREEN_COLOR='#009688';
  RED_COLOR='red'
  //comme ca constant on mis en majscule
  constructor(private element:ElementRef) {
    this.setBorder(this.GREY_COLOR);
    this.setHeight(180);
   }

  private setBorder(color:string):void{
    const border='solid 4px '+color;//att il y a une espace ici 
    this.element.nativeElement.style.border=border;
  }

  /**
   * Définir une hauteur
   * @parma height
   */
  private setHeight(height:number):void{
    this.element.nativeElement.style.height=height+'px';
  }
  /**
   * Création d'un évènements qui change la couleur
   */
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor||this.GREEN_COLOR)
  }
  /**
  * Création d'un évènements qui change la couleur
  */
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.GREY_COLOR)
  }
  

}


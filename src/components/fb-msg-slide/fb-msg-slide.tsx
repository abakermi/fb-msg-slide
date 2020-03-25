import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'fb-msg-slide',
  styleUrl: 'fb-msg-slide.scss'
})
export class FBMsgSlide {


  /** slide element  */
  @Element() private slider: HTMLElement;
  private Items: HTMLElement

  /** first slide width */
  private firstSlideWidth: any;

  /** mouse X position */
  private positionOnX: number = 0
  private positionOnX2: number = 0
  private nbrOfSlide:number=0

  componentWillLoad() {

  }
  componentDidLoad() {
    this.init()
    this.Items = this.slider.querySelectorAll<HTMLElement>("#__items")[0]
    this.Items.style.width= this.Items.offsetWidth+(this.firstSlideWidth*this.nbrOfSlide)+"px"
    this.Items.style.left=(this.Items.offsetLeft-this.firstSlideWidth)+"px"
    this.initListener()
  }
  private init() {
    let children = this.slider.querySelectorAll("[slot]")
    children.forEach((e) => {
      e.classList.add("__item")
    })
    this.firstSlideWidth = this.slider.querySelectorAll<HTMLElement>("[slot='item-start']")[0].offsetWidth
    this.nbrOfSlide=this.slider.querySelectorAll<HTMLElement>(".__item").length

  }

  private initListener() {
    this.Items.onmousedown = (e)=>{this.OnDown(e)}
    this.Items.ontouchstart=(e)=>{this.OnTouchStart(e)}
    this.Items.ontouchmove=(e)=>{this.onTouchMove(e)}

  }
  private OnMove(e){
    
    this.positionOnX2 = this.positionOnX - e.clientX;
    this.positionOnX = e.clientX;
    this.Items.style.left = (this.Items.offsetLeft - this.positionOnX2) + "px";
 
  }
  private onTouchMove(e){
    this.positionOnX2 = this.positionOnX - e.touches[0].clientX;
    this.positionOnX = e.touches[0].clientX;
    this.Items.style.left = (this.Items.offsetLeft - this.positionOnX2) + "px";

  }
  private OnUp(e){
    e.preventDefault()
    this.Items.onmousemove = null
    this.Items.onmouseup = null
  }
  private OnDown(e){
    e.preventDefault()
    this.positionOnX = e.clientX
    this.Items.onmousemove = (e:any) => {this.OnMove(e) }
    this.Items.onmouseup = (e) => { this.OnUp(e) }

  }
private OnTouchStart(e){
  this.positionOnX=e.touches[0].clientX;
}

  render() {
    return <div id="__msg-fb-comp">
      <div class="__wrapper">
        <div class="__items" id="__items"
        >
          <slot name="item-start" />
          <slot name="item-middle" />
          <slot name="item-end" />
        </div>
      </div>
    </div>

  }


}

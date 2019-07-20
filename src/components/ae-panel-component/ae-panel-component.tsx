import { Component, Prop, h, State, Method } from '@stencil/core';
//import { format } from '../../utils/utils';

@Component({
  tag: 'ae-panel-component',
  styleUrl: 'ae-panel-component.css',
  shadow: true
})
export class AePanelComponent {
  @Prop() aetitle: string;
  @State() collapsed: boolean;

  @Method()
  async toggle() {
    this.collapsed = !this.collapsed;
  }

  render() {
    return (
      <div>
        <div id="aeheader" onClick={this.toggle.bind(this)}>
          <span>{this.aetitle}</span>
        </div>
        <div id="content" hidden={this.collapsed}>
          <slot />
        </div>
      </div>
    );
  }
}

import { Component, Prop, h, State, Method } from '@stencil/core';

@Component({
  tag: 'ae-panel-component',
  styleUrl: 'ae-panel-component.css',
  shadow: true
})
export class AePanelComponent {
  /**
   * Title for the panel
   */
  @Prop() aetitle: string;

  /**
   * State of the panel - visible or hidden
   */
  @State() collapsed: boolean;

  /**
   * Show/Hide the panel
   */
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
        <div id="aecontent" hidden={this.collapsed}>
          <slot />
        </div>
      </div>
    );
  }
}

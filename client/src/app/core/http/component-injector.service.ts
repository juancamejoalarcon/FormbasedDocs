import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef,
    Renderer2,
    RendererFactory2

} from '@angular/core';

@Injectable()
export class ComponentInjectorService {

  // Renderer2 is not directly injectable so this is the workarround
  private renderer: Renderer2;
  private deleteButton: any;

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector,
      private rendererFactory: RendererFactory2
  ) { this.renderer = rendererFactory.createRenderer(null, null); }


  appendComponentToBody( type: string, elementToInject: any, idOfDivWhereToInject: string,
                          parentId: string, divWhereIsButton: string, optionalValues: any) {
    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(elementToInject)
      .create(this.injector);
    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);
    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    // 4. Creates the button that deletes the injected component
    switch (type) {
      case 'Component':
        this.componentDeleteButton();
        break;
      case 'Radio':
        this.radioDeleteButton();
        break;
      case 'InputsHidden':
        break;
    }
    if (type !== 'InputsHidden') {
      this.renderer.listen(this.deleteButton, 'click', () => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
      });
      domElem.getElementsByClassName(divWhereIsButton)[0].appendChild(this.deleteButton);
    }
    // 5. Add variables to de component
    componentRef.instance['id'] = idOfDivWhereToInject;
    componentRef.instance['parentId'] = parentId;
    componentRef.instance['optionalValues'] = optionalValues;

    componentRef.changeDetectorRef.detectChanges();

    // // create wrapper container div so Sortable js works
    const wrappedDomElem = document.createElement('div');
    wrappedDomElem.appendChild(domElem);

    // 6. Append DOM element to the body element
    document.getElementById(idOfDivWhereToInject).appendChild(wrappedDomElem);

  }

  private radioDeleteButton() {

    this.deleteButton = this.renderer.createElement('div');
    this.renderer.addClass(this.deleteButton, 'remove-radio');
    this.renderer.addClass(this.deleteButton, 'd-block');

    const icon = this.renderer.createElement('span');

    this.renderer.addClass(icon, 'icon');
    this.renderer.addClass(icon, 'icon-times-solid');

    this.renderer.appendChild(this.deleteButton, icon);

  }

  private componentDeleteButton() {

    this.deleteButton = this.renderer.createElement('div');
    const icon = this.renderer.createElement('span');

    this.renderer.addClass(icon, 'icon');
    this.renderer.addClass(icon, 'icon-trash-alt-regular');

    this.renderer.appendChild(this.deleteButton, icon);
    this.renderer.addClass(this.deleteButton, 'remove-button');
    this.renderer.addClass(this.deleteButton, 'd-block');
    this.renderer.addClass(this.deleteButton, 'smooth-intro');

  }
}

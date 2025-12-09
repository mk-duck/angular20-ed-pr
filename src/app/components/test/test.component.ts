import { Component } from '@angular/core';

@Component({
  selector: 'app-bind-call-apply-demo',
  templateUrl: 'test.component.html',
})
export class TestComponent {
  name = 'AngularUser';
  message = '';

  showMessage(greeting: string, color: string) {
    this.message = `${greeting}, ${this.name}`;
  }

  useBind() {
    const greet = this.showMessage.bind(this, 'Hello (bind)', 'red');
    greet();
  }

  useCall() {
    const greet = this.showMessage;
    greet.call(this, 'Hi (call)', 'red');
  }

  useApply() {
    const greet = this.showMessage;
    greet.apply(this, ['Hey (apply)', 'red']);
  }
}

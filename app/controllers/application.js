import Controller from "@ember/controller";
import { action } from "@ember-decorators/object";

export default class Application extends Controller {
  constructor() {
    super(...arguments);
    this.showModal = false;
  }

  @action
  showIt() {
    this.set("showModal", true);
  }

  @action
  hideIt() {
    this.set("showModal", false);
  }
}

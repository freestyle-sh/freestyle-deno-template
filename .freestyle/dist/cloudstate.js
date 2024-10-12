import __process from "node:process";
globalThis.process = __process;
import.meta.env = process.env;

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .freestyle/incomplete-dist/src/cloudstate/counter.js
var CounterCS = class {
  static {
    __name(this, "CounterCS");
  }
  static id = "counter";
  value = 0;
  increment() {
    return ++this.value;
  }
  getCount() {
    return this.value;
  }
};
export {
  CounterCS
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2Nsb3Vkc3RhdGUvY291bnRlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgY2xvdWRzdGF0ZSB9IGZyb20gXCJmcmVlc3R5bGUtc2hcIjtcblxuQGNsb3Vkc3RhdGVcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ1Mge1xuICBzdGF0aWMgcmVhZG9ubHkgaWQgPSBcImNvdW50ZXJcIjtcbiAgdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgaW5jcmVtZW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuICsrdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldENvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O0FBR00sSUFBTyxZQUFQLE1BQWdCO0VBSHRCLE9BR3NCOzs7RUFDcEIsT0FBZ0IsS0FBSztFQUNyQixRQUFnQjtFQUVoQixZQUFTO0FBQ1AsV0FBTyxFQUFFLEtBQUs7RUFDaEI7RUFFQSxXQUFRO0FBQ04sV0FBTyxLQUFLO0VBQ2Q7OyIsCiAgIm5hbWVzIjogW10KfQo=

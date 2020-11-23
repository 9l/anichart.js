import { Groupable } from "./../components/group";
import { Hintable } from "./hint";
import { Fontable, FontOptions } from "./../options/font-options";
import { Colorable } from "./color";
import { Component } from "../components";
import { EnhancedCanvasRenderingContext2D } from "../utils/enhance-ctx";
interface Ani extends Fontable, Hintable, Groupable {
  width: number;
  height: number;
  fps: number;
  sec: number;

  cFrame: number;

  totalFrames: number;
  components: Component[];

  color: Colorable;
  font: FontOptions;

  data: any;
  meta: any;

  canvas: HTMLCanvasElement;
  ctx: EnhancedCanvasRenderingContext2D;

  output: boolean;

  setOptions(options: Ani): void;
  update(): void;

  setCanvas(selector: string): void;

  addComponent(c: Component): void;

  ready(): void;
  draw(frame: number): void;
  play(): void;
}

export default Ani;

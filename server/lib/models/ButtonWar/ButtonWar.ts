import { model, Schema } from "mongoose";
import { IButtonWar } from "./types";

const schema = new Schema<IButtonWar>({
  activeButtons: [[Boolean]],
});

export default model("ButtonWar", schema);

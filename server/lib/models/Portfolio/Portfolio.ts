import { model, Schema } from "mongoose";
import { IPortfolio } from "./types";

const schema = new Schema<IPortfolio>({
  buttonsWar: {
    activeButtons: [[Boolean]],
  },
});

export default model("Portfolio", schema);

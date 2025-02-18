import { IPortfolio } from "./../lib/models/Portfolio/types";
import { Router } from "express";
import ButtonWar from "../lib/models/ButtonWar/ButtonWar";
import { ENDPOINTS } from "../lib/endpoints";
import Portfolio from "../lib/models/Portfolio/Portfolio";
import { SECRET_PORTFOLIO_ID } from "../lib/constants";

const router = Router();

router.get(ENDPOINTS.buttonWar.get, [], async (_, req) => {
  try {
    const portfolio = await Portfolio.findById(SECRET_PORTFOLIO_ID);

    console.log(portfolio.buttonsWar.activeButtons);

    return req.send({ data: portfolio.buttonsWar.activeButtons });
  } catch (err) {
    console.error(err);
  }
});

// router.post(ENDPOINTS.buttonWar.change, [], async (res, req) => {
//   const { colIdx, rowIdx } = res.body;

//   try {
//     if (rowIdx && colIdx) {
//       const portfolio = await Portfolio.findById(SECRET_PORTFOLIO_ID);

//       const newActiveButtons = portfolio?.buttonsWar?.activeButtons?.map(
//         (arr) => [...arr]
//       );

//       newActiveButtons[rowIdx][colIdx] = !newActiveButtons[rowIdx][colIdx];

//       const buttonWar = await ButtonWar.findOneAndUpdate(
//         { id: SECRET_PORTFOLIO_ID },
//         {
//           activeButtons: newActiveButtons,
//         }
//       );

//       return req.json({ data: buttonWar.activeButtons });
//     }

//     return req.status(500).json({ data: "Недостающие данные" });
//   } catch (err) {
//     console.error(err);
//   }
// });

export default router;

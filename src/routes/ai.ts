import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { Router, Response, Request } from "express";
import { genkit } from "genkit";

const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash,
});

export default function () {
  const router = Router();

  router.post("/text", async (req: Request, res: Response) => {
    try {
      const { text } = req.body;
      const { text: result } = await ai.generate(text);
      res.status(200).json({
        meta: {
          code: 200,
          message: "success",
        },
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        meta: {
          code: 500,
          message: "failed",
        },
        data: error,
      });
    }
  });

  return router;
}

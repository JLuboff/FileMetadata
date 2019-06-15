import { Request, Response, NextFunction, Router } from "express";
import * as multer from "multer";

const router: Router = Router();
const storage: multer.StorageEngine = multer.diskStorage({});
const upload: multer.Instance = multer({ storage });

router
  .route("/")
  .post(
    upload.single("filemetadata"),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { size: fileSize }: { size: number } = req.file;
        res.send(fileSize);
      } catch (error) {
        return next(error);
      }
    }
  );

export = router;

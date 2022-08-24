import { NextApiRequest, NextApiResponse } from "next/types";

interface Data {
  name: string;
}

// export const fi

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
  }

  res.status(200).json({ name: "John Doe" });
}

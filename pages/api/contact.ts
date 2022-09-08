import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    const { name, email, message } = req.body;

    if (
      !regEmail.test(email) ||
      !Boolean(name.trim()) ||
      !Boolean(message.trim())
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    console.log("name: ", name);
    let db_client;
    try {
      const newMessage = { email, name, message };
      db_client = await MongoClient.connect(
        "mongodb+srv://yangsangwoo:WrAw33HMVdKujS90@cluster0.wfxaj3e.mongodb.net/blog?retryWrites=true&w=majority"
      );

      const db = db_client.db("blog");
      const result = await db.collection("contact").insertOne(newMessage);

      db_client.close();
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }
  }
}

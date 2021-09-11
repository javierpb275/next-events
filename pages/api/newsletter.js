import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db();
    await db.collection("newsletter").insertOne({ email: userEmail });
    client.close();

    res.status(201).json({ message: "Signed Up!" });
  }
};

export default handler;

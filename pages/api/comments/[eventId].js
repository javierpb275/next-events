import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(process.env.DB_URL);

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      eventId,
      email,
      name,
      text,
    };

    const db = client.db();

    const result = await db.collection("comments").insertOne(newComment);

    console.log(result);

    newComment.id = result.insertedId;

    res.status(201).json({ message: "Added comment!", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: 1, name: "Pepe", comment: "Hello, It's Pepe" },
      { id: 2, name: "Paco", comment: "Hello, It's Paco" },
    ];
    res.status(200).json({ comments: dummyList });
  }

  client.close();
};

export default handler;

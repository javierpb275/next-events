const handler = (req, res) => {
  const eventId = req.query.eventId;

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
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);

    res.status(201).json({ message: "Added comment!", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: 1, name: "Pepe", comment: "Hello, It's Pepe" },
      { id: 2, name: "Paco", comment: "Hello, It's Paco" },
    ];
    res.status(200).json({ comments: dummyList });
  }
};

export default handler;

const sequelize = require("./db");
const User = require("./models/User");

sequelize.sync({ force: true }).then(async () => {
  try {
    // Create user with associated posts
    const newUser = await User.create(
      {
        username: "john_doe",
        email: "john@example.com",
        posts: [
          { title: "Post 1", content: "Content of post 1" },
          { title: "Post 2", content: "Content of post 2" },
        ],
      },
      {
        include: "posts", // Include associated posts
      }
    );

    console.log("New user with posts created:", newUser.toJSON());

    // Find user and their posts
    const foundUser = await User.findOne({
      where: { id: newUser.id },
      include: "posts", // Include associated posts
    });

    console.log("User with posts:", foundUser.toJSON());
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the database connection
    sequelize.close();
  }
});

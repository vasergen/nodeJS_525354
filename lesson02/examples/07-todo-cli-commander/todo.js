/**
 * node todo.js add <title>
 * node todo.js remove <id>
 * node todo.js list
 */

const { addTodo, removeTodo, listTodo } = require("./db/db");
const { program } = require("commander");

async function invokeAction({ action, title, id, limit }) {
  switch (action) {
    case "add":
      console.log("invoke add", title);
      await addTodo(title);
      break;
    case "remove":
      console.log("invoke remove");
      await removeTodo(id);
      break;
    case "list":
      console.log("invoke list");
      const todos = await listTodo({ limit });
      console.table(todos);
      break;

    default:
      throw new Error(`unknown action, got: ${action}`);
  }
}

program.command("add <title>").action((options) => {
  const title = options;
  console.log(title);
  invokeAction({ action: "add", title });
});

program
  .command("list")
  .alias("ls")
  .option("-l, --limit <limit>")
  .action((options) => {
    const limit = options.limit;
    console.log("limit", limit);
    invokeAction({ action: "list", limit });
  });

program.command("remove <id>").action((options) => {
  const id = options;
  invokeAction({ action: "remove", id });
});

program.parse();

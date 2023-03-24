if (process.argv.length < 3) {
  console.error(
    ["Please provide a name", "", `Usage: ${process.argv.join(" ")} <name>`].join("\n")
  );
  process.exit(1);
}

const { execSync } = require("child_process");
const name = process.argv[2];
const args = process.argv.slice(3);

if (["-h", "--help"].includes(name)) {
  execSync(`yarn nest:g -h`, { stdio: "inherit" });
  return;
}

const commands = [
  `yarn nest:g mo ${name} ${args.join(" ")}`,
  `yarn nest:g co ${name} ${args.join(" ")}`,
  `yarn nest:g s ${name} ${args.join(" ")}`
];

commands.forEach(command => {
  execSync(command, { stdio: "inherit" });
});

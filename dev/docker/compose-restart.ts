const getServices: Fig.Generator = {
  script: (context) => {
    if (context.includes("-f")) {
      const index = context.indexOf("-f");
      return `docker-compose -f ${context[index + 1]} config --services`;
    }
    return "docker-compose config --services";
  },
  splitOn: "\n",
};

export const completionSpec: Fig.Spec = {
  name: "restart",
  description: "Restart running containers.",
  args: [getServices],
  options: [
    {
      name: ["-t", "--timeout"],
      description: "Specify a shutdown timeout in seconds. (default: 10)",
      args: {
        name: "timeout",
      },
    },
  ],
};

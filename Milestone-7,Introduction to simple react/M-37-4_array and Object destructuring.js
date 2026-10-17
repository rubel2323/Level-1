const softwareEngineer = {
  name: "Ahsan Habib",
  designation: "Lead Engineer",
  salary: "1k$ USD",
  Service: {
    debugger: "each time",
    qualityCheck: "frequently",
    finalPass: "after verification",
    time: {
      night_shift: "10-6",
      day_shift: "10-7",
    },
  },
};

const {
  name,
  designation: post,
  Service: { finalPass, time },
} = softwareEngineer;
console.log(name, post, finalPass, time);

const { io } = require("socket.io-client");
export const socket = io.connect(process.env.REACT_APP_URL);

export const socketAction = {
  joinMandal: id => {
    socket.emit("joinMandal", id);
  },
  editContent: (content, role, id) => {
    socket.emit("edit", content, role, id);
  },
  leaveMandal: () => {
    socket.emit("leaveMandal");
  },
  modifyMandal: (mandal, mainGoalId) => {
    socket.emit("edit", mandal, mainGoalId);
  },
};

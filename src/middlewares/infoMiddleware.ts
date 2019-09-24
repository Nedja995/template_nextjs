export const infoMiddleware = store => next => action => {
  console.log("Middleware triggered:", action.type);
  next(action);
}
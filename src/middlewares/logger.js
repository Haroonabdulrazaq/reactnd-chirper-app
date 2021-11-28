const logger=(store)=>(next)=>(action)=>{
  console.group(action.type);
  console.log("This is the action", action)
  const returnValue = next(action);
  console.log("This is a new State", store.getState())
  console.groupEnd();

  return returnValue;
}
export default logger;

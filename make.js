function make(...args){
  let allArgs=[];
  let innerMake =(...innerArgs)=>{
    let firstArgument = innerArgs[0];
    if(typeof firstArgument==="function"){
      return allArgs.reduce(firstArgument);
    }
    allArgs.push(...innerArgs);
    return innerMake;
  };
  return innerMake(...args);
}
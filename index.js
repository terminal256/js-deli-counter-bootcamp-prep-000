function takeANumber(line, name){
  let pos = line.length;
  line.push(name);
  return `Welcome, ${name}. You are number ${pos} in line.`;
}

function nowServing(line){
  let len = line.length;
  if (len === 0 ){
    return "There is nobody waiting to be served!";
  } else {
    return line.shift();
  }
}
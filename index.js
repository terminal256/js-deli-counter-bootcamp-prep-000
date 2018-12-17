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

function currentLine(line){
  let len = line.length;
  if (len === 0){
    let acc = "The line is currently: "
    
    for (i = 0; i > len; i++){
      acc = `${acc} ${i}. ${line[i]}`;
      if(i !== len){acc = `${acc}, `}
    }
    
  } else {
    return "The line is currently empty.";
  }
}
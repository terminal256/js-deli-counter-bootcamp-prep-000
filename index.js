function takeANumber(line, name){
  let pos = line.length;
  line.push(name);
  return `Welcome, ${name}. You are number ${pos} in line.`;
}
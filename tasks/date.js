const date = new Date();
date.setDate(date.getDate() + 1)
date.setHours(0, 0, 0, 0);


console.log(date.toISOString());
// تمرین ۱ — دنگ حساب کافه
const total = 1250000;
const people = 3;
const share = total / people;

console.log("سهم دقیق: " + share);
console.log("round: " + Math.round(share) + " | floor: " + Math.floor(share) + " | ceil: " + Math.ceil(share));

const shareRounded = Math.ceil(share / 1000) * 1000;
console.log("سهم هر نفر (گرد به هزار): " + shareRounded);

console.log("بیشترین خرج: " + Math.max(320000, 610000, 320000) + " | کمترین خرج: " + Math.min(320000, 610000, 320000));

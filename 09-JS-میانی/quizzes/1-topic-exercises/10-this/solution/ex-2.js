// تمرین ۲ — معلم و شاگردها
// متد باید معمولی باشد تا this همان classroom شود.
// callback داخل forEach پیکانی است تا this را از متد list به ارث ببرد.
const classroom = {
  teacher: "خانم رضایی",
  students: ["سارا", "علی", "مریم"],
  intro: function () {
    return "معلم: " + this.teacher;
  },
  list: function () {
    this.students.forEach(student => {
      console.log(student + " شاگرد " + this.teacher + " است");
    });
  }
};

console.log(classroom.intro());
classroom.list();

#!/usr/bin/node
import Immutable from 'immutable';

export default function printBestStudents(grades) {
  const aboveSeventy = Immutable.Seq(grades).filter((grade) => grade.score >= 70);
  console.log(aboveSeventy.map((student) => ({
    score: student.score,
    firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
    lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
  })).toJS());
}

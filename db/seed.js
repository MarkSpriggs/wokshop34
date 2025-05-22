
import db from "./client.js";
import { createEmployee } from "./queries/employees.js";


console.log("🌱 Database seeded.");

async function seedEmployees() {
  await db.connect();

  await createEmployee("Kelly", '1965-06-25', 120000)
  await createEmployee("Mark", '1998-03-19', 100000)
  await createEmployee("John", '1995-12-22', 110000)
  await createEmployee("Anna", '2000-05-03', 90000)
  await createEmployee("Russ", '1988-11-12', 90000)
  await createEmployee("Christian", '2001-04-17', 130000)
  await createEmployee("Nikola", '1995-02-19', 90000)
  await createEmployee("Aaron", '1995-09-16', 90000)
  await createEmployee("Michael", '1998-06-29', 90000)
  await createEmployee("Jamal", '1997-02-23', 90000)

  await db.end();

 
}

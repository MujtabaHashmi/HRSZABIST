const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// app.get('/',async(req,res)=>{
//     try{
//         res.json('WELCOME TO HRAPI');
//     }catch(err){
//         res.status(500).json({Error:err.message});
//     }
// });

// app.get('/emp',async(req,res)=>{
//     try{
//         const result = await pool.query('select * from employees');
//         res.json(result.rows);
    

//     }catch(err){
//         res.status(500).json({Error:err.message});
//     }
// });

// app.get('/empCount',async(req,res)=>{
//     try{
//         const result = await pool.query('select Count(*) from employees');
//         res.json(result.rows);
    

//     }catch(err){
//         res.status(500).json({Error:err.message});
//     }
// });

// app.get('/dpt',async(req,res)=>{
//     try{
//         const result = await pool.query('select Count(*) from departments');
//         res.json(result.rows);
    

//     }catch(err){
//         res.status(500).json({Error:err.message});
//     }
// });

// app.get('/region',async(req,res)=>{
//     try{
//         const result = await pool.query('select Count(*) from regions');
//         res.json(result.rows);
    

//     }catch(err){
//         res.status(500).json({Error:err.message});
//     }
// });

// app.get('/country',async(req,res)=>{
//     try{
//         const result = await pool.query('select Count(*) from countrys');
//         res.json(result.rows);
    

//     }catch(err){
//         res.status(500).json({Error:err.message});
//     }
// });

// app.get('/totalemp',async(req,res)=>{
//     try{
//         const result = await pool.query('select Count(employee_id) from employees');
//         res.json(result.rows);
    

//     }catch(err){
//         res.status(500).json({Error:err.message});
//     }
// });

// ***--------****
app.get('/q40', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.first_name, e.last_name, l.city, l.state_province, c.country_name
      FROM employees e
      JOIN departments d ON e.department_id = d.department_id
      JOIN locations l ON d.location_id = l.location_id
      JOIN countries c ON l.country_id = c.country_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});


app.get('/q41', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * FROM job_history jh
      JOIN employees e ON jh.employee_id = e.employee_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q42', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.*, jh.* FROM employees e
      LEFT JOIN job_history jh ON e.employee_id = jh.employee_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q43', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.*, jh.*, d.department_name FROM employees e
      LEFT JOIN job_history jh ON e.employee_id = jh.employee_id
      LEFT JOIN departments d ON e.department_id = d.department_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q44', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.*, jh.*, d.department_name, l.city FROM employees e
      JOIN job_history jh ON e.employee_id = jh.employee_id
      JOIN departments d ON d.department_id = jh.department_id
      JOIN locations l ON l.location_id = d.location_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q45', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.*, jh.*, c.country_name FROM employees e
      JOIN job_history jh ON e.employee_id = jh.employee_id
      JOIN departments d ON d.department_id = jh.department_id
      JOIN locations l ON l.location_id = d.location_id
      JOIN countries c ON c.country_id = l.country_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q46', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT jh.*, e.first_name, e.last_name, d.department_name 
      FROM job_history jh
      JOIN employees e ON jh.employee_id = e.employee_id
      JOIN departments d ON jh.department_id = d.department_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q47', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT jh.*, e.first_name, e.last_name, j.job_title 
      FROM job_history jh
      JOIN employees e ON jh.employee_id = e.employee_id
      JOIN jobs j ON jh.job_id = j.job_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q48', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT jh.*, e.first_name, e.last_name, j.job_title, d.department_name 
      FROM job_history jh
      JOIN employees e ON jh.employee_id = e.employee_id
      JOIN jobs j ON jh.job_id = j.job_id
      JOIN departments d ON jh.department_id = d.department_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q49', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT jh.*, e.first_name, e.last_name, j.job_title, l.city 
      FROM job_history jh
      JOIN employees e ON jh.employee_id = e.employee_id
      JOIN jobs j ON jh.job_id = j.job_id
      JOIN departments d ON jh.department_id = d.department_id
      JOIN locations l ON d.location_id = l.location_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q50', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT jh.*, e.first_name, e.last_name, j.job_title, c.country_name 
      FROM job_history jh
      JOIN employees e ON jh.employee_id = e.employee_id
      JOIN jobs j ON jh.job_id = j.job_id
      JOIN departments d ON jh.department_id = d.department_id
      JOIN locations l ON d.location_id = l.location_id
      JOIN countries c ON l.country_id = c.country_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q51', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT r.region_name, c.country_name, l.city
      FROM regions r
      JOIN countries c ON r.region_id = c.region_id
      JOIN locations l ON c.country_id = l.country_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q52', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT c.country_name, r.region_name, l.city
      FROM countries c
      JOIN regions r ON c.region_id = r.region_id
      JOIN locations l ON c.country_id = l.country_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/53', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT l.city, c.country_name, r.region_name
      FROM locations l
      JOIN countries c ON l.country_id = c.country_id
      JOIN regions r ON c.region_id = r.region_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q54', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT d.department_name, e.first_name, e.last_name, l.city
      FROM departments d
      JOIN employees e ON d.department_id = e.department_id
      JOIN locations l ON d.location_id = l.location_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q55', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.first_name, e.last_name, d.department_name, l.city, c.country_name
      FROM employees e
      JOIN departments d ON e.department_id = d.department_id
      JOIN locations l ON d.location_id = l.location_id
      JOIN countries c ON l.country_id = c.country_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q56', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.first_name, e.last_name, m.first_name AS manager_first, d.department_name, l.city
      FROM employees e
      LEFT JOIN employees m ON e.manager_id = m.employee_id
      JOIN departments d ON e.department_id = d.department_id
      JOIN locations l ON d.location_id = l.location_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q57', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.first_name, e.last_name, j.job_title, d.department_name, l.city
      FROM employees e
      JOIN jobs j ON e.job_id = j.job_id
      JOIN departments d ON e.department_id = d.department_id
      JOIN locations l ON d.location_id = l.location_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q58', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.first_name, e.last_name, j.job_title, d.department_name, m.first_name AS manager
      FROM employees e
      JOIN jobs j ON e.job_id = j.job_id
      JOIN departments d ON e.department_id = d.department_id
      LEFT JOIN employees m ON e.manager_id = m.employee_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q59', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.first_name, e.last_name, j.job_title, d.department_name, m.first_name AS manager, l.city
      FROM employees e
      JOIN jobs j ON e.job_id = j.job_id
      JOIN departments d ON e.department_id = d.department_id
      LEFT JOIN employees m ON e.manager_id = m.employee_id
      JOIN locations l ON d.location_id = l.location_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q60', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT country_name FROM countries WHERE region_id = 1
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q61', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT d.department_name FROM departments d
      JOIN locations l ON d.location_id = l.location_id
      WHERE l.city ILIKE 'N%'
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q62', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.* FROM employees e
      WHERE e.department_id IN (
        SELECT department_id FROM employees WHERE commission_pct > 0.15
      )
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q63', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT DISTINCT j.job_title FROM employees e
      JOIN jobs j ON e.job_id = j.job_id
      WHERE e.employee_id IN (
        SELECT DISTINCT manager_id FROM employees WHERE manager_id IS NOT NULL
      )
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q64', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT l.postal_code FROM locations l
      JOIN countries c ON l.country_id = c.country_id
      JOIN regions r ON c.region_id = r.region_id
      WHERE r.region_name = 'Asia'
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q65', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT DISTINCT d.department_name FROM employees e
      JOIN departments d ON e.department_id = d.department_id
      WHERE e.commission_pct < (
        SELECT AVG(commission_pct) FROM employees WHERE commission_pct IS NOT NULL
      )
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q66', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.first_name, e.last_name, j.job_title FROM employees e
      JOIN jobs j ON e.job_id = j.job_id
      WHERE e.salary > (
        SELECT AVG(salary) FROM employees e2 WHERE e2.department_id = e.department_id
      )
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q67', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT employee_id FROM employees WHERE department_id IS NULL
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q68', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.first_name, e.last_name FROM employees e
      WHERE (SELECT COUNT(*) FROM job_history jh WHERE jh.employee_id = e.employee_id) > 1
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q69', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT department_id, COUNT(*) AS emp_count FROM employees
      GROUP BY department_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q70', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT job_id, SUM(salary) AS total_salary FROM employees
      GROUP BY job_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q71', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT department_id, AVG(commission_pct) AS avg_commission
      FROM employees
      WHERE commission_pct IS NOT NULL
      GROUP BY department_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q72', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT c.country_name, MAX(e.salary) AS max_salary
      FROM employees e
      JOIN departments d ON e.department_id = d.department_id
      JOIN locations l ON d.location_id = l.location_id
      JOIN countries c ON l.country_id = c.country_id
      GROUP BY c.country_name
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q73', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT j.job_title, d.department_name, e.first_name || ' ' || e.last_name AS full_name, jh.start_date
      FROM job_history jh
      JOIN employees e ON jh.employee_id = e.employee_id
      JOIN jobs j ON jh.job_id = j.job_id
      JOIN departments d ON jh.department_id = d.department_id
      WHERE jh.start_date >= '1993-01-01' AND jh.end_date <= '1997-08-31'
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q74', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT c.country_name, l.city, COUNT(d.department_id) AS dept_count
      FROM departments d
      JOIN locations l ON d.location_id = l.location_id
      JOIN countries c ON l.country_id = c.country_id
      JOIN employees e ON d.department_id = e.department_id
      GROUP BY c.country_name, l.city
      HAVING COUNT(e.employee_id) >= 2
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q75', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.first_name, e.last_name, j.job_title, jh.start_date, jh.end_date
      FROM employees e
      JOIN job_history jh ON e.employee_id = jh.employee_id
      JOIN jobs j ON jh.job_id = j.job_id
      WHERE e.commission_pct IS NULL
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q76', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.first_name || ' ' || e.last_name AS full_name, e.employee_id, c.country_name
      FROM employees e
      JOIN departments d ON e.department_id = d.department_id
      JOIN locations l ON d.location_id = l.location_id
      JOIN countries c ON l.country_id = c.country_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q77', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.first_name, e.last_name, e.salary, e.department_id
      FROM employees e
      WHERE e.salary = (
        SELECT MIN(salary) FROM employees WHERE department_id = e.department_id
      )
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q78', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * FROM employees
      WHERE salary = (
        SELECT DISTINCT salary FROM employees
        ORDER BY salary DESC OFFSET 2 LIMIT 1
      )
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q79', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.employee_id, e.first_name, e.last_name, e.salary
      FROM employees e
      WHERE e.salary > (SELECT AVG(salary) FROM employees)
        AND e.department_id IN (
          SELECT department_id FROM employees WHERE first_name ILIKE '%j%' OR last_name ILIKE '%j%'
        )
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/q80', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.first_name, e.last_name, e.employee_id, j.job_title
      FROM employees e
      JOIN jobs j ON e.job_id = j.job_id
      JOIN departments d ON e.department_id = d.department_id
      JOIN locations l ON d.location_id = l.location_id
      WHERE l.city = 'Toronto'
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

// ********************************************************************************** //

app.get('/country', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * from countries
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

app.get('/employee', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * from employees
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connect Successfully...on PORT ${PORT}`);
});
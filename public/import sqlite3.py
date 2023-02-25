import sqlite3

# Connect to the database
conn = sqlite3.connect('tasks.db')

# Create a table for tasks
conn.execute('''CREATE TABLE IF NOT EXISTS tasks
             (id INTEGER PRIMARY KEY AUTOINCREMENT,
             name TEXT NOT NULL,
             date TEXT NOT NULL);''')

# Add a task to the database
task_name = input("Enter task name: ")
task_date = input("Enter task date (YYYY-MM-DD): ")
conn.execute(f"INSERT INTO tasks (name, date) VALUES ('{task_name}', '{task_date}')")

# Commit changes and close the connection
conn.commit()
conn.close()
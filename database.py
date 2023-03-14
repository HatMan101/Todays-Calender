import mysql.connector

mydb = mysql.connector.connect(
      host= 'localhost',
      user= 'root',
      password = 'Karting101'
)

cursor = mydb.cursor()

cursor.execute("""CREATE TABLE tables (title STRING)""")

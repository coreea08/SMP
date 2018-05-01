using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Proiect_SMP.Models;

namespace Proiect_SMP.Controllers
{

    public class DataController : Controller
    {
        public static string connectionString = "Server=OVIDIU-PC\\SQLEXPRESS;Database=SMP;Trusted_Connection=True;MultipleActiveResultSets=true";
        public SqlConnection conn;

        public DataController()
        {
            this.conn = new SqlConnection(connectionString);
        }

        [HttpPost("/api/Data1")]
        public IActionResult ReadFile([FromBody] Data d1)
        {
            var fileName = @"C:\Users\ovidiu\Desktop\out.txt"; 
            using (var streamReader = new StreamReader(fileName))
            {
                String line;
                while ((line = streamReader.ReadLine()) != null)
                {
                    Console.WriteLine(line);
                    string[] str = line.Split(null);
                    var d = new Data(str);
                    CreateData(d);

                }

            }

            //File.WriteAllText(fileName, String.Empty);
            using (var fs = new FileStream(fileName, FileMode.Truncate))
            {
            }

            return Ok();
        }

        [HttpGet("/api/Data")]
        public List<Data> GetData()
        {
            this.conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT * FROM Masuratori", conn);
            //cmd.Parameters.AddWithValue("@id", id);

            using (SqlDataReader reader = cmd.ExecuteReader())
            {
                List<Data> date = new List<Data>();

                while (reader.Read())
                {
                    Data p = new Data(reader, conn);
                    date.Add(p);
                }

                return date;
            }
        }

        [HttpGet("/api/Gaz1")]
        public List<double> GetGaz1()
        {
            this.conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT Gaz1 FROM Masuratori order by data", conn);
            

            using (SqlDataReader reader = cmd.ExecuteReader())
            {
                List<double> date = new List<double>();

                while (reader.Read())
                {
                    //Data p = new Data(reader, conn);
                    date.Add(Math.Round(reader.GetDouble(0),4));
                }

                return date;
            }
        }

        [HttpGet("/api/Gaz2")]
        public List<double> GetGaz2()
        {
            this.conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT Gaz2 FROM Masuratori order by data", conn);


            using (SqlDataReader reader = cmd.ExecuteReader())
            {
                List<double> date = new List<double>();

                while (reader.Read())
                {
                    //Data p = new Data(reader, conn);
                    date.Add(Math.Round(reader.GetDouble(0), 4));
                }

                return date;
            }
        }

        [HttpGet("/api/Gaz3")]
        public List<double> GetGaz3()
        {
            this.conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT Gaz3 FROM Masuratori order by data", conn);


            using (SqlDataReader reader = cmd.ExecuteReader())
            {
                List<double> date = new List<double>();

                while (reader.Read())
                {
                    //Data p = new Data(reader, conn);
                    date.Add(Math.Round(reader.GetDouble(0), 4));
                }

                return date;
            }
        }

        [HttpGet("/api/DateTime")]
        public List<string> GetDateTime()
        {
            this.conn.Open();
            SqlCommand cmd = new SqlCommand("SELECT Data FROM Masuratori order by Data", conn);


            using (SqlDataReader reader = cmd.ExecuteReader())
            {
                List<string> date = new List<string>();

                while (reader.Read())
                {
                    //Data p = new Data(reader, conn);
                    date.Add(reader.GetDateTime(0).Date.ToShortDateString());
                }

                return date;
            }
        }

        [HttpPost("/api/Data")]
        public IActionResult CreateData([FromBody] Data d)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            SqlCommand cmd = new SqlCommand("INSERT INTO Masuratori VALUES (@gaz1, @gaz2, @gaz3, @data)", conn);

            cmd.Parameters.AddWithValue("@gaz1", d.Gaz1);
            cmd.Parameters.AddWithValue("@gaz2", d.Gaz2);
            cmd.Parameters.AddWithValue("@gaz3", d.Gaz3);
            cmd.Parameters.AddWithValue("@data", d.DataOra);
            

            this.conn.Open();
            cmd.ExecuteNonQuery();
            this.conn.Close();

            return Ok();
        }

    }
}
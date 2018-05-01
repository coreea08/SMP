﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_SMP.Models
{
    public class Data
    {
        public Data(IDataReader reader, SqlConnection conn)
        {
            ID = reader.GetInt32(0);
            Gaz1 = Math.Round(reader.GetDouble(1),4);
            Gaz2 = reader.GetDouble(2);
            Gaz3 = reader.GetDouble(3);
            DataOra = reader.GetDateTime(4);
        }

        public Data()
        {
            Gaz1 = 0;
            Gaz2 = 0;
            Gaz3 = 0;
            DataOra = DateTime.Now;
        }
        public Data(Data d)
        {
            Gaz1 = d.Gaz1;
            Gaz2 = d.Gaz2;
            Gaz3 = d.Gaz3;
            DataOra = d.DataOra;
        }

        public Data(string[] s)
        {
            Gaz1 = double.Parse(s[0]);
            Gaz2 = double.Parse(s[1]);
            Gaz3 = double.Parse(s[2]);
            var st = s[3] + ' ' + s[4];
            DataOra = DateTime.Parse(st);
            //DataOra = DateTime.ParseExact(st, "yyyy-MM-dd HH:mm:ss,fff", System.Globalization.CultureInfo.InvariantCulture);
        }

        public int ID { get; set; }

        public double Gaz1 { get; set; }

        public double Gaz2 { get; set; }

        public double Gaz3 { get; set; }

        public DateTime DataOra { get; set; }
    }
}
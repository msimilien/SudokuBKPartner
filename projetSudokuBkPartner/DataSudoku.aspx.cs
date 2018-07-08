using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Web.Script.Services;

namespace projetSudokuBkPartner
{
    public partial class DataSudoku : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = false)]
        public static string getUser(string user, string pass) //
        {
            SqlDataAdapter objdataAdapter = new SqlDataAdapter();
            DataSet ds = new DataSet();
            SqlConnection cn = new SqlConnection(Properties.Settings.Default.myConexion);
            SqlCommand myCommand = new SqlCommand();
            myCommand.CommandType = CommandType.StoredProcedure;
            myCommand.Connection = cn;
            myCommand.CommandText = "loginSudoku";
            objdataAdapter.SelectCommand = myCommand;

            SqlParameter userparam = new SqlParameter("@user", SqlDbType.NVarChar);
            userparam.Value = user;
            myCommand.Parameters.Add(userparam);

            SqlParameter passw = new SqlParameter("@passw", SqlDbType.NVarChar);
            passw.Value = pass;
            myCommand.Parameters.Add(passw);

            string jsondata = "";
            try
            {
                cn.Open();
                objdataAdapter.Fill(ds);
            }
            catch (Exception ex)
            {

            }
            if (ds.Tables[0].Rows.Count > 0)
            {
                UserLogin myUser = new UserLogin();
                foreach (DataRow valor in ds.Tables[0].Rows)
                {

                    
                    myUser.userSudoku = valor["user1"].ToString();
                    myUser.passSudoku = valor["Passwd"].ToString();
                    myUser.id = (int)valor["id"];
                    if (string.IsNullOrEmpty(valor["points"].ToString()))
                    {
                        myUser.score = 0;
                    }
                    else
                    {
                        myUser.score = (int)valor["points"];
                    }
                   
                 
                }
                jsondata = new JavaScriptSerializer().Serialize(myUser);
            }


            return jsondata;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace projetSudokuBkPartner
{
    public class UserLogin
    {
         private string _user;
         private string _pass;

         public String userSudoku
         {
             get { return _user; }
             set { _user = value; }
         }
         public String passSudoku
         {
             get { return _pass; }
             set { _pass = value; }
         }
         public UserLogin() { } 
    }
}
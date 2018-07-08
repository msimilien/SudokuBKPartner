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
         private int _score;
         private int _id;

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
         public int score
         {
             get { return _score; }
             set { _score = value; }
         }
         public int id
         {
             get { return _id; }
             set { _id = value; }
         }
         public UserLogin() { } 
    }
}
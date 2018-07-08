<%@ Page Language="C#" EnableEventValidation="false" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="projetSudokuBkPartner.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>sudoku</title>
    <meta name="description" content="Una guía interactiva de primeros pasos para Brackets.">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
     <script type="text/javascript" src="sudoku.js" ></script> 
    <link rel="stylesheet" href="sudoku.css">
    <!--<script>
      
    </script>-->
</head>
<body onload="initialize();">
  <form id="form1" runat="server" method="post">
    <div id="header">
        <h2>Sudoku</h2>
        <h4 id="userProfil">Bienvenue </h4>
        <h4 id="scoreHeader">Score:0</h4>
        <div id="search">
            
            <label>User <input type="text" name="s-user" id="s-user"></label>
            <label>Password<input type="password" name="s-pass" id="s-pass"></label>
            <asp:Button runat="server" class="submit" Text="Entrer" OnClientClick="login()" />
        </div>
       
    </div>
    
    
    <br/>
    <h3 id="mesageInit">Utilisez les curseurs et les touches numériques pour créer un sudoku.<p>Le jeu durera 5 minutes</p> </h3>
    <form name="chronoForm">
        <input type="button" name="startstop" value="Jouer!" onclick="chronoStart()" />
        <input type="button" name="reset" value="Reset!" onclick="chronoReset()" />
    </form>
    <h1> <span id="chronotime">0:00:00:00</span></h1>
    <h1>Score : <span id="score">0</span></h1>
    

    <div id="tabla">

        <table align=center id="sudoku" cellspacing=0>
            <tr>
                <td id="cell_0_0"></td>
                <td id="cell_1_0"></td>
                <td id="cell_2_0"></td>
                <td id="cell_3_0"></td>
                <td id="cell_4_0"></td>
                <td id="cell_5_0"></td>
                <td id="cell_6_0"></td>
                <td id="cell_7_0"></td>
                <td id="cell_8_0"></td>
            <tr>
                <td id="cell_0_1"></td>
                <td id="cell_1_1"></td>
                <td id="cell_2_1"></td>
                <td id="cell_3_1"></td>
                <td id="cell_4_1"></td>
                <td id="cell_5_1"></td>
                <td id="cell_6_1"></td>
                <td id="cell_7_1"></td>
                <td id="cell_8_1"></td>
            <tr>
                <td id="cell_0_2"></td>
                <td id="cell_1_2"></td>
                <td id="cell_2_2"></td>
                <td id="cell_3_2"></td>
                <td id="cell_4_2"></td>
                <td id="cell_5_2"></td>
                <td id="cell_6_2"></td>
                <td id="cell_7_2"></td>
                <td id="cell_8_2"></td>
            <tr>
                <td id="cell_0_3"></td>
                <td id="cell_1_3"></td>
                <td id="cell_2_3"></td>
                <td id="cell_3_3"></td>
                <td id="cell_4_3"></td>
                <td id="cell_5_3"></td>
                <td id="cell_6_3"></td>
                <td id="cell_7_3"></td>
                <td id="cell_8_3"></td>
            <tr>
                <td id="cell_0_4"></td>
                <td id="cell_1_4"></td>
                <td id="cell_2_4"></td>
                <td id="cell_3_4"></td>
                <td id="cell_4_4"></td>
                <td id="cell_5_4"></td>
                <td id="cell_6_4"></td>
                <td id="cell_7_4"></td>
                <td id="cell_8_4"></td>
            <tr>
                <td id="cell_0_5"></td>
                <td id="cell_1_5"></td>
                <td id="cell_2_5"></td>
                <td id="cell_3_5"></td>
                <td id="cell_4_5"></td>
                <td id="cell_5_5"></td>
                <td id="cell_6_5"></td>
                <td id="cell_7_5"></td>
                <td id="cell_8_5"></td>
            <tr>
                <td id="cell_0_6"></td>
                <td id="cell_1_6"></td>
                <td id="cell_2_6"></td>
                <td id="cell_3_6"></td>
                <td id="cell_4_6"></td>
                <td id="cell_5_6"></td>
                <td id="cell_6_6"></td>
                <td id="cell_7_6"></td>
                <td id="cell_8_6"></td>
            <tr>
                <td id="cell_0_7"></td>
                <td id="cell_1_7"></td>
                <td id="cell_2_7"></td>
                <td id="cell_3_7"></td>
                <td id="cell_4_7"></td>
                <td id="cell_5_7"></td>
                <td id="cell_6_7"></td>
                <td id="cell_7_7"></td>
                <td id="cell_8_7"></td>
            <tr>
                <td id="cell_0_8"></td>
                <td id="cell_1_8"></td>
                <td id="cell_2_8"></td>
                <td id="cell_3_8"></td>
                <td id="cell_4_8"></td>
                <td id="cell_5_8"></td>
                <td id="cell_6_8"></td>
                <td id="cell_7_8"></td>
                <td id="cell_8_8"></td>
        </table>

    </div>
  
    <h3>(c pour vider / BackSpace ou Delete pour supprimer une cellule)</h3>

    <div class="hover_bkgr_fricc">
        <span class="helper"></span>
        <div>
            <div class="popupCloseButton">X</div>
            <p>Vous accumulez un total de <span id="pointAcum"></span></p>
            <p>Voulez-vous enregistrer vos points?</p>
            <input type="button" onclick="" class="submit" value="Enregistrer">
            <input type="button" onclick="hidePopup()" class="submit" value="Anuler">
        </div>
    </div>
</form>
</body>
</html>
